/*! Simple transfert for title contents into data-tooltip attributes by cara-tm.com, MIT license. */

(function(window) {

    'use strict';

    // Verifies if querySelectorAll is supported by the browser
    if (document.querySelectorAll) {
        // Add a new class attribute within the html tag when this script is ready
        document.querySelector('html').classList.add('tooltips');

        // The variable 't' is an array of all HTML elements with a 'data-tooltip' attribute
        var t = document.querySelectorAll('.tooltip');

        // Loop into all elements found
        for (var i = 0; i < t.length; i++) {

            if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) || document.body.clientWidth >= 680) {
                // Stores the 'title' attribute content 
                var o = t[i].getAttribute('title');

                // Transferts the 'title' content into a new 'aria-label' attribute attached to the current HTML element
                t[i].setAttribute('aria-label', o);
                // Adds some attributes for accessibility
                t[i].setAttribute('aria-haspopup', 'true');
                t[i].setAttribute('role', 'link');

                // Removes the 'title' attribute into corresponding elements
                t[i].removeAttribute('title');
            }

        };
    };

})();
