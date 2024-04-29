import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className='offers-container'>
        <div className='offer-card' >
          <div>
            <h3>Srinagar, Sonmarg and Gulmarg </h3>
            <h4>3 DAYS 2 NIGHTS</h4>
            <h4>FROM $22,955</h4>
            <p>The princely state of Rajasthan is India at its colourful best. Here, medieval forts gaze across the Thar Desert, Bengal tigers roam forest reserves, and sandstone palaces reveal a regal legacy</p>
            <input type="button" value={"READ MORE"}/>
          </div>
        </div>
        <div className='offer-card'>
          <div>
            <h3>Srinagar, Sonmarg and Gulmarg </h3>
            <h4>3 DAYS 2 NIGHTS</h4>
            <h4>FROM $22,955</h4>
            <p>The princely state of Rajasthan is India at its colourful best. Here, medieval forts gaze across the Thar Desert, Bengal tigers roam forest reserves, and sandstone palaces reveal a regal legacy</p>
            <input type="button" value={"READ MORE"}/>
          </div>
        </div>
        <div className='offer-card'>
          <div>
            <h3>Srinagar, Sonmarg and Gulmarg </h3>
            <h4>3 DAYS 2 NIGHTS</h4>
            <h4>FROM $22,955</h4>
            <p>The princely state of Rajasthan is India at its colourful best. Here, medieval forts gaze across the Thar Desert, Bengal tigers roam forest reserves, and sandstone palaces reveal a regal legacy</p>
            <input type="button" value={"READ MORE"}/>
          </div>
        </div>
      </section>
    </>
  )
}
