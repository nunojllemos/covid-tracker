import React from "react";

const PlusCases = ({
	info,
	infoToday,
	textInfo,
	numberWithCommas,
	themeColorScheme,
}) => {
	let content = (
		<div className='total-cases'>
			<p>{numberWithCommas(info)}</p>
			<p
				style={{
					backgroundColor: `${themeColorScheme.tableHead}`,
					display: `${infoToday == 0 ? "none" : "block"}`,
				}}
				className='active-plus-data'>
				{infoToday > 0 ? "+" : "-"} {numberWithCommas(infoToday)}
			</p>
		</div>
	);

	return content;
};

export default PlusCases;
