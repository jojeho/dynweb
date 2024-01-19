import {Page}  from "../types"
import {PrismaClient} from "@prisma/client"

const myFormData=  (data:FormData) :Page=>
{
    try {
        
        const result: Page = {
            tag: data.get('tag') ?? '',
            header: data.get('category') ?? ''
            // Add other fields as needed, e.g., caption, formHeader, etc.
        };

        return result;
    } catch (error) {
        if(error instanceof Error)
            console.error('Error getting form data:', error);
    }

};

const insert = async (myData:Page):Page=>
{
    const prisma = new PrismaClient()   
    return await prisma.page.create({
        data:{
            header:myData.header,
            tag:myData.tag
        }
    })
}





export const selectAll= async():Page[]=>
{
    const prisma = new PrismaClient()   
    return prisma.page.findMany()
}

export const deletAll = async ()=>
{
    const prisma = new PrismaClient()   
    return await prisma.page.deleteMany()
}

export const insertFormData = async (data: FormData) => {
    try {
        const result:Page=myFormData(data);
        console.log(result)
        return  await insert(result);
               
    } catch (error ) {
        if(error instanceof Error)
            console.error('Error inserting form data:', error);
            
    }
};

export const tagTypes= ['aa']
