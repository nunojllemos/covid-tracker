import React from "react";

const Footer = ({ themeColorScheme }) => {
	let content = (
		<footer style={{ borderTop: `1px solid ${themeColorScheme.title}` }}>
			<ul>
				<li>
					<p style={{ color: `${themeColorScheme.text}` }}>
						Made with{" "}
						<span style={{ color: `${themeColorScheme.title}` }}>❤</span> by{" "}
						<span>
							<a target='blank' href='https://github.com/nunojllemos'>
								Nuno Lemos
							</a>
						</span>
					</p>
				</li>
				<li style={{}}>
					<p style={{ color: `${themeColorScheme.text}` }}>
						Data from{" "}
						<a target='blank' href='https://github.com/disease-sh/API'>
							Novel CoVID19
						</a>
					</p>
				</li>
			</ul>
		</footer>
	);

	return content;
};

export default Footer;
