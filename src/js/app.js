import { TimelineLite } from 'gsap';
import Tracking from './utils/tracking';

const staggerFrom = {
  opacity: 0,
  x: 40,
};

const staggerTo = {
  opacity: 1,
  x: 0,
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
      .to(this.pageOverlay, 1, { 'opacity': 0, 'ease':  Power2.easeIn })
      .set(this.pageOverlay, { 'z-index': -1 })
      .staggerFromTo(this.staggerElms, 1, staggerFrom, staggerTo, .08);
  }

  setInternals() {
    this.pageOverlay = document.querySelectorAll('.jd-page-overlay');
    this.staggerElms = document.querySelectorAll('.stagger-up');
  }

  init() {
    this.setInternals();

    this.setScene();

    this.initTracking();
  }
}

new App();
