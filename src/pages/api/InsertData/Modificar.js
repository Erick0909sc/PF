import prisma from '@/prisma/prisma';

export default async function handler(req, res) {
  const { method, body } = req;
  switch (method) {
    case "PUT":
      try {
        const { id, ...data } = body;
        await prisma.food.update({
          where: { id: parseInt(id) },
          data,
        });
        res.status(200).json({ mensaje: "Plato modificado correctamente!" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      res.status(500).json({ error: "Ocurrió un error al eliminar el producto." });
      break;
  }
}