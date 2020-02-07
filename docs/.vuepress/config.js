require("dotenv").config();
const webpack = require("webpack");

module.exports = {
    title: "Moonshot-Internet - Homepage",
    description: "Moonshot-Internet is an Insurtech which develops usage-based insurance products and services dedicated to E-Commerce. We have a flexible solution for your needs.",
    markdown: {
        lineNumbers: true
    },
    configureWebpack () {
        return {
            plugins: [
                new webpack.DefinePlugin({TOKEN: process.env.WTTJ_TOKEN})
            ]
        }
    }
}