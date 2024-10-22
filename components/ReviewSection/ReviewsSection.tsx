import { PrismaClient } from '@prisma/client';
import * as React from 'react';
import styles from './styles.module.css'
export default async function TopDestinationsSection() {
    let reviews = await new PrismaClient().reviews.findMany({
        orderBy: { priority: 'asc' },
        take: 8
    });
    // double them for marquee
    reviews = [...reviews, ...reviews]

    return (<>
        <h2 className='section-header' >Why People Choose Us</h2>
        <section className={styles.section}>
            <div className={styles.container} >
                {reviews.map(r =>
                    <div className={styles.card} key={r.id + new Date()}>
                        <div>
                            <p>{r.reviewBody}</p>
                        </div>
                        <div className={styles.reviewercard}>
                            <div className={styles.imgcontainer}><img src={r.personImage} alt="" /></div>
                            <div>{r.personName}</div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    </>);
}
