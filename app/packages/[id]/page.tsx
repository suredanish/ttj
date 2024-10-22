import { PopupTrigger } from "@/contexts/PopupTrigger";
import db from "@/prisma/db";
import { Ipackage } from "@/prisma/types";


export default async function ({ }) {
    const p: Ipackage | null = (await db.packages.findFirst()) as Ipackage | null;
    console.log(p?.destinationsJsonList)
    return (<>
        <section className="wall-section">

            <div className="img-container">
                <img src='/wall.png' />
            </div>

            <div className="content" aria-label="package brief"></div>
        </section>

        <h2 className="section-header package-title">{p?.title}</h2>

        <section className="package-section">
            <div className="package">
                <div className="package-body">
                    <div className="package-summary">{p?.desc}</div>
                    <div className="package-content">
                        {p?.destinationsJsonList?.map( d => 
                        <div id={d.title} className="package-day">
                            <h3>{d.title}</h3>
                            {d.content.map( c => <p>{c}</p>)}
                            <div className="package-day-gallery">
                                {d.images.map(i => 
                                <div className="img-and-title">
                                    <div className="img-container"><img src={"/" + i} alt={i.replace(/\..*$/, "")} /></div>
                                    <div className="img-title">{i.replace(/\..*$/, "")}</div>
                                </div>
                                )}
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <div className="package-actions">
                    <div className="package-toc">
                        <ul>
                            <li>
                                <a href="#Day 1 - Srinager" >
                                    Day 1 - Srinager
                                    <div className="toc-brief">
                                        9:00am - 12:00pm <br />
                                        Dal, Mughal Garden, Lalit Hotel (Stay)
                                    </div>
                                </a>
                            </li>
                            <li><a href="#Day 2 - Zukis Manz" >
                                Day 2 - Zukis Manz
                                <div className="toc-brief">
                                    9:00am - 6:00pm <br />
                                    Nagun Zuk, Dar sabun Zuk
                                </div>
                            </a></li>
                            <li><a href="#Day 3 - Khal Kakin Lath Vuchne" >
                                Day 3 - Khal Kakin Lath Vuchne
                                <div className="toc-brief">
                                    9:00am - 6:00pm <br />
                                    Lath, Unconsious, Chakul (Stay)
                                </div>
                            </a></li>
                            <li><a href="#Day 4 - Farooq Wazas Sath Aer Chori" >
                                Day 4 - Farooq Wazas Sath Aer Chori
                                <div className="toc-brief">
                                </div>
                            </a></li>
                        </ul>
                    </div>
                    <div className="customer-actions">
                        <div className="package-price">
                            <div className="package-size-pic">
                                <img src="/hiking.svg" alt="person hiking" />
                            </div>
                            <div>
                                <div className="original-price"> <span>₹32,999</span> <span >25% OFF</span></div>
                                <div className="current-price"> ₹25,999 </div>
                                <div className="price-tax-info">Including applicable taxes</div>
                            </div>
                        </div>
                        <div className="package-price">
                            <div className="package-size-pic">
                                <img src="/couple.svg" alt="couples icon" />
                            </div>
                            <div>
                                <div className="original-price"> <span>₹32,999</span> <span >25% OFF</span></div>
                                <div className="current-price"> ₹25,999 </div>
                                <div className="price-tax-info">Including applicable taxes</div>
                            </div>
                        </div>

                        <div className="package-price">
                            <div className="package-size-pic">
                                <img src="/group2.svg" alt="couples icon" />
                            </div>
                            <div>
                                <div className="original-price"> <span>₹32,999</span> <span >25% OFF</span></div>
                                <div className="current-price"> ₹25,999 </div>
                                <div className="price-tax-info">Including applicable taxes</div>
                            </div>
                        </div>

                        <div className="customer-input">
                            <form id="form-customer-input">
                                <label id="label-customer-phone">
                                    <input type="tel" name="phone" placeholder="I'm intrested, call me on this number" pattern="[0-9]{10}" />
                                </label>
                                <input type="button" value="CALL ME" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <PopupTrigger content = {<div className="popup-bottom">
        <div className="s-customer-actions">
            <div className="s-package-price">
                <div className="s-package-size-pic">
                    <img src="/couple.svg" alt="couples icon" />
                </div>
                <div>
                    <div className="s-original-price"> <span>₹32,999</span> <span  >25% OFF</span></div>
                    <div className="s-current-price"> ₹25,999 </div>
                    <div className="s-price-tax-info">Including applicable taxes</div>
                </div>
            </div>

            <div className="s-package-price">
                <div className="s-package-size-pic">
                    <img src="/group2.svg" alt="couples icon" />
                </div>
                <div>
                    <div className="s-original-price"> <span>₹32,999</span> <span  >25% OFF</span></div>
                    <div className="s-current-price"> ₹25,999 </div>
                    <div className="s-price-tax-info">Including applicable taxes</div>
                </div>
            </div>
        </div>
        <div className="s-customer-input">
            <form id="form-customer-input-mobile">
                <label id="label-customer-phone">
                    <input type="tel" name="phone" placeholder="I'm intrested, call me on this number" pattern="[0-9]{10}" />
                </label>
                <input type="button" value="CALL ME!" />
            </form>
        </div>
    </div>}/>

        </section>
    </>)
} 