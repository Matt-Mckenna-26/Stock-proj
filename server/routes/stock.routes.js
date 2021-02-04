const StockController = require("../controllers/stock.controller");

module.exports = app => {
    app.get("/api/stock/:ticker", StockController.FindAStock);
    app.get("/api/market/news" , StockController.GetMarketNews);
    app.get("/api/market/summary", StockController.GetMarketSummary);
    app.get("/api/trending/tickers", StockController.GetTrendingTickers);
    app.get("/api/market/movers", StockController.GetMarketMovers);
};