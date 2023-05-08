import {Schema, model, Document} from 'mongoose';

export interface IUser extends Document{
    username: string,
    password: string
}

const userSchema = new Schema({
    username: {
        type: String,
        requiered: true,
        lowercase: true
    },
    password: {
        type: String,
        requied: true,
        required: true
    }
})

export default model<IUser>('User', userSchema )