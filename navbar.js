"use strict";

(function() {

  window.addEventListener('load', init);

  function init() {
    id('hamburger-mobile').addEventListener('click', toggleHamburger);
    // detectSafari();
  }

  /**
   * If the browser is Safari, apply color changes because Safari is hella buggy
   * and work won't with backdrop-filter
   */
  function detectSafari() {
    let safariColor = "white";
    // Check if the browser is Safari
    let isSafari = window.safari !== undefined;
    let isIphone = /(iPhone)/i.test(navigator.userAgent);
    // Add the 'safari-background' class to the container if it's Safari
    if (isSafari && isIphone) {
      document.documentElement.style.setProperty("--navbar-background-color", safariColor);
    }
  }

  function toggleHamburger() {
    console.log('toggleHamburger called');
    let style2 = window.getComputedStyle(qs('.navbar-mobile'));
    let navMenu = qs('.navbar-mobile ul');

    if (style2.display === 'none') {
      qs('.navbar-mobile').style.display = 'block';
    } else {
      qs('.navbar-mobile').style.display = 'none';
    }
  }

  /**
 * Returns the element that has the ID attribute with the specified value.
 * @param {string} id - element ID
 * @return {object} DOM object associated with id.
 */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @return {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

})();