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

        if (GetproductByName.length==0) {
          return res.status(404).json({error:"El producto que esta buscando no existe"})
        }


        return res.status(200).json({ GetproductByName });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

    default:
      res.status(500).json({ error: "fallo" });
      break;
  }
}