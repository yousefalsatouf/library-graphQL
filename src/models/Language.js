import mongoose from 'mongoose';

export const Language = mongoose.model("Language", {
    language: String,
});