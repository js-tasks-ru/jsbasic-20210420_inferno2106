function hideSelf() {
  document.querySelector(".hide-self-button").addEventListener("click", hideButton, { once: true });
    function hideButton() {
      this.hidden = true;
    }
}
