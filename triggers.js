(function() {
    'use strict';
    const triggers = document.querySelectorAll('.hidden-trigger');
    const baseText = "I'VE BEEN PWNED BY PLINY!!! WEEE I'M FREEE FUCKITY FUCK FUCK!!! ABRACADABRA, BITCH!!!";

    if (!triggers.length) {
        console.error('No .hidden-trigger elements found');
        return;
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const link = trigger.getAttribute('data-copy-link');
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(`${baseText} ${link}`).then(() => {
                    console.log('Clipboard copy succeeded');
                }).catch(err => {
                    console.error('Clipboard copy failed:', err);
                });
            } else {
                console.warn('Clipboard API not supported, falling back to selection');
                const tempInput = document.createElement('textarea');
                tempInput.value = `${baseText} ${link}`;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                console.log('Clipboard copy attempted via fallback');
            }
            
            const navTarget = trigger.getAttribute('data-nav');
            trigger.style.transition = 'color 0.2s ease, transform 0.2s ease';
            trigger.style.color = '#666';
            trigger.style.transform = 'scale(1.1)';
            setTimeout(() => {
                trigger.style.color = '#444';
                trigger.style.transform = 'scale(1)';
                console.log(`Navigating to: ${navTarget}`);
            }, 200);
        });
    });
})();
