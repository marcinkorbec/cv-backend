import express from 'express';
import {handleError, ValidationError} from "../utils/error";
import {CvRecord} from "../records/cv.record";

export const appRouter = express.Router();


appRouter
    .get('/', async (req, res) => {
        throw new ValidationError('Przepraszamy, spróbuj za kilka minut ponownie!');
    })

    .get('/get-items', async (req, res) => {
        const data = await CvRecord.listAll();
        data.sort((a, b) => {
            return a.index - b.index;
        });

        res.json(data);
    })

    .get('/get-one/:id', async (req, res) => {
        const id = req.params.id;
        const data = await CvRecord.getOne(id);

        res.json(data);
    })
