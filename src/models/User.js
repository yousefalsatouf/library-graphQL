import mongoose from 'mongoose';

export const User = mongoose.model("User", {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    book: Array,
    nBorrow: String,
});
