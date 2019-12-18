import mongoose from 'mongoose';

export const Comment = mongoose.model("Comment", {
   title: String,
   comment: String,
});