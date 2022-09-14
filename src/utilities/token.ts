import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../types';

const SECRET = 'supersecret';

const OPTIONS: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

export default {
  create: (payload: User) => jwt.sign(payload, SECRET, OPTIONS),
  verify: (token: string) => jwt.verify(token, SECRET),
};
