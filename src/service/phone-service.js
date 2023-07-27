import { prismaClient } from '../app/database';
import { createPhoneValidation } from '../validation/user-validation.js';
import { validate } from '../validation/validation.js';

const createPhone = async (request) => {
  return prismaClient.smartphone.create({
    data: request,
    select: {
      name: true,
      brand: true,
      RAM: true,
      room: true,
      processor: true,
      image: true,
      camera: true,
      category: true,
      desc: true,
      link: true,
      release_date: true,
      A1: true,
      A2: true,
      A3: true,
      A4: true,
      A5: true,
    },
  });
};

export default {
  createPhone,
};
