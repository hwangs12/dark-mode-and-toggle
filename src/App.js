import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
	const [dati, setDati] = useState([]);
	const [loading, setLoading] = useState(false);
	const [screenMode, setScreenMode] = useState("dark-theme");

	const handleClick = () => {
		setScreenMode((mode) =>
			mode === "light-theme" ? "dark-theme" : "light-theme"
		);
	};

	useEffect(() => {
		setLoading(true);
		const newData = data;
		setDati(newData);
		setLoading(false);
	}, []);

	useEffect(() => {
		document.documentElement.className = screenMode;
	}, [screenMode]);

	return (
		<main className="light-theme">
			<nav>
				<div className="nav-center" onClick={handleClick}>
					<h1>overreacted</h1>
					<button className="btn">toggle</button>
				</div>
			</nav>
			<section className="articles">
				{loading
					? "loading..."
					: dati.map((datus) => {
							return <Article key={datus.id} {...datus} />;
					  })}
			</section>
		</main>
	);
}

export default App;
