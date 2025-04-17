import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({

    To:{
        type: String,
        required: true
    },
    From: {
        type: String,
        required: true
    },
    Subject: String,
    Body: String,
    Date: {
        type: Date,
        required: true
    },
    Image: String,
    Name: {
        type: String,
        required: true
    },
    Starred: {
        type: Boolean,
        default: false,
        required: true
    },
    Bin: {
        type: Boolean,
        required: true,
        default: false
    },
    Type: {
        type: String,
        required: true
        
    }
},
{
    collection:'emails',
    versionKey:false
})

const email = mongoose.model('emails',EmailSchema);

export default email;