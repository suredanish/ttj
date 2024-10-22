import {PackageProps, Package} from "@/components/package/Package";
import db from "@/prisma/db";
import seed from "@/prisma/seed";
import { Ipackage } from "@/prisma/types";
import { PrismaClient } from "@prisma/client";

export default async function Packages() {
    await seed();
    let ps: Ipackage[] = await db.packages.findMany({
        orderBy: { priority: 'asc' },
        take: 10,
        select: {id: true, title: true, duration: true, desc: true, priceDuo: true, priceSingle: true, priceGroupMember: true, tagsList: true}
    }) as unknown as Ipackage[]
    console.log(ps)
    console.log(ps[0].tagsList[3])
    // Map the results to the PackageProps format
    const packagePropsList: PackageProps[] = ps.map(pkg => ({
        id: pkg.id,
        title: pkg.title,
        duration: pkg.duration,
        priceSingle: pkg.priceSingle,
        priceDuo: pkg.priceDuo,
        priceGroupMember: pkg.priceGroupMember,
        tags: pkg.tagsList // Assuming tagsList is a string array
    }));

    return(<>
        <div className="container">
            {packagePropsList.map(p => <Package key={p.id} {...p} />)}
        </div>
        packages returned
    </>);
}