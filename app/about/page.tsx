import { buyerReasons, company } from "../brand-data";
import { PageHero, SiteFooter, SiteHeader } from "../components";

export const metadata = { title: "About Astra Sales India | Established 2005" };

export default function About() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow={`Established in ${company.established}`} title="A stronger link between trusted brands and better healthcare." copy="For over 20 years, Astra Sales India has served hospitals and healthcare buyers with uncompromising quality, dependable delivery and responsive, proprietor-led service." />
    <section className="contentSplit section">
      <div><p className="kicker">Our story</p><h2>One dependable relationship across 18+ healthcare categories.</h2></div>
      <div><p>Astra Sales connects the requirements of hospitals, clinics, surgeons and procurement teams with a carefully selected medical-product portfolio.</p><p>From our Delhi offices, we coordinate domestic and export-ready supply across surgical, diagnostic, PPE, pharma, hospital-furniture and ICU requirements. Every relationship is built on respect, clarity and long-term accountability.</p><div className="aboutFacts"><span><b>2005</b>Established</span><span><b>20+</b>Years of supply</span><span><b>18+</b>Categories</span></div></div>
    </section>
    <blockquote className="brandQuote">“Quality that doesn&apos;t compromise, delivery that doesn&apos;t delay - for every hospital we serve, from Delhi to the Gulf.”</blockquote>
    <section className="reasonSection section"><div className="sectionHead"><div><p className="kicker">Why Astra Sales India</p><h2>Built for confident procurement.</h2></div><p>Experience, documentation and personal accountability come together in every order.</p></div><div className="compactReasons">{buyerReasons.map((reason, index) => <article key={reason.title}><span>0{index + 1}</span><h3>{reason.title}</h3><p>{reason.copy}</p></article>)}</div></section>
    <section className="valueBand"><article><span>01</span><h3>Understand</h3><p>We begin with the clinical, institutional or export requirement.</p></article><article><span>02</span><h3>Connect</h3><p>We identify the relevant product, manufacturer and documentation path.</p></article><article><span>03</span><h3>Coordinate</h3><p>We support the enquiry through dependable supply and responsive follow-through.</p></article></section>
    <SiteFooter />
  </main>;
}
