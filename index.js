const spanView = document.querySelector('#spanText');
const cards = document.querySelectorAll('.card')
const colorsSection = document.querySelector('.colorsSection')
let containers = document.querySelectorAll('.containers')
const dropView = document.querySelector('#dropdown')
const guideView = document.querySelector('#guideView')


cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    cards.forEach(otherCard => {
      otherCard.classList.remove('active');
    });

    containers.forEach(container => {
      container.classList.remove('containersActive');
    });

    card.classList.add('active');
    containers[index].classList.add('containersActive');
  });
});

dropView.addEventListener('click', () => {
  if (guideView.classList.contains("guideDefault")) {

    guideView.classList.remove("guideDefault");
    dropView.classList.replace("ph-caret-down", "ph-caret-up")
  } else {

    guideView.classList.add("guideDefault")
    dropView.classList.replace("ph-caret-up", "ph-caret-down")
  }
})
