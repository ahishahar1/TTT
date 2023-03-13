import React, {Component} from 'react'

export default class SetGameDifficulty extends Component {

	constructor (props) {
		super(props)

		this.state = {}
	}

//	------------------------	------------------------	------------------------

	render () {
		return (
			<div id='SetGameDifficulty'>

				<h1>Choose game difficulty</h1>

				<button type='submit' onClick={this.selDiffBeginner.bind(this)} className='button medium'><span>Beginner <span className='fa fa-caret-right'></span></span></button>
				
				&nbsp;&nbsp;&nbsp;&nbsp;

				<button type='submit' onClick={this.selDiffContender.bind(this)} className='button medium'><span>Contender <span className='fa fa-caret-right'></span></span></button>

				&nbsp;&nbsp;&nbsp;&nbsp;

				<button type='submit' onClick={this.selDiffChampion.bind(this)} className='button medium'><span>Champion <span className='fa fa-caret-right'></span></span></button>

			</div>
		)
	}

//	------------------------	------------------------	------------------------

	selDiffBeginner() {
		this.props.onSetDiff('beginner')
	}

	selDiffContender () {
		this.props.onSetDiff('contender')
	}
	
	selDiffChampion (e) {
		this.props.onSetDiff('champion')
	}

}
