export class User {
    constructor({ userName, userLastName, userDni, userPhone, userEmail, userDateOfBirth, userAddress, userPassword }) {
        this.userName = userName;
        this.userLastName = userLastName;
        this.userDni = userDni;
        this.userPhone = userPhone;
        this.userEmail = userEmail;
        this.userDateOfBirth = {
            day: userDateOfBirth?.day,
            month: userDateOfBirth?.month,
            year: userDateOfBirth?.year
        };
        this.userAddress = {
            address: userAddress?.address,
            district: userAddress?.district,
            state: userAddress?.state,
            region: userAddress?.region
        };
        this.userPassword = userPassword;
    }
}