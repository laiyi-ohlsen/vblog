module.exports = function(eleventyConfig) {
    // CSS
    eleventyConfig.addPassthroughCopy("./src/style.css");

    // Date display filter
    eleventyConfig.addFilter("dateDisplay", (dateObj) => {
        return new Date(dateObj).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
