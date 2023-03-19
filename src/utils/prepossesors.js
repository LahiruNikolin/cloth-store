// alternate API doesnt supply a meaningfull field as a replacement for desciption property
// therefore i hardcoded these 2 values 

const mockDescriptionFemale =
  "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk...";
const mockDescriptionMale =
  "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...";

// CODE HERE VIOLATES DRY PRINCIPLE, but i kept it because i was mapping data due to
// new api being incompatible(fakestoreapi no longer works had to find a similar one),
// and in a ideal scenario approach like this wont be needed.

export const extractMensOnlyProducts = (data, options) => {
  if (!data) return;
  let limitReached = false;
  const limit = options?.limit;
  const extractedData = [];

  data.forEach((product) => {
    if (limitReached) return;
    if (product.category.slug === "mens-fashion") {
      extractedData.push({
        ...product,
        description: mockDescriptionMale,
        image: "jacket",
      });
    }
    if (limit && extractedData.length === limit) {
      limitReached = true;
    }
  });

  return extractedData;
};

export const extractWomensOnlyProducts = (data, options) => {
  if (!data) return;
  let limitReached = false;
  const limit = options?.limit;
  const extractedData = [];

  data.forEach((product) => {
    if (limitReached) return;
    if (product.category.slug === "womens-fashion") {
      extractedData.push({
        ...product,
        description: mockDescriptionFemale,
        image: "frock",
      });
    }
    if (limit && extractedData.length === limit) {
      limitReached = true;
    }
  });

  return extractedData;
};

export const extractOnlyMenAndWomenProducts = (data, options) => {
  if (!data) return;
  let limitReached = false;
  const limit = options?.limit;
  const extractedData = [];

  data.forEach((product) => {
    if (limitReached) return;
    if (
      product.category.slug === "mens-fashion" ||
      product.category.slug === "womens-fashion"
    ) {
      extractedData.push({
        ...product,
        description:
          product.category.slug === "mens-fashion"
            ? mockDescriptionMale
            : mockDescriptionFemale,
        image: product.category.slug === "mens-fashion" ? "jacket" : "frock",
      });
    }
    if (limit && extractedData.length === limit) {
      limitReached = true;
    }
  });

  return extractedData;
};
