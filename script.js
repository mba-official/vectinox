const navDailoge = document.getElementById('nav-dailoge')
function handleMenu(){
  navDailoge.classList.toggle("hidden")
}

// Toggle Function for FAQs
function toggleAnswer(id) {
  const answer = document.getElementById(`answer-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  
  answer.classList.toggle('hidden');
  icon.classList.toggle('fa-chevron-right');
  icon.classList.toggle('fa-chevron-down'); // Change icon to down arrow when open
}

// -------------------

