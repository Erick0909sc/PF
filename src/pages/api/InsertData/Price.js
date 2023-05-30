import prisma from '@/prisma/prisma';


export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })

    const { method } = req;
    const { price } = req.query
    switch (method) {
        case 'GET':
            try {
                const GetProductByPrice = await prisma.food.findMany({
                    where: { price:parseFloat(price)}
                });
                return res.status(200).json({ GetProductByPrice  })

            } catch (error) {
                res.status(500).json({ error: error.message })
            }



        default:
            res.status(500).json({ error: "fallo" })

            break;
    }
} 