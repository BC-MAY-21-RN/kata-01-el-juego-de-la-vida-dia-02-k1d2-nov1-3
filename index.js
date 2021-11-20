'use strict';
/*
  Co-authored-by: HugoCamposL <hugo.antonio.campos@gmail.com>
  Co-authored-by: Javier-Barreto <javierbarretocp@gmail.com>
  Co-authored-by: danthek <abraham8507@gmail.com>
  Co-authored-by: Hugoneytor <halvarez0@ucol.mx>
  Co-authored-by: IanMartinez <19460200@colima.tecnm.mx>
*/

const Grid = require("./src/models/Grid");

const grid = new Grid(4, 4);

grid.createArray();
grid.printGrid();
grid.newGrid();
grid.printGrid();
