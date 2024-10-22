import { PrismaClient } from "@prisma/client";

export default new PrismaClient().$extends({
    query: {
        async $allOperations({ operation, model, args, query }) {
            try{
            args.data && Object.keys(args.data).forEach(k => {
                if (k.includes("List") || k.includes("Json") ){
                    console.log(1111)
                    args.data[k] = JSON.stringify(args.data[k]);
                }
            })
            let result = await query(args)
            result && Object.keys(result).forEach(k => {
                if (k.includes("List") || k.includes("Json")){
                    console.log(1111, k)
                    result[k] = JSON.parse(result[k]);
                    console.log(JSON.parse(result[k]))
                }
                if(k.includes("NumList")) result[k].map((i: String) => Number(i));
            });
            return result
        }
        catch(e)
        {
            console.error(e, args)
        }
        },
    },
})
