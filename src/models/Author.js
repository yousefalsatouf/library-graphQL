import mongoose from 'mongoose';

export const Author = mongoose.model("Author", {
    email: String,
    firstName: String,
    lastName: String,
    gsm: String,
    address: String,
});
