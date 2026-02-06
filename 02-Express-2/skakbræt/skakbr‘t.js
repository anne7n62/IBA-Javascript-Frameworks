function opretSkakbræt(størrelse) {
  const table = document.createElement('table');
  table.border = '1'; table.style.borderCollapse = 'collapse';
  let erSort = false;
  for (let rowIndex = 0; rowIndex < størrelse; rowIndex++) {
    const row = table.insertRow();
    for (let cellIndex = 0; cellIndex < størrelse; cellIndex++) {
      const cell = row.insertCell();
      cell.style.backgroundColor = erSort ? 'black' : 'white';
      cell.style.width = cell.style.height = '50px';
      erSort = !erSort;
    }
    if (størrelse % 2 === 0) erSort = !erSort;
  }
  document.body.appendChild(table);
  return table;
}