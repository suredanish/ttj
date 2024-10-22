import { PrismaClient } from '@prisma/client';
import { link } from 'fs';
import Link from 'next/link';
import * as React from 'react';

export default async function TopDestinationsSection() {
    const destination = await new PrismaClient().destinations.findMany({
        orderBy: { priority: 'asc' },
        take: 8
    });

    return (<>
        <h2 className='section-header' >Top Destinations</h2>
        <section className="destinations-container">
            {
                
                destination.map(d =>
                    <Link href={'destination/' + d.id} key={d.id}><div className='destination-card'>
                        <h4>{d.title}</h4>
                        <div className='img-container'>
                            <img src={"/" + d.mainImage} alt="" />
                        </div>
                        <p>{d.desc}</p>
                    </div></Link>
                )
            }
        </section>
    </>);
}
