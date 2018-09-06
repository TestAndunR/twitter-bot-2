let AWS = require('aws-sdk');
let SL_TWITTER = require('slappforge-sdk-twitter');
let twitterClients = require('./TwitterClients');
const twitter = new SL_TWITTER.TwitterP(twitterClients);

exports.handler = function (event, context, callback) {
    twitter.searchTweets({
        "searchParams": {
            "q": "#serverless",
            "count": 100
        },
        "clientName": "twClient"
    }).then(response => {
        let data = response.data;
        for (let i = 0; i < count; i++) {
            twitter.createRetweet({
                "tweetID": tweetId,
                "clientName": "twClient"
            }).then(response => {
                let data = response.data;
            }).catch(err => {
                console.log(err);
            });

        }
    }).catch(err => {
        console.log(err);
    });

    callback(null, 'Successfully executed');
}