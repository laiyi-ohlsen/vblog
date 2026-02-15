module.exports = function(eleventyConfig) {
    // CSS
    eleventyConfig.addPassthroughCopy("./src/style.css");

    // Images
    eleventyConfig.addPassthroughCopy("./src/assets/images");

    // Date display filter
    eleventyConfig.addFilter("dateDisplay", (dateObj) => {
        return new Date(dateObj).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    });

    // ISO date filter (yyyy-mm-dd)
    eleventyConfig.addFilter("dateISO", (dateObj) => {
        return new Date(dateObj).toISOString().split("T")[0];
    });

    // Extract image src values from HTML content
    eleventyConfig.addFilter("extractImages", (content) => {
        const matches = [...(content || "").matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/g)];
        return matches.map(m => m[1]);
    });

    // Remove <img> tags (and wrapping <p> tags) from HTML content
    eleventyConfig.addFilter("removeImages", (content) => {
        return (content || "").replace(/<p>\s*<img[^>]*>\s*<\/p>/g, "").replace(/<img[^>]*>/g, "");
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
