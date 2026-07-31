export type CatalogueProduct = {
  name: string;
  image: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  focus: string[];
  products: CatalogueProduct[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "honest-products",
    title: "Honest Products",
    short: "Medical gloves, adult-care products and surgical gowns for institutional requirements.",
    intro: "Honest-branded medical disposables and protective apparel for professional healthcare environments.",
    focus: ["Medical disposables", "Patient-care products", "Surgical gowns"],
    products: [
      { name: "Honest - Gloves", image: "/product-catalog/honest-products/images-products-1-2.jpg" },
      { name: "Honest - Diaper", image: "/product-catalog/honest-products/images-products-1-3.jpg" },
      { name: "Full Reinforced Surgical Gown", image: "/product-catalog/honest-products/images-products-1-1.jpg" },
      { name: "Reinforced Surgical Gown", image: "/product-catalog/honest-products/images-products-1-1.jpg" },
      { name: "Surgical Gown", image: "/product-catalog/honest-products/images-products-1-1.jpg" },
    ],
  },
  {
    slug: "disinfectants",
    title: "Disinfectants",
    short: "Professional infection-prevention, instrument-processing and environmental hygiene solutions.",
    intro: "Professional products selected to support effective infection-prevention protocols across healthcare settings.",
    focus: ["Surface disinfection", "Instrument processing", "Institutional infection control"],
    products: [
      { name: "Ecomax", image: "/product-catalog/disinfectants/images-products-2-1.jpg" },
      { name: "Sterimax", image: "/product-catalog/disinfectants/images-products-2-2.jpg" },
      { name: "Disfis", image: "/product-catalog/disinfectants/images-products-2-3.jpg" },
      { name: "Aerosept", image: "/product-catalog/disinfectants/images-products-2-4.jpg" },
      { name: "Endomax", image: "/product-catalog/disinfectants/images-products-2-5.jpg" },
      { name: "Silvicide", image: "/product-catalog/disinfectants/images-products-2-6.jpg" },
      { name: "Microlyse", image: "/product-catalog/disinfectants/images-products-2-7.jpg" },
      { name: "Biostar ULV Fogger", image: "/product-catalog/disinfectants/images-products-2-8.jpg" },
    ],
  },
  {
    slug: "breast-prosthesis",
    title: "Breast Prosthesis",
    short: "Thoughtfully selected post-mastectomy, prosthetic and supportive-care solutions.",
    intro: "Thoughtfully selected prosthetic and post-operative solutions supported by sensitive, informed service.",
    focus: ["Breast prosthesis", "Post-mastectomy support", "Product guidance"],
    products: [
      { name: "Poorti Kit With All Accessories", image: "/product-catalog/breast-prosthesis/images-products-3-1.jpg" },
      { name: "Poorti Kit One Cover", image: "/product-catalog/breast-prosthesis/images-products-3-2.jpg" },
      { name: "Prosthesis Cover", image: "/product-catalog/breast-prosthesis/images-products-3-3.jpg" },
      { name: "Post-Mastectomy (Pocketed) Brassiere", image: "/product-catalog/breast-prosthesis/images-products-3-4.jpg" },
    ],
  },
  {
    slug: "diasafe-fresenius",
    title: "Diasafe (Fresenius)",
    short: "Dialysis-fluid filtration technology supporting high-quality haemodialysis treatment.",
    intro: "Fresenius filtration technology developed to support dialysis-fluid quality and dependable haemodialysis workflows.",
    focus: ["Dialysis-fluid filtration", "Haemodialysis support", "Fresenius technology"],
    products: [
      { name: "DIASAFEplus Filter", image: "/product-catalog/diasafe-fresenius/images-5.jpg" },
    ],
  },
  {
    slug: "protective-clothing",
    title: "Protective Clothing",
    short: "Clinical apparel and personal protective equipment designed to support safer working.",
    intro: "Protective apparel and barrier solutions for healthcare professionals and controlled clinical environments.",
    focus: ["Personal protective equipment", "Barrier protection", "Institutional requirements"],
    products: [
      { name: "PPE Kit", image: "/product-catalog/protective-clothing/images-products-4-1.jpg" },
      { name: "Protective Cap", image: "/product-catalog/protective-clothing/images-products-4-2.jpg" },
      { name: "Protective Shoe Cover", image: "/product-catalog/protective-clothing/images-products-4-3.jpg" },
      { name: "Protective Mask", image: "/product-catalog/protective-clothing/images-products-4-4.jpg" },
      { name: "Protective Gloves", image: "/product-catalog/protective-clothing/images-products-4-5.jpg" },
      { name: "Protective Face Shield", image: "/product-catalog/protective-clothing/images-products-4-6.jpg" },
      { name: "Protective Gown", image: "/product-catalog/protective-clothing/images-products-4-7.jpg" },
    ],
  },
  {
    slug: "medtronic-implants",
    title: "Medtronic (Implants)",
    short: "Implantable medical technology and specialised surgical solutions from Medtronic.",
    intro: "Implantable medical technology developed to support specialised surgical and clinical requirements.",
    focus: ["Implantable devices", "Surgical technology", "Specialist product support"],
    products: [
      { name: "Medtronic Implants", image: "/product-catalog/medtronic-implants/images-7.jpg" },
    ],
  },
  {
    slug: "icu-products",
    title: "ICU Products",
    short: "Critical-care essentials selected for demanding clinical environments.",
    intro: "A focused range of branded products supporting intensive-care and critical-care workflows.",
    focus: ["Closed suction systems", "Respiratory support", "Critical-care consumables"],
    products: [
      { name: "Turbo-Cleaning Closed Suction System", image: "/product-catalog/icu-products/images-products-5-1.jpg" },
      { name: "BiPAP Mask", image: "/product-catalog/icu-products/images-products-5-2.jpg" },
      { name: "Prymax Perfussion", image: "/product-catalog/icu-products/images-products-5-3.jpg" },
      { name: "Prymax Angi", image: "/product-catalog/icu-products/images-products-5-4.jpg" },
      { name: "Prymax Cathe", image: "/product-catalog/icu-products/images-products-5-5.jpg" },
      { name: "Prymax Surg", image: "/product-catalog/icu-products/images-products-5-6.jpg" },
      { name: "Prymax Dialysis", image: "/product-catalog/icu-products/images-products-5-7.jpg" },
      { name: "Prymax PM", image: "/product-catalog/icu-products/images-products-5-8.jpg" },
    ],
  },
  {
    slug: "allied-products",
    title: "Allied Products",
    short: "A practical range of complementary surgical, wound-care and medical supplies.",
    intro: "Complementary surgical and medical products that extend Astra Sales India's focused clinical portfolio.",
    focus: ["Wound-care products", "Medical consumables", "Complementary products"],
    products: [
      { name: "Velsoft", image: "/product-catalog/allied-products/images-products-6-1.jpg" },
      { name: "Velform", image: "/product-catalog/allied-products/images-products-6-2.jpg" },
      { name: "Softlaps", image: "/product-catalog/allied-products/images-products-6-3.jpg" },
      { name: "Softswab", image: "/product-catalog/allied-products/images-products-6-4.jpg" },
      { name: "Velfix Edge", image: "/product-catalog/allied-products/images-products-6-5.jpg" },
      { name: "Velfix - T+Pad", image: "/product-catalog/allied-products/images-products-6-6.jpg" },
      { name: "Lymphedema Kit", image: "/product-catalog/allied-products/images-products-6-7.jpg" },
      { name: "Respiratory Exerciser", image: "/product-catalog/allied-products/images-products-6-8.jpg" },
    ],
  },
  {
    slug: "hernia",
    title: "Hernia",
    short: "Specialised surgical mesh and fixation products for hernia-management procedures.",
    intro: "A specialised portfolio developed around the implant and fixation requirements of hernia-management procedures.",
    focus: ["Surgical mesh implants", "Procedure-focused support", "Mesh fixation"],
    products: [
      { name: "DynaMesh-ENDOLAP", image: "/product-catalog/hernia/images-products-7-1.jpg" },
      { name: "DynaMesh-CICAT", image: "/product-catalog/hernia/images-products-7-2.jpg" },
      { name: "DynaMesh-IPOM", image: "/product-catalog/hernia/images-products-7-3.jpg" },
      { name: "DynaMesh-ENDOLAP 3D", image: "/product-catalog/hernia/images-products-7-4.jpg" },
      { name: "Tacker", image: "/product-catalog/hernia/images-products-7-5.jpg" },
    ],
  },
  {
    slug: "dialysis",
    title: "Dialysis",
    short: "Dependable equipment and consumables supporting renal-care workflows.",
    intro: "Specialised branded products supporting dialysis centres, renal-care teams and associated clinical workflows.",
    focus: ["Dialysis equipment", "Renal-care consumables", "Haemodialysis support"],
    products: [
      { name: "Dialyzer Machine", image: "/product-catalog/dialysis/images-1.jpg" },
      { name: "Polyflux L", image: "/product-catalog/dialysis/images-products-8-2.jpg" },
      { name: "Diasafe Plus", image: "/product-catalog/dialysis/images-products-8-3.jpg" },
      { name: "Disposable A.V. Fistula Needle Sets", image: "/product-catalog/dialysis/images-products-8-4.jpg" },
    ],
  },
];

export const mainNav = [
  ["Home", "/"],
  ["Products", "/products"],
  ["About", "/about"],
  ["Partners", "/partners"],
  ["Opportunities", "/opportunities"],
  ["Contact", "/contact"],
] as const;
