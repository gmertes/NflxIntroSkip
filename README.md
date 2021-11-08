<img src="src/icon48.png" height="30"/> NflxIntroSkip (Netflix Intro Skip)
===============
![Chrome users](https://img.shields.io/chrome-web-store/users/jiindpkmmoompocmhgnfabfhlhniolpl?label=Chrome%20users)
![Firefox users](https://img.shields.io/amo/users/nflxintroskip?label=Firefox%20users)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate?business=5GY9A82PFY38W&no_recurring=1&currency_code=EUR)

A lightweight browser extension that does one thing and one thing only: automatically skip show intros on Netflix.

Install the extension from the Chrome or Firefox web store:

[<img src="https://user-images.githubusercontent.com/13658335/138092194-303708fb-9a4e-4e3f-a1dc-74baff1e45c9.png" height="59"/>](https://chrome.google.com/webstore/detail/nflxintroskip-netflix-int/jiindpkmmoompocmhgnfabfhlhniolpl)
[<img src="https://user-images.githubusercontent.com/13658335/138086366-8deee659-16c3-4621-b3f0-eaf4cb6ed9ba.png" height="60"/>](https://addons.mozilla.org/en-GB/firefox/addon/nflxintroskip/)

Features
---------
- The best at what it does: automatically click on the Skip Intro button in Netflix
- Install and forget, there's no configuration
- Extremely small footprint and zero overhead, only contains the absolute bare minimum to perform its function
- No analytics
- Free and open source

<img src="https://user-images.githubusercontent.com/13658335/137937353-ba20b0c9-fca9-4b6d-9000-d4df15cc056f.png" alt="screenshot" height="150"/>

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
- If it doesn't work, please open an Issue.

Donate
----
The extension is and will remain free. If you like and want to support my work, donations are welcome.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate?business=5GY9A82PFY38W&no_recurring=1&currency_code=EUR)

BTC: `bc1qx8duq3526zhc2md724ym70qgd4wgadj5dqfuvr`

ETH: `0x02635a2ef80887B0AEBa5a8282AeFAEA401DFCf9`

XLM: `GB5Y7TVH7OBI7MFAT26RZ4TCZRDMVNWXLQH3LPTI2RRB22PRHSDR25BH`
