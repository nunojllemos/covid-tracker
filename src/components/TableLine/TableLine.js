import React from "react";
import PlusCases from "../PlusCases/PlusCases";

const TableLine = ({
	key,
	count,
	country,
	themeColorScheme,
	numberWithCommas,
}) => {
	let content = (
		<div
			key={key}
			style={{
				backgroundColor: `${themeColorScheme.tableLine}`,
				color: `${themeColorScheme.tableText}`,
			}}
			className='table-line-container'>
			<div className='number'>{count}</div>
			<div className='flag-name-container'>
				<img src={country.countryInfo.flag} alt='' />
				<p>{country.country}</p>
			</div>
			<PlusCases
				info={country.active}
				infoToday={country.critical}
				themeColorScheme={themeColorScheme}
				numberWithCommas={numberWithCommas}
			/>
			<PlusCases
				info={country.recovered}
				infoToday={country.todayRecovered}
				themeColorScheme={themeColorScheme}
				numberWithCommas={numberWithCommas}
			/>
			<PlusCases
				info={country.deaths}
				infoToday={country.todayDeaths}
				themeColorScheme={themeColorScheme}
				numberWithCommas={numberWithCommas}
			/>
			<PlusCases
				info={country.cases}
				infoToday={country.todayCases}
				themeColorScheme={themeColorScheme}
				numberWithCommas={numberWithCommas}
			/>
		</div>
	);

	return content;
};

export default TableLine;
