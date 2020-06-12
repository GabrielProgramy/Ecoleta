import express from 'express';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333, () =>{
  console.log("🚀 Server Started on port 3333")
});