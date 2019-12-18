import mongoose from 'mongoose';

export const Author = mongoose.model("Author", {
    firstName: String,
    lastName: String,
    email: String,
    gsm: String,
    address: String,
});