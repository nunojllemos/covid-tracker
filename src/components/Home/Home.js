import React, { useState } from "react";
import LandPage from "../LandPage/LandPage";
import Global from "../Global/Global";
import Search from "../Search/Search";
import Table from "../Table/Table";

const Home = ({ theme, themeColorScheme }) => {
	const [search, setSearch] = useState("");

	const handleInput = (value) => {
		setSearch(value);
	};

	const numberWithCommas = (x) => {
		const parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		return parts.join(",");
	};

	let content = (
		<>
			<LandPage themeColorScheme={themeColorScheme} />
			<Global
				numberWithCommas={numberWithCommas}
				themeColorScheme={themeColorScheme}
			/>
			<Search
				handleInput={handleInput}
				theme={theme}
				themeColorScheme={themeColorScheme}
			/>
			<Table
				numberWithCommas={numberWithCommas}
				themeColorScheme={themeColorScheme}
				search={search}
			/>
		</>
	);

	return content;
};

export default Home;
