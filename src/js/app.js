import $ from 'jquery';
import { TimelineLite } from 'gsap';

class App {
  constructor() {
    this.setInternals();
  }

  setInternals() {
    this.$title = $('.jd-h-title');
  }
}

new App();
