import * as mongosse from 'mongoose';

export const userSchema = new mongosse.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
});

export interface  User {
    id: number;
    firstname: string;
    lastname: string;
    email: String,
    password: String,
}
