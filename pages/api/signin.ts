import { NextApiRequest, NextApiResponse } from "next";
import { db } from '../../lib/db';
import { createJWT, comparePasswords } from '../../lib/auth';
import { serialize } from 'cookie';

const signin = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {

    const { email, password } = req.body;
    const user = await db.user.findUnique({
      where: {
        email
      },
    });

    if (!user) {
      res.status(401);
      res.json({ error: "User not found" });
      return;
    }

    const isUser = await comparePasswords(password, user.password);

    if (isUser) {
      const jwt = await createJWT(user);
      res.setHeader(
        "Set-Cookie",
        serialize(process.env.COOKIE_NAME, jwt, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        })
      );

      res.status(201).json({ signIn: true });

    } else {
      res.status(401);
      res.json({ error: "Invalid login" });
    }

  } else {
    res.status(402);
    res.json({ error: "Error posting" });
  }
}

export default signin;
