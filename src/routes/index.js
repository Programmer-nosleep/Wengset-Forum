import { Router } from 'express';

import { getHome } from '../controllers/homeController.js';
import { getLogin, postLogin, getSignup, postSignup } from '../controllers/authController.js';
import { getForum } from '../controllers/forumController.js';

export function registerRoutes(app) {
  const router = Router();

  router.get('/', getHome);

  router.get('/forum', getForum);

  router.get('/auth/login', getLogin);
  router.post('/auth/login', postLogin);
  router.get('/auth/signup', getSignup);
  router.post('/auth/signup', postSignup);

  app.use(router);
}
