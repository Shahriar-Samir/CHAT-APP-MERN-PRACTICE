import { createUserIntoDB } from './users.service';

export const createUser = async (req, res, next) => {
  try {
    const result = await createUserIntoDB(req.body);
    return res.status(200).json({
      success: true,
      message: 'User created successfully',
      statusCode: 200,
      data: result,
    });
  } catch (err) {
    return next(err);
  }
};
