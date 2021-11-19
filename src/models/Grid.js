"use strict";
const Cell = require("./Cell");

module.exports = class Grid {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.grid = [];
  }

  createArray() {
    const celula = new Cell();
    for (let fila = 0; fila < this.rows; fila++) {
      this.grid.push([]);
      for (let col = 0; col < this.columns; col++) {
        this.grid[fila][col] = celula.createCells();
      }
    }
  }

  printGrid() {
    console.table(this.grid);
  }
};

