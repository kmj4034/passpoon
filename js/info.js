const travelBeforeEl = document.querySelector('.info .travel-before');
const travelOngoingEl = document.querySelector('.info .travel-ongoing');
const contentsBeforeEl = document.querySelector('.info .contents__before');
const contentsOngoingEl = document.querySelector('.info .contents__ongoing');

travelBeforeEl.addEventListener('click', function () {
  contentsBeforeEl.classList.remove('hide')
  contentsOngoingEl.classList.add('hide')
  travelBeforeEl.classList.add('focused')
  travelOngoingEl.classList.remove('focused')
});
travelOngoingEl.addEventListener('click', function () {
  contentsBeforeEl.classList.add('hide')
  contentsOngoingEl.classList.remove('hide')
  travelBeforeEl.classList.remove('focused')
  travelOngoingEl.classList.add('focused')
});