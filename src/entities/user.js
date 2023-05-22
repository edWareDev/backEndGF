export class User {
    constructor({ userName, userDni, userPhone, userEmail, userAddress, userDateOfBirth, userGender }) {
        this.userName = userName;
        this.userDni = userDni;
        this.userPhone = userPhone;
        this.userEmail = userEmail;
        this.userGender = userGender
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
    }
}