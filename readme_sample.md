const express = require("express");
const router = express.Router();
const Business = require("../../models/Business");
const Category = require("../../models/Category");
const fs = require('fs');

router.get(
    "/",
    (req, res) => {
        Business.find()
            .populate({ path: "categories", select: "name" })
            .exec(function (err, businesses) {
                if (err) return res.json(err);
                const businessObj = {};
                businesses.map(business => {
                    businessObj[business.id] = business;
                });
                res.json(businessObj);
            });
    }
);

router.get(
    "/coordinates",
    (req, res) => {
        const { _sw, _ne } = JSON.parse(req.query.bounds);
        const south = _sw.lng;
        const west = _sw.lat;
        const north = _ne.lng;
        const east = _ne.lat;

        Business.find({ longitude: { $gt: south, $lt: north }, latitude: { $gt: west, $lt: east } })
            .limit(20)
            .populate({ path: "categories", select: "name" })
            .exec(function (err, businesses) {
                if (err) return res.json(err);
                const businessObj = {};

                businesses.map(business => {
                    businessObj[business.id] = business;
                });
                res.json(businessObj);
            });

    }
);

/*
The code written above is a router file (business.js) for the previous project, which was built with node.js, express.js, and MongoDB on the backend. I integrated search feature with Mapbox API to show business locations in a map view based on the map boundary. Everytime the use moves the map, it will send the "GET" request to the backend - specifically "/business/coordinate" route - and the router fetch the corresponding data using populate function in Mongoose and send the information to the frontend.

Here are the links for the website and github repo for your reference.
- https://lit-atoll-81167.herokuapp.com/#/
- https://github.com/hkryucr/mern-ct
*/