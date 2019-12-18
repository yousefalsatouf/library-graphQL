import mongoose from 'mongoose';

export const CommentStatus = mongoose.model("CommentStatus", {
    userfull: String,
    useless: String,
});