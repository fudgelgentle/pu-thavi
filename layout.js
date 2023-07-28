// layout.js controls all of the scrolling animation behavior

"use strict";

(function() {

  window.addEventListener('load', init);

  function init() {

    if (window.innerWidth > 700) {
      console.log('not safari.. applying changes');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            // entry.target.classList.remove('show');
          }
        })
      })
      const hiddenElements = qsa('.hide');
      hiddenElements.forEach((element) => observer.observe(element));

      const hiddenElements2 = qsa('.hide-long');
      hiddenElements2.forEach((element) => observer.observe(element));
    }
  }

  /**
   * If the browser is Safari, returns true
   */
  function isSafari() {
    // Check if the browser is Safari
    let isSafari = window.safari !== undefined;
    let isIphone = /(iPhone)/i.test(navigator.userAgent);
    return isSafari && isIphone;
  }

  /**
   * Returns all of the selectors
   * @param {selector} all of the selectors selected
   * @returns {selector} all of the selectors
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }


})();