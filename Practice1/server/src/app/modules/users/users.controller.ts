import { createUserIntoDB } from './users.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

export const createUser = async (req, res, next) => {
  try {
    const result = await createUserIntoDB(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    return next(err);
  }
};
