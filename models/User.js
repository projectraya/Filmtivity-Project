import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }]
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
       
        const salt = await bcrypt.default.genSalt(10);
        this.password = await bcrypt.default.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
} );

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.default.compare(enteredPassword, this.password);
}

const User = mongoose.model('User', userSchema);
export default User;