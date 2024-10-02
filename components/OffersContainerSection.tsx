import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import * as React from 'react';

export default async function offerContainerSection () {

    const topPackages = await new PrismaClient().packages.findMany({
        select: {id: true, title: true, priceGroupMember: true, desc: true, duration: true},
        orderBy: {priority: 'asc'},
        take: 3
    });

  return (
    <section className='offers-container'>
        {
            topPackages.map( p => 
                <div className='offer-card' key={p.id} >
                <div>
                  <h3>{p.title}</h3>
                  <h4>{`${p.duration.split(':')[0]} DAYS ${p.duration.split(':')[1]} NIGHTS`}</h4>
                  <h4 className='price-container'>FROM ₹{p.priceGroupMember.valueOf()}</h4>
                  <p>{p.desc}</p>
                  <Link href={'/packages/' + p.id }><input type="button" value={"LEARN MORE"} /></Link>
                </div>
              </div>
            )
        }
      </section>
  );
}
