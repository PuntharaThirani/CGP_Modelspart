import mongoose from 'mongoose';

const USerSchema = new mongoose.schema({
    UserName: {
        type: String, 
        required: true,
        unique: true,
    },

    PassWord: {
        type: String,
        required: true,
    },

    UserType: {
        type: String,
        required: true,
        enum: ['passenger' , 'operator' , 'admin' , 'co-main station' , 'maintenanse-crew']
    },

    CreatedAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User' , USerSchema);

export default User;