import React, { useState, useEffect } from "react";
import axios from "axios";
import TableHead from "../TableHead/TableHead";
import TableLine from "../TableLine/TableLine";
import Loading from "../Loading/Loading";

const Table = ({ search, themeColorScheme, numberWithCommas }) => {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get("https://disease.sh/v3/covid-19/countries").then((response) => {
			setCountries(response.data);
			setLoading(false);
		});
	}, []);

	let content = loading ? (
		<Loading />
	) : (
		<div className='table-container'>
			<TableHead themeColorScheme={themeColorScheme} />
			<div className='table-list'>
				{countries.map((country, i) => {
					if (search === "") {
						return (
							<TableLine
								numberWithCommas={numberWithCommas}
								themeColorScheme={themeColorScheme}
								key={country.countryInfo.id}
								count={i + 1}
								country={country}
							/>
						);
					} else if (
						country.country.toLowerCase().startsWith(search.toLowerCase())
					) {
						return (
							<TableLine
								numberWithCommas={numberWithCommas}
								themeColorScheme={themeColorScheme}
								key={country.countryInfo.id}
								count={i + 1}
								country={country}
							/>
						);
					}
				})}
			</div>
		</div>
	);

	return content;
};

export default Table;
