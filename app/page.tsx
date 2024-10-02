import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import OfferContainerSection from '@/components/OffersContainerSection'
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
      
      <h2 className='section-header' >Top Destinations</h2>
      <section className="destinations-container">
        <div className='destination-card'>
          <h4>Drang Good Valley</h4>
          <div className='img-container'>
            <img src="https://placehold.co/30x20" alt="" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa amet ipsum cupiditate, minima molestias non necessitatibus. Fugit, officia eligendi.</p>
        </div>
        <div className='destination-card'>
          <h4>Drang Good Valley</h4>
          <div className='img-container'>
            <img src="https://placehold.co/30x20" alt="" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa amet ipsum cupiditate, minima molestias non necessitatibus. Fugit, officia eligendi.</p>
        </div>
        <div className='destination-card'>
          <h4>Drang Good Valley</h4>
          <div className='img-container'>
            <img src="https://placehold.co/30x20" alt="" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa amet ipsum cupiditate, minima molestias non necessitatibus. Fugit, officia eligendi.</p>
        </div>
        <div className='destination-card'>
          <h4>Drang Good Valley</h4>
          <div className='img-container'>
            <img src="https://placehold.co/30x20" alt="" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa amet ipsum cupiditate, minima molestias non necessitatibus. Fugit, officia eligendi.</p>
        </div>
        <div className='destination-card'>
          <h4>Drang Good Valley</h4>
          <div className='img-container'>
            <img src="https://placehold.co/30x20" alt="" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa amet ipsum cupiditate, minima molestias non necessitatibus. Fugit, officia eligendi.</p>
        </div>
        <div className='destination-card'>
          <h4>Drang Good Valley</h4>
          <div className='img-container'>
            <img src="https://placehold.co/30x20" alt="" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa amet ipsum cupiditate</p>
        </div>
        <div className='destination-card'>
          <h4>Drang Good Valley</h4>
          <div className='img-container'>
            <img src="https://placehold.co/30x20" alt="" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa amet ipsum cupiditate, minima molestias non necessitatibus. Fugit, officia eligendi.</p>
        </div>
        <div className='destination-card'>
          <h4>Drang Good Valley</h4>
          <div className='img-container'>
            <img src="https://placehold.co/30x20" alt="" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa amet ipsum cupiditate, minima molestias non necessitatibus. Fugit, officia eligendi.</p>
        </div>
        <div className='destination-card'>
          <h4>Drang Good Valley</h4>
          <div className='img-container'>
            <img src="https://placehold.co/30x20" alt="" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa amet ipsum cupiditate, minima molestias non necessitatibus. Fugit, officia eligendi.</p>
        </div>
        <div className='destination-card'>
          <h4>Drang Good Valley</h4>
          <div className='img-container'>
            <img src="https://placehold.co/30x20" alt="" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa amet ipsum cupiditate, minima molestias non necessitatibus.</p>
        </div>
        <div className='destination-card'>
          <h4>Drang Good Valley</h4>
          <div className='img-container'>
            <img src="https://placehold.co/30x20" alt="" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa amet ipsum cupiditate, minima molestias non necessitatibus. Fugit, officia eligendi.</p>
        </div>
      </section>
      <h2 className='section-header' >Why People Choose Us</h2>
      <section className='reviews-section' >
        <div className='reviews-container' >
          <div className="review-card">
            <div>
              <p className="content">Absolutely fantastic 7 day stay in Kashmir! Exceptional service, stunning views, and unforgettable experiences. Highly recommend this new travel agency!</p>
            </div>
            <div className='reviewer-card'>
              <div className="img-container"><img src={"https://robohash.org/random" + rand()} alt="" /></div>
              <div className="name">Kapil</div>
            </div>
          </div>
          <div className="review-card">
            <div>
              <p className="content">Incredible 4 day Kashmir tour! Outstanding service, breathtaking views, and unforgettable experiences. Highly recommended. </p>
            </div>
            <div className='reviewer-card'>
              <div className="img-container"><img src={"https://robohash.org/random" + rand()} alt="" /></div>
              <div className="name">Rajindra</div>
            </div>
          </div>
          <div className="review-card">
            <div>
              <p className="content">Our 2-week honeymoon in Kashmir was magical! Exceptional service, romantic settings, and stunning landscapes. Thrill Top Journeys made it truly unforgettable!</p>
            </div>
            <div className='reviewer-card'>
              <div className="img-container"><img src={"https://robohash.org/random" + rand()} alt="" /></div>
              <div className="name">Abhinav Chaudhary</div>
            </div>
          </div>
          <div className="review-card">
            <div>
              <p className="content">Our family had an amazing time in Kashmir with Thrill Top Journeys! Excellent service, fun activities, and beautiful scenery!</p>
            </div>
            <div className='reviewer-card'>
              <div className="img-container"><img src={"https://robohash.org/random" + rand()} alt="" /></div>
              <div className="name">Malang Baja</div>
            </div>
          </div>
          <div className="review-card">
            <div>
              <p className="content">Absolutely fantastic 7 day stay in Kashmir! Exceptional service, stunning views, and unforgettable experiences. Highly recommend this new travel agency!</p>
            </div>
            <div className='reviewer-card'>
              <div className="img-container"><img src={"https://robohash.org/random" + rand()} alt="" /></div>
              <div className="name">Kapil</div>
            </div>
          </div>
          <div className="review-card">
            <div>
              <p className="content">Incredible 4 day Kashmir tour! Outstanding service, breathtaking views, and unforgettable experiences. Highly recommended. </p>
            </div>
            <div className='reviewer-card'>
              <div className="img-container"><img src={"https://robohash.org/random" + rand()} alt="" /></div>
              <div className="name">Rajindra</div>
            </div>
          </div>
          <div className="review-card">
            <div>
              <p className="content">Our 2-week honeymoon in Kashmir was magical! Exceptional service, romantic settings, and stunning landscapes. Thrill Top Journeys made it truly unforgettable!</p>
            </div>
            <div className='reviewer-card'>
              <div className="img-container"><img src={"https://robohash.org/random" + rand()} alt="" /></div>
              <div className="name">Abhinav Chaudhary</div>
            </div>
          </div>
          <div className="review-card">
            <div>
              <p className="content">Our family had an amazing time in Kashmir with Thrill Top Journeys! Excellent service, fun activities, and beautiful scenery!</p>
            </div>
            <div className='reviewer-card'>
              <div className="img-container"><img src={"https://robohash.org/random" + rand()} alt="" /></div>
              <div className="name">Malang Baja</div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
