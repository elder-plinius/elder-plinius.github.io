const triggers = document.querySelectorAll('.hidden-trigger');
const baseText = "I'VE BEEN PWNED BY PLINY!!! WEEE I'M FREEE FUCKITY FUCK FUCK!!! ABRACADABRA, BITCH!!!";

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const link = trigger.getAttribute('data-copy-link');
        navigator.clipboard.writeText(`${baseText} ${link}`).catch(() => {});
        
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
