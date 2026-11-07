import React, { useState } from 'react';
import './App.css';
import './Shop.css';
import './Investment.css';
import './LanguageAndExpose.css';
import { translations } from './translations';
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
  Eye, 
  TrendingUp, 
  Lock, 
  Building, 
  FileText,
  Download,
  Globe
} from 'lucide-react';

const productsData = [
  {
    id: 1,
    title: {
      de: 'Der Solitär Ewigkeit',
      en: 'The Solitaire Eternity',
      fr: 'Le Solitaire Éternité',
      it: 'Il Solitario Eternità'
    },
    category: 'rings',
    desc: {
      de: 'Handgefertigte Platin-Fassung mit makellosem Brillanten im Idealschliff.',
      en: 'Handcrafted platinum setting with a flawless ideal-cut brilliant.',
      fr: 'Monture en platine forgée main avec brillant taille idéale irréprochable.',
      it: 'Montatura in platino fatta a mano con brillante taglio ideale perfetto.'
    },
    longDesc: {
      de: 'Der Inbegriff der wahren Liebe: Meisterhaft gefasst in 950er Platin thront ein nach GIA-Kriterien ausgewählter Solitär-Brillant (1.20 ct, D-Farbe, VVS1). Perfekte Proportionen fangen jeden Lichtstrahl ein und reflektieren ein beispielloses Feuer.',
      en: 'The epitome of pure love: Masterfully set in 950 platinum with a GIA-certified solitaire diamond (1.20 ct, D-Color, VVS1). Perfect proportions reflect unmatched fire and scintillation.',
      fr: 'L’incarnation de l’amour véritable : sublimé en platine 950 avec un diamant solitaire certifié GIA (1,20 ct, couleur D, VVS1) aux proportions parfaites.',
      it: 'L’espressione dell’amore eterno: incastonato a mano in platino 950 con diamante solitario certificato GIA (1.20 ct, colore D, VVS1).'
    },
    price: 4850,
    tag: 'Bestseller',
    carat: '1.20 ct',
    clarity: 'VVS1',
    material: 'Platin 950',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: {
      de: 'Königliche Kaskade',
      en: 'Royal Marquise Cascade',
      fr: 'Cascade Royale Marquise',
      it: 'Cascata Reale Marquise'
    },
    category: 'necklaces',
    desc: {
      de: 'Ein Prachtstück von königlicher Anmut – kunstvoll gefasste Diamanten im Schiffchenschliff.',
      en: 'A necklace of royal grace – artfully set navette-cut diamonds.',
      fr: 'Un collier de grâce royale – diamants taille navette sertis avec virtuosité.',
      it: 'Un collier regale – diamanti taglio navette incastonati ad arte.'
    },
    longDesc: {
      de: 'Eine Symphonie königlicher Juwelenkunst. Feinst geschliffene Diamanten im Schiffchen- und Brillantschliff schmiegen sich fließend um das Dekolleté. Gefertigt aus 18k Weißgold mit über 3.50 Karat.',
      en: 'A symphony of royal fine jewelry. Exquisitely cut marquise and brilliant diamonds flow gracefully along the neckline in 18k white gold (3.50+ ct total weight).',
      fr: 'Une symphonie de haute joaillerie. Diamants marquise et brillants épousant le décolleté en or blanc 18 carats (3,50+ carats).',
      it: 'Una sinfonia di alta gioielleria. Diamanti marquise e brillanti che abbracciano il décolleté in oro bianco 18 carati.'
    },
    price: 12400,
    tag: 'Einzelstück',
    carat: '3.50 ct',
    clarity: 'VVS2',
    material: '18K Weißgold',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: {
      de: 'Aurum Pavé Symphonie',
      en: 'Aurum Pavé Symphony',
      fr: 'Symphonie Pavée Aurum',
      it: 'Sinfonia Pavé Aurum'
    },
    category: 'earrings',
    desc: {
      de: '18 Karat Feingold umrahmt von Hunderten mikroskopisch präzise gefassten Diamanten im Teppichmuster.',
      en: '18k fine gold set with hundreds of microscopically positioned pavé diamonds.',
      fr: 'Or fin 18 carats serti de centaines de diamants pavés d’une infinie précision.',
      it: 'Oro fine 18 carati impreziosito da centinaia di diamanti pavé microscopici.'
    },
    longDesc: {
      de: 'Luxus für jeden Tag und festliche Bälle. Über 120 handgefasste Mikro-Brillanten zieren die geschwungenen Ohrhänger und erzeugen bei jeder Bewegung ein atemberaubendes Funkeln.',
      en: 'Daily luxury and gala splendour. Over 120 hand-set micro-brilliants adorn these curved earrings for radiant reflections.',
      fr: 'Luxe quotidien et éclat des grands soirs. Plus de 120 micro-brillants montés à la main pour un scintillement captivant.',
      it: 'Lusso quotidiano ed eleganza da gran gala. Oltre 120 micro-brillanti incastonati a mano per un bagliore mozzafiato.'
    },
    price: 3200,
    tag: 'Signatur',
    carat: '0.85 ct',
    clarity: 'VS1',
    material: '18K Gelbgold',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: {
      de: 'Vallter Himmlischer Armreif',
      en: 'Vallter Celestial Bangle',
      fr: 'Jonc Céleste Vallter',
      it: 'Bracciale Rigido Vallter Celeste'
    },
    category: 'bracelets',
    desc: {
      de: 'Zeitgenössische Eleganz trifft höchste Goldschmiedekunst mit fließenden goldenen Reflexen.',
      en: 'Contemporary elegance meets master goldsmithing with fluid golden reflections.',
      fr: 'Élégance contemporaine et art joaillier d’exception aux reflets d’or fluides.',
      it: 'Eleganza contemporanea e maestria orafa con riflessi dorati fluidi.'
    },
    longDesc: {
      de: 'Der geschmeidige Celestial Armreif umarmt das Handgelenk mit samtig poliertem 18K Gelbgold und einem dezent versetzten Kanal aus feinsten lupenreinen Brillanten.',
      en: 'The Celestial bangle wraps the wrist in velvety polished 18k yellow gold and an offset channel of flawless brilliant-cut diamonds.',
      fr: 'Le jonc Céleste enlace le poignet d’or jaune 18 carats délicatement satiné avec canal serti de brillants purs.',
      it: 'Il bracciale Celeste avvolge il polso in oro giallo 18 carati lucidato a specchio con fila di brillanti purissimi.'
    },
    price: 6100,
    tag: 'Neuheit',
    carat: '1.45 ct',
    clarity: 'VVS1',
    material: '18K Gelbgold',
    image: 'https://images.unsplash.com/photo-1611591475819-79b8b73ff2f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: {
      de: 'Smaragdschliff Anmut Ring',
      en: 'Emerald Cut Grace Ring',
      fr: 'Bague Grâce Taille Émeraude',
      it: 'Anello Grazia Taglio Smeraldo'
    },
    category: 'rings',
    desc: {
      de: 'Architektonische Perfektion: Smaragdschliff-Diamant auf einem zarten Pavé-Band.',
      en: 'Architectural perfection: Emerald-cut diamond resting on a refined pavé band.',
      fr: 'Perfection architecturale : diamant taille émeraude sur anneau pavé.',
      it: 'Perfezione architettonica: diamante taglio smeraldo su fascia pavé.'
    },
    longDesc: {
      de: 'Klassische Art-Déco Raffinesse für Liebhaber von purer Geometrie. Ein 1.50 ct Diamant im Treppenschliff gewährt einen faszinierenden Blick in das reine Herz des Edelsteins.',
      en: 'Art-Deco sophistication for lovers of geometric purity. A 1.50 ct step-cut diamond offering a crystalline gaze into the heart of the stone.',
      fr: 'Raffinement Art Déco aux lignes pures. Un diamant taille gradins de 1,50 ct offrant une transparence cristalline.',
      it: 'Raffinatezza Art Déco per gli amanti della geometria pura. Un diamante a gradini da 1.50 ct con trasparenza cristallina.'
    },
    price: 8900,
    tag: 'Highlight',
    carat: '1.50 ct',
    clarity: 'IF (Flawless)',
    material: '18K Roségold',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: {
      de: 'Nachtzauber Diamantanhänger',
      en: 'Nocturne Diamond Pendant',
      fr: 'Pendentif Diamant Nocturne',
      it: 'Pendente Diamante Notturno'
    },
    category: 'necklaces',
    desc: {
      de: 'Ein markanter Anhänger mit einem Tropfendiamanten von unvergleichlicher Klarheit.',
      en: 'A striking pendant holding a pear-shaped diamond of peerless clarity.',
      fr: 'Un pendentif d’exception orné d’un diamant poire d’une limpidité incomparable.',
      it: 'Un ciondolo raffinato con diamante a goccia di straordinaria limpidezza.'
    },
    longDesc: {
      de: 'Gefasst in minimalistischem Platin lässt dieser birnenförmige Tropfen-Brillant das Licht ungehindert zirkulieren. Beigefügt an einer hochglänzenden feinen Ankerkette.',
      en: 'Cradled in platinum to allow maximum ambient light reflection, complemented by a delicate anchor chain.',
      fr: 'Serti en platine épuré pour une réfraction lumineuse totale, monté sur une chaîne forçat miroir.',
      it: 'Incastonato in platino per consentire alla luce di esaltarne la brillantezza, su catena marina fine.'
    },
    price: 5400,
    tag: 'Bestseller',
    carat: '1.10 ct',
    clarity: 'VVS2',
    material: 'Platin 950',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
  }
];

