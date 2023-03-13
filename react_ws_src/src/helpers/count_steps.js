import check_win_condition from './check_win_condition'
import get_empty_cells from './get_empty_cells'

/**
 * count_steps
 * @param {Record<string, "x" | "o">} cell_vals 
 * @param {"x" | "o"} turn // will indicate if simulating X (true) or O (false)
 * @param {number} difficulty // will decide how deep we want the AI to predict
 * @returns the potential value of the current board 
 */
const count_steps = (cell_vals, turn, difficulty) => {
  // check if a win condition has been met
  const set = check_win_condition(cell_vals);
  
  // if so, assign the value of the path based on how many steps it has taken to reach
  const round = Object.values(cell_vals).filter((c) => c === turn).length
  if (set) return turn === "o" ? 5 - round : round - 5;

  const available_cells = get_empty_cells(cell_vals);
  // check if the game is a draw
  if (!available_cells || !available_cells.length) return 0;

  // otherwise, try to run down the open sub paths to find their values
  const paths = available_cells.map((cell) => {
    return Object.assign({}, cell_vals, { [cell]: turn })
  })

  // assign a max value to the steps, for the initial evaluation 
  let steps = turn === "o" ? 42 : -42;

  // if difficulty is still positive and we want to dig deeper,
  if (difficulty > 0)
    // create all the path with the possible next steps
    for (const path of paths) {
      // get the variant potential value
      const step_variant = count_steps(path, turn === "x" ? "o" : "x", difficulty - 1);

      // if X shows an improvement for a variant on its turn, choose that variant value
      if (turn === "x" && step_variant > steps)
        steps = step_variant;
      
      // same for O, in reverse
      if (turn === "o" && step_variant < steps)
        steps = step_variant;
    }

  return steps;

}

export default count_steps;