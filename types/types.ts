import {ObjectId} from "mongodb";
import type { WithId, Document } from 'mongodb';

export type itemValue = any;


export interface Item extends WithId<Document> {
    id: ObjectId;
    index: number;
    description: itemValue;
}