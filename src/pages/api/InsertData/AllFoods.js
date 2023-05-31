import prisma from '@/prisma/prisma';

export default async function handler(req, res){
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const GetAllFoods = await prisma.food.findMany();
                res.status(200).json(GetAllFoods);
            }catch (error) {
                res.status(500).json({ error: error.message });
            }
        break;

        default:
            res.status(500).json({ error: "fallo"});
            break;
    }
}
