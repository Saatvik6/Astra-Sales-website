import Image from "next/image";
import { channelPartners, complianceMarks, exportCapabilities, registrations, trustedInstitutions } from "../brand-data";
import { PageHero, SiteFooter, SiteHeader } from "../components";

export const metadata = { title: "Partners, Institutions & Compliance | Astra Sales" };

export default function Partners() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="Partners & institutional reach" title="Trusted relationships. Proven healthcare supply." copy="Astra Sales works with established channel partners and serves leading government, defence and private medical institutions." />

    <section className="brandShowcase section">
      <div className="sectionHead"><div><p className="kicker">Channel partners</p><h2>A network built around quality and continuity.</h2></div><p>Long-term manufacturer and channel relationships help us support a broad range of clinical and institutional requirements.</p></div>
      <div className="logoGrid partnerLogos">{channelPartners.map(partner => <div className="logoTile" key={partner.name}><Image src={partner.logo} alt={`${partner.name} logo`} width={220} height={100} /><span>{partner.name}</span></div>)}</div>
    </section>

    <section className="institutionSection section">
      <div className="sectionHead"><div><p className="kicker">Institutional trust</p><h2>Trusted by India&apos;s leading medical institutions.</h2></div><p>Our experience spans government, defence, railway and private healthcare organisations.</p></div>
      <div className="logoGrid institutionLogos">{trustedInstitutions.map(institution => <div className="logoTile" key={institution.name}><Image src={institution.logo} alt={`${institution.name} logo`} width={220} height={100} /><span>{institution.name}</span></div>)}</div>
    </section>

    <section className="compliancePage section">
      <div className="sectionHead"><div><p className="kicker">Fully compliant. Export ready.</p><h2>Prepared for domestic and international procurement.</h2></div><p>Our registrations and documentation capabilities support clear, traceable and professionally coordinated supply.</p></div>
      <div className="complianceLogoGrid">{complianceMarks.map(mark => <article key={mark.name}><Image src={mark.logo} alt={`${mark.name} mark`} width={240} height={120} /><h3>{mark.name}</h3></article>)}</div>
      <div className="capabilityGrid">
        <div><h3>Registrations &amp; licences</h3><ul>{registrations.map(item => <li key={item}><span>✓</span>{item}</li>)}</ul></div>
        <div><h3>Export documentation capability</h3><ul>{exportCapabilities.map(item => <li key={item}><span>✓</span>{item}</li>)}</ul></div>
      </div>
    </section>

    <section className="pageCta"><h2>Discuss a product, institutional requirement or channel partnership.</h2><a className="button" href="/contact">Contact our team →</a></section>
    <SiteFooter />
  </main>;
}
