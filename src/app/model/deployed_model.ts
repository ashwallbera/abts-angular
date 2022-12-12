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
    helper1: EmployeeModel;
    helper2: EmployeeModel;
    helper3: EmployeeModel;
    helper4: EmployeeModel;
    isDelivered: boolean;
    status: StatusModel[];
    currentStatus: string;
    datecreated: string;
    truck:TruckModel;
    employeeModel: EmployeeModel;
}