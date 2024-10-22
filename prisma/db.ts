import { PrismaClient } from "@prisma/client";

export default new PrismaClient().$extends({
    query: {
        async $allOperations({ operation, model, args, query }) {
            console.log(query)
            const result = await query(args)
            console.log(result)
            return result
        },
    },
})
