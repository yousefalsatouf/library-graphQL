import mongoose from 'mongoose';

export const Book = mongoose.model("Book", {
    title: String,
    subtitle: String,
    editor: String,
    format: String,
    cover: String,
    copiesNber: String,
});