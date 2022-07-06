const Header = ({ className = "" }) => {
	return (
		<header className="relative container mx-auto">
			<div
				className="absolute top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center text-white font-semibold tracking-wide"
				style={{ background: "rgba(0,0,0,0.7)" }}
			>
				JUST A INSPIRATIONAL DESIGN FOR HEADER
			</div>
			<img src="./dlt-1.png" className="w-full rounded-t-lg" alt="" />
		</header>
	);
};

export default Header;
