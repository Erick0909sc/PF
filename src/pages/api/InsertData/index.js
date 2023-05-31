import prisma from '@/prisma/prisma';
import foodsData from '@/Data/Comidas';
import categoriesData from '@/Data/categories';

export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })

    const { method } = req;
    switch (method) {
        case 'POST':
            try {

                const existingCategories = await prisma.category.findMany()
                const existingFoods = await prisma.food.findMany()


                if(!existingCategories.length && !existingFoods.length) {
                    const categories =await prisma.category.createMany({data:categoriesData});
                    const foods =await prisma.food.createMany({data:foodsData});

                  return  res.status(201).json({ categories,foods})
                }else{
                   return res.status(200).json({ existingCategories,existingFoods})
                }

            } catch (error) {
                res.status(500).json({ error: error.message })

            }
            break;
        default:
            res.status(500).json({ error: "fallo" })

            break;
    }
} 