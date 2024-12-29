// Basic alert for SOS button
document.querySelectorAll('.feature-card button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Emergency request sent!');
  });
});
