import express from 'express';
import userController from '../controller/user-controller.js';
import phoneController from '../controller/phone-controller.js';

const publicRouter = new express.Router();
publicRouter.post('/api/users', userController.register);
publicRouter.post('/api/users/login', userController.login);
publicRouter.get('/api/users/data', userController.getUsers);
publicRouter.post('/api/phone/create', phoneController.createPhone);
publicRouter.get('/api/phone/data', phoneController.getSmartphones);
publicRouter.get('/api/phone/id', phoneController.getSmartphoneByID);
publicRouter.get(
  '/api/phone/brand',
  phoneController.getSmartphonesByBrand
);
publicRouter.patch('/api/phone/update', phoneController.updatePhone);
publicRouter.delete('/api/phone/delete', phoneController.deletePhone);

export { publicRouter };
