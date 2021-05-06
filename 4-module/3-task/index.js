function highlight(table) {
  let tr = Array.from(table.rows);

  (function makeAvailable() {
    for (let i = 1; i < tr.length; i++) {
      if (tr[i].cells[3].dataset.available === "true") {
        tr[i].classList.add("available");
      } else if (tr[i].cells[3].dataset.available === "false") {
        tr[i].classList.add("unavailable");
      } else {
        tr[i].setAttribute("hidden", "");
      }
    }
  })();

  (function specifyGender() {
    for (let i = 1; i < tr.length; i++) {
      tr[i].cells[2].textContent === "m"
        ? tr[i].classList.add("male")
        : tr[i].classList.add("female");
    }
  })();

  (function lineThrough() {
    for (let i = 1; i < tr.length; i++) {
      if (Number(tr[i].cells[1].textContent) < 18)
        tr[i].style = "text-decoration: line-through";
    }
  })();
}