const console = require('./console');

(() => {
    window.addEventListener('load', () => {
        console.log('Version ' + VERSION)
        bodyObserver.observe(document.body, observerOptions);
    });
})();

const bodyObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            try{
                if(node instanceof HTMLElement){
                    const skipButton = node.querySelector('button[data-uia="player-skip-intro"]');
                    if(skipButton){
                        console.log('Skip button seen, clicking...');
                        skipButton.style.visible = true;
                        skipButton.querySelector('.ltr-18i00qw').innerHTML = "Skipping...";
                        setTimeout(skipButton.click(), 1000);
                    }
                }
            }catch (error){
                console.warn(error);
            }
        });
    });
});
const observerOptions = {
    subtree: true,
    childList: true
};

