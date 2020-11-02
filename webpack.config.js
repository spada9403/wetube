const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniExtractCss = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");
const config = {
    entry:["@babel/polyfill",ENTRY_FILE],
    mode:MODE,
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    module:{
        rules:[
            {
                test: /\.(js)$/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ]
            },
            {
            test: /\.(scss)$/,
            use: [
                MiniExtractCss.loader,
                "css-loader",
                {
                    loader: "postcss-loader",
                    options:{
                        postcssOptions:{
                            plugins:[
                                [
                                    autoprefixer,{browsers:"cover 99.5%"}
                                ]
                            ]
                        }
                    }
                },
                "sass-loader"
            ]
        }]
    },
    plugins:[
        new MiniExtractCss({
            filename: "style.css"
        })
    ]
};

module.exports=config;