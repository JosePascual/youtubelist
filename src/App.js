import GridOpponents from "./components/GridOpponents";
import Header from "./components/Header";

function App() {
	return (
		<main className="bg-slate-800 min-h-screen py-10">
			<Header />

			<GridOpponents title="List of opponents" />
		</main>
	);
}

export default App;
