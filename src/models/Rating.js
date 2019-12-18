import mongoose from 'mongoose';

export const Rating = mongoose.model("Rating", {
   rating: String,
});