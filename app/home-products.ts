import { productCategories } from "./site-data";

// Home-page order follows the complete portfolio. Keep existing catalogue URLs.
const homeCategoryOrder = [
  { slug: "anaesthesia-critical-care", title: "Anaesthesia & Critical Care" },
  { slug: "ventilator-circuit", title: "Ventilator Circuit" },
  { slug: "surgery", title: "Surgery" },
  { slug: "urology", title: "Urology" },
  { slug: "cardiac", title: "Cardiac" },
  { slug: "hygiene", title: "Hygiene" },
  { slug: "electrosurgical-units-ot-lights-accessories", title: "Electrosurgical Units" },
  { slug: "syringe-infusion-pumps", title: "Syringe Infusion Pumps" },
  { slug: "ortho-rehab-care", title: "Ortho Rehab Care" },
  { slug: "pharmaceuticals-nutraceuticals", title: "Pharmaceuticals & Nutraceuticals" },
  { slug: "surgical-instruments-accessories", title: "Surgical Instruments & Accessories" },
  { slug: "surgical-equipment-furniture", title: "Surgical Equipment & Furniture / Infusion" },
  { slug: "honest-products", title: "Honest Products" },
  { slug: "disinfectants", title: "Disinfectants" },
  { slug: "protective-clothing", title: "Protective Clothing" },
  { slug: "icu-products", title: "ICU Products" },
  { slug: "allied-products", title: "Allied Products" },
  { slug: "hernia", title: "Hernia" },
  { slug: "dialysis", title: "Dialysis and DIASAFEplus" },
  { slug: "breast-prosthesis", title: "Breast Prosthesis" },
];

export const homeProducts = homeCategoryOrder.map(({ slug, title }) => {
  const category = productCategories.find((item) => item.slug === slug);

  if (!category) {
    throw new Error(`Missing home-page product category: ${slug}`);
  }

  return {
    slug,
    title,
    text: slug === "surgical-equipment-furniture"
      ? "Surgical equipment, hospital furniture and infusion supplies for clinical facilities."
      : slug === "dialysis"
        ? "Dialysis products and DIASAFEplus filters supporting renal-care workflows."
        : category.short,
    image: `/product-categories/${slug}.webp`,
  };
});
