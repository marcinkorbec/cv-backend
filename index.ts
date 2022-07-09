import express from 'express';
import cors from 'cors';
import 'express-async-errors'
import {handleError} from "./utils/error";
import {appRouter} from "./routes/appRouter";

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use('/', appRouter)

app.use(handleError);

app.listen(3021, '0.0.0.0', () => {
    console.log('Aplikacja nakurwia na porcie http://localhost:3021')
})