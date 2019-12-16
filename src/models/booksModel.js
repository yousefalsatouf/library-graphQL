import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        requires: true,
    },
    subtitle: {
        type: String,
    },
    autor: {
        type: String,
        requires: true,
    },
    editor: {
        type: String,
        requires: true,
    },
    format: {
        type: String,
        requires: true,
    },
    language: {
        type: String,
        requires: true,
    },
    cover: {
        type: String,
        requires: true,
    },
    numberOfCopies: {
        type: Number,
        requires: true,
    }

});