export interface GetCustomer {

    firstName: string;
    phone_no: number;
    address: Address;
    u_id: number;
    createdDate?: null;
}
export interface Address {
    city: string;
    shopname: string;
}


