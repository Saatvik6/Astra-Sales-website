import Image from "next/image";
import Link from "next/link";
import { company } from "./brand-data";
import { mainNav } from "./site-data";

export function Logo() {
  return (
    <span className="brand">
      <Image className="brandLogoImage" src="/astra-sales-logo.jpeg" alt="Astra Sales India logo" width={68} height={68} />
      <span className="brandName"><span>ASTRA</span><span>SALES</span></span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="header innerHeader">
      <Link href="/" aria-label="Astra Sales home"><Logo /></Link>
      <nav className="nav" aria-label="Primary navigation">
        {mainNav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="button headerCta" href="/contact">Request a quote <span aria-hidden="true">→</span></Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footerIdentity">
        <Link href="/" className="footerLogo"><Logo /></Link>
        <p>{company.tagline}.</p>
      </div>
      <div className="footerContact">
        <strong>Contact</strong>
        <a href={company.phoneHref}>{company.phone}</a>
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </div>
      <div className="footerOffice">
        <strong>Registered office</strong>
        <span>{company.registeredOffice[0]}</span>
        <span>{company.registeredOffice[1]}</span>
      </div>
      <div className="footerLinks">
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/partners">Partners</Link>
        <Link href="/contact">Enquiry</Link>
      </div>
      <small>© {new Date().getFullYear()} Astra Sales (India). All rights reserved.</small>
    </footer>
  );
}

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="pageHero"><p className="kicker">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></section>;
}