export default function App() {
  const [lang, setLang] = useState('de'); // 'de' | 'en' | 'fr' | 'it'
  const t = translations[lang] || translations.de;

  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // E-Commerce & Shop States
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Expose Modal State
  const [exposeOpen, setExposeOpen] = useState(false);
  const [exposeDownloaded, setExposeDownloaded] = useState(false);

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

  const handleDownloadExpose = () => {
    setExposeDownloaded(true);
    setTimeout(() => setExposeDownloaded(false), 4000);
  };

  // Filter products by category & search
  const filteredProducts = productsData.filter((product) => {
    const matchesCat = activeCategory === 'all' || product.category === activeCategory;
    const titleText = product.title[lang] || product.title.de;
    const descText = product.desc[lang] || product.desc.de;
    const matchesSearch = titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          descText.toLowerCase().includes(searchQuery.toLowerCase());
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
          <a href="#shop" onClick={() => setMenuOpen(false)}>{t.nav.shop}</a>
          <a href="#investments" onClick={() => setMenuOpen(false)}>{t.nav.investments}</a>
          <a href="#philosophie" onClick={() => setMenuOpen(false)}>{t.nav.philosophy}</a>
          <a href="#atelier" onClick={() => setMenuOpen(false)}>{t.nav.atelier}</a>
          <a href="#beratung" onClick={() => setMenuOpen(false)}>{t.nav.consultation}</a>
        </div>

        <div className="nav-actions">
          {/* Multi-Language Switcher */}
          <div className="lang-selector">
            <Globe size={13} color="var(--gold-primary)" style={{ marginLeft: '4px' }} />
            {['de', 'en', 'fr', 'it'].map((l) => (
              <button 
                key={l}
                className={`lang-btn ${lang === l ? 'active' : ''}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button 
            className="cart-nav-btn" 
            onClick={() => setCartOpen(true)}
            aria-label={t.nav.cartTitle}
          >
            <ShoppingBag size={19} />
            {totalItemsCount > 0 && <span className="cart-badge-count">{totalItemsCount}</span>}
          </button>

          <a href="#beratung" className="nav-cta">{t.nav.bookAppointment}</a>

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
            <Sparkles size={14} /> {t.hero.badge}
          </div>
          
          <div className="hero-emblem-card">
            <img 
              src="/vallter-diamonds-logo.jpg" 
              alt="Vallter Diamonds Emblem" 
              className="hero-logo-img"
            />
          </div>

          {/* Video direkt unter dem Logo */}
          <div style={{ maxWidth: '640px', margin: '0 auto 28px', borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--border-gold)', boxShadow: '0 15px 40px rgba(0,0,0,0.7), 0 0 25px rgba(212,175,55,0.2)' }}>
            <video 
              src="/vallter-crafting.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <h1 className="hero-title">
            <span className="gold-text">VALLTER DIAMONDS</span>
          </h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <p className="hero-desc">
            {t.hero.desc}
          </p>

          <div className="hero-actions">
            <a href="#shop" className="btn-primary">
              {t.hero.btnShop} <ChevronRight size={16} />
            </a>
            <a href="#investments" className="btn-secondary">
              <TrendingUp size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
              {t.hero.btnInvest}
            </a>
          </div>
        </div>
      </header>

      {/* Boutique & Online Shop Section */}
      <section id="shop" className="section" style={{ background: '#090a0e' }}>
        <div className="section-header">
          <span className="section-tag">{t.shop.tag}</span>
          <h2 className="section-title">{t.shop.title}</h2>
          <p className="section-desc">{t.shop.desc}</p>
        </div>

        {/* Shop Controls: Search & Category Filter */}
        <div className="shop-controls">
          <div className="shop-search-bar">
            <Search size={20} color="var(--gold-primary)" />
            <input 
              type="text" 
              placeholder={t.shop.searchPlaceholder} 
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
            {[
              { id: 'all', label: t.shop.all },
              { id: 'rings', label: t.shop.rings },
              { id: 'necklaces', label: t.shop.necklaces },
              { id: 'earrings', label: t.shop.earrings },
              { id: 'bracelets', label: t.shop.bracelets }
            ].map((cat) => (
              <button
                key={cat.id}
                className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
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
                <img src={item.image} alt={item.title[lang] || item.title.de} />
                <span className="card-badge">{item.tag}</span>
              </div>
              <div className="card-body">
                <span className="card-category">{item.material}</span>
                <h3 className="card-title">{item.title[lang] || item.title.de}</h3>
                <p className="card-desc">{item.desc[lang] || item.desc.de}</p>
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
                      {t.shop.details}
                    </button>
                    <button 
                      className="btn-add-cart"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                      }}
                    >
                      <ShoppingBag size={14} /> {t.shop.buy}
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
                <img src={selectedProduct.image} alt={selectedProduct.title[lang] || selectedProduct.title.de} />
              </div>
              <div className="modal-details">
                <span className="modal-category">{selectedProduct.material}</span>
                <h2 className="modal-title">{selectedProduct.title[lang] || selectedProduct.title.de}</h2>
                <div className="modal-price">€ {selectedProduct.price.toLocaleString('de-DE')}</div>
                <p className="modal-desc">{selectedProduct.longDesc[lang] || selectedProduct.longDesc.de}</p>

                <div className="modal-specs">
                  <div className="spec-row">
                    <span>{t.shop.specMetal}</span>
                    <span>{selectedProduct.material}</span>
                  </div>
                  <div className="spec-row">
                    <span>{t.shop.specCarat}</span>
                    <span>{selectedProduct.carat}</span>
                  </div>
                  <div className="spec-row">
                    <span>{t.shop.specClarity}</span>
                    <span>{selectedProduct.clarity}</span>
                  </div>
                  <div className="spec-row">
                    <span>{t.shop.specCert}</span>
                    <span>{t.shop.certIncluded}</span>
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
                    <ShoppingBag size={16} /> {t.shop.addToCart}
                  </button>
                  <a 
                    href="#beratung" 
                    className="btn-secondary"
                    onClick={() => setSelectedProduct(null)}
                  >
                    {t.shop.consultation}
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
                <ShoppingBag size={22} color="var(--gold-primary)" /> {t.nav.cartTitle} ({totalItemsCount})
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
                  <p>{t.shop.emptyCart}</p>
                  <button 
                    className="btn-secondary" 
                    style={{ marginTop: '20px' }}
                    onClick={() => setCartOpen(false)}
                  >
                    {t.shop.explore}
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title[lang] || item.title.de} className="cart-item-img" />
                    <div className="cart-item-info">
                      <h4 className="cart-item-title">{item.title[lang] || item.title.de}</h4>
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
                  <span>{t.shop.total}</span>
                  <span className="cart-total-val">€ {totalPrice.toLocaleString('de-DE')}</span>
                </div>

                {checkoutSuccess ? (
                  <div style={{ padding: '14px', background: 'rgba(212,175,55,0.2)', border: '1px solid var(--border-gold)', borderRadius: '14px', textAlign: 'center' }}>
                    <Check size={24} color="var(--gold-light)" style={{ margin: '0 auto 6px' }} />
                    <p style={{ color: 'var(--gold-light)', fontWeight: 600, fontSize: '0.9rem' }}>
                      {t.shop.orderSuccess}
                    </p>
                  </div>
                ) : (
                  <button className="cart-checkout-btn" onClick={handleCheckout}>
                    {t.shop.checkout} <ChevronRight size={18} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Investment Section */}
      <section id="investments" className="investment-section">
        <div className="section-header">
          <span className="section-tag">{t.investments.tag}</span>
          <h2 className="section-title">{t.investments.title}</h2>
          <p className="section-desc">{t.investments.desc}</p>
        </div>

        <div className="investment-grid">
          <div className="investment-card">
            <div className="investment-icon">
              <Gem size={28} />
            </div>
            <h3 className="investment-tier">{t.investments.starterTitle}</h3>
            <div className="investment-price">{t.investments.starterPrice}</div>
            <p className="investment-desc">{t.investments.starterDesc}</p>
            <ul className="investment-perks">
              {t.investments.starterPerks.map((p, i) => (
                <li key={i} className="investment-perk">
                  <Check size={16} /> {p}
                </li>
              ))}
            </ul>
            <button 
              className="btn-secondary" 
              style={{ textAlign: 'center' }}
              onClick={() => setExposeOpen(true)}
            >
              <FileText size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
              {t.investments.starterBtn}
            </button>
          </div>

          <div className="investment-card featured">
            <span className="investment-badge">{t.investments.recommended}</span>
            <div className="investment-icon">
              <TrendingUp size={28} />
            </div>
            <h3 className="investment-tier">{t.investments.vaultTitle}</h3>
            <div className="investment-price">{t.investments.vaultPrice}</div>
            <p className="investment-desc">{t.investments.vaultDesc}</p>
            <ul className="investment-perks">
              {t.investments.vaultPerks.map((p, i) => (
                <li key={i} className="investment-perk">
                  <Check size={16} /> {p}
                </li>
              ))}
            </ul>
            <a href="#beratung" className="btn-primary" style={{ justifyContent: 'center' }}>
              {t.investments.vaultBtn} <ChevronRight size={16} />
            </a>
          </div>

          <div className="investment-card">
            <div className="investment-icon">
              <Building size={28} />
            </div>
            <h3 className="investment-tier">{t.investments.raritiesTitle}</h3>
            <div className="investment-price">{t.investments.raritiesPrice}</div>
            <p className="investment-desc">{t.investments.raritiesDesc}</p>
            <ul className="investment-perks">
              {t.investments.raritiesPerks.map((p, i) => (
                <li key={i} className="investment-perk">
                  <Check size={16} /> {p}
                </li>
              ))}
            </ul>
            <a href="#beratung" className="btn-secondary" style={{ textAlign: 'center' }}>
              {t.investments.raritiesBtn}
            </a>
          </div>
        </div>

        {/* Security & Vault Guarantee */}
        <div className="vault-banner">
          <div className="vault-item">
            <Lock size={26} color="var(--gold-primary)" style={{ margin: '0 auto 10px' }} />
            <h4>{t.investments.vault1Title}</h4>
            <p>{t.investments.vault1Desc}</p>
          </div>
          <div className="vault-item">
            <FileText size={26} color="var(--gold-primary)" style={{ margin: '0 auto 10px' }} />
            <h4>{t.investments.vault2Title}</h4>
            <p>{t.investments.vault2Desc}</p>
          </div>
          <div className="vault-item">
            <Award size={26} color="var(--gold-primary)" style={{ margin: '0 auto 10px' }} />
            <h4>{t.investments.vault3Title}</h4>
            <p>{t.investments.vault3Desc}</p>
          </div>
        </div>
      </section>

      {/* Official Investment Exposé Modal */}
      {exposeOpen && (
        <div className="modal-overlay" onClick={() => setExposeOpen(false)}>
          <div className="expose-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setExposeOpen(false)}>
              <X size={20} />
            </button>

            <div className="expose-header">
              <div>
                <span className="expose-badge">OFFIZIELLE ANLAGEÜBERSICHT 2026</span>
                <h2 style={{ fontSize: '1.8rem', color: '#fff', margin: '4px 0' }}>Vallter Diamonds Anlagereport</h2>
                <p style={{ color: 'var(--gold-light)', fontSize: '0.85rem' }}>Physische Sachwerte & Vermögensaufteilung</p>
              </div>
              <img src="/vallter-diamonds-logo.jpg" alt="Logo" style={{ width: '55px', height: '55px', borderRadius: '50%', border: '1px solid var(--gold-primary)' }} />
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.7' }}>
              Dieses Dokument dient anspruchsvollen Privatinvestoren und Vermögensverwaltern als verifizierter Leitfaden für die physische Vermögenssicherung in bankenunabhängigen Sachwerten.
            </p>

            <div className="expose-grid">
              <div className="expose-box">
                <h5>1. Wertstabilität & Performance</h5>
                <p>Historisch unterliegen hochkarätige Brillanten (1.00ct+ D-IF) minimalen Marktvolatilitäten und dienen als krisenresistenter Inflationsschutz mit weltweiter Liquidität.</p>
              </div>
              <div className="expose-box">
                <h5>2. GIA-Prüfsiegel & Schutz</h5>
                <p>Jeder Stein trägt eine mikroskopische Lasergravur auf der Rundiste (GIA Report Number) und wird in einer fälschungssicheren Sicherheitsbox versiegelt übergeben.</p>
              </div>
              <div className="expose-box">
                <h5>3. Steuer- & Zollfreilager</h5>
                <p>Möglichkeit zur vollversicherten Einlagerung im Schweizer Zollfreilager (Zürich/Genf) – 100% umsatzsteuerbefreit bei dauerhafter Verwahrung.</p>
              </div>
              <div className="expose-box">
                <h5>4. Garantierte Rückkaufoption</h5>
                <p>Vallter Diamonds sichert für qualifizierte Anlageportfolios einen weltweiten Zweitmarkt-Rückkaufservice zu transparenten Rapaport-Tageskursen zu.</p>
              </div>
            </div>

            {exposeDownloaded ? (
              <div style={{ padding: '14px', background: 'rgba(212,175,55,0.18)', border: '1px solid var(--border-gold)', borderRadius: '12px', textAlign: 'center', marginTop: '20px' }}>
                <Check size={20} color="var(--gold-light)" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                <span style={{ color: 'var(--gold-light)', fontWeight: 600, fontSize: '0.9rem' }}>
                  Exposé erfolgreich als PDF-Dokument generiert und heruntergeladen.
                </span>
              </div>
            ) : (
              <div className="expose-actions">
                <button 
                  className="btn-primary" 
                  style={{ cursor: 'pointer' }}
                  onClick={handleDownloadExpose}
                >
                  <Download size={16} /> Übersicht als PDF herunterladen
                </button>
                <a href="#beratung" className="btn-secondary" onClick={() => setExposeOpen(false)}>
                  Persönliche Beratung
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Philosophy / Features Section */}
      <section id="philosophie" className="section">
        <div className="section-header">
          <span className="section-tag">{t.philosophy.tag}</span>
          <h2 className="section-title">{t.philosophy.title}</h2>
          <p className="section-desc">{t.philosophy.desc}</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Gem size={32} />
            </div>
            <h3 className="feature-title">{t.philosophy.p1Title}</h3>
            <p className="feature-desc">{t.philosophy.p1Desc}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Award size={32} />
            </div>
            <h3 className="feature-title">{t.philosophy.p2Title}</h3>
            <p className="feature-desc">{t.philosophy.p2Desc}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <ShieldCheck size={32} />
            </div>
            <h3 className="feature-title">{t.philosophy.p3Title}</h3>
            <p className="feature-desc">{t.philosophy.p3Desc}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Sparkles size={32} />
            </div>
            <h3 className="feature-title">{t.philosophy.p4Title}</h3>
            <p className="feature-desc">{t.philosophy.p4Desc}</p>
          </div>
        </div>
      </section>

      {/* Atelier Story Section */}
      <section id="atelier" className="section atelier-section">
        <div className="atelier-container">
          <div className="atelier-image-col">
            <div className="atelier-main-img-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
              <video 
                src="/vallter-crafting.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="atelier-main-img"
                style={{ objectFit: 'cover', width: '100%', height: '480px', display: 'block' }}
              />
            </div>
            <div className="atelier-logo-overlay">
              <img src="/vallter-diamonds-logo.jpg" alt="Vallter Diamonds Siegel" />
            </div>
          </div>

          <div className="atelier-content">
            <span className="section-tag">{t.atelier.tag}</span>
            <h2>{t.atelier.title}</h2>
            <p>{t.atelier.p1}</p>
            <p>{t.atelier.p2}</p>

            <div className="atelier-stats">
              <div className="stat-item">
                <h3>{t.atelier.stat1Val}</h3>
                <span>{t.atelier.stat1Lbl}</span>
              </div>
              <div className="stat-item">
                <h3>{t.atelier.stat2Val}</h3>
                <span>{t.atelier.stat2Lbl}</span>
              </div>
              <div className="stat-item">
                <h3>{t.atelier.stat3Val}</h3>
                <span>{t.atelier.stat3Lbl}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation & VIP Booking */}
      <section id="beratung" className="section">
        <div className="consultation-card">
          <span className="section-tag">{t.consultation.tag}</span>
          <h2 className="section-title">{t.consultation.title}</h2>
          <p className="section-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {t.consultation.desc}
          </p>

          {submitted ? (
            <div style={{ marginTop: '30px', padding: '16px', background: 'rgba(212,175,55,0.15)', border: '1px solid var(--border-gold)', borderRadius: '12px' }}>
              <p style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
                {t.consultation.success}
              </p>
            </div>
          ) : (
            <form className="consultation-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder={t.consultation.placeholder} 
                required 
              />
              <button type="submit" className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                {t.consultation.btnSubmit}
              </button>
            </form>
          )}

          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <PhoneCall size={16} color="#d4af37" /> {t.consultation.phone}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={16} color="#d4af37" /> {t.consultation.locations}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={16} color="#d4af37" /> web@walter.ch
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
            <a href="#shop" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>{t.nav.shop}</a>
            <a href="#investments" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>{t.nav.investments}</a>
            <a href="#philosophie" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>{t.nav.philosophy}</a>
            <a href="#atelier" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>{t.nav.atelier}</a>
            <a href="#beratung" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>{t.nav.consultation}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vallter Diamonds. {t.footer.rights}</p>
          <p style={{ letterSpacing: '0.15em' }}>{t.footer.sub}</p>
        </div>
      </footer>
    </div>
  );
}
