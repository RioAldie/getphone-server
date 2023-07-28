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
export default {
  createPhone,
  getSmartphones,
};
