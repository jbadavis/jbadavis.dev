import { TimelineLite } from 'gsap';
import Tracking from './utils/tracking';

const staggerFrom = {
  opacity: 0,
  y: 40,
};

const staggerTo = {
  opacity: 1,
  y: 0,
  ease: 'easeInOut'
};

class App {
  constructor() {

    this.init();
  }

  initTracking() {
    new Tracking();
  }

  setScene() {
    new TimelineLite()
      .to(this.pageOverlay, .7, { 'opacity': 0, 'ease':  Power2.easeIn })
      .set(this.pageOverlay, { 'z-index': -1 })
      .to(this.headerImage, .7, { 'opacity': 1 })
      .staggerFromTo(this.staggerElms, 1, staggerFrom, staggerTo, .1);
  }

  setInternals() {
    this.pageOverlay = document.querySelectorAll('.jd-page-overlay');
    this.headerImage = document.querySelectorAll('.jd-h-image');
    this.staggerElms = document.querySelectorAll('.stagger-up');
  }

  init() {
    this.setInternals();

    this.setScene();

    this.initTracking();
  }
}

new App();
