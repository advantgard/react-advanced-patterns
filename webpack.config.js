"use strict";

const path = require("path");
const BUILD_DIR = path.resolve(__dirname, "dist");
const APP_DIR = path.resolve(__dirname, "src");

const config = {

    entry: APP_DIR + "/index.js",
    output: {
        path: BUILD_DIR,
        filename: "app.js"
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            include: [ path.resolve(__dirname, "src") ],
            loader: "babel-loader"
        }]
    }
};

module.exports = config;