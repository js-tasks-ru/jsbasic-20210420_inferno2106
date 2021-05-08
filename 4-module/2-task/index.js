function makeDiagonalRed(table) {
  Array.from(table.rows).forEach((item, trIndex) => {
    Array.from(item.cells).forEach((item, tdIndex) => {
      if (tdIndex === trIndex) item.style.backgroundColor = "red";
    });
  });
}
