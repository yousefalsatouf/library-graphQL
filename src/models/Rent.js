import mongoose from 'mongoose';
import book from "./Book";

const rentSchema= new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
});

const rent = mongoose.model('rent', rentSchema);

export default rent;
