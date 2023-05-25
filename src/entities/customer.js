export class Customer {
    constructor({ customerName, customerDni, customerPhone, customerEmail, customerAddress, customerDateOfBirth, customerGender }) {
        this.customerName = customerName;
        this.customerDni = customerDni;
        this.customerPhone = customerPhone;
        this.customerEmail = customerEmail;
        this.customerGender = customerGender
        this.customerDateOfBirth = {
            day: customerDateOfBirth?.day,
            month: customerDateOfBirth?.month,
            year: customerDateOfBirth?.year
        };
        this.customerAddress = {
            address: customerAddress?.address,
            district: customerAddress?.district,
            state: customerAddress?.state,
            region: customerAddress?.region
        };
        this.verifiedData = {}
    }
}