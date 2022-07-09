import {MongoClient} from 'mongodb';
import {pwd} from '../config/config'

export const client = new MongoClient(`mongodb+srv://marcin:${pwd}@cluster0.w7tz8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
client.connect();

export const db = client.db('myFirstDatabase');
export const cvValues = db.collection('CV-values');
