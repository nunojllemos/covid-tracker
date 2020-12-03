import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Header = ({ theme, setTheme, themeColorScheme }) => {
	const home = useRef();
	const about = useRef();

	const toggleTheme = (theme) => {
		setTheme(theme);
	};

	const setActiveLink = (e) => {
		switch (e.innerText) {
			case "home":
				e.classList.add("active");
				about.current.classList.remove("active");
				break;
			case "about":
				e.classList.add("active");
				home.current.classList.remove("active");
				break;
			default:
				break;
		}
	};

	const toggleThemeButton = (e) => {
		if (e.target.classList.contains("theme-toggle")) {
			e.target.children[0].style.left =
				e.target.children[0].style.left === "" ? ".7rem" : "";
		} else {
			e.target.style.left = e.target.style.left === "" ? ".7rem" : "";
		}

		// changing theme
		theme === "light" ? toggleTheme("dark") : toggleTheme("light");
	};

	let content = (
		<header style={{ backgroundColor: `${themeColorScheme.navigation}` }}>
			<nav>
				<div style={{ color: `${themeColorScheme.logo}` }} className='logo'>
					covid<span>tracker</span>
				</div>
				<div>
					<ul>
						<li className='nav-link'>
							<Link
								ref={home}
								onClick={(e) => {
									setActiveLink(e.target);
								}}
								className='link active'
								to='/'>
								home
							</Link>
						</li>
						<li className='nav-link'>
							<Link
								ref={about}
								onClick={(e) => {
									setActiveLink(e.target);
								}}
								className='link'
								to='/about'>
								about
							</Link>
						</li>
						<li className='nav-theme'>
							<div className='theme-toggle-container'>
								<p
									style={{ color: `${theme === "light" ? "#FFF" : "#263859"}` }}
									className='theme-text'>
									light
								</p>
								<div
									onClick={(e) => toggleThemeButton(e)}
									className='theme-toggle'>
									<div
										style={{
											backgroundColor: `${themeColorScheme.navigation}`,
										}}
										className='theme-toggle-circle'></div>
								</div>
								<p
									style={{
										color: `${theme === "dark" ? "#FF6768" : "#32749D"}`,
									}}
									className='theme-text'>
									dark
								</p>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);

	return content;
};

export default Header;
