import React, { useState } from 'react';
import './App.css';
import './Shop.css';
import { 
  Sparkles, 
  Gem, 
  ShieldCheck, 
  Award, 
  ChevronRight, 
  Menu, 
  X, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Search,
  Check,
  Eye
} from 'lucide-react';

const productsData = [
  {
    id: 1,
    title: 'The Solitaire Eternity',
    category: 'Ringe',
    desc: 'Handgefertigte Platin-Fassung mit einem makellosen Brillanten im Idealschliff für maximale Lichtbrechung.',
    longDesc: 'Der Inbegriff der wahren Liebe: Meisterhaft gefasst in 950er Platin thront ein nach GIA-Kriterien selektierter Solitär-Brillant (1.20 ct, D-Color, VVS1). Perfekte Proportionen fangen jeden Lichtstrahl ein und reflektieren ein beispielloses Feuer.',
    price: 4850,
    tag: 'Bestseller',
    carat: '1.20 ct',
    clarity: 'VVS1 Flawless',
    material: 'Platin 950',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Royal Marquise Cascade',
    category: 'Colliers',
    desc: 'Ein Collier von royaler Anmut – kunstvoll gefasste Diamanten im Navette-Schliff, die zeitlose Exklusivität verkörpern.',
    longDesc: 'Eine Symphonie königlicher Juwelenkunst. Feinst geschliffene Diamanten im Marquise- und Brillantschliff schmiegen sich fließend um das Dekolleté. Gefertigt aus 18k Weißgold mit einem Gesamtgewicht von über 3.50 Karat.',
    price: 12400,
    tag: 'Unikat',
    carat: '3.50 ct Gesamtwert',
    clarity: 'VVS2 / Top Wesselton',
    material: '18K Weißgold',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Aurum Pavé Symphony',
    category: 'Ohrringe',
    desc: '18 Karat Feingold umrahmt von Hunderten mikroskopisch präzise gefassten Diamanten im Pavé-Stil.',
    longDesc: 'Luxus für jeden Tag und festliche Galas. Über 120 handgefasste Mikro-Brillanten zieren die geschwungenen Ohrhänger und erzeugen bei jeder Bewegung ein atemberaubendes Funkeln.',
    price: 3200,
    tag: 'Signature',
    carat: '0.85 ct',
    clarity: 'VS1',
    material: '18K Gelbgold',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Vallter Celestial Bangle',
    category: 'Armbänder',
    desc: 'Zeitgenössische Eleganz trifft höchste Goldschmiedekunst mit fließenden goldenen Reflexen.',
    longDesc: 'Der geschmeidige Celestial Armreif umarmt das Handgelenk mit samtig poliertem 18K Gelbgold und einem dezent versetzten Kanal aus feinsten lupenreinen Brillanten. Ein Meisterwerk zurückhaltender Kraft.',
    price: 6100,
    tag: 'Neuheit',
    carat: '1.45 ct',
    clarity: 'VVS1',
    material: '18K Gelbgold',
    image: 'https://images.unsplash.com/photo-1611591475819-79b8b73ff2f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Emerald Cut Grace Ring',
    category: 'Ringe',
    desc: 'Architektonische Perfektion: Smaragdschliff-Diamant auf einem zarten Pavé-Band.',
    longDesc: 'Klassische Art-Déco Raffinesse für Liebhaber von purer Geometrie. Ein 1.50 ct Diamant im Treppenschliff gewährt einen faszinierenden Blick in das reine Herz des Edelsteins.',
    price: 8900,
    tag: 'Highlight',
    carat: '1.50 ct',
    clarity: 'IF (Internally Flawless)',
    material: '18K Roségold',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Nocturne Diamond Pendant',
    category: 'Colliers',
    desc: 'Ein markanter Anhänger mit einem Tropfendiamanten von unvergleichlicher Klarheit.',
    longDesc: 'Gefasst in minimalistischem Platin lässt dieser birnenförmige Tropfen-Brillant das Licht ungehindert zirkulieren. Beigefügt an einer hochglänzenden feinen Ankerkette.',
    price: 5400,
    tag: 'Bestseller',
    carat: '1.10 ct',
    clarity: 'VVS2',
    material: 'Platin 950',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
  }
];

