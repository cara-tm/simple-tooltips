/*! Simple transfert for title contents into data-tooltip attributes by cara-tm.com, MIT license. */

(function() {

  'use strict';

  // Verify if querySelectorAll is supported by the browser
  if (document.querySelectorAll) {
  
  // The variable t is an object of all HTML elements with a 'data-tooltip' attribute
    var t = document.querySelectorAll('[data-tooltip]');
    
    // Loop for all elements found
  	for (var i = 0; i < t.length; i++) {
    
      // Stores the 'title' attribute content 
  		var o = t[i].getAttribute('title');
      
      // Transferts the 'title' content into a new 'aria-label' attribute attached to the current HTML element
    	t[i].setAttribute('aria-label', o);
      
      // Remove the 'title' attribute into the HTML element
    	t[i].removeAttribute('title');
    };
  };
 
 })();
