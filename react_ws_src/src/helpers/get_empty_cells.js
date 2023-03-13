

export default function get_empty_cells(cell_vals) {
  let empty_cells_arr = [];

  for (let i = 1; i <= 9; i++)
    !cell_vals['c' + i] && empty_cells_arr.push('c' + i);

  return empty_cells_arr;
}