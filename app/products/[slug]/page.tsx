import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, SiteFooter, SiteHeader } from "../../components";
import { productCategories } from "../../site-data";

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = productCategories.find((item) => item.slug === slug);
  return {
    title: category ? `${category.title} | Astra Sales India` : "Products | Astra Sales India",
    description: category?.intro,
  };
}

export default async function ProductCategory({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = productCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow={`${category.products.length} ${category.products.length === 1 ? "product" : "products"}`}
        title={category.title}
        copy={category.intro}
      />
      <section className="detailGrid section">
        <div>
          <p className="kicker">Category overview</p>
          <h2>Product support built around professional requirements.</h2>
          <p>{category.short}</p>
          <p>Contact Astra Sales India for current brand availability, technical information, commercial enquiries and relevant product literature.</p>
        </div>
        <aside>
          <h3>Areas of focus</h3>
          {category.focus.map((focus, index) => (
            <div key={focus}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <b>{focus}</b>
            </div>
          ))}
        </aside>
      </section>
      <section className="catalogueSection section">
        <div className="sectionHead catalogueHead">
          <div>
            <p className="kicker">Product catalogue</p>
            <h2>Explore {category.title.toLowerCase()}.</h2>
          </div>
          <p>Images and product names are drawn from Astra Sales India&apos;s established catalogue. Contact our team to confirm specifications and availability.</p>
        </div>
        <div className="catalogueGrid">
          {category.products.map((product, index) => (
            <article className="catalogueProduct" key={`${product.name}-${index}`}>
              <div className="catalogueProductImage">
                <Image
                  src={product.image}
                  alt={`${product.name} supplied by Astra Sales India`}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
                  unoptimized
                />
              </div>
              <div className="catalogueProductBody">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{product.name}</h3>
                <Link href={`/contact?category=${category.slug}`}>Enquire about this product →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="pageCta">
        <div>
          <p className="kicker light">Enquire about {category.title}</p>
          <h2>Request availability or product information.</h2>
        </div>
        <Link className="button" href={`/contact?category=${category.slug}`}>Send an enquiry →</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
