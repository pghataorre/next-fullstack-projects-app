import bcrypt from 'bcrypt';
import {SignJWT, jwtVerify} from 'jose';
import { db } from './db';
import { cookies } from 'next/dist/client/components/headers';

export const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
}

export const comparePasswords = (plainTextPassword: string, hashedPassword: string ): Promise<boolean> => {
  return bcrypt.compare(plainTextPassword, hashedPassword);
}

export const createJWT = ({id, email} : {id: string, email: string}): Promise<string> => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24 * 7;

  return new SignJWT({
    payload: {
      id, 
      email
    }})
    .setProtectedHeader({alg: "HS256", typ: 'JWY'})
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
}

export const validateJWT = async(jwt: any) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  )

  return payload.payload as any;
}

export const getUserFromCookie = async (cookies) => {
  const jwt = cookies.get(process.env.COOKIE_NAME);

  const { id } = await validateJWT(jwt.value);

  const user = await db.user.findUnique({
    where: {
      id: id as string
    },
  });

  return user; 
}

