const burgerMenu = document.getElementById('burger-menu');
const navigation = document.getElementById('navigation');

burgerMenu.addEventListener('click', () => {
  navigation.classList.toggle('active');
});
