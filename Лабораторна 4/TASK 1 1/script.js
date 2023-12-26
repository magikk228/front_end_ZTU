function createTable(m, n) {

    var table = document.createElement('table');

    // Створюємо рядки та стовпці
    for (var i = 0; i < m; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < n; j++) {
            var cell = document.createElement('td');
            row.appendChild(cell);

            // Встановлюємо стилі бордерів
            cell.style.border = '1px solid black';
            if (i === 0) {
                // Горизонтальний бордер для першого рядка
                cell.style.borderTop = '2px solid black';
            }
            if (j === 0) {
                // Вертикальний бордер для першого стовпця
                cell.style.borderLeft = '2px solid black';
            }
        }
        table.appendChild(row);
    }

    document.body.appendChild(table);
}

createTable(3, 4);