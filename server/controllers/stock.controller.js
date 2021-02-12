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
                res.status(404).send({error})
            });
}

module.exports.GetMarketNews = (req, res) => {
    let options = {
        method: 'GET',
        url: 'https://cnbc.p.rapidapi.com/news/list-trending',
        headers: {
            'x-rapidapi-key': `${process.env.SECRET_API_KEY}`,
            'x-rapidapi-host': 'cnbc.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            res.status(404).send({error})
        });
}

module.exports.GetMarketSummary = (req, res) => {
    let options = {
        method: 'GET',
        url: 'https://morning-star.p.rapidapi.com/market/get-summary',
        headers: {
            'x-rapidapi-key': `${process.env.SECRET_API_KEY}`,
            'x-rapidapi-host': 'morning-star.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            res.status(404).send({error})
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
            res.status(404).send({error})
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
            res.status(404).send({error})
        });
}

