import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import Users from '../../db/schema/users';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await Users.find();
  res.send(users);
};
export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  const user = await Users.findById(userId);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({});
  }
};

export const createUser = async (req: Request, res: Response):Promise<void> =>{
  const { email, first_name, last_name, avatar, password } = req.body;
 const newUser = await Users.create({ email, first_name, last_name, avatar, password})
 res.send(newUser);
};