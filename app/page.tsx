import Image from 'next/image'
import styles from './page.module.css'

function rand() {
  return Math.ceil(Math.random() * 1000)
}
export default function Home() {
  return (
    <>
      <section className='promo-banner'>
        <div>This is a Promo Banner don't know what to put here.</div>
      </section>
      <h2>Top Offers</h2>
      <section className='offers-container'>
        <div className='offer-card' >
          <div>
            <h3>Srinagar, Sonmarg and Gulmarg </h3>
            <h4>3 DAYS 2 NIGHTS</h4>
            <h4 className='price-container'>FROM $22,955</h4>
            <p>The princely state of Rajasthan is India at its colourful best. Here, medieval forts gaze across the Thar Desert, Bengal tigers roam forest reserves, and sandstone palaces reveal a regal legacy</p>
            <input type="button" value={"LEARN MORE"} />
          </div>
        </div>
        <div className='offer-card'>
          <div>
            <h3>Srinagar, Sonmarg and Gulmarg </h3>
            <h4>3 DAYS 2 NIGHTS</h4>
            <h4 className='price-container'>FROM $22,955</h4>
            <p>The princely state of Rajasthan is India at its colourful best. Here, medieval forts gaze across the Thar Desert, Bengal tigers roam forest reserves, and sandstone palaces reveal a regal legacy</p>
            <input type="button" value={"LEARN MORE"} />
          </div>
        </div>
        <div className='offer-card'>
          <div>
            <h3>Srinagar, Sonmarg and Gulmarg </h3>
            <h4>3 DAYS 2 NIGHTS</h4>
            <h4 className='price-container'>FROM $22,955</h4>
            <p>The princely state of Rajasthan is India at its colourful best. Here, medieval forts gaze across the Thar Desert, Bengal tigers roam forest reserves, and sandstone palaces reveal a regal legacy</p>
            <input type="button" value={"LEARN MORE"} />
          </div>
        </div>
      </section>
      <h2>Top Destinations</h2>
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
      <h2>Why People Choose Us</h2>
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
