import express from 'express';
import UsersController from './controllers/UsersController';
import FollowersController from './controllers/FollowersController';
import StarsController from './controllers/StarsController';


const routes = express.Router();
const UsersControllers = new UsersController();
const FollowersControllers = new FollowersController();
const StarsControllers = new StarsController();

routes.get('/users', UsersControllers.index);
routes.get('/stars', StarsControllers.index);
routes.post('/users', UsersControllers.create);
routes.post('/followers', FollowersControllers.create);
routes.post('/stars', StarsControllers.create);

export default routes;