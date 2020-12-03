import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import GlobalStatCard from "../GlobalStatCard/GlobalStatCard";

const Global = ({ themeColorScheme, numberWithCommas }) => {
	const [globalData, setGlobalData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get("https://disease.sh/v3/covid-19/all").then((response) => {
			setGlobalData(response.data);
			setLoading(false);
		});
	}, []);

	let content = (
		<section className='global-container'>
			<div
				style={{ borderBottom: `2px solid ${themeColorScheme.tab}` }}
				className='global-tab-container'>
				<div
					style={{ backgroundColor: `${themeColorScheme.tab}` }}
					className='global-tab'>
					<h2 style={{ color: `${themeColorScheme.tabTitle}` }}>
						global stats
					</h2>
				</div>
			</div>
			<div className='global-stats-container'>
				{loading ? (
					<Loading />
				) : (
					<>
						<GlobalStatCard
							numberWithCommas={numberWithCommas}
							themeColorScheme={themeColorScheme}
							title={"Active"}
							text={"are critical"}
							yesterdayData={globalData.critical}
							todayData={globalData.active}
						/>
						<GlobalStatCard
							numberWithCommas={numberWithCommas}
							themeColorScheme={themeColorScheme}
							title={"Recovered"}
							text={"from yesterday"}
							signal={globalData.todayRecovered > 0 ? "+" : "-"}
							yesterdayData={globalData.todayRecovered}
							todayData={globalData.recovered}
						/>
						<GlobalStatCard
							numberWithCommas={numberWithCommas}
							themeColorScheme={themeColorScheme}
							title={"Deaths"}
							text={"from yesterday"}
							signal={globalData.todayDeaths > 0 ? "+" : "-"}
							yesterdayData={globalData.todayDeaths}
							todayData={globalData.deaths}
						/>
						<GlobalStatCard
							numberWithCommas={numberWithCommas}
							themeColorScheme={themeColorScheme}
							title={"Total Cases"}
							text={"from yesterday"}
							signal={globalData.todayCases > 0 ? "+" : "-"}
							yesterdayData={globalData.todayCases}
							todayData={globalData.cases}
						/>
					</>
				)}
			</div>
		</section>
	);

	return content;
};

export default Global;
