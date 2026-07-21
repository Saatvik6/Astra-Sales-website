"use client";

import { FormEvent, useState } from "react";
import { company } from "../brand-data";
import { PageHero, SiteFooter, SiteHeader } from "../components";
import { productCategories } from "../site-data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
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
  }

  return <main>
    <SiteHeader />
    <PageHero eyebrow="Contact Astra Sales India" title="Tell us what your team needs." copy="Contact our proprietor-led team about a product, institutional requirement, export order or channel partnership." />
    <section className="contactPage section">
      <aside className="contactAside">
        <p className="kicker">Direct contact</p><h2>Start a conversation.</h2>
        <div className="personCard"><span>Proprietor</span><strong>{company.proprietor}</strong><p>Astra Sales (India)</p></div>
        <div className="contactMethods"><a href={company.phoneHref}><span>Call</span><b>{company.phone}</b></a><a href={company.whatsappHref} target="_blank" rel="noreferrer"><span>WhatsApp</span><b>{company.phone}</b></a><a href={`mailto:${company.email}`}><span>Email</span><b>{company.email}</b></a></div>
        <p>For faster product assistance, please include the category, expected quantity and institution or organisation name.</p>
      </aside>
      <form className="quoteForm" onSubmit={submit}>{sent ? <div className="success"><span>✓</span><h3>Your email enquiry is ready.</h3><p>Complete and send it from your email application, or contact us directly for immediate assistance.</p><button type="button" onClick={() => setSent(false)}>Prepare another enquiry</button></div> : <><div className="fieldRow"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Organisation<input required name="organisation" placeholder="Hospital, clinic or company" /></label></div><div className="fieldRow"><label>Email address<input required type="email" name="email" placeholder="name@organisation.com" /></label><label>Phone number<input required type="tel" name="phone" placeholder="+91" /></label></div><label>Product interest<select name="category" defaultValue=""><option value="" disabled>Select a category</option>{productCategories.map(product => <option key={product.slug}>{product.title}</option>)}<option>Brand / distribution partnership</option><option>Export enquiry</option><option>Career opportunity</option></select></label><label>How can we help?<textarea required name="message" rows={5} placeholder="Share product, quantity or partnership details" /></label><button className="button submit" type="submit">Open email enquiry →</button></>}</form>
    </section>
    <section className="officeSection section">
      <div><p className="kicker">Our offices</p><h2>Serving buyers from central New Delhi.</h2></div>
      <div className="officeGrid"><article><span>Registered office</span><h3>{company.registeredOffice[0]}</h3><p>{company.registeredOffice[1]}</p></article><article><span>Branch office</span><h3>{company.branchOffice[0]}</h3><p>{company.branchOffice[1]}</p><a href={`tel:${company.branchLandline.replace(/-/g, "")}`}>{company.branchLandline}</a></article></div>
    </section>
    <SiteFooter />
  </main>;
}
