//Dependencies
const Discord = require("discord.js");
const dclient = new Discord.Client();
const twitter = require("twitter");
const cfg = require("./cfg.json");

//Add time logging to console.log
function log(data) {
    var currentDate = "[" + new Date().toUTCString() + "] ";
    console.log(currentDate, data);
}

//Create Twitter Client
const tclient = new twitter({
    consumer_key: cfg.twitter_consumer_key,
    consumer_secret: cfg.twitter_consumer_secret,
    access_token_key: cfg.twitter_access_token_key,
    access_token_secret: cfg.twitter_access_token_secret
});

//Get image url of latest tweet from Archillect
function getArchMedia() {
    return new Promise(function(resolve,reject){
        log("Getting latest archillect tweet...");
        tclient.get("users/show", {screen_name:"Archillect"},function(error, tweets) {
            if (error) reject(error);
            else {
                let i = tweets.status.entities.media[0].media_url;
                log("Sucessfully acquired latest media. Content:"+i);
                resolve(i);
            }
        });
    });
}

//Set Discord Avatar every 10mins
function main() {
    setInterval(
        function() {
            let avatar = getArchMedia();
            avatar.then(function(result) {
                if (!result) return log("Could not get latest media tweet! Trying again in 10mins.");
                else {
                    dclient.user.setAvatar(result)
                        .then(log("Sucessfully set avatar."))
                        .catch(console.error);
                }
            });
    }, 600000);
}

main();
dclient.on("ready", () => log("Logged into Discord User:"+dclient.user.tag+"\n Note: The intial avatar change will take place after 10mins."));
dclient.login(cfg.discord_token);