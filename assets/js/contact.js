const form = document.getElementById('query-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  })
  .then(res => res.text())
  .then(data => alert(data))
  .catch(() => alert('Oops! Something went wrong. Please try again later.'));
});
