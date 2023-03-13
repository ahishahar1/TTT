jest.unmock('../check_win_condition');
import check_win_condition from '../check_win_condition'

const exm_obj = {
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

describe('check the win conditions', () => {
	it('check the win conditions and returns the winning set', () => {
		expect(check_win_condition(Object.assign({}, exm_obj, {"c3": "x"}))).toEqual([ 'c1', 'c2', 'c3' ]);
		expect(check_win_condition(Object.assign({}, exm_obj, {"c4": "o"}))).toEqual([ 'c4', 'c5', 'c6' ]);
		expect(check_win_condition(Object.assign({}, exm_obj, {"c7": "o"}))).toEqual(null);
	});

});





