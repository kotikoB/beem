'use strict';

const fs = require('fs');
const router = require('express').Router();
const scraper = require('table-scraper');

router.get('/', async (req, res) => {
    const tableData = await scraper.get('https://www.mcc-mnc.com/');

    let dataToSave = JSON.stringify(tableData, null, 2);
    fs.writeFile('MCC.json', dataToSave, (err) => {
        if (err) throw err;
        console.log('Data written to file');
        res.status().json({ message: 'saving failed' });
    });
    res.status(200).json({ message: 'Data saved successfuly' });
});

router.get('/get-with-query', (req, res) => {
    const data = require('../MCC.json');

    // Read query pameters from URL
    const MCC = req.query.MCC;
    const MNC = req.query.MNC;
    const country = req.query.country;

    // Filter results based on query parameters
    const MCCResult = data[0].filter((x) => x.MCC === MCC && x.MNC === MNC);
    const countryResult = data[0].filter((x) => x.Country === country);

    // Return only selected object parameters
    if (MCC && MNC) {
        return res.status(200).json(
            MCCResult.map((res) => ({
                Country: res.Country,
                'Country Code': res['Country Code'],
                Network: res.Network
            }))
        );
    }

    // Return only selected object parameters
    if (MCC || country) {
        return res.status(200).json(
            countryResult.map((res) => ({
                Network: res.Network
            }))
        );
    }

    res.status(200).json(data[0]);
});

module.exports = router;
