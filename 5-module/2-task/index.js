function toggleText() {
  let text = document.querySelector('#text');
  document.querySelector('.toggle-text-button').addEventListener('click', () => text.toggleAttribute('hidden'));
}
