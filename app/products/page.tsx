import Image from "next/image";
import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../components";
import { productCategories } from "../site-data";

export const metadata = {
  title: "Products | Astra Sales Surgical & Medical Portfolio",
  description: "Explore Astra Sales India's complete surgical and medical product catalogue across ten specialist categories.",
};

export default function Products() {
  const productCount = productCategories.reduce((total, category) => total + category.products.length, 0);

  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow={`${productCategories.length} categories · ${productCount} products`}
        title="Our product categories"
        copy="Explore the surgical, critical-care, dialysis, protective, rehabilitation and allied products available through Astra Sales India."
      />
      <section className="listing catalogueListing section" aria-label="Product categories">
        {productCategories.map((category, index) => (
          <Link className="listingCard categoryCard" href={`/products/${category.slug}`} key={category.slug}>
            <div className="categoryCardImage relative">
              <Image
                src={category.products[0].image}
                alt={`${category.title} category`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                className="catalogueImageContain"
                unoptimized
              />
            </div>
            <div className="categoryCardBody">
              <span>{String(index + 1).padStart(2, "0")} · {category.products.length} {category.products.length === 1 ? "product" : "products"}</span>
              <h2>{category.title}</h2>
              <p>{category.short}</p>
              <b>View products →</b>
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
