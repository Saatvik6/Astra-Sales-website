"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { buyerReasons, company, complianceMarks, trustedInstitutions } from "./brand-data";
import { Logo, SiteFooter } from "./components";

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

const Icon = ({ type }: { type: string }) => {
  const paths: Record<string, React.ReactNode> = {
    icu: <><path d="M3 12h4l2-5 4 10 2-5h6" /><path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /></>,
    disinfectants: <><path d="M9 3h6v4H9zM8 7h8l2 4v10H6V11l2-4Z" /><path d="M10 14h4M12 12v4M15 3h3" /></>,
    clothing: <><path d="m8 4-5 4 3 5 2-1v9h8v-9l2 1 3-5-5-4c-.8 1-1.7 1.5-4 1.5S8.8 5 8 4Z" /></>,
    dialysis: <><path d="M8 4c-3 1-4 4-4 7 0 4 2 7 5 8 2-1 3-4 3-7V6c-1-2-2-3-4-2ZM16 4c3 1 4 4 4 7 0 4-2 7-5 8-2-1-3-4-3-7V6c1-2 2-3 4-2Z" /></>,
    hernia: <><path d="M7 4c2 2 2 4 1 7s0 7 4 9M17 4c-2 2-2 4-1 7s0 7-4 9" /><circle cx="12" cy="12" r="3" /></>,
    breast: <><path d="M12 3C9 7 5 11 5 16a7 7 0 0 0 14 0c0-5-4-9-7-13Z" /><path d="M9 16c1.5-2 4.5-2 6 0" /></>,
    allied: <><path d="M8 4h8M9 4v4l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V4" /><path d="M8 14h8" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
};

const products = [
  { type: "icu", slug: "icu-products", title: "ICU Products", text: "Critical-care essentials selected for demanding clinical environments." },
  { type: "disinfectants", slug: "disinfectants", title: "Disinfectants", text: "Professional infection-prevention and surface hygiene solutions." },
  { type: "clothing", slug: "protective-clothing", title: "Protective Clothing", text: "Clinical apparel and barriers designed to support safer working." },
  { type: "dialysis", slug: "dialysis", title: "Dialysis", text: "Dependable products supporting renal-care workflows." },
  { type: "hernia", slug: "hernia", title: "Hernia", text: "Specialised surgical products for hernia management procedures." },
  { type: "breast", slug: "breast-prosthesis", title: "Breast Prosthesis", text: "Thoughtfully selected post-operative and prosthetic-care solutions." },
  { type: "allied", slug: "allied-products", title: "Allied Products", text: "A practical range of complementary surgical and medical supplies." },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Astra Sales enquiry - ${String(data.get("category") || "General")}`);
    const body = encodeURIComponent([
      `Name: ${String(data.get("name") || "")}`,
      `Organisation: ${String(data.get("organisation") || "")}`,
      `Email: ${String(data.get("email") || "")}`,
      `Phone: ${String(data.get("phone") || "")}`,
      `Interest: ${String(data.get("category") || "")}`,
      "",
      String(data.get("message") || ""),
    ].join("\n"));
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return <main>
    <header className="header">
      <a href="#top" aria-label="Astra Sales India home"><Logo /></a>
      <button className="menuButton" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Toggle navigation"><span /><span /></button>
      <nav className={menu ? "nav open" : "nav"} aria-label="Primary navigation">
        <Link href="/" onClick={() => setMenu(false)}>Home</Link>
        <Link href="/products" onClick={() => setMenu(false)}>Products</Link>
        <Link href="/about" onClick={() => setMenu(false)}>About</Link>
        <Link href="/partners" onClick={() => setMenu(false)}>Partners</Link>
        <Link href="/careers" onClick={() => setMenu(false)}>Careers</Link>
        <Link href="/contact" onClick={() => setMenu(false)}>Contact</Link>
      </nav>
      <Link className="button headerCta" href="/contact">Request a quote <Arrow /></Link>
    </header>

    <section className="hero" id="top">
      <div className="heroCopy">
        <p className="eyebrow">Established in {company.established} · Single-point procurement</p>
        <h1>Solutions to hundreds of queries in <em>healthcare.</em></h1>
        <p className="lead">For over 20 years, Astra Sales India has delivered uncompromising quality and dependable supply to hospitals across India and the Gulf.</p>
        <div className="actions"><Link className="button primary" href="/products">Explore product range <Arrow /></Link><Link className="button secondary" href="/contact">Request a quote <Arrow /></Link></div>
        <div className="trustPill"><span className="shield">✓</span><span>20+ years</span><i /><span>18+ categories</span><i /><span>Export ready</span></div>
      </div>
      <div className="heroVisual">
        <Image src="/astra-hero-production.png" alt="Branded surgical and medical supplies arranged in a clinical environment" fill sizes="(max-width: 1100px) 100vw, 54vw" priority />
        <div className="proof proofOne"><span>✓</span><div><b>Fully compliant</b><small>GST, IEC, CDSCO &amp; drug licensed</small></div></div>
        <div className="proof proofTwo"><span>18+</span><div><b>Single-point supply</b><small>Across product categories</small></div></div>
      </div>
    </section>

    <section className="intro section" id="about">
      <div><p className="kicker">Astra Sales (India)</p><h2>Quality that does not compromise. Delivery that does not delay.</h2></div>
      <div><p>Since 2005, we have connected healthcare buyers with carefully selected surgical, diagnostic, PPE, pharma, hospital-furniture and ICU solutions through one dependable relationship.</p><div className="factRow"><span><b>2005</b>Established</span><span><b>18+</b>Categories</span><span><b>India → Gulf</b>Supply reach</span></div><Link className="textLink" href="/about">Read our story <Arrow /></Link></div>
    </section>

    <section className="products section" id="products">
      <div className="sectionHead"><div><p className="kicker">Featured portfolio</p><h2>Specialised categories.<br />One dependable partner.</h2></div><p>Our wider portfolio spans 18+ surgical, diagnostic, PPE, pharma, furniture and critical-care categories. Explore featured areas or contact our team for a specific requirement.</p></div>
      <div className="productGrid">{products.map((product, index) => <article id={product.type} key={product.title} className="productCard"><div className="productIcon"><Icon type={product.type} /></div><span>0{index + 1}</span><h3>{product.title}</h3><p>{product.text}</p><Link href={`/products/${product.slug}`} aria-label={`Explore ${product.title}`}>Explore <Arrow /></Link></article>)}</div>
    </section>

    <section className="specialities" id="specialities">
      <div className="specialityIntro"><p className="kicker light">Why buyers choose Astra Sales</p><h2>Experience, reach and accountability in one supply partner.</h2><p>Built for institutional buyers who need documented quality, clear communication and dependable fulfilment.</p></div>
      <div className="reasonGrid">{buyerReasons.map((reason, index) => <article key={reason.title}><span>0{index + 1}</span><div><h3>{reason.title}</h3><p>{reason.copy}</p></div></article>)}</div>
    </section>

    <section className="trustSection section">
      <div className="sectionHead trustHead"><div><p className="kicker">Institutional trust</p><h2>Trusted by leading medical institutions.</h2></div><p>Our track record includes sustained supply relationships across government, defence and private healthcare.</p></div>
      <div className="logoGrid institutionPreview">{trustedInstitutions.slice(0, 8).map(institution => <div className="logoTile" key={institution.name}><Image src={institution.logo} alt={`${institution.name} logo`} width={220} height={100} /><span>{institution.name}</span></div>)}</div>
      <Link className="textLink centredLink" href="/partners">View our partner network <Arrow /></Link>
    </section>

    <section className="complianceBand section">
      <div><p className="kicker light">Fully compliant. Export ready.</p><h2>Documentation built for confident procurement.</h2><p>Registered and equipped to support both domestic supply and international shipment documentation.</p></div>
      <div className="compliancePreview">{complianceMarks.map(mark => <article key={mark.name}><Image src={mark.logo} alt={`${mark.name} mark`} width={220} height={100} /><b>{mark.name}</b></article>)}</div>
    </section>

    <section className="quote section" id="contact">
      <div className="quoteIntro"><p className="kicker light">Start a conversation</p><h2>Tell us what your team needs.</h2><p>Share a product, quantity or partnership requirement. Your enquiry will be personally supported by our team.</p><div className="contactDirect"><span>Call / WhatsApp</span><a href={company.phoneHref}>{company.phone}</a><a className="directEmail" href={`mailto:${company.email}`}>{company.email}</a></div></div>
      <form onSubmit={submit} className="quoteForm">{sent ? <div className="success"><span>✓</span><h3>Your email enquiry is ready.</h3><p>Complete and send it from your email application, or contact us directly for immediate assistance.</p><button type="button" onClick={() => setSent(false)}>Prepare another enquiry</button></div> : <><div className="fieldRow"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Organisation<input required name="organisation" placeholder="Hospital, clinic or company" /></label></div><div className="fieldRow"><label>Email address<input required type="email" name="email" placeholder="name@organisation.com" /></label><label>Phone number<input required type="tel" name="phone" placeholder="+91" /></label></div><label>Product interest<select name="category" defaultValue=""><option value="" disabled>Select a category</option>{products.map(product => <option key={product.title}>{product.title}</option>)}<option>Brand / distribution partnership</option><option>Export enquiry</option></select></label><label>How can we help?<textarea required name="message" placeholder="Share product, quantity or partnership details" rows={4} /></label><button className="button submit" type="submit">Open email enquiry <Arrow /></button></>}</form>
    </section>

    <SiteFooter />
  </main>;
}
