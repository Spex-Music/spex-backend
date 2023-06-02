'use strict';


/**
 * Callback for click events on menu icon
 *
 * @param {Event} event
 * @return {void}
 */
function clickMenuIcon(event) {
  console.log(event.type);
  navOverlay.style.display = 'flex';
}

/**
 * Callback for click events on the nav overlay
 *
 * @param {Event} event - The event object.
 * @return {void}
 */
function clickNavOverlay(event) {
  console.log(event.type);
  navOverlay.style.display = 'none';
}

const navOverlay = document.getElementById('nav-overlay');
navOverlay && navOverlay.addEventListener('click', clickNavOverlay );

const menuIcon = document.getElementById('menu-icon');
menuIcon && menuIcon.addEventListener('click', clickMenuIcon );

