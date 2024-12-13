const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const fs = require("fs"); 
const { execSync } = require('child_process');

const mdOptions = {
  html: true,
  breaks: true,
  linkify: false,
  typographer: true
}




module.exports = function (eleventyConfig) {
  let markdownIt = require('markdown-it')
  let markdownItAttrs = require('markdown-it-attrs')
  let markdownItAnchor = require('markdown-it-anchor')
  //let pluginTOC = require('eleventy-plugin-toc')
  let pluginNestTOC = require('eleventy-plugin-nesting-toc');

  //pagefind 
  eleventyConfig.on('eleventy.after', () => {
    execSync(`npx pagefind --source docs --glob \"**/*.html\"`, { encoding: 'utf-8' })
  })

  const mdAnchorOpts = {
    permalink: false,
    permalinkClass: 'anchor-link',
    permalinkSymbol: ' ',
    level: [1, 2, 3, 4]
  }
  
  // Markdown
  eleventyConfig.setLibrary('md',markdownIt(mdOptions)
    .use(markdownItAnchor, mdAnchorOpts)
    .use(markdownItAttrs))
  
  // add plugin pluginTOC
  //eleventyConfig.addPlugin(pluginTOC)
  // add plugin NestedTOC
  eleventyConfig.addPlugin(pluginNestTOC);
  // add plugin syntaxHighlighth
  eleventyConfig.addPlugin(syntaxHighlight);

  // eleventyConfig.addPlugin(pluginTOC, {
  //   tags: ['h2', 'h1', 'h3'],
  //   wrapper: 'nav'
  // })

  // Browsersync
  // Redirect from root to default language root during --serve
  // Can also be handled by netlify.toml?
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        const content_404 = fs.readFileSync('docs/404.html');

        bs.addMiddleware('*', (req, res) => {
            // Provides the 404 content without redirect.
            res.write(content_404);
            res.end();
        });
      }
    } 
  });


  //copy `htmls` contains clear HTML samples
  eleventyConfig.addPassthroughCopy("./src/htmls");
  //copy `js`
  eleventyConfig.addPassthroughCopy("./src/js");
  //copy `css`
  eleventyConfig.addPassthroughCopy("./src/css");
  //copy `img`
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/tdd");
  //copy `manifest`
  eleventyConfig.addPassthroughCopy("./src/manifest.json");

/**
 * Demo collection 
 * 
 * //Add custom sorting collection
  eleventyConfig.addCollection("categoriesSortByOrderAscEn", function(collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTags("category", "en").sort(function(a, b) {
      return a.data.order - b.data.order; // sort by order - ascending
      //return b.data.order - a.data.order; // sort by order - descending
      //return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
      //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
    });
  });
 */

  //Add custom sorting collection
  eleventyConfig.addCollection("categoriesSortByOrderAscEn", function(collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTags("top_menu", "en").sort(function(a, b) {
      return a.data.order - b.data.order; // sort by order - ascending
    });
  });

  //Add custom sorting collection
  eleventyConfig.addCollection("categoriesSortByOrderAscEl", function(collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTags("top_menu", "el").sort(function(a, b) {
      return a.data.order - b.data.order; // sort by order - ascending
    });
  });

  //Add custom sorting collection
  eleventyConfig.addCollection("stylesSortByOrderAscEn", function(collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTags("styles", "en").sort(function(a, b) {
      return a.data.order - b.data.order; // sort by order - ascending
    });
  });

  //Add custom sorting collection
  eleventyConfig.addCollection("stylesSortByOrderAscEl", function(collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTags("styles", "el").sort(function(a, b) {
      return a.data.order - b.data.order; // sort by order - ascending
    });
  });

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};