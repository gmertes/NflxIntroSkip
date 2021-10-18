Netflix Intro Skip (NflxIntroSkip)
-------------
A browser extension that does one thing and one thing only: automatically skip show intros on Netflix. 

Compatible with Chrome and Firefox.

Features
---------
- The best at what it does: automatically click on the Skip Intro button in Netflix
- Install and forget, there's no configuration
- Extremely small footprint and zero overhead, only contains the absolute bare minimum to perform its function
- No analytics
- Free and open source

Build
------------
Requires Node.js. Output is in the `build` directory.
```
git clone https://github.com/gmertes/NflxIntroSkip.git
cd NflxIntroSkip
npm install
npm run build
```

How it works
------
The extension works as a content-script that monitors changes in the DOM using `MutationObserver` and looks for the appearance of the Skip Intro button. If it finds it, it evokes `click()` on it. That's it. 

Typicaly the Skip Intro button will appear in the DOM before it is visible on screen, so the intro may be skipped before you even see the button.

Notes
------
- If Netflix doesn't show the Skip Intro button, the extension can't click on it. This will be the case if you play the first episode of a show. For subsequent episodes the button will typically appear and the extension will work normally.
- The extension works fine alongside other Netflix-enhancing extensions (such as [NflxMultiSubs](https://github.com/gmertes/NflxMultiSubs)).
- It should work for all languages.
- I made this extension because I have no need for all the other functions that other extensions provide, I just wanted something that skips intros. It is therefore highly unlikely that I will add additional functionality to this extension.
- If it doesn't work, please open an Issue and provide as much details as you can.