import mongoose from "mongoose";

export const schemaUsers = new mongoose.Schema({
    userName: { type: String, required: false },
    userDni: { type: Number, required: true },
    userPhone: { type: Number, required: false },
    userEmail: { type: String, required: false },
    userGender: { type: String, required: false },
    userDateOfBirth: {
        type: {
            day: Number,
            month: Number,
            year: Number,
        },
        required: false
    },
    userAddress: {
        type: {
            address: String,
            district: String,
            state: String,
            region: String
        },
        required: false
    }
}, { versionKey: false });
