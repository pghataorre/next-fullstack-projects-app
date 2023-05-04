import { NextApiRequest, NextApiResponse } from "next";
import { db } from '../../lib/db';
import { createJWT, hashPassword } from '../../lib/auth';
import { serialize } from 'cookie';

const register = async (req: NextApiRequest, res: NextApiResponse) => {
 if (req.method === 'POST') {
  const { email, firstName, lastName, password } = req.body;
  const user = await db.user.create({
      data: {
        email,
        password: await hashPassword(password),
        firstName,
        lastName,
      },
    });

  const jwt = await createJWT(user);
    res.setHeader(
      "Set-Cookie",
      serialize(process.env.COOKIE_NAME, jwt, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    )
    
    res.status(201);
    res.json({registered: true});

  } else {
    res.status(402);
    res.json({error: 'registration failed'});
  }
}

export default register;
