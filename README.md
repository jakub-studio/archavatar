# ArchAvatar

This is a little script I wrote that sets your discord avatar to [@Archillects](https://twitter.com/archillect) tweets.
> Yes, selfbots are officially banned. However, you can see my stance on the topic [here](https://github.com/RayzrDev/SharpBot/issues/116#issuecomment-335036210).

## Usage
### Requirements
- `node` ([Windows](https://nodejs.org/en/download/current/) | [Linux](https://nodejs.org/en/download/package-manager/) | [macOS](https://nodejs.org/en/download/current/)) (make sure to get Node 8.)

### Installing
#### The automagically way (Windows only)
Run the install.bat file and it'll set up everything for you.
#### The not-so-automagically way (All OS's)
Open a terminal window within the scripts directory and run the following command: `npm i`
This should install the script's dependencies.

### Getting your secret secret tokens and making the cfg.json.

#### Discord Token:
0. Open the Discord application
1. Hit `CTRL+SHIFT+I` (`CMD+ALT+I` on macOS) to bring up the Developers Console
> If you already see the `Application` tab, you can skip step 2
2. At the top, click on the arrow pointing to the right
3. Click `Application`
4. Go to `Local Storage` under the `Storage` section
5. Click on `https://discordapp.com`
6. At the bottom of the list, the last key should be `token`
7. Copy the value on the right side (omitting the quotes)

#### Twitter App Tokens:
0. Go to the [twitter apps page](https://apps.twitter.com/).
1. Click the Create New App button.
2. Fill in the details, call it whatever you wish. You can leave out Callback URL.
> The URL can be made up, doesn't have to be real.
3. Accept the dev agreement and click Create your Twitter Application
4. Now your twitter app should be complete, head over to the `Keys and Access Tokens` tab.
5. Your consumer keys should be already generated. You now need to add your account to the app. Click `Create my access token` under Your Access Token.
6. You should now have 4 entrys of random numbers on your screen. These will need to go in your (config) cfg.json

#### Creating the config file.
0. Copy and paste the cfg.json.example file in the root directory.
1. Rename it to `cfg.json`.
2. Open the file and you should see 5 blank entries. Your Discord token and Twitter API keys have to go in here.
3. Make sure not to remove the quotation marks from either side, once your done, save the file.

### Running the script.
Once you have your cfg.json set up, its time to run the script.

#### The windows only way.
Hit run.bat and off you go!

#### All other OS's way.
Open up a terminal window in the directory and you can use either of the following commands
`npm start`
or
`node index.js`
Both will achieve the same thing.