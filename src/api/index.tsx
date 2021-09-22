export type PostInfo = {
  src: string;
  alt: string;
  type: "professional" | "personal";
  text: string;
  order: number;
  path: string;
};

const getMetadata = async (key: string): Promise<PostInfo | null> => {
  try {
    const slug: string = key.slice(2).replace(".mdx", "");
    const module: any = await import(`@/pages/Portfolio/${slug}.mdx`);

    // Check for missing metadata or hidden route
    if (module.metadata && slug.indexOf("_") !== 0) {
      return Object.assign(module.metadata, { path: `/Portfolio/${slug}` });
    }
  }
  catch (e) {
    console.error("Error getting page metadata", e);
    return Promise.reject("Error getting page metadata");
  }

  return null;
};

const getPosts = async (): Promise<PostInfo[]> => {
  try {
    const context = require.context("@/pages/Portfolio", false, /\.mdx$/);

    // context.keys() has duplicates exported from either './' and '/pages/Portfolio/', filter outh the other
    const keys: string[] = context.keys().filter(key => key.indexOf('./') === 0);

    // Wait for imports
    return Promise
      .all(keys.map((key) => getMetadata(key)))
      .then(
        (results) => results
          .filter((result) => !!result)
          .sort((a, b) => a.order - b.order),
      );
  }
  catch (e) {
    console.error("Error getting portfolio pages", e);
    return Promise.reject("Error getting portfolio pages");
  }
};

export { getPosts };
