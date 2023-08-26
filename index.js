"use strict";

(function() {

  window.addEventListener('load', init);

  const cPalette = ['#F4B942', '#9E2A2B', '#6A994E'];

  // The length of the text 'Pu Thavikulwat'
  const nameLength = 14;

  function init() {
    qs('.overlay').style.backdropFilter = `blur(${15}px)`;
    setTimeout(() => {
      qs('.overlay').style.backdropFilter = `blur(${1}px)`;
    }, 1000);
    // qs('.overlay').style.transition = 'ease 0.3s';

    window.addEventListener('scroll', handleScrollBehavior);
    alternateColorText();
  }

  function alternateColorText() {
    for (let i = 0; i < 1000; i++) {
      console.log('run');
      for (let j = 1; j <= nameLength; j++) {
        let txtString = 'txt-' + j;
        setTimeout(() => {
          id(txtString).style.color = cPalette[Math.floor(Math.random() * (cPalette.length + 1))];
          console.log('index = ' + Math.floor(Math.random() * 7));
        }, i * 100 + j * 100);
        // id(txtString).style.color = cPalette[Math.floor(Math.random() * 7)];
      }
    }
  }

  function handleScrollBehavior() {
    let blurValue = 0;
    if (getScrollPercent() < 5) {
      blurValue = 1;
    } else if (getScrollPercent() >= 5) {
      blurValue = 4;
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