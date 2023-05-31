import prisma from '@/prisma/prisma';

export default async function handler(req, res) {
  const { method, query } = req;
  switch (method) {
    case "DELETE":
      try {
        const { id } = query;
        await prisma.food.delete({
          where: { id: parseInt(id) },
        });
        res.status(200).json({ mensaje: `Plato removido correctamente!` });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      res
        .status(500)
        .json({ error: "Ocurrió un error al eliminar el producto." });
  }
}
