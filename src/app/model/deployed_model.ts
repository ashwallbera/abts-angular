import { EmployeeModel } from "./employee_model";
import { StatusModel } from "./status_model";
import { TruckModel } from "./truck_model";

export interface DeployModel{
    id: string;
    sfullname: string;
    scontactno: string;
    saddress: string;
    rfullname: string;
    rcontactno: string;
    raddress: string;
    driver: EmployeeModel;
    containervanno: string;
    helper1: string;
    helper2: string;
    helper3: string;
    helper4: string;
    isDelivered: boolean;
    status: StatusModel[];
    currentStatus: string;
    datecreated: string;
    truck:TruckModel;
    employeeModel: EmployeeModel;
}