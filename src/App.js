import React, { useState } from "react";
import "./style/css/main.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
	const [theme, setTheme] = useState("light");

	const themeColorScheme = {
		background: theme === "light" ? "#FFF" : "#263859",
		navigation: theme === "light" ? "#3F8EC0" : "#1A2843",
		tab: theme === "light" ? "#C6E3F5" : "#FF6768",
		tabTitle: theme === "light" ? "#115A89" : "#ECB7B7",
		logo: theme === "light" ? "#FFF" : "#FF6768",
		title: theme === "light" ? "#115A89" : "#FF6768",
		text: theme === "light" ? "#000" : "#FFF",
		links: theme === "light" ? "#3F8EC0" : "#FF6768",
		stats: theme === "light" ? "#3F8EC0" : "#ECB7B7",
		plusStats: theme === "light" ? "#FFF" : "#1A2843",
		search: theme === "light" ? "#C8C8C8" : "#FFF",
		searchText: theme === "light" ? "#115A89" : "#FF6768",
		tableHead: theme === "light" ? "#115A89" : "#FF6768",
		tableLine: theme === "light" ? "#F3F3F3" : "#1A2843",
		tableText: theme === "light" ? "#115A89" : "#FFF",
		blobBack: theme === "light" ? "#4190C2" : "#F66668",
		blobFront: theme === "light" ? "#54A8DF" : "#ECB7B7",
		womanShirt: theme === "light" ? "#84C6F1" : "#FF7B7C",
		manShirt: theme === "light" ? "#3F8EC0" : "#DB5657",
	};

	let content = (
		<Router>
			<div
				className='app-container'
				style={{
					backgroundColor: `${themeColorScheme.background}`,
				}}>
				<Header
					themeColorScheme={themeColorScheme}
					theme={theme}
					setTheme={setTheme}
				/>
				<div className='container'>
					<Route exact path='/'>
						<Home theme={theme} themeColorScheme={themeColorScheme} />
					</Route>
					<Route path='/about'>
						<About theme={theme} themeColorScheme={themeColorScheme} />
					</Route>
					<Footer themeColorScheme={themeColorScheme} />
				</div>
			</div>
		</Router>
	);

	return content;
};

export default App;
