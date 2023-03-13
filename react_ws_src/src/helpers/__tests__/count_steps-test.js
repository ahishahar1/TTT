jest.unmock('../get_empty_cells');
jest.unmock('../check_win_condition');
jest.unmock('../count_steps');
import count_steps from '../count_steps';


describe('count steps', () => {
	it('test the win condition is called as expected', () => {
    const game = {
      "c1": "x",
      "c2": "x",
      "c3": "",
      "c4": "",
      "c5": "o",
      "c6": "o",
      "c7": "",
      "c8": "",
      "c9": "",
    }
		expect(count_steps(Object.assign({}, game, {"c3": "x"}), "o", 10)).toBe(3);
		expect(count_steps(Object.assign({}, game, {"c4": "x"}), "o", 10)).toBe(2);
		expect(count_steps(Object.assign({}, game, {"c9": "x"}), "o", 10)).toBe(-2);
		expect(count_steps(Object.assign({}, game, {"c4": "x"}), "o", 2)).toBe(42);
		expect(count_steps(Object.assign({}, game, {"c9": "x"}), "o", 2)).toBe(-2);
	});

  it('check the expected step value is returned', () => {
    const game = {
      "c1": "o",
      "c2": "x",
      "c3": "",
      "c4": "",
      "c5": "",
      "c6": "x",
      "c7": "",
      "c8": "",
      "c9": "",
    }
		expect(count_steps(Object.assign({}, game, {"c3": "o"}), "x", 10)).toBe(2);
		expect(count_steps(Object.assign({}, game, {"c4": "o"}), "x", 10)).toBe(1);
		expect(count_steps(Object.assign({}, game, {"c5": "o"}), "x", 10)).toBe(0);
		expect(count_steps(Object.assign({}, game, {"c7": "o"}), "x", 10)).toBe(-1);
		expect(count_steps(Object.assign({}, game, {"c8": "o"}), "x", 10)).toBe(0);
		expect(count_steps(Object.assign({}, game, {"c9": "o"}), "x", 10)).toBe(2);
		expect(count_steps(Object.assign({}, game, {"c7": "o"}), "x", 2)).toBe(-42);
		expect(count_steps(Object.assign({}, game, {"c8": "o"}), "x", 2)).toBe(-42);
		expect(count_steps(Object.assign({}, game, {"c9": "o"}), "x", 2)).toBe(-42);
	});
  

});





