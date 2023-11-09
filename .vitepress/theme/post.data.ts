import { createContentLoader } from "vitepress";

export default createContentLoader("src/posts/**/*.md", {
  includeSrc: true,
  render: true,
  excerpt: true,
  transform(rawData) {
    console.log(rawData);
    return rawData
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
      })
      .map(({ excerpt, frontmatter, url }) => {
        return { excerpt, frontmatter, url };
      });
  },
});
