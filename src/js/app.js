import { TweenMax } from 'gsap';
import Tracking from './utils/tracking';

const staggerFrom = {
  opacity: 0,
  y: 45,
  ease: 'easeInOut',
  scale: .95
};

const staggerTo = {
  opacity: 1,
  y: 0,
  scale: 1
};

class App {
  constructor() {
    this.setInternals();

    this.setScene();

    this.initTracking();
  }

  initTracking() {
    new Tracking();
  }

  setScene() {
    TweenMax.staggerFromTo(this.staggerElms, 1, staggerFrom, staggerTo, .1);
  }

  setInternals() {
    this.staggerElms = document.querySelectorAll('.stagger-up');
  }
}

new App();
