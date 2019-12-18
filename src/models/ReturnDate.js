import mongoose from 'mongoose';

export const ReturnDate = mongoose.model("ReturnDate", {
    beginDate: Date,
    endDate: Date,
});