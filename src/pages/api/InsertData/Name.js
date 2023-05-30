import prisma from '@/prisma/prisma';

export default async function handler(req, res) {
  const { method } = req;
  const { name } = req.query;
  
  switch (method) {
    case 'GET':
      try {
        const GetproductByName = await prisma.food.findMany({
          where: {
            name: {
              contains: name,
              mode: 'insensitive' 
            }
          }
        });
        return res.status(200).json({ GetproductByName });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

    default:
      res.status(500).json({ error: "fallo" });
      break;
  }
}