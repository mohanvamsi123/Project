export interface GetCustomer {

    firstName: string;
    phone_no: number;
    address: Address;
    u_id: number;
    createdDate?: Date;
}
export interface Address {
    city: string;
    shopname: string;
    state?:string;
    country?:string;
}


