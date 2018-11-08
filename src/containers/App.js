import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {

	componentDidMount(){
		this.props.onRequestRobots();
	}

	render(){
		const { isPending, error } = this.props;

		if(isPending)
		{
			return <h1>LOADING</h1>
		}
		
		if(error !== ''){
			return <h1>{error}</h1>
		}else{
			return this.displayPage();
		}
	}

	displayPage(){
		const {robots, onSearchChange, searchField} = this.props;
		const filteredRobots= robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return (
			<div className="tc">
				<h1 className="f1"> RoboFriends</h1>
				<Searchbox searchChange={onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(App);