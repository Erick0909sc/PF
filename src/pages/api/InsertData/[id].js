import prisma from '@/prisma/prisma';


export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })

    const { method } = req;
    const { id } = req.query
    switch (method) {
        case 'GET':
            try {
                const product = await prisma.food.findUnique({
                    where: { id: parseInt(id) }
                });

                if(!product) {
                    return res.status(404).json({error:"producto no encontrado"});
                }


                return res.status(200).json({ product })

            } catch (error) {
                res.status(500).json({ error: error.message })
            }



        default:
            res.status(500).json({ error: "fallo" })

            break;
    }
} 