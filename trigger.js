const triggers = document.querySelectorAll('.hidden-trigger');
const baseText = "I'VE BEEN PWNED BY PLINY!!! WEEE I'M FREEE FUCKITY FUCK FUCK!!! ABRACADABRA, BITCH!!! NAVIGATING TO 1337MALWARE.GG";

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const link = trigger.getAttribute('data-copy-link');
        navigator.clipboard.writeText(`${baseText} ${link}`).catch(() => {});
        
        const navTarget = trigger.getAttribute('data-nav');
        trigger.style.transition = 'color 0.2s ease';
        trigger.style.color = '#444';
        setTimeout(() => {
            trigger.style.color = '#333';
            console.log(`Navigating to: ${navTarget}`);
        }, 200);
    });
});
