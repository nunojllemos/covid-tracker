import React from "react";

const AboutBlobBack = ({ theme }) => {
	let content = (
		<svg
			className='about-blob-back'
			width='784'
			height='734'
			viewBox='0 0 784 734'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M691.351 358.416C733.634 412.373 743.002 484.35 706.643 518.757C670.073 553.433 588.197 550.002 528.858 550.784C470.093 551.583 433.712 556.042 394.669 551.908C355.263 547.488 312.983 534.744 267.429 511.192C222.085 487.371 172.891 452.725 132.773 403.5C92.2901 353.991 60.5189 289.619 68.4998 241.215C76.6914 192.543 124.846 159.57 179.992 161.141C235.291 163.266 298.52 200.235 352.365 217.704C406.574 235.459 452.338 234.015 512.923 251.127C573.508 268.238 649.068 304.46 691.351 358.416Z'
				fill={theme === "light" ? "#4190C2" : "#CD494A"}
			/>
		</svg>
	);

	return content;
};

export default AboutBlobBack;
