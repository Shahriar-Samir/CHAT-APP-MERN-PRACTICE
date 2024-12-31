import { createUserIntoDB } from './users.service';

export const createUser = async (req, res) => {
  try {
    const result = await createUserIntoDB(req.body);
    return res.status(200).json({
      success: true,
      message: 'User created successfully',
      statusCode: 200,
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'Failed to create user',
      data: err,
    });
  }
};
