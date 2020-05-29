require("dotenv").config();
const webpack = require("webpack");

module.exports = {
    title: "Moonshot-Internet - Homepage",
    description: "Moonshot-Internet is an Insurtech which develops usage-based insurance products and services dedicated to E-Commerce. We have a flexible solution for your needs.",
    markdown: {
        lineNumbers: true
    },
    configureWebpack() {
        return {
            plugins: [
                new webpack.DefinePlugin({ TOKEN: process.env.WTTJ_TOKEN })
            ]
        }
    },
    head: [
        [
            "script",
            {
                src: "https://www.welcomekit.co/assets/embed.js",
                type: "text/javascript"
            }
        ],
        [
            "script",
            {
                type: "text/javascript"
            },
            `welcomeKitReady(function() {var wk = new WelcomeKitEmbed('Pb63ppl');wk.group('job');wk.display(["department","officeCity","contractType", "publishedAt"]);wk.locale('fr');wk.website('wttj_fr');wk.render();})`
        ],
        [
            "style",
            {
                type: "text/css"
            },
            ".welcomekit-jobs-list-item{margin:0;padding:0}.welcomekit-jobs-list-item-link{position:relative;display:block;margin:0;padding:30px 5px;border-bottom:1px solid #eee;text-decoration:none;transition:all .2s}.welcomekit-jobs-list-item-link:after{position:absolute;top:50%;right:30px;width:20px;height:20px;margin-top:-10px;content:' ';border-top:1px solid #ddd;border-right:1px solid #ddd;transform:rotate(45deg);transition:all .2s}.welcomekit-jobs-list-item-link:hover{background:#f5f5f5;border-bottom-color:#ddd}.welcomekit-jobs-list-item-link:hover:after{right:20px;border-top-color:#aaa;border-right-color:#aaa}.welcomekit-job-name{margin:0 0 10px 0;padding:0;font-weight:500;font-size:19px;line-height:20px}.welcomekit-job-infos{margin:0;padding:0}.welcomekit-job-infos>li{position:relative;display:inline-block;margin:0 34px 0 0;color:#aaa}.welcomekit-job-infos>li:before{position:absolute;top:6px;left:-20px;content:' ';display:block;height:6px;width:6px;background:#ddd;border-radius:50%}.welcomekit-job-infos>li:first-child:before{display:none}.welcomekit-job-infos>li.welcomekit-job-description{display:block;margin:10px 0 0 0;padding:10px 20px;border-left:2px solid #eee}.welcomekit-job-infos>li.welcomekit-job-description p,.welcomekit-job-infos>li.welcomekit-job-description ul{margin:0;padding:0 0 10px 0;color:#bbb}.welcomekit-job-infos>li.welcomekit-job-description ul li{border-left:1px solid #eee;padding-left:10px;margin-bottom:10px}.welcomekit-job-infos>li.welcomekit-job-description pre{border-left:1px solid #eee;padding-left:10px;overflow:auto}.welcomekit-job-infos>li.welcomekit-job-description:before{display:none}.welcomekit-department-name,.welcomekit-office-city{display:block;padding:15px;background:#eee;border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;font-weight:500;font-size:17px;line-height:18px;text-transform:uppercase}.welcomekit-warning{display:block;padding:50px 0;text-align:center}"
        ]
    ]
}