import { validateJWT } from "../../lib/auth";
import { db } from '../../lib/db';

export default async function handler(req, res) {
  const { name } = req.body;
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

  try {
    const projectData = await db.Project.create({
      data: {
        name,
        ownerId: user.id,
      }
    })

    if(projectData.id) {
      res.json({createProject: true});
    } else {
      res.json({createProject: false});
    }

  } catch(error) {
      res.json({ error })}
}

