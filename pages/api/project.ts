import { validateJWT } from "../../lib/auth";
import { db } from '../../lib/db';

export default async function handler(req, res) {
  const { name } = req.body;
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);




  try {
    const projectData = await db.project.create({
      data: {
        name,
        ownerId: user.id,
        due: addWeeksToDate(new Date(), 2),
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

const addWeeksToDate = (dateObj: Date,numberOfWeeks: number) => {
  dateObj.setDate(dateObj.getDate() + numberOfWeeks * 7);
  return dateObj;
}