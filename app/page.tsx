"use client";

import { FormEvent, useState } from "react";

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const Icon = ({ type }: { type: string }) => {
  const paths: Record<string, React.ReactNode> = {
    icu: <><path d="M3 12h4l2-5 4 10 2-5h6"/><path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/></>,
    disinfectants: <><path d="M9 3h6v4H9zM8 7h8l2 4v10H6V11l2-4Z"/><path d="M10 14h4M12 12v4M15 3h3"/></>,
    clothing: <><path d="m8 4-5 4 3 5 2-1v9h8v-9l2 1 3-5-5-4c-.8 1-1.7 1.5-4 1.5S8.8 5 8 4Z"/></>,
    dialysis: <><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="9" r="3"/><path d="M9 16h6M8 21v2M16 21v2"/></>,
    hernia: <><path d="M7 4c2 2 2 4 1 7s0 7 4 9M17 4c-2 2-2 4-1 7s0 7-4 9"/><circle cx="12" cy="12" r="3"/></>,
    breast: <><path d="M12 3C9 7 5 11 5 16a7 7 0 0 0 14 0c0-5-4-9-7-13Z"/><path d="M9 16c1.5-2 4.5-2 6 0"/></>,
    allied: <><path d="M5 7h14l2 4v10H3V11l2-4Z"/><path d="M9 7V4h6v3M9 14h6M12 11v6"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
};

const products = [
  { type: "icu", title: "ICU Products", text: "Critical-care essentials selected for demanding clinical environments." },
  { type: "disinfectants", title: "Disinfectants", text: "Professional infection-prevention and surface hygiene solutions." },
  { type: "clothing", title: "Protective Clothing", text: "Clinical apparel and barriers designed to support safer working." },
  { type: "dialysis", title: "Dialysis", text: "Dependable products supporting renal-care workflows." },
  { type: "hernia", title: "Hernia", text: "Specialised surgical products for hernia management procedures." },
  { type: "breast", title: "Breast Prosthesis", text: "Thoughtfully selected post-operative and prosthetic care solutions." },
  { type: "allied", title: "Allied Products", text: "A practical range of complementary surgical and medical supplies." },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return <main>
    <header className="header">
      <a className="brand" href="#top" aria-label="Astra Sales home"><img className="brandLogoImage" src="/astra-sales-logo.jpeg" alt="Astra Sales India logo" /><span className="brandName"><span>ASTRA</span><span>SALES</span></span></a>
      <button className="menuButton" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Toggle navigation"><span/><span/></button>
      <nav className={menu ? "nav open" : "nav"} aria-label="Primary navigation">
        <a href="/products" onClick={()=>setMenu(false)}>Products</a>
        <a href="/about" onClick={()=>setMenu(false)}>About</a>
        <a href="/partners" onClick={()=>setMenu(false)}>Partners</a>
        <a href="/careers" onClick={()=>setMenu(false)}>Careers</a>
        <a href="/contact" onClick={()=>setMenu(false)}>Contact</a>
      </nav>
      <a className="button headerCta" href="/contact">Request a quote <Arrow/></a>
    </header>

    <section className="hero" id="top">
      <div className="heroCopy">
        <p className="eyebrow">Branded surgical &amp; medical distribution</p>
        <h1>Trusted products.<br/>Dependable supply.<br/><em>Better care.</em></h1>
        <p className="lead">Reliable access to branded surgical and medical products for hospitals, clinics, surgeons and procurement teams.</p>
        <div className="actions"><a className="button primary" href="/products">Explore product range <Arrow/></a><a className="button secondary" href="/contact">Request a quote <Arrow/></a></div>
        <div className="trustPill"><span className="shield">✓</span><span>Quality-led sourcing</span><i/><span>Responsive fulfilment</span><i/><span>Clinical support</span></div>
      </div>
      <div className="heroVisual">
        <img src="/astra-hero-production.png" alt="Branded surgical and medical supplies arranged in a clinical environment" />
        <div className="proof proofOne"><span>◇</span><div><b>Premium brands</b><small>Curated for clinical needs</small></div></div>
        <div className="proof proofTwo"><span>▣</span><div><b>Reliable supply</b><small>Responsive, every time</small></div></div>
      </div>
    </section>

    <section className="categoryRail" aria-label="Product categories">
      {products.map(p => <a key={p.title} href={`/products/${p.type === "clothing" ? "protective-clothing" : p.type === "breast" ? "breast-prosthesis" : p.type === "allied" ? "allied-products" : p.type === "icu" ? "icu-products" : p.type}`}><span className="icon"><Icon type={p.type}/></span><b>{p.title}</b><Arrow/></a>)}
    </section>

    <section className="intro section" id="about">
      <div><p className="kicker">Astra Sales (India)</p><h2>A stronger link between trusted brands and better healthcare.</h2></div>
      <div><p>We specialise in the marketing and distribution of branded surgical and medical products. Our role is simple but vital: understand clinical requirements, connect customers with the right products, and support dependable supply.</p><a className="textLink" href="#contact">Talk to our team <Arrow/></a></div>
    </section>

    <section className="products section" id="products">
      <div className="sectionHead"><div><p className="kicker">Our product portfolio</p><h2>Specialised categories.<br/>One dependable partner.</h2></div><p>Explore a focused portfolio built around real clinical and institutional needs. Contact our team for availability, technical details and commercial enquiries.</p></div>
      <div className="productGrid">{products.map((p,i)=><article id={p.type} key={p.title} className="productCard"><div className="productIcon"><Icon type={p.type}/></div><span>0{i+1}</span><h3>{p.title}</h3><p>{p.text}</p><a href="#contact" aria-label={`Enquire about ${p.title}`}>Enquire <Arrow/></a></article>)}</div>
    </section>

    <section className="specialities" id="specialities">
      <div className="specialityImage"><img src="/astra-hero-production.png" alt="Medical supplies prepared for dependable distribution"/></div>
      <div className="specialityCopy"><p className="kicker light">Why Astra Sales</p><h2>Distribution built around clinical confidence.</h2><div className="benefits"><div><span>01</span><h3>Focused portfolio</h3><p>Relevant branded solutions across surgical, critical-care and allied categories.</p></div><div><span>02</span><h3>Responsive service</h3><p>Clear communication from product enquiry through order coordination.</p></div><div><span>03</span><h3>Relationship-led</h3><p>Long-term partnerships founded on respect, faith and business guidance.</p></div></div></div>
    </section>

    <section className="partners section" id="partners"><p className="kicker">For healthcare &amp; industry</p><h2>Built to serve every side of the medical supply relationship.</h2><div className="partnerGrid"><article><b>01</b><h3>Hospitals &amp; clinics</h3><p>A streamlined route to essential branded surgical and medical products.</p></article><article><b>02</b><h3>Surgeons &amp; clinicians</h3><p>Product support guided by the needs of specialised clinical practice.</p></article><article><b>03</b><h3>Procurement teams</h3><p>Responsive enquiries, clear coordination and dependable fulfilment.</p></article><article><b>04</b><h3>Brand partners</h3><p>Market development and distribution relationships built for sustainable growth.</p></article></div></section>

    <section className="quote section" id="contact">
      <div className="quoteIntro"><p className="kicker light">Start a conversation</p><h2>Tell us what your team needs.</h2><p>Ask about a product category, availability, brand partnership or distribution opportunity. We’ll help direct your enquiry.</p><div className="contactDirect"><span>WhatsApp / Call</span><a href="tel:+918587993118">+91 85879 93118</a></div></div>
      <form onSubmit={submit} className="quoteForm">{sent ? <div className="success"><span>✓</span><h3>Thank you for your enquiry.</h3><p>This prototype has captured your request. In the production site, it will be routed directly to the Astra Sales team.</p><button type="button" onClick={()=>setSent(false)}>Send another enquiry</button></div> : <><div className="fieldRow"><label>Full name<input required name="name" placeholder="Your name"/></label><label>Organisation<input required name="organisation" placeholder="Hospital, clinic or company"/></label></div><div className="fieldRow"><label>Email address<input required type="email" name="email" placeholder="name@organisation.com"/></label><label>Phone number<input required type="tel" name="phone" placeholder="+91"/></label></div><label>Product interest<select name="category" defaultValue=""><option value="" disabled>Select a category</option>{products.map(p=><option key={p.title}>{p.title}</option>)}<option>Brand / distribution partnership</option></select></label><label>How can we help?<textarea required name="message" placeholder="Share product, quantity or partnership details" rows={4}/></label><button className="button submit" type="submit">Send enquiry <Arrow/></button></>}</form>
    </section>

    <footer><a className="brand footerBrand" href="#top"><img className="brandLogoImage" src="/astra-sales-logo.jpeg" alt="Astra Sales India logo" /><span className="brandName"><span>ASTRA</span><span>SALES</span></span></a><p>Marketing and distribution of branded surgical and medical products.</p><div><a href="#products">Products</a><a href="#about">About</a><a href="#contact">Enquiry</a></div><small>© {new Date().getFullYear()} Astra Sales (India). All rights reserved.</small></footer>
  </main>;
}
