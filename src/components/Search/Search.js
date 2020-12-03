import React, { useRef } from "react";
import SearchIcon from "../Svgs/SearchIcon";

const Search = ({ theme, themeColorScheme, handleInput }) => {
	const input = useRef();
	const clearButton = useRef();

	const handleInputChange = () => {
		// toggle clear button
		toggleClearButton();

		// save value to state
		handleInput(input.current.value);
	};

	const toggleClearButton = () => {
		if (input.current.value !== undefined) {
			if (input.current.value === "") {
				clearButton.current.classList.remove("opacity");
			} else {
				clearButton.current.classList.add("opacity");
			}
		}
	};

	const clearInput = () => {
		// clear input value
		input.current.value = "";

		// make button disappear
		toggleClearButton();

		// clear state
		handleInput(input.current.value);

		// focus input
		input.current.focus();
	};

	let content = (
		<div
			style={{ border: `1.5px solid ${themeColorScheme.search}` }}
			className='search-container'>
			<div className='icon'>
				<SearchIcon themeColorScheme={themeColorScheme} />
			</div>
			<form>
				<input
					onChange={handleInputChange}
					className={
						theme === "light" ? "gray-placeholder" : "white-placeholder"
					}
					style={{
						color: `${themeColorScheme.searchText}`,
					}}
					placeholder='Search for a country...'
					ref={input}
					type='text'
					maxLength='30'
				/>
			</form>
			<div
				onClick={clearInput}
				ref={clearButton}
				style={{
					backgroundColor: `${themeColorScheme.searchText}`,
					color: `${themeColorScheme.plusStats}`,
				}}
				className='clear-wrapper'>
				CLEAR
			</div>
		</div>
	);

	return content;
};

export default Search;
