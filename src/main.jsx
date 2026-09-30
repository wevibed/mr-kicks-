import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBag,
  Menu,
  X
} from "lucide-react";
import "./styles.css";

const WA = "263719387912";
const wa = (message) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

const products = [{"src": "/images/product-01.webp", "name": "Mr Kicks Look 01", "alt": "Mr Kicks footwear look 01"}, {"src": "/images/product-02.webp", "name": "Mr Kicks Look 02", "alt": "Mr Kicks footwear look 02"}, {"src": "/images/product-03.webp", "name": "Mr Kicks Look 03", "alt": "Mr Kicks footwear look 03"}, {"src": "/images/product-04.webp", "name": "Mr Kicks Look 04", "alt": "Mr Kicks footwear look 04"}, {"src": "/images/product-05.webp", "name": "Mr Kicks Look 05", "alt": "Mr Kicks footwear look 05"}, {"src": "/images/product-06.webp", "name": "Mr Kicks Look 06", "alt": "Mr Kicks footwear look 06"}, {"src": "/images/product-07.webp", "name": "Mr Kicks Look 07", "alt": "Mr Kicks footwear look 07"}, {"src": "/images/product-08.webp", "name": "Mr Kicks Look 08", "alt": "Mr Kicks footwear look 08"}, {"src": "/images/product-09.webp", "name": "Mr Kicks Look 09", "alt": "Mr Kicks footwear look 09"}, {"src": "/images/product-10.webp", "name": "Mr Kicks Look 10", "alt": "Mr Kicks footwear look 10"}, {"src": "/images/product-11.webp", "name": "Mr Kicks Look 11", "alt": "Mr Kicks footwear look 11"}, {"src": "/images/product-12.webp", "name": "Mr Kicks Look 12", "alt": "Mr Kicks footwear look 12"}];

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="site">
      <div className="topbar">
        <span>FOOTWEAR FOR EVERY STEP</span>
        <span>HARARE · ZIMBABWE</span>
      </div>

      <header className="nav">
        <a className="brand" href="#home">
          <strong>MR KICKS</strong>
          <small>HARARE</small>
        </a>

        <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#collection" onClick={() => setOpen(false)}>Collection</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a className="nav-cta" href={wa("Hello Mr Kicks, I would like to enquire about your footwear.")}>
            Shop on WhatsApp <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="eyebrow">MR KICKS · HARARE</div>
            <h1>STEP INTO<br /><em>YOUR STYLE.</em></h1>
            <p>Footwear for adults and children.</p>
            <div className="hero-location">
              <MapPin size={15} />
              Midtown Mall, Shop 8H
            </div>
            <a className="hero-btn" href="#collection">
              EXPLORE THE COLLECTION <ArrowRight size={16} />
            </a>
          </div>

          <div className="hero-visual">
            {products[0] && (
              <img src={products[0].src} alt={products[0].alt} fetchPriority="high" />
            )}
          </div>
        </section>

        <section id="about" className="intro">
          <div>
            <div className="eyebrow">MR KICKS</div>
            <h2>Find your next<br /><em>favourite pair.</em></h2>
          </div>
          <div className="intro-copy">
            <p>
              Explore the latest footwear from Mr Kicks, serving Harare
              with shoes for adults and children.
            </p>
            <a href={wa("Hello Mr Kicks, I would like to see what footwear is currently available.")}>
              Ask about availability <ArrowRight size={15} />
            </a>
          </div>
        </section>

        <section id="collection" className="collection">
          <div className="section-head">
            <div>
              <div className="eyebrow">SELECTED FOOTWEAR</div>
              <h2>THE<br /><em>COLLECTION.</em></h2>
            </div>
            <p>Browse selected products from the supplied Mr Kicks collection.</p>
          </div>

          <div className="gallery">
            {products.map((product, i) => (
              <a
                className={`product ${i === 0 ? "featured" : ""}`}
                key={product.src}
                href={wa(`Hello Mr Kicks, I am interested in this footwear: ${product.name}. Is it available?`)}
              >
                <div className="product-image">
                  <img
                    src={product.src}
                    alt={product.alt}
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <span className="product-tag">ENQUIRE</span>
                </div>
                <div className="product-meta">
                  <span>{product.name}</span>
                  <ArrowRight size={15} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="cta">
          <div className="eyebrow">VISIT MR KICKS</div>
          <h2>Ready to find<br /><em>your pair?</em></h2>
          <p>Visit the store at Midtown Mall or message Mr Kicks on WhatsApp.</p>
          <a className="dark-btn" href={wa("Hello Mr Kicks, I would like to enquire about your current footwear collection.")}>
            WHATSAPP MR KICKS <MessageCircle size={16} />
          </a>
        </section>

        <section id="contact" className="contact">
          <div>
            <div className="eyebrow">CONTACT</div>
            <h2>Come<br /><em>see us.</em></h2>
          </div>

          <div className="contact-grid">
            <a href={wa("Hello Mr Kicks, I would like to enquire about your footwear.")}>
              <MessageCircle size={20} />
              <span>WhatsApp<br /><strong>071 938 7912</strong></span>
            </a>

            <a href="tel:+263719387912">
              <Phone size={20} />
              <span>Call<br /><strong>071 938 7912</strong></span>
            </a>

            <div>
              <MapPin size={20} />
              <span>Midtown Mall, Shop 8H<br /><strong>Corner Inez Terrace & Speke, Harare</strong></span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">MR KICKS</div>
        <div>Footwear for adults & children · Harare</div>
        <div>© 2026 Mr Kicks</div>
      </footer>

      <a
        className="whatsapp-float"
        href={wa("Hello Mr Kicks, I would like to enquire about your footwear.")}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Mr Kicks"
      >
        <MessageCircle size={27} />
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
