const axios = require('axios').default;
require('dotenv').config();


module.exports.FindAStock = (req, res) => {
    let options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
        params: {symbol: `${req.params.ticker}`, region: 'US'},
        headers: {
            'x-rapidapi-key': `${process.env.SECRET_API_KEY}`,
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };
        axios.request(options)
            .then(response => {
                res.json(response.data)
            })
            .catch(error => {
                res.send.status(404).json(error)
            });
}

module.exports.GetMarketNews = (req, res) => {
    let options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details',
        params: {uuid: '9803606d-a324-3864-83a8-2bd621e6ccbd', region: 'US'},
        headers: {
            'x-rapidapi-key': `${process.env.SECRET_API_KEY}`,
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            res.send.status(404).json(error)
        });
}

module.exports.GetMarketSummary = (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary',
        params: {region: 'US'},
        headers: {
            'x-rapidapi-key': `${process.env.SECRET_API_KEY}`,
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            res.send.status(404).json(error)
        });
}

module.exports.GetTrendingTickers = (req, res) => {
    let options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',
        params: {region: 'US'},
        headers: {
            'x-rapidapi-key': `${process.env.SECRET_API_KEY}`,
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            res.send.status(404).json(error)
        });
}

module.exports.GetMarketMovers = (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers',
        params: {region: 'US', lang: 'en-US', start: '0', count: '6'},
        headers: {
            'x-rapidapi-key': `${process.env.SECRET_API_KEY}`,
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            res.send.status(404).json(error)
        });
}

