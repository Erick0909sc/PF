import prisma from '@/prisma/prisma';

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const { name } = body;
        const existingFood = await prisma.food.findFirst({
          where: { name: name },
        });

        if (existingFood) {
          return res
            .status(400)
            .json({ error: `Ya existe una comida con el nombre ${name}` });
        }
        //si llega acá, implica que no existía.
        await prisma.food.create({ data: body });
        return res
          .status(201)
          .json({ mensaje: `Platillo almacenado con éxito!` }); //si lo creó, no lo retorna al objeto sino un mensaje de éxito.
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
        res.status(500).json({ error: 'Ocurrió un error al almacenar el objeto, intente nuevamente.'})
  }
}
