// "use strict";

// "use strict";

// !(function(d){

//   let itemClassName = 'carousel-photo';
//   let items = qsa('.carousel-photo');
//   console.log(items);
//   let totalItems = items.length;
//   let slide = 0;
//   let moving = true;

//   // Set classes
//   function setInitialClasses() {
//     // Targets the previous, current, and next items
//     // This assumes there are at least three items.
//     items[totalItems - 1].classList.add('prev');
//     items[0].classList.add('active');
//     items[1].classList.add('next');
//     console.log('set initial class');
//   }

//   // Set event listeners
//   function setEventListeners() {
//     let next = qsa('.carousel-button-next')[0],
//         prev = qsa('.carousel-button-prev')[0];
//     next.addEventListener('click', moveNext);
//     prev.addEventListener('click', movePrev);
//     console.log('set event listener');
//   }

//   // Next navigation handler
//   function moveNext() {
//     console.log('moveNext called');
//     // Check if moving
//     if (!moving) {
//       // If it's the last slide, reset to 0, else +1
//       if (slide === (totalItems - 1)) {
//         slide = 0;
//       } else {
//         slide++;
//       }
//       // Move carousel to updated slide
//       moveCarouselTo(slide);
//     }
//   }

//   // Previous navigation handler
//   function movePrev() {
//     console.log('movePrev called');
//     // Check if moving
//     if (!moving) {
//       // If it's the first slide, set as the last slide, else -1
//       if (slide === 0) {
//         slide = (totalItems - 1);
//       } else {
//         slide--;
//       }
//       // Move carousel to updated slide
//       moveCarouselTo(slide);
//     }
//   }

//   function disableInteraction() {
//     console.log('disabling interaction');
//     // Set 'moving' to true for the same duration as our transition.
//     // (0.5s = 500ms)
//     moving = true;
//     // setTimeout runs its function once after the given time
//     setTimeout(function(){
//       moving = false
//     }, 500);
//   }

//   function moveCarouselTo(slide) {
//     console.log('moving carousel')
//     // Check if carousel is moving, if not, allow interaction
//     if(!moving) {
//       // temporarily disable interactivity
//       disableInteraction();
//       // Update the "old" adjacent slides with "new" ones
//       var newPrevious = slide - 1,
//           newNext = slide + 1,
//           oldPrevious = slide - 2,
//           oldNext = slide + 2;
//       // Test if carousel has more than three items
//       if ((totalItems - 1) > 3) {
//         // Checks and updates if the new slides are out of bounds
//         if (newPrevious <= 0) {
//           oldPrevious = (totalItems - 1);
//         } else if (newNext >= (totalItems - 1)){
//           oldNext = 0;
//         }
//         // Checks and updates if slide is at the beginning/end
//         if (slide === 0) {
//           newPrevious = (totalItems - 1);
//           oldPrevious = (totalItems - 2);
//           oldNext = (slide + 1);
//         } else if (slide === (totalItems -1)) {
//           newPrevious = (slide - 1);
//           newNext = 0;
//           oldNext = 1;
//         }
//         // Now we've worked out where we are and where we're going,
//         // by adding/removing classes we'll trigger the transitions.
//         // Reset old next/prev elements to default classes
//         items[oldPrevious].className = itemClassName;
//         items[oldNext].className = itemClassName;
//         // Add new classes
//         items[newPrevious].className = itemClassName + " prev";
//         items[slide].className = itemClassName + " active";
//         items[newNext].className = itemClassName + " next";
//       }
//     }
//   }

//   /**
//    * Returns all of the selectors
//    * @param {selector} all of the selectors selected
//    * @returns {selector} all of the selectors
//    */
//   function qsa(selector) {
//     return d.querySelectorAll(selector);
//   }

//   function initCarousel() {
//     setInitialClasses();
//     setEventListeners();
//     // Set moving to false so that the carousel becomes interactive
//     moving = false;
//   }

//   initCarousel();

// }(document));

"use strict";

(function() {

  window.addEventListener('load', init);

  let photos = qsa('.carousel-photo');
  // Stores the html element that contains the current photo
  let currentPhoto = getInitialElement(photos);
  console.log('current photo = ', currentPhoto);
  // n = how many photos are there
  let n = photos.length;

  let indicators = qsa('.indicator')

  function init() {
    let nextBtn = qs('.carousel-button-next');
    let prevBtn = qs('.carousel-button-prev');

    nextBtn.addEventListener('click', goNext);
    prevBtn.addEventListener('click', goPrev);
  }

  function updateCurrentIndicator() {
    console.log('update curr indicator')

    // Remove active class from previous indicator
    let activeIndicator = getActiveElement(indicators);
    if (activeIndicator !== null) {
      activeIndicator.classList.remove('active');
    }

    // Add active class to current indicator
    let currIndex = parseInt(currentPhoto.id);
    console.log('currIndex = ' + currIndex)
    indicators[currIndex - 1].classList.add('active');

    removeInitialClass(getInitialElement(indicators));
  }

  function goNext() {
    let nextPhoto = (parseInt(currentPhoto.id) % n) + 1;
    console.log('currentPhoto = ' + currentPhoto.id);
    console.log('nextPhoto = ' + nextPhoto);
    currentPhoto.classList.remove('active');
    photos[nextPhoto - 1].classList.add('active');

    currentPhoto = photos[nextPhoto - 1];
    removeInitialClass(getInitialElement(photos));
    updateCurrentIndicator();
  }

  function goPrev() {
    console.log(currentPhoto);
    console.log(parseInt(currentPhoto.id));
    let oldPhoto = (parseInt(currentPhoto.id));

    let nextPhoto;
    if (oldPhoto === 1) {
      nextPhoto = n;
    } else {
      nextPhoto = oldPhoto - 1;
    }
    console.log('currentPhoto = ' + oldPhoto);
    console.log('nextPhoto = ' + nextPhoto);
    currentPhoto.classList.remove('active');
    photos[nextPhoto - 1].classList.add('active');

    currentPhoto = photos[nextPhoto - 1];
    removeInitialClass(getInitialElement(photos));
    updateCurrentIndicator();
  }

  function getActiveElement(nodeList) {
    for (let i = 0; i < nodeList.length; i++) {
      if (nodeList[i].classList.contains('active')) {
        console.log('active photo = ');
        console.log(nodeList[i]);
        return nodeList[i];
      }
    }
    return null;
  }

  function getInitialElement(nodeList) {
    for (let i = 0; i < nodeList.length; i++) {
      if (nodeList[i].classList.contains('initial')) {
        console.log('initial photo = ', nodeList[i]);
        return nodeList[i];
      }
    }
    return null;
  }

  function removeInitialClass(element) {
    if (element !== null) {
      console.log('element = ', element);
      element.classList.remove('initial');
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

  /**
     * Returns all of the selectors
     * @param {selector} all of the selectors selected
     * @returns {selector} all of the selectors
     */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

})();