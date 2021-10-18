const console = require('./console');

(() => {
    window.addEventListener('load', () => {
        console.log('Version', VERSION);
        bodyObserver.observe(document.body, observerOptions);
    });
})();

const observerOptions = {
    subtree: true,
    childList: true
};

const bodyObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
                if(node instanceof HTMLElement){
                    const skipButton = node.querySelector('button[data-uia="player-skip-intro"]');
                    if(skipButton){
                        console.log('Skip button seen, clicking..');
                        // small delay just for visuals
                        setTimeout(function() {
                            try{
                                skipButton.click();
                            }catch (error) {
                                console.warn(error);
                            }}, 800);
                        try{
                            skipButton.querySelector('span').innerHTML = "Skipping...";
                        }catch (error) {
                            console.warn(error);
                        }
                    }
                }
        });
    });
});

