import React from "react";

const GlobalStatCard = ({
	themeColorScheme,
	title,
	todayData,
	yesterdayData,
	signal,
	text,
	numberWithCommas,
}) => {
	let content = (
		<div className='global-stats'>
			<h3
				style={{ color: `${themeColorScheme.title}` }}
				className='global-stats-title'>
				{title}
			</h3>
			<h4
				style={{ color: `${themeColorScheme.stats}` }}
				className='global-stats-today'>
				{numberWithCommas(todayData)}
			</h4>
			<div className='global-stats-yesterday'>
				<div
					style={{
						backgroundColor: `${themeColorScheme.title}`,
						color: `${themeColorScheme.plusStats}`,
					}}
					className='global-stats-plus-cases'>
					{signal}
					{numberWithCommas(yesterdayData)}
				</div>
				<p style={{ color: `${themeColorScheme.stats}` }}>{text}</p>
			</div>
		</div>
	);

	return content;
};

export default GlobalStatCard;
