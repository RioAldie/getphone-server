import phoneService from '../service/phone-service.js';

const createPhone = async (req, res, next) => {
  try {
    const result = await phoneService.createPhone(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
const getSmartphones = async (req, res, next) => {
  try {
    const result = await phoneService.getSmartphones();
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
const getSmartphoneByID = async (req, res, next) => {
  try {
    const result = await phoneService.getSmartphoneByID(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
const getSmartphonesByBrand = async (req, res, next) => {
  try {
    const result = await phoneService.getSmartphonesByBrand(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
const updatePhone = async (req, res, next) => {
  try {
    const result = await phoneService.updatePhone(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
const deletePhone = async (req, res, next) => {
  try {
    const result = await phoneService.deleteSmartphone(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
export default {
  createPhone,
  getSmartphones,
  getSmartphoneByID,
  getSmartphonesByBrand,
  updatePhone,
  deletePhone,
};
