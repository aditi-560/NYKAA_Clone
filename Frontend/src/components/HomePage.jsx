import React from 'react';
import '../style/HomePage.css';
import HeroImage from '../assets/Hero.png';
import BelowImage from '../assets/below.png';
import WomenImage from '../assets/women.png';
import ExImage from '../assets/ex.png';
import ExclusiveImage from '../assets/exclusive.png';
import GirlImage from '../assets/girl.png';
import BrandsImage from '../assets/brands.png';
import BgImage from '../assets/bg.png';
import PageImage from '../assets/page.png';
import FooterImage from '../assets/footer.png';

const HomePage = () => {
  // Category data - using below.png as placeholder for each category
  const categories = [
    { name: 'Westernwear', image: BelowImage },
    { name: 'Indianwear', image: BelowImage },
    { name: 'Men', image: BelowImage },
    { name: 'Kids', image: BelowImage },
    { name: 'Home', image: BelowImage },
    { name: 'Footwear', image: BelowImage },
    { name: 'Lingerie', image: BelowImage },
    { name: 'Sports & Active', image: BelowImage },
    { name: 'Bags', image: BelowImage },
    { name: 'Jewelry', image: BelowImage }
  ];

  // Top brands data
  const topBrands = [
    { 
      name: 'Libas', 
      image: WomenImage,
      discount: 'Min 40%-70% off',
      extraOffer: 'Extra 10% off*'
    },
    { 
      name: 'FOREVER NEW', 
      image: WomenImage,
      discount: 'Min 30% off',
      extraOffer: 'Extra 10% off*'
    },
    { 
      name: 'PUMA', 
      image: WomenImage,
      discount: 'Min 50% off',
      extraOffer: ''
    },
    { 
      name: 'Soch', 
      image: WomenImage,
      discount: 'Up to 50% off',
      extraOffer: 'Extra 10% off*'
    },
    { 
      name: 'CIDER', 
      image: WomenImage,
      discount: 'Up to 70% off',
      extraOffer: ''
    }
  ];

  // Trending categories data
  const trendingCategories = [
    {
      name: 'Pants & Trousers',
      image: ExImage,
      discount: 'Min 40% off'
    },
    {
      name: 'Alluring Anarkalis',
      image: ExImage,
      discount: 'Min 40% off'
    },
    {
      name: 'Stunning Shararas',
      image: ExImage,
      discount: 'Up to 70% off'
    },
    {
      name: 'Jewellery Sets',
      image: ExImage,
      discount: 'Min 50% off'
    },
    {
      name: 'Fusion Sets',
      image: ExImage,
      discount: 'Up to 65% off'
    }
  ];

  // Second trending categories data
  const secondTrendingCategories = [
    {
      name: 'Mini Dresses',
      image: ExImage,
      discount: 'Min 45% off'
    },
    {
      name: 'Metallic Watches',
      image: ExImage,
      discount: 'Up to 60% off'
    },
    {
      name: 'Festive Bedding',
      image: ExImage,
      discount: 'Up to 60% off'
    },
    {
      name: 'Sling Bags',
      image: ExImage,
      discount: 'Min 40% off'
    },
    {
      name: 'Casual Shirts',
      image: ExImage,
      discount: 'Min 50% off'
    }
  ];

  // Brand showcase data
  const brandShowcase = [
    {
      title: 'GLOBAL STORE',
      description: 'Your one-stop shop for the latest trends from labels, around the world',
      image: BrandsImage,
      cta: 'Explore Global Store',
      bgColor: '#B85450' // Burgundy/wine color
    },
    {
      title: 'HOUSE OF NYKAA FASHION',
      description: 'Explore the latest collections from our most loved in house labels',
      image: BrandsImage,
      cta: 'Explore House of Nykaa',
      bgColor: '#B85450' // Burgundy/wine color
    },
    {
      title: 'REVOLVE',
      description: 'Shop classic neutrals from 700+ celebrity approved brands',
      image: BrandsImage,
      cta: 'Explore Revolve',
      bgColor: '#2C2C2C' // Dark gray/black
    }
  ];

  // Hottest brands data
  const hottestBrands = [
    {
      name: 'FOREVER NEW',
      image: GirlImage,
      discount: 'Up to 50% off',
      description: 'Stylish & elegant dresses'
    },
    {
      name: 'TWENTY DRESSES',
      image: GirlImage,
      discount: 'Up to 70% off',
      description: 'Chic dresses & tops'
    },
    {
      name: 'Libas',
      image: GirlImage,
      discount: 'Min 30% off',
      description: 'Stylish ethnicwear'
    },
    {
      name: 'PUMA',
      image: GirlImage,
      discount: 'Min 40% off',
      description: 'Bestselling activewear'
    },
    {
      name: 'CIDER',
      image: GirlImage,
      discount: 'Up to 60% off',
      description: 'Trendiest global styles'
    }
  ];

  // Horizontal brand showcase data
  const horizontalBrands = [
    {
      name: 'AutumnLane',
      image: BrandsImage,
      discount: 'Up to 25% off',
      description: 'Chic printed co-ords'
    },
    {
      name: 'U.S. POLO ASSN.',
      image: BrandsImage,
      discount: 'Up to 50% off',
      description: 'Comfort-first styles'
    },
    {
      name: 'The Souled Store',
      image: BrandsImage,
      discount: 'Min 30% off',
      description: 'Cool casuals'
    },
    {
      name: 'Libas',
      image: BrandsImage,
      discount: 'Min 50% off',
      description: 'Cute ethnics & casuals'
    },
    {
      name: 'PURE',
      image: BrandsImage,
      discount: 'Up to 30% off',
      description: 'Aesthetic home decor'
    }
  ];

  // Hidden Gems categories data
  const hiddenGemsCategories = [
    {
      name: 'Chanderi Shine',
      image: BgImage
    },
    {
      name: 'Insta loved',
      image: BgImage
    },
    {
      name: 'Party Ready',
      image: BgImage
    },
    {
      name: 'Daily Coords',
      image: BgImage
    }
  ];

  // Our Stores data
  const ourStores = [
    {
      name: 'Women',
      image: PageImage
    },
    {
      name: 'Men',
      image: PageImage
    },
    {
      name: 'Kids',
      image: PageImage
    },
    {
      name: 'Home',
      image: PageImage
    },
    {
      name: 'Luxe Edit',
      image: PageImage
    },
    {
      name: 'Hidden Gems',
      image: PageImage
    },
    {
      name: 'Global Store',
      image: PageImage
    },
    {
      name: 'Revolve',
      image: PageImage
    },
    {
      name: 'House of Nykaa',
      image: PageImage
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Banner Section */}
      <div className="hero-section">
        <img src={HeroImage} alt="Nykaa Fashion Grand Festive Sale" className="hero-image" />
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <div className="categories-container">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-image-container">
                <img src={category.image} alt={category.name} className="category-image" />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
          {/* Navigation arrow */}
          <div className="category-nav-arrow">
            <span>›</span>
          </div>
        </div>
      </div>

      {/* Top Brands Section */}
      <div className="top-brands-section">
        <div className="section-header">
          <p className="section-subtitle">STELLAR STEALS ON</p>
          <h2 className="section-title">Top Brands</h2>
        </div>
        <div className="brands-container">
          {topBrands.map((brand, index) => (
            <div key={index} className="brand-card">
              <div className="brand-image-container">
                <img src={brand.image} alt={brand.name} className="brand-image" />
                <div className="brand-overlay">
                  <h3 className="brand-name">{brand.name}</h3>
                </div>
              </div>
              <div className="brand-info">
                <p className="brand-discount">{brand.discount}</p>
                {brand.extraOffer && <p className="brand-extra-offer">{brand.extraOffer}</p>}
              </div>
            </div>
          ))}
          {/* Navigation arrow */}
          <div className="brands-nav-arrow">
            <span>›</span>
          </div>
        </div>
      </div>

      {/* Trending Categories Section */}
      <div className="trending-section">
        <div className="section-header">
          <p className="section-subtitle">TRENDING NOW</p>
          <h2 className="section-title">Top categories on offer</h2>
        </div>
        <div className="trending-container">
          {trendingCategories.map((category, index) => (
            <div key={index} className="trending-card">
              <div className="trending-image-container">
                <img src={category.image} alt={category.name} className="trending-image" />
                <div className="trending-overlay">
                  <div className="trending-label">
                    <span className="trending-name">{category.name}</span>
                  </div>
                </div>
              </div>
              <div className="trending-info">
                <p className="trending-discount">{category.discount}</p>
              </div>
            </div>
          ))}
          {/* Navigation arrow */}
          <div className="trending-nav-arrow">
            <span>›</span>
          </div>
        </div>
      </div>

      {/* Second Trending Categories Section */}
      <div className="trending-section second-trending">
        <div className="trending-container">
          {secondTrendingCategories.map((category, index) => (
            <div key={index} className="trending-card">
              <div className="trending-image-container">
                <img src={category.image} alt={category.name} className="trending-image" />
                <div className="trending-overlay">
                  <div className="trending-label">
                    <span className="trending-name">{category.name}</span>
                  </div>
                </div>
              </div>
              <div className="trending-info">
                <p className="trending-discount">{category.discount}</p>
              </div>
            </div>
          ))}
          {/* Navigation arrow */}
          <div className="trending-nav-arrow">
            <span>›</span>
          </div>
        </div>
      </div>

      {/* Brand Showcase Section */}
      <div className="brand-showcase-section">
        <div className="brand-showcase-container">
          {brandShowcase.map((brand, index) => (
            <div key={index} className="brand-showcase-card" style={{backgroundColor: brand.bgColor}}>
              <div className="brand-showcase-content">
                <h2 className="brand-showcase-title">{brand.title}</h2>
                <p className="brand-showcase-description">{brand.description}</p>
                <button className="brand-showcase-cta">
                  {brand.cta} <span className="cta-arrow">→</span>
                </button>
              </div>
              <div className="brand-showcase-image">
                <img src={brand.image} alt={brand.title} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exclusive Section */}
      <div className="exclusive-section">
        <img src={ExclusiveImage} alt="Exclusive Offers" className="exclusive-image" />
      </div>

      {/* Hottest Brands Section */}
      <div className="hottest-brands-section">
        <div className="section-header">
          <p className="section-subtitle">IN THE SPOTLIGHT</p>
          <h2 className="section-title">Hottest brands on offer</h2>
        </div>
        <div className="hottest-brands-container">
          {hottestBrands.map((brand, index) => (
            <div key={index} className="hottest-brand-card">
              <div className="hottest-brand-image-container">
                <img src={brand.image} alt={brand.name} className="hottest-brand-image" />
                <div className="hottest-brand-overlay">
                  <h3 className="hottest-brand-name">{brand.name}</h3>
                </div>
              </div>
              <div className="hottest-brand-info">
                <p className="hottest-brand-discount">{brand.discount}</p>
                <p className="hottest-brand-description">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Brand Showcase Section */}
      <div className="horizontal-brands-section">
        <div className="horizontal-brands-container">
          {horizontalBrands.map((brand, index) => (
            <div key={index} className="horizontal-brand-card">
              <div className="horizontal-brand-image-container">
                <img src={brand.image} alt={brand.name} className="horizontal-brand-image" />
                <div className="horizontal-brand-overlay">
                  <h3 className="horizontal-brand-name">{brand.name}</h3>
                </div>
              </div>
              <div className="horizontal-brand-info">
                <p className="horizontal-brand-discount">{brand.discount}</p>
                <p className="horizontal-brand-description">{brand.description}</p>
              </div>
            </div>
          ))}
          {/* Navigation arrow */}
          <div className="horizontal-brands-nav-arrow">
            <span>›</span>
          </div>
        </div>
      </div>

      {/* Hidden Gems Section */}
      <div className="hidden-gems-section">
        <img src={BgImage} alt="Hidden Gems" className="hidden-gems-image" />
      </div>

      {/* Our Stores Section */}
      <div className="our-stores-section">
        <div className="section-header">
          <p className="section-subtitle">OUR STORES</p>
          <h2 className="section-title">Find everything for your every need</h2>
        </div>
        <div className="our-stores-container">
          {ourStores.map((store, index) => (
            <div key={index} className="our-store-card">
              <div className="our-store-image-container">
                <img src={store.image} alt={store.name} className="our-store-image" />
              </div>
              <h3 className="our-store-name">{store.name}</h3>
            </div>
          ))}
          {/* Navigation arrow */}
          <div className="our-stores-nav-arrow">
            <span>›</span>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="disclaimer-section">
        <img src={FooterImage} alt="Nykaa Fashion Security Notice" className="disclaimer-image" />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-container">
          <h1 className="content-main-title">Nykaa Fashion – Online Shopping Website</h1>
          
          <h2 className="content-section-title">GADGETS & TECH ACCESSORIES</h2>
          
          <p className="content-paragraph">
            Your quest for the best gadgets and accessories ends at Nykaa Fashion. While we keep ourselves a step ahead when it comes to fashion, we also bring you the very best from the world of gadgets, tech accessories, and more. After all, they do play a role in uplifting your overall style!
          </p>
          
          <p className="content-paragraph">
            From innovative gadgets and gizmos to tech gear and accessories, discover everything you will ever need to boost your productivity and style.
          </p>
          
          <h3 className="content-subsection-title">Cameras and Accessories</h3>
          
          <p className="content-paragraph">
            If you have a flair for photography, it's about time you get a camera! Check out a range of <a href="#" className="content-link">Cameras and Accessories</a> like tripods and LED rings to take your photography to the next level. You will find tons of options in terms of features, price, and more.
          </p>
          
          <h3 className="content-subsection-title">Smartwatches</h3>
          
          <p className="content-paragraph">
            Think it's time to add those amazing apps and notifications on your wrist? It's time to invest in a Smartwatch! And what better place to find one than on Nykaa Fashion which brings you stylish smartwatches with all the top features. Explore a wide range of offerings from savvy brands like <a href="#" className="content-link">Fossil</a>, Oppo, <a href="#" className="content-link">Fitbit</a>, <a href="#" className="content-link">Pebble</a>, and more. You will also find plenty of options in Sports Watches, <a href="#" className="content-link">Fitness Trackers</a>, Dress Watches, and more.
          </p>
          
          <h3 className="content-subsection-title">Smartphone Cases & Covers</h3>
          
          <p className="content-paragraph">
            At Nykaa Fashion, you will always find plenty of <a href="#" className="content-link">Cases and Covers</a> to keep your smartphone safe, stylish or both. They are available in various styles and materials ranging from Metal, Leather, Rubber, Plastic, Glass, and more. Apart from mobile cases, you will find <a href="#" className="content-link">Laptops Covers</a>, Tablet Covers, Headphone Covers, Watch Bands, and more. Get these from top brands like Apple, Samsung, and OnePlus, Realme, other popular names such as <a href="#" className="content-link">Chumbak</a>, <a href="#" className="content-link">Macmerise</a>, Na-Kd, and <a href="#" className="content-link">Myyn</a>.
          </p>
          
          <h3 className="content-subsection-title">Speakers</h3>
          
          <p className="content-paragraph">
            If you are still on the lookout for the perfect <a href="#" className="content-link">Speakers</a> that suit your audiophile needs and fit your budget, you are guaranteed to find them at Nykaa Fashion. From global brands like JBL and Amazon to top Indian players such as <a href="#" className="content-link">Boat</a>, <a href="#" className="content-link">Portronics</a>, and <a href="#" className="content-link">Fingers</a>, there's a wide range of brands to choose from - be it for home media systems or your car.
          </p>
          
          <h3 className="content-subsection-title">Headphones</h3>
          
          <p className="content-paragraph">
            If you're bored of your old headphones and planning to buy one that truly rocks, look no further! At Nykaa Fashion, you will find almost every type of <a href="#" className="content-link">Headphone</a> for your needs. Available in various designs, sizes, and connectivity types, find <a href="#" className="content-link">Bluetooth Headphones</a>, <a href="#" className="content-link">True Wireless Headphones</a>, Wireless on Ear Headphones, Wireless Over the Ear Headphones, and more from popular brands like <a href="#" className="content-link">Boult Audio</a>, <a href="#" className="content-link">Skullcandy</a>, JBL, Boat, and <a href="#" className="content-link">Hammer</a>, among others.
          </p>
          
          <h3 className="content-subsection-title">Power Banks And Chargers</h3>
          
          <p className="content-paragraph">
            Keep your smartphones, tablets and other media devices always topped up with the best Chargers and power banks. At Nykaa Fashion, you will find multi-functional chargers with various connectivity options like USB, Firewire, Wireless, USB-C, and Wi-Fi from top brands.
          </p>
          
          <p className="content-paragraph">
            If you have the perfect charger at home, you might need a power bank for when you're on the go. Choose from a range of options for your smartphone, tablet, Mp3 player or digital camera with capacity going up from 5000mAh to 32000mAh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