const pillars = [
  {
    icon: <Gem size={32} />,
    title: 'Konfliktfreie Brillanz',
    desc: 'Ausschließlich ethisch zertifizierte Natur- und Labor-Diamanten höchster Reinheits- und Farbklassen nach dem Kimberley-Prozess.'
  },
  {
    icon: <Award size={32} />,
    title: 'Meister-Goldschmiede',
    desc: 'Jedes Schmuckstück entsteht in präziser Handwerkskunst mit größter Hingabe für Details und unübertroffene Langlebigkeit.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'GIA & IGI Zertifiziert',
    desc: 'Vollständige Transparenz und verifizierte Wertgutachten durch international anerkannte gemmologische Institute.'
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Maßanfertigung & Atelier',
    desc: 'Verwirklichen Sie Ihre ganz persönlichen Träume mit unserem Atelier – von der 3D-Skizze bis zum vollendeten Meisterwerk.'
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // E-Commerce & Shop States
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Cart Functions
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalItemsCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCart([]);
      setCheckoutSuccess(false);
      setCartOpen(false);
    }, 3500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
  };

  // Filter products by category & search
  const filteredProducts = productsData.filter((product) => {
    const matchesCat = activeCategory === 'Alle' || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#" className="nav-brand">
          <img src="/vallter-diamonds-logo.jpg" alt="Vallter Diamonds Logo" className="nav-logo-img" />
          <div>
            <span className="nav-brand-text">VALLTER</span>
            <span className="nav-brand-sub">DIAMONDS</span>
          </div>
        </a>

        <div className={`nav-links ${menuOpen ? 'mobile-nav-active' : ''}`}>
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop & Kollektionen</a>
          <a href="#philosophie" onClick={() => setMenuOpen(false)}>Philosophie</a>
          <a href="#atelier" onClick={() => setMenuOpen(false)}>Das Atelier</a>
          <a href="#beratung" onClick={() => setMenuOpen(false)}>Privatberatung</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            className="cart-nav-btn" 
            onClick={() => setCartOpen(true)}
            aria-label="Warenkorb ansehen"
          >
            <ShoppingBag size={20} />
            {totalItemsCount > 0 && <span className="cart-badge-count">{totalItemsCount}</span>}
          </button>

          <a href="#beratung" className="nav-cta">Termin buchen</a>

          <button 
            className="mobile-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg-glow"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} /> Haute Joaillerie & Diamantenmanufaktur
          </div>
          
          <div className="hero-emblem-card">
            <img 
              src="/vallter-diamonds-logo.jpg" 
              alt="Vallter Diamonds Emblem" 
              className="hero-logo-img"
            />
          </div>

          <h1 className="hero-title">
            <span className="blue-text">VALLTER DIAMONDS</span>
          </h1>
          <p className="hero-subtitle">A BRIGHTER FOREVER</p>

          <p className="hero-desc">
            Erleben Sie zeitlose Eleganz, makellose Edelsteine und kompromisslose Goldschmiedekunst. 
            Wählen Sie Ihr Unikat aus unserer Boutique oder vereinbaren Sie eine Privatkonsultation.
          </p>

          <div className="hero-actions">
            <a href="#shop" className="btn-primary">
              Jetzt Shoppen <ChevronRight size={16} />
            </a>
            <a href="#atelier" className="btn-secondary">
              Unser Atelier
            </a>
          </div>
        </div>
      </header>

      {/* Boutique & Online Shop Section */}
      <section id="shop" className="section" style={{ background: '#090a0e' }}>
        <div className="section-header">
          <span className="section-tag">Haute Horlogerie & Schmuck-Boutique</span>
          <h2 className="section-title">Online Boutique & Kollektionen</h2>
          <p className="section-desc">
            Klicken Sie auf ein Schmuckstück für detaillierte Spezifikationen und legen Sie Ihre Favoriten direkt in den Warenkorb.
          </p>
        </div>

        {/* Shop Controls: Search & Category Filter */}
        <div className="shop-controls">
          <div className="shop-search-bar">
            <Search size={20} color="var(--gold-primary)" />
            <input 
              type="text" 
              placeholder="Schmuckstücke suchen (z.B. Solitaire, Platin, Ohrringe)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <X 
                size={18} 
                style={{ cursor: 'pointer', color: 'var(--text-muted)' }} 
                onClick={() => setSearchQuery('')} 
              />
            )}
          </div>

          <div className="category-pills">
            {['Alle', 'Ringe', 'Colliers', 'Ohrringe', 'Armbänder'].map((cat) => (
              <button
                key={cat}
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="collection-grid">
          {filteredProducts.map((item) => (
            <div 
              key={item.id} 
              className="collection-card"
              onClick={() => setSelectedProduct(item)}
            >
              <div className="card-img-wrap">
                <img src={item.image} alt={item.title} />
                <span className="card-badge">{item.tag}</span>
              </div>
              <div className="card-body">
                <span className="card-category">{item.category} • {item.material}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                <div className="card-footer">
                  <span className="card-price">€ {item.price.toLocaleString('de-DE')}</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      className="card-action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(item);
                      }}
                    >
                      <Eye size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                      Details
                    </button>
                    <button 
                      className="btn-add-cart"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                      }}
                    >
                      <ShoppingBag size={14} /> Kaufen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>
              <X size={20} />
            </button>
            <div className="modal-grid">
              <div className="modal-img-wrap">
                <img src={selectedProduct.image} alt={selectedProduct.title} />
              </div>
              <div className="modal-details">
                <span className="modal-category">{selectedProduct.category}</span>
                <h2 className="modal-title">{selectedProduct.title}</h2>
                <div className="modal-price">€ {selectedProduct.price.toLocaleString('de-DE')}</div>
                <p className="modal-desc">{selectedProduct.longDesc}</p>

                <div className="modal-specs">
                  <div className="spec-row">
                    <span>Edelmetall:</span>
                    <span>{selectedProduct.material}</span>
                  </div>
                  <div className="spec-row">
                    <span>Karatgewicht:</span>
                    <span>{selectedProduct.carat}</span>
                  </div>
                  <div className="spec-row">
                    <span>Reinheitsgrad:</span>
                    <span>{selectedProduct.clarity}</span>
                  </div>
                  <div className="spec-row">
                    <span>Zertifikat:</span>
                    <span>GIA / IGI Inklusive</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', marginTop: 'auto' }}>
                  <button 
                    className="btn-primary" 
                    style={{ flexGrow: 1, justifyContent: 'center' }}
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                  >
                    <ShoppingBag size={16} /> In den Warenkorb
                  </button>
                  <a 
                    href="#beratung" 
                    className="btn-secondary"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Konsultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Drawer */}
      {cartOpen && (
        <div className="cart-drawer-overlay" onClick={() => setCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-header">
              <h3 className="cart-drawer-title">
                <ShoppingBag size={22} color="var(--gold-primary)" /> Ihr Warenkorb ({totalItemsCount})
              </h3>
              <button 
                onClick={() => setCartOpen(false)}
                style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <X size={22} />
              </button>
            </div>

            <div className="cart-items-list">
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '50px 20px', color: 'var(--text-muted)' }}>
                  <ShoppingBag size={48} color="rgba(212,175,55,0.3)" style={{ marginBottom: '16px' }} />
                  <p>Ihr Warenkorb ist derzeit leer.</p>
                  <button 
                    className="btn-secondary" 
                    style={{ marginTop: '20px' }}
                    onClick={() => setCartOpen(false)}
                  >
                    Kollektionen erkunden
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} className="cart-item-img" />
                    <div className="cart-item-info">
                      <h4 className="cart-item-title">{item.title}</h4>
                      <div className="cart-item-price">€ {(item.price * item.qty).toLocaleString('de-DE')}</div>
                      <div className="cart-qty-control">
                        <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.qty}</span>
                        <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <button 
                      className="cart-remove-btn" 
                      onClick={() => removeFromCart(item.id)}
                      title="Entfernen"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-total-row">
                  <span>Gesamtsumme:</span>
                  <span className="cart-total-val">€ {totalPrice.toLocaleString('de-DE')}</span>
                </div>

                {checkoutSuccess ? (
                  <div style={{ padding: '14px', background: 'rgba(212,175,55,0.2)', border: '1px solid var(--border-gold)', borderRadius: '14px', textAlign: 'center' }}>
                    <Check size={24} color="var(--gold-light)" style={{ margin: '0 auto 6px' }} />
                    <p style={{ color: 'var(--gold-light)', fontWeight: 600, fontSize: '0.9rem' }}>
                      Bestellung erfolgreich platziert! Wir kontaktieren Sie bezüglich versichertem Werttransport.
                    </p>
                  </div>
                ) : (
                  <button className="cart-checkout-btn" onClick={handleCheckout}>
                    Zur Kasse gehen <ChevronRight size={18} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Philosophy / Features Section */}
      <section id="philosophie" className="section">
        <div className="section-header">
          <span className="section-tag">Kompromisslose Perfektion</span>
          <h2 className="section-title">Werte für Generationen</h2>
          <p className="section-desc">
            Bei Vallter Diamonds verbinden wir traditionsreiche europäische Juwelierskunst mit moderner Präzision 
            und höchsten ethischen Maßstäben.
          </p>
        </div>

        <div className="features-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Atelier Story Section */}
      <section id="atelier" className="section atelier-section">
        <div className="atelier-container">
          <div className="atelier-image-col">
            <div className="atelier-main-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&w=1000&q=80" 
                alt="Diamanten Schleiferei und Goldschmied" 
                className="atelier-main-img"
              />
            </div>
            <div className="atelier-logo-overlay">
              <img src="/vallter-diamonds-logo.jpg" alt="Vallter Diamonds Siegel" />
            </div>
          </div>

          <div className="atelier-content">
            <span className="section-tag">Manufaktur & Erbe</span>
            <h2>Goldschmiedekunst in vollendeter Reinform</h2>
            <p>
              In unserem Atelier vereinen sich jahrzehntelange handwerkliche Erfahrung mit modernster mikroskopischer 
              Fasstechnik. Jeder Diamant wird von Hand selektiert, geprüft und harmonisch in edelstes Gold oder Platin gebettet.
            </p>
            <p>
              Wir glauben an Schmuck, der nicht nur funkelt, sondern Geschichten erzählt – Ihre Geschichten. Ein echtes 
              Vallter Diamonds Unikat begleitet Sie ein Leben lang und strahlt für immer hell.
            </p>

            <div className="atelier-stats">
              <div className="stat-item">
                <h3>100%</h3>
                <span>Zertifiziert</span>
              </div>
              <div className="stat-item">
                <h3>0.01mm</h3>
                <span>Fasspräzision</span>
              </div>
              <div className="stat-item">
                <h3>Ewig</h3>
                <span>Garantie & Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation & VIP Booking */}
      <section id="beratung" className="section">
        <div className="consultation-card">
          <span className="section-tag">Persönlicher Service</span>
          <h2 className="section-title">Vereinbaren Sie eine Privatkonsultation</h2>
          <p className="section-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Ob Maßanfertigung nach Ihren Vorstellungen oder die Auswahl eines Verlobungsrings: 
            Unsere Gemmologen und Juwelen-Experten stehen Ihnen diskret und persönlich zur Seite.
          </p>

          {submitted ? (
            <div style={{ marginTop: '30px', padding: '16px', background: 'rgba(0, 145, 255, 0.15)', border: '1px solid var(--border-sapphire)', borderRadius: '12px' }}>
              <p style={{ color: 'var(--sapphire-ice)', fontWeight: 600 }}>
                Vielen Dank! Ihre VIP-Anfrage wurde erfolgreich übermittelt. Wir melden uns umgehend bei Ihnen.
              </p>
            </div>
          ) : (
            <form className="consultation-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse für eine Einladung..." 
                required 
              />
              <button type="submit" className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                Konsultation Anfragen
              </button>
            </form>
          )}

          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <PhoneCall size={16} color="#0088ff" /> Diskrete Telefonberatung
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={16} color="#0088ff" /> Exklusive Showrooms & Virtuell
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={16} color="#0088ff" /> concierge@vallter-diamonds.com
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand-wrap">
            <img src="/vallter-diamonds-logo.jpg" alt="Vallter Diamonds" className="footer-logo-img" />
            <div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>VALLTER DIAMONDS</h4>
              <p style={{ color: 'var(--gold-primary)', fontSize: '0.75rem', letterSpacing: '0.2em' }}>A BRIGHTER FOREVER</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <a href="#shop" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Shop</a>
            <a href="#philosophie" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Philosophie</a>
            <a href="#atelier" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Atelier</a>
            <a href="#beratung" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Privatkonsultation</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vallter Diamonds. Alle Rechte vorbehalten.</p>
          <p style={{ letterSpacing: '0.15em' }}>LUXURY JEWELLERY & FINE DIAMONDS</p>
        </div>
      </footer>
    </div>
  );
}
