import React from "react";
import Computer from "../Svgs/Computer";
import AboutBlobBack from "../Svgs/AboutBlobBack";
import AboutBlobFront from "../Svgs/AboutBlobFront";

const About = ({ themeColorScheme, theme }) => {
	let content = (
		<div className='about-container'>
			<div className='about-text'>
				<h2 style={{ color: `${themeColorScheme.title}` }}>About me</h2>
				<div
					style={{ backgroundColor: `${themeColorScheme.title}` }}
					className='dash'></div>
				<p style={{ color: `${themeColorScheme.text}` }}>
					My name is <span>Nuno</span> and I am turning into a frontend
					developer. <br /> More of my projects can be reached{" "}
					<a
						style={{ color: `${themeColorScheme.links}` }}
						target='blank'
						href='https://github.com/nunojllemos'>
						here
					</a>
					.
				</p>
				<h2
					className='about-project-title'
					style={{ color: `${themeColorScheme.title}` }}>
					About the project
				</h2>
				<div
					style={{ backgroundColor: `${themeColorScheme.title}` }}
					className='dash'></div>
				<p style={{ color: `${themeColorScheme.text}` }}>
					This is a project for portfolio. It was developed using Sass and React
					JS. <br /> Code is all available in this{" "}
					<a
						style={{ color: `${themeColorScheme.links}` }}
						target='blank'
						href='https://github.com/nunojllemos/covid-track'>
						repository
					</a>
					.
				</p>
			</div>
			<div className='about-svgs'>
				<AboutBlobBack theme={theme} />
				<AboutBlobFront theme={theme} />
				<Computer theme={theme} />
			</div>
		</div>
	);

	return content;
};

export default About;
