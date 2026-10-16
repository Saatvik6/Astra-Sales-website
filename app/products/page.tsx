import Image from "next/image";
import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../components";
import { productCategories } from "../site-data";

export const metadata = {
  title: "Products | Astra Sales Surgical & Medical Portfolio",
  description: "Explore Astra Sales India's surgical and medical product categories, including anaesthesia, cardiac care, urology, infusion and rehabilitation.",
};

export default function Products() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        title="Our product categories"
        copy="Explore the surgical, critical-care, dialysis, protective, rehabilitation and allied products available through Astra Sales India."
      />
      <section className="listing catalogueListing section" aria-label="Product categories">
        {productCategories.map((category, index) => (
          <Link className="listingCard categoryCard" href={`/products/${category.slug}`} key={category.slug}>
            <div className="categoryCardImage relative">
              {category.products[0]?.image && <Image
                src={category.products[0].image}
                alt={`${category.title} category`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                className="catalogueImageContain"
                unoptimized
              />}
            </div>
            <div className="categoryCardBody">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{category.title}</h2>
              <p>{category.short}</p>
              <b>{category.products.length > 0 ? "View products" : "View category"} →</b>
            </div>
          </Link>
        ))}
      </section>
      <section className="pageCta">
        <div>
          <p className="kicker light">Need product guidance?</p>
          <h2>Tell us what your team is looking for.</h2>
        </div>
        <Link className="button" href="/contact">Start an enquiry →</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
