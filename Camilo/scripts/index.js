const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});
$(document).ready(function() {

  //progress bar
  let containerA = document.getElementById("circleA");

  let circleA = new ProgressBar.Circle(containerA, {

      color: '#2d84e7',
      strokeWidth: 10,
      duration: 3000,
      from: { color: '#ff0000' },
      to: { color: '#2d84e7' },

      step: function(state, circle) {

          circle.path.setAttribute('stroke', state.color);

          let value = Math.round(circle.value() * 850);

          circle.setText(value);

      }

  });

  let containerB = document.getElementById("circleB");

  let circleB = new ProgressBar.Circle(containerB, {

      color: '#2d84e7',
      strokeWidth: 10,
      duration: 3500,
      from: { color: '#ff0000' },
      to: { color: '#2d84e7' },

      step: function(state, circle) {

          circle.path.setAttribute('stroke', state.color);

          let value = Math.round(circle.value() * 500);

          circle.setText(value);

      }

  });

  let containerC = document.getElementById("circleC");

  let circleC = new ProgressBar.Circle(containerC, {

      color: '#2d84e7',
      strokeWidth: 10,
      duration: 4000,
      from: { color: '#ff0000' },
      to: { color: '#2d84e7' },

      step: function(state, circle) {

          circle.path.setAttribute('stroke', state.color);

          let value = Math.round(circle.value() * 10);

          circle.setText(value);

      }

  });

  let containerD = document.getElementById("circleD");

  let circleD = new ProgressBar.Circle(containerD, {

      color: '#2d84e7',
      strokeWidth: 10,
      duration: 4500,
      from: { color: '#ff0000' },
      to: { color: '#2d84e7' },

      step: function(state, circle) {

          circle.path.setAttribute('stroke', state.color);

          let value = Math.round(circle.value() * 5240);

          circle.setText(value);

      }

  });
});