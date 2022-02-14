const para = document.querySelector('.button');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('What is your name?');
  para.textContent = `Thank you for visiting my website, ${name}! `;
}