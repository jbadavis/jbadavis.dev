import $ from 'jquery';

export default class Tracking {
  constructor() {
    this.setInternals();

    this.initListeners();
  }

  trackClick = (e) => {
    const eventLabel = e.currentTarget.getAttribute('data-tracking-label');

    ga('send', 'event', 'link', 'click', eventLabel);
  }

  setInternals() {
    this.$clicks = $('.ga-track-click');
  }

  initListeners() {
    this.$clicks.on('click', this.trackClick);
  }
}
