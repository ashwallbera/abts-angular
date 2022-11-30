import { TruckModel } from "./truck_model";

export interface DeployModel{
    id: string;
    sfullname: string;
    scontactno: string;
    saddress: string;
    rfullname: string;
    rcontactno: string;
    raddress: string;
    driver: string;
    containervanno: string;
    helper1: string;
    helper2: string;
    helper3: string;
    helper4: string;
    status: string;
    truck:TruckModel;
}