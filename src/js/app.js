import { TimelineLite } from 'gsap';

const staggerFrom = {
  opacity: 0,
  y: 25,
  ease: 'easeInOut'
};

const staggerTo = {
  opacity: 1,
  y: 0,
};

class App {
  constructor() {
    this.setInternals();

    this.setScene();
  }

  setScene() {
    new TimelineLite()
      .staggerFromTo(this.staggerElms, .8, staggerFrom, staggerTo, .1)
  }

  setInternals() {
    this.staggerElms = document.querySelectorAll('.stagger-up');
  }
}

new App();
