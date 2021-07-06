import * as express from 'express';
import { Request, Response } from 'express';

const app = express();

const PORT = 8080;

app.get('/', (request: Request, response: Response) => {
   response.send({
       message: 'Hello World with Webpack and Express',
   })
});

app.listen(PORT, () => {
    console.log('Server running');
})
