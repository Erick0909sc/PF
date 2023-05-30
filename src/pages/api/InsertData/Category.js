import prisma from '@/prisma/prisma';

export default async function handler(req, res) {
  const { method } = req;
  const { category } = req.query;
  
  switch (method) {
    case 'GET':
      try {
        const GetproductByCategory = await prisma.food.findMany({
          where: { category:{name: category}},
          include:{ category:true}
        });
        return res.status(200).json({ GetproductByCategory });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

    default:
      res.status(500).json({ error: "fallo" });
      break;
  }
}