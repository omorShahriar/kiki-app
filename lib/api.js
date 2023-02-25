import qs from "qs";

const strapiUrl =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export async function fetcher(url, options = {}) {
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }
  const data = await response.json();
  return data;
}

//for main layout
export const getNavigationData = async (locale) => {
  const query = qs.stringify(
    {
      populate: "deep",
      locale,
    },
    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/main-menu?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const {
    data: {
      attributes: { body },
    },
  } = await res.json();
  return body;
};
export const getFooterData = async (locale) => {
  const query = qs.stringify(
    {
      populate: {
        sections: {
          populate: {
            links: "t",
          },
        },
        socialLinks: "t",
      },
      locale,
    },
    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/footer?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const {
    data: { attributes },
  } = await res.json();
  return attributes;
};

// Home Page
export const getHomePageData = async (locale) => {
  const query = qs.stringify(
    {
      populate: "deep",
      locale,
    },
    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/home-page?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const {
    data: { attributes },
  } = await res.json();
  return attributes;
};

export const getRecentArticles = async () => {
  const query = qs.stringify(
    {
      populate: ["media"],
      pagination: {
        limit: 8,
      },
      sort: ["createdAt:desc"],
    },

    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/articles?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getRecentProducts = async () => {
  const query = qs.stringify(
    {
      populate: ["media", "category"],
      pagination: {
        limit: 8,
      },
      sort: ["createdAt:desc"],
    },

    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/products?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

// articles page
export const getArticles = async ({ page = 0, pageSize = 2 } = {}) => {
  const query = qs.stringify(
    {
      populate: ["media"],
      pagination: {
        page,
        pageSize,
      },
    },

    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/articles?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getArticleBySlug = async (slug) => {
  try {
    const query = qs.stringify(
      {
        populate: ["media"],
      },

      {
        encodeValuesOnly: true,
      }
    );
    const url = `${strapiUrl}/api/articles/find-by-slug/${slug}?${query}`;
    const res = await fetch(url);
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error("Failed to fetch data");
    // }
    const articleData = await res.json();
    return articleData?.data?.attributes;
  } catch (error) {
    console.log("there was an error", error);
  }
};

// categories page
export const getCategories = async () => {
  const url = `${strapiUrl}/api/categories`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
};
export const getCategoryBySlug = async (slug) => {
  try {
    const query = qs.stringify(
      {
        populate: {
          products: {
            populate: {
              media: "t",
              category: {
                populate: "t",
                fields: ["name"],
              },
            },
          },
        },
      },

      {
        encodeValuesOnly: true,
      }
    );
    const url = `${strapiUrl}/api/categories/find-by-slug/${slug}?${query}`;
    const res = await fetch(url);
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error("Failed to fetch data and the error is : ", res);
    // }
    const categoryData = await res.json();
    return categoryData?.data?.attributes;
  } catch (error) {
    console.log("There was an error", error);
  }
};

// products page
export const getProducts = async ({ page = 0, pageSize = 12 } = {}) => {
  const query = qs.stringify(
    {
      populate: ["media", "category"],
      pagination: {
        page,
        pageSize,
      },
    },

    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/products?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getProductBySlug = async (slug) => {
  const query = qs.stringify(
    {
      populate: {
        media: "t",
        category: "t",
        specification: {
          populate: ["attributes"],
        },
      },
    },

    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/products/find-by-slug/${slug}?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const productData = await res.json();
  return productData.data.attributes;
};

// about page
export const getAboutPageData = async (lang) => {
  const query = qs.stringify(
    {
      filter: {
        slug: {
          $eq: "about-us",
        },
      },
      populate: ["blocks"],
      locale: lang,
    },
    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/pages/?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const pageData = await res.json();
  const {
    attributes: { blocks },
  } = pageData.data[0];
  return blocks[0];
};

// search page
export const getproductSearchResult = async (q) => {
  const query = qs.stringify(
    {
      populate: ["category", "media"],
      filters: {
        $or: [
          {
            title: {
              $containsi: q,
            },
          },
          {
            description: {
              $containsi: q,
            },
          },
          {
            category: {
              name: {
                $containsi: q,
              },
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const url = `${strapiUrl}/api/products?${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
};
