import { prismaClient } from '../app/database';
import { ResponseError } from '../error/response-error';
import {
  phoneBrandValidation,
  phoneValidation,
} from '../validation/phone-validation';
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
const getSmartphones = async () => {
  const smartphones = await prismaClient.smartphone.findMany();

  return smartphones;
};
const getSmartphoneByID = async (request) => {
  const smartphoneRequest = validate(phoneValidation, request);
  console.log(smartphoneRequest.id);
  const phone = await prismaClient.smartphone.findUnique({
    where: {
      id: smartphoneRequest.id,
    },
    select: {
      id: true,
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

  if (!phone) {
    throw new ResponseError(401, 'phone not found');
  }
  return phone;
};

const getSmartphonesByBrand = async (request) => {
  const smartphoneRequest = validate(phoneBrandValidation, request);
  console.log(smartphoneRequest.brand);
  const phone = await prismaClient.smartphone.findMany({
    where: {
      brand: smartphoneRequest.brand,
    },
    select: {
      id: true,
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
  if (!phone) {
    throw new ResponseError(401, 'phone not found');
  }

  return phone;
};
export default {
  createPhone,
  getSmartphones,
  getSmartphoneByID,
  getSmartphonesByBrand,
};
