import mongoose from 'mongoose';

export const CommentStatus = mongoose.model("CommentStatus", {
    useful: String,
    useless: String,
});