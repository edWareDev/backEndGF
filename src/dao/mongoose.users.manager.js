import mongoose from "mongoose"
import { User } from "../entities/user.js"
import { schemaUsers } from "./models/schemaUsers.js"

class UsersManager {
    #usersDb
    constructor() {
        this.#usersDb = mongoose.model('users', schemaUsers)
    }
    async getUsers() {
        try {
            const allUsers = await this.#usersDb.find().lean()
            return allUsers
        } catch (error) {
            throw new Error({ error: error.message })
        }
    }

    async addUser(user) {
        const newUser = new User({
            userName: user?.name,
            userDni: user?.dni,
            userPhone: user?.phone,
            userEmail: user?.email,
            userGender: user?.gender,
            userDateOfBirth: {
                day: user?.dob?.day,
                month: user?.dob?.month,
                year: user?.dob?.year
            },
            userAddress: {
                address: user?.address?.address,
                district: user?.address?.district,
                state: user?.address?.state,
                region: user?.address?.region
            }
        })

        const findUser = await this.#usersDb.findOne({ userDni: newUser.userDni }).lean();

        if (findUser) {
            console.log('Se ha encontrado un usuario con el mismo documento');
            const userDateOfBirth = {
                ...newUser.userDateOfBirth,
                ...findUser.userDateOfBirth
            };
            const userAddress = {
                ...newUser.userAddress,
                ...findUser.userAddress
            };
            const usuarioNuevo = {
                ...newUser,
                ...findUser,
                userDateOfBirth,
                userAddress
            };
            const result = await this.#usersDb.findOneAndUpdate({ userDni: newUser.userDni }, usuarioNuevo, { new: true })

            return result
        } else {
            console.log('No se ha encontrado un usuario con el mismo documento');
            const result = this.#usersDb.create(newUser)
            return result
        }
    }
}

export const usersManager = new UsersManager()