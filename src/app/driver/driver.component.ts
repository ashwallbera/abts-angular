import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref ,update} from 'firebase/database';
import { environment } from 'src/environments/environment';
import { DeployModel } from '../model/deployed_model';
import { EmployeeModel } from '../model/employee_model';
import { StatusModel } from '../model/status_model';
import { DriverUpdateStatusComponent } from './driver-update-status/driver-update-status.component';
import * as storage from 'firebase/storage';
@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DriverComponent implements OnInit {
  fileToUpload: File | null | any;
  driver: EmployeeModel;
  public deployed?: DeployModel | any;
  constructor(
    public datepipe: DatePipe,
    public dialog: MatDialog,
    public router: Router
  ) {
    this.driver = JSON.parse('' + localStorage.getItem('abtsaccount'));
    this.getAssignDeployed();
    console.log(this.driver);
  }

  ngOnInit(): void {}

  fileChange(files: any) {
    this.fileToUpload = files.target.files[0];
    console.log(this.fileToUpload);
  }

  getAssignDeployed() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();

    const starCountRef = ref(db, 'deployed/' + this.driver.assignDeployedId);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (!data.isDelivered) {
      }
      this.deployed = data;
    });

    const starCountRef2 = ref(db, 'users/' + this.driver.uid);
    onValue(starCountRef2, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.driver.assignDeployedId = data.assignDeployedId;
      localStorage.setItem('abtsaccount', JSON.stringify(this.driver));
    });
  }

  getLastStatus(status: StatusModel[] | undefined): StatusModel {
    return status![status!.length - 1];
  }
  formatDate(date: string | undefined): string {
    var d = new Date(date!);
    return '' + this.datepipe.transform(d, 'mediumDate');
  }

  updateDriverUpdateStatus() {
    this.dialog.open(DriverUpdateStatusComponent, {
      data: this.deployed,
    });
  }

  filedialog(e: any) {
    e.click();
  }

  logout() {
    this.router.navigate(['logout']);
    console.log('logout');
  }

  upload() {
    const app = initializeApp(environment.firebaseConfig);
    const refstorage = storage.getStorage();
    if (this.fileToUpload) {
      const app = initializeApp(environment.firebaseConfig);
      const storagef = storage.getStorage();
      const filename = this.fileToUpload.name;
      const storageRef = storage.ref(storagef, 'deliveryProof/' + filename+this.driver.assignDeployedId);

      //console.log(this.event.target.files[0]);

      const uploadTask = storage.uploadBytesResumable(
        storageRef,
        this.fileToUpload
      );
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          storage.getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            this.updateDeployedEntity(downloadURL)
          });
        }
      );
    }
  }

  updateDeployedEntity(delproofurl:string){
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);
    this.deployed.delproofurl = delproofurl;
    update(ref(db, 'deployed/' + this.deployed?.id + '/'), this.deployed);
  }
}
