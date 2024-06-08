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
            <input type="button" value={"LEARN MORE"}/>
          </div>
        </div>
        <div className='offer-card'>
          <div>
            <h3>Srinagar, Sonmarg and Gulmarg </h3>
            <h4>3 DAYS 2 NIGHTS</h4>
            <h4 className='price-container'>FROM $22,955</h4>
            <p>The princely state of Rajasthan is India at its colourful best. Here, medieval forts gaze across the Thar Desert, Bengal tigers roam forest reserves, and sandstone palaces reveal a regal legacy</p>
            <input type="button" value={"LEARN MORE"}/>
          </div>
        </div>
        <div className='offer-card'>
          <div>
            <h3>Srinagar, Sonmarg and Gulmarg </h3>
            <h4>3 DAYS 2 NIGHTS</h4>
            <h4 className='price-container'>FROM $22,955</h4>
            <p>The princely state of Rajasthan is India at its colourful best. Here, medieval forts gaze across the Thar Desert, Bengal tigers roam forest reserves, and sandstone palaces reveal a regal legacy</p>
            <input type="button" value={"LEARN MORE"}/>
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
      <section className='reviews-container'></section>
      <div className="review-card">
        <div>
          <div className="img-container"><img src={"https://robohash.org/random" + rand()} alt="" /></div>
          <div className="name"></div>
        </div>
        <div>
          <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus adipisci ratione, et nesciunt, repudiandae culpa iure neque natus eveniet quos, vel hic dolor sapiente numquam officiis soluta nostrum. Deserunt, obcaecati</div>
        </div>
      </div>
      <div className="review-card">
        <div>
          <div className="img-container"><img src={"https://robohash.org/random"+ rand()} alt="" /></div>
          <div className="name"></div>
        </div>
        <div>
          <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus adipisci ratione, et nesciunt, repudiandae culpa iure neque natus eveniet quos, vel hic dolor sapiente numquam officiis soluta nostrum. Deserunt, obcaecati</div>
        </div>
      </div>
      <div className="review-card">
        <div>
          <div className="img-container"><img src={"https://robohash.org/random"+ rand()} alt="" /></div>
          <div className="name"></div>
        </div>
        <div>
          <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus adipisci ratione, et nesciunt, repudiandae culpa iure neque natus eveniet quos, vel hic dolor sapiente numquam officiis soluta nostrum. Deserunt, obcaecati</div>
        </div>
      </div>
      <div className="review-card">
        <div>
          <div className="img-container"><img src={"https://robohash.org/random"+ rand()} alt="" /></div>
          <div className="name"></div>
        </div>
        <div>
          <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus adipisci ratione, et nesciunt, repudiandae culpa iure neque natus eveniet quos, vel hic dolor sapiente numquam officiis soluta nostrum. Deserunt, obcaecati</div>
        </div>
      </div>
      <div className="review-card">
        <div>
          <div className="img-container"><img src={"https://robohash.org/random"+ rand()} alt="" /></div>
          <div className="name"></div>
        </div>
        <div>
          <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus adipisci ratione, et nesciunt, repudiandae culpa iure neque natus eveniet quos, vel hic dolor sapiente numquam officiis soluta nostrum. Deserunt, obcaecati</div>
        </div>
      </div>


    </>
  )
}
