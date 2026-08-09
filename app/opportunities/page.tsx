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
          <p>We aim to develop the healthcare market for our products with an eye on the future. We are expanding our operations and are looking at undertaking dealerships of medical and surgical companies.</p>
          <p>We welcome enquiries from international hospitals, distributors, procurement organisations, NGOs and UN agencies. We are ready to supply, quote &amp; partner.</p>
          <Link className="textLink" href="/contact?subject=opportunity">Share your profile →</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
