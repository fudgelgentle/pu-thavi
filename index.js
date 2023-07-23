"use strict";

(function() {

  window.addEventListener('load', init);

  function init() {
    window.addEventListener('scroll', handleScrollBehavior);
  }

  function handleScrollBehavior() {
    let blurValue = 0;
    if (getScrollPercent() < 5) {
      blurValue = 2.5;
    } else if (getScrollPercent() >= 5 && getScrollPercent() < 10) {
      blurValue = 5;
    } else if (getScrollPercent() >= 10 && getScrollPercent() < 15) {
      blurValue = 10;
    } else if (getScrollPercent() >= 15 && getScrollPercent() < 30) {
      blurValue = 15;
    } else if (getScrollPercent() >= 30 && getScrollPercent() < 40) {
      blurValue = 20;
    } else {
      blurValue = 30;
    }
    qs('.overlay').style.backdropFilter = `blur(${blurValue}px)`;
  }

  function getScrollPercent() {
    var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
    let scrollPercent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    console.log('scrollPercent = ' + scrollPercent)
    return scrollPercent;
  }

  function getMaxScrollableHeight() {
    return Math.max(
      document.body.scrollHeight, // Total height including overflow
      document.documentElement.scrollHeight // Total height including scrollable area
    ) - window.innerHeight; // Subtract viewport height
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