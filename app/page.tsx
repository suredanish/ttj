import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import OfferContainerSection from '@/components/OffersContainerSection'
import TopDestinationsSection from '@/components/TopDestinationsSection'
import ReviewsSection from '@/components/ReviewSection/ReviewsSection'
function rand() {
  return Math.ceil(Math.random() * 1000)
}
export default function Home() {
  return (
    <>
      <section className='promo-banner'>
        <div>This is a Promo Banner don't know what to put here.</div>
      </section>
      <OfferContainerSection/>
      <TopDestinationsSection/>
      <ReviewsSection/>
    </>
  )
}
