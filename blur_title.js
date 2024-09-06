
document.addEventListener('DOMContentLoaded', () => {
    const scrollableDiv = document.querySelector('.main-cont');
    const blurTargetA = document.querySelector('.name-flex-cont');
    const blurTargetB = document.querySelector('.scroll-tooltip-cont');

    scrollableDiv.addEventListener('scroll', () => {
        console.log('scroll')
        // Get the scroll position
        const scrollTop = scrollableDiv.scrollTop;
        
        // Get the maximum scrollable height
        const maxScroll = scrollableDiv.scrollHeight - scrollableDiv.clientHeight;

        // Calculate the blur amount based on scroll position
        const blurAmount = (scrollTop / 700) * 10; // Max blur of 10px
        const opacity = 1 - (scrollTop / 700) * 1.5;

        // Apply the blur effect
        blurTargetA.style.filter = `blur(${blurAmount}px)`;
        blurTargetA.style.opacity = opacity;
    
        blurTargetB.style.filter = `blur(${blurAmount}px)`;
        blurTargetB.style.opacity = opacity

    });
});