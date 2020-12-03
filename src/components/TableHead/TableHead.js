import React from "react";

const TableHead = ({ themeColorScheme }) => {
	return (
		<div
			style={{
				backgroundColor: `${themeColorScheme.tableHead}`,
				color: "#FFF",
			}}
			className='table-line-container'>
			<div className='number'>#</div>
			<div className='country'>Country</div>
			<div className='active'>Active</div>
			<div className='recovered'>Recovered</div>
			<div className='deaths'>Deaths</div>
			<div className='total-cases'>Total Cases</div>
		</div>
	);
};

export default TableHead;
