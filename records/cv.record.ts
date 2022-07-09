import {cvValues} from "../utils/db";
import {Item} from "../types/types";
import {ObjectId} from "mongodb";


export class CvRecord {
    public readonly id?: ObjectId;
    public readonly index: number;
    public readonly ItemValue: Item;

    constructor(obj: Item) {
    }

    static async listAll(): Promise<Item[]> {
        return await cvValues.find().toArray() as Item[];
    }

    static async getOne(id: string): Promise<Item> {
        return await cvValues.findOne({_id: new ObjectId(String(id))}) as Item;
    }
}