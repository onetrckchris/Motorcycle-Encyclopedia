import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Navmenu from './components/Navmenu';
import Landing from './components/Landing';
import Gallery from './components/gallery/Gallery';
import NewMotorcycleForm from './components/add-motorcycle/NewMotorcycleForm';

import './App.css';

function App() {
	return (
		<Container>
			<Navbar />
			<RowContainer>
				<Navmenu />
				<Route exact path="/" component={Landing} />
				<Route exact path="/gallery" component={Gallery} />
				<Route exact path="/add-motorcycle" component={NewMotorcycleForm} />
			</RowContainer>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-image: url("https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/future-vehicles/electric/global/hero-electric-livewire.jpg");
	background-size: 100%;
`;

const RowContainer = styled.div`
	display: flex;
`;

export default App;
