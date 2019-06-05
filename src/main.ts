import * as cors from 'cors';
import * as express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import routes from './routes';
import {RouteMethods} from './types';
import {PORT} from './utils/config';

const app = express();

app.use(cors());

routes.forEach((route) => {
  if (route.method === RouteMethods.GET) {
    app.get(route.name, route.middlewares);
  }
});

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log('App is now running!');
});
