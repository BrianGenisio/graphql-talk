// implement slide specific theme loading via data-theme
    
(function () {
    /*jslint loopfunc: true, browser: true*/
    /*globals Reveal*/
    'use strict';

    function SlideChangedHandler (event) {
        var themeCss = document.querySelector('#theme');
        var currentSlide = event.currentSlide;

        // first time called, remember what the default theme is
        if (!SlideChangedHandler.defaultTheme && themeCss) {
            SlideChangedHandler.defaultTheme = themeCss.href;
        }

        var themeName;
        var dataThemeElement = currentSlide.querySelector('[data-theme]');
        if (dataThemeElement) {
            themeName = dataThemeElement.dataset.theme;
        }
        
        var newTheme = themeName ?
            'themes/' + themeName + '.css' :
            SlideChangedHandler.defaultTheme;

        if (themeCss) {
            themeCss.href = newTheme;
        }
    }

    Reveal.addEventListener('slidechanged',  SlideChangedHandler);
})();