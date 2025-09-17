import React from 'react'
import '../style/footer.css'

function Footer() {
  return (
    <footer className="footer">
      {/* Top strip: app download + helpline */}
      <div className="footer__top">
        <div className="footer__top-left">
          <p className="footer__title">DOWNLOAD OUR APP</p>
          <div className="footer__badges">
            <a href="#" aria-label="Get it on Google Play" className="footer__badge google"/>
            <a href="#" aria-label="Download on the App Store" className="footer__badge apple"/>
          </div>
        </div>
        <div className="footer__top-right">
          <p className="footer__help-title">FOR ANY HELP, YOU MAY CALL US AT</p>
          <p className="footer__help-number">1800-266-3333</p>
          <p className="footer__help-time">(Monday to Saturday: 10 am - 10 pm, Sunday: 10 am - 7 pm)</p>
        </div>
      </div>

      {/* Middle quick links */}
      <div className="footer__links">
        <div className="footer__col">
          <h4>WHO ARE WE</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>
        <div className="footer__col">
          <h4>HELP</h4>
          <a href="#">Shipping & Return Policy</a>
          <a href="#">Help Center</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="footer__col">
          <h4></h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Responsible Disclosure</a>
          <a href="#">Sell on Nykaa Fashion</a>
        </div>
        <div className="footer__col">
          <h4>QUICKLINKS</h4>
          <a href="#">Offers</a>
          <a href="#">Sitemap</a>
          <a href="#">Style Files</a>
        </div>
        <div className="footer__col">
          <h4>FOLLOW US</h4>
          <div className="footer__socials">
            <a href="#" aria-label="Instagram" className="social ig"/>
            <a href="#" aria-label="Facebook" className="social fb"/>
          </div>
        </div>
      </div>

      {/* Category mega list */}
      <div className="footer__mega">
        <div className="footer__mega-col">
          <h5>WOMEN</h5>
          <a href="#">Women's Indianwear</a>
          <a href="#">Women's Westernwear</a>
          <a href="#">Bags</a>
          <a href="#">Women's Footwear</a>
          <a href="#">Women's Jewellery</a>
          <a href="#">Lingerie</a>
          <a href="#">Women's Sportswear</a>
          <a href="#">Women's Sleep & lounge</a>
          <a href="#">Women's Watches</a>
          <a href="#">Fashion Accessories</a>
        </div>
        <div className="footer__mega-col">
          <h5>MEN</h5>
          <a href="#">Topwear</a>
          <a href="#">Bottomwear</a>
          <a href="#">Ethnicwear</a>
          <a href="#">Men's Footwear</a>
          <a href="#">Men's Accessories</a>
          <a href="#">Innerwear & Sleepwear</a>
          <a href="#">Men's Watches</a>
          <a href="#">Bags & Backpacks</a>
          <a href="#">Athleisure</a>
          <a href="#">Sports & Fitness</a>
        </div>
        <div className="footer__mega-col">
          <h5>KIDS</h5>
          <a href="#">Kids Indianwear</a>
          <a href="#">Kids Westernwear</a>
          <a href="#">Kids Footwear</a>
          <a href="#">Kids Jewellery</a>
          <a href="#">Feeding</a>
          <a href="#">Kids Sportswear</a>
          <a href="#">Kids Sleepwear</a>
          <a href="#">Kids Accessories</a>
          <a href="#">Toys & Games</a>
          <a href="#">Innerwear</a>
        </div>
        <div className="footer__mega-col">
          <h5>LUXE</h5>
          <a href="#">Luxury Ethnic Wear</a>
          <a href="#">Luxury Westernwear</a>
          <a href="#">Luxury Footwear</a>
          <a href="#">Luxury Bags</a>
          <a href="#">Luxury Accessories</a>
          <a href="#">Luxury Watches</a>
          <a href="#">Luxury Home</a>
          <a href="#">Luxury Jewellery</a>
          <a href="#">Summer Collection</a>
          <a href="#">Luxury Dresses</a>
        </div>
        <div className="footer__mega-col">
          <h5>TOP BRANDS</h5>
          <a href="#">Puma</a>
          <a href="#">Vero Moda</a>
          <a href="#">W</a>
          <a href="#">Biba</a>
          <a href="#">Forever New</a>
          <a href="#">Skechers</a>
          <a href="#">Fablestreet</a>
          <a href="#">Only</a>
          <a href="#">Autumnlane</a>
          <a href="#">Accessorize London</a>
        </div>
        <div className="footer__mega-col">
          <h5>HOUSE OF NYKAA</h5>
          <a href="#">Twenty Dresses By Nykaa Fashion</a>
          <a href="#">Nykd by Nykaa</a>
          <a href="#">RSVP by Nykaa Fashion</a>
          <a href="#">Gajra Gang by Nykaa Fashion</a>
          <a href="#">Likha by Nykaa Fashion</a>
          <a href="#">Mixt by Nykaa Fashion</a>
          <a href="#">IYKYK</a>
          <a href="#">Kica</a>
          <a href="#">Pipa Bella By Nykaa Fashion</a>
          <a href="#">Azai by Nykaa Fashion</a>
          <a href="#">Twig & Twine</a>
          <a href="#">Gloot</a>
          <a href="#">Nyri</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>© 2025 Nykaa Fashion Ltd. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer


