const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
});
