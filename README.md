<img src="src/icon48.png" height="30"/> NflxIntroSkip (Netflix Intro Skip)
===============
A browser extension that does one thing and one thing only: automatically skip show intros on Netflix.

Compatible with Chrome and Firefox.

Features
---------
- The best at what it does: automatically click on the Skip Intro button in Netflix
- Install and forget, there's no configuration
- Extremely small footprint and zero overhead, only contains the absolute bare minimum to perform its function
- No analytics
- Free and open source

<img src="https://user-images.githubusercontent.com/13658335/137937353-ba20b0c9-fca9-4b6d-9000-d4df15cc056f.png" height="150"/>

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
The extension works as a content-script that monitors changes in the DOM using `MutationObserver` and looks for the appearance of the Skip Intro button. If it finds it, it evokes `click()` on it. There's a tiny delay to show the "Skipping..." text on the button to fancy it up a bit.

Note that means that it does not matter if the intro is started organically, or if you time skip into it. In both cases the extension will skip it as soon as the Skip Intro button appears. There's no mechanic to only skip the intro once per playback.

Notes
------
- If Netflix doesn't show the Skip Intro button, the extension can't click on it. This will be the case for shows with short intros, or if you play the first episode of a show. For subsequent episodes the button will typically appear and the extension will work normally.
- The extension works fine alongside other Netflix-enhancing extensions (such as [NflxMultiSubs](https://github.com/gmertes/NflxMultiSubs)).
- It should work for all languages.
- I made this extension because I have no need for all the extra functions that other extensions provide, I just wanted something that skips intros. It is therefore highly unlikely that I will add additional functionality to this extension.
- If it doesn't work, please open an Issue and provide as much details as you can.