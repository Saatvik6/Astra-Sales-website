import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../components";

export const metadata = { title: "Opportunities | Astra Sales" };

export default function Opportunities() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Opportunities"
        title="Build relationships that support better healthcare."
        copy="We welcome people who value responsibility, product knowledge, responsive service and long-term customer relationships."
      />
      <section className="contentSplit section">
        <div>
          <p className="kicker">Working with us</p>
          <h2>Grow with a focused medical-distribution business.</h2>
        </div>
        <div>
          <p>Opportunities may arise across sales, product support, customer coordination, market development and operations.</p>
          <p>Tell us about your experience, the role you are interested in and how you could contribute to Astra Sales.</p>
          <Link className="textLink" href="/contact?subject=opportunity">Share your profile →</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
