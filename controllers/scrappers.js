const scrapeIt = require("scrape-it");

exports.scrape1 = () => {
    // Promise interface
    const response = scrapeIt("http://terapia-fala.pt", {
        title: "header h1"
        , desc: "header h2"
        , avatar: {
            selector: "header img"
            , attr: "src"
        }
    });
    return response;
};