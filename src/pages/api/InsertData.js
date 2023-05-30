import prisma from '@/prisma/prisma';
import foods from '@/Data/Comidas';
import categories from '@/Data/categories';

export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })

    const { method } = req;
    switch (method) {
        case 'POST':
            try {
                const responseCategory = await prisma.category.createMany({
                    data: categories,
                })

                const responseFood = await prisma.food.createMany({
                    data: foods,
                })
                res.status(200).json({ responseCategory, responseFood })
            } catch (error) {
                res.status(500).json({ error: error.message })

            }
            break;

        default:
            res.status(500).json({ error: "fallo" })

            break;
    }
} 