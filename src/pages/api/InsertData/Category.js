import prisma from '@/prisma/prisma';

export default async function handler(req, res) {
  const { method } = req;
  const { category } = req.query;

  switch (method) {
    case 'GET':
      try {
        const GetproductByCategory = await prisma.food.findMany({
          where: {
            Category: { name: category },
          },
          include: {
            Category: {
              select: {
                name: true
              }
            }
          }
        });

        if(GetproductByCategory.length===0){
          return res.status(404).json({error:"La Categoria que busca no existe"})
        }



        return res.status(200).json({ GetproductByCategory });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

    default:
      res.status(500).json({ error: "fallo" });
      break;
  }
}












