import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rentCount: {
        type: Number,
        required: true
    },
    oldestDateOfRental: { type: Array, required: false },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'book'
        }
    ]
});

userSchema.pre('save', function() {
    const hashedPassword = bcrypt.hashSync(this.password, 12);
    this.password = hashedPassword;
});

const user = mongoose.model('user', userSchema);

export default user;
