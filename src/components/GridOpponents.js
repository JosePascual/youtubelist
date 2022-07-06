import { MdLeaderboard } from "react-icons/md";
import opponents from "../data/opponents.json";

const GridOpponents = ({ title = "" }) => {
	return (
		<section className="container mx-auto p-6 bg-slate-900">
			{title?.length > 0 && (
				<h2 className="flex justify-start items-center text-slate-200 uppercase text-base font-semibold tracking-wider">
					<MdLeaderboard className="text-xl text-slate-200 mr-2" />
					{title}
				</h2>
			)}
			<div className="grid grid-cols-5 gap-5 pt-4">
				{opponents.map(
					(
						{
							name = "",
							username = "",
							avatar = "",
							subscribers = "",
							me = false,
						},
						index
					) => {
						return (
							<div className="relative text-left" key={username}>
								<span
									className="absolute block top-2 right-2 p-1 uppercase font-semibold text-slate-200 tracking-wider rounded leading-none z-10"
									style={{
										fontSize: "14px",
										background: "rgba(0,0,0,0.2)",
									}}
								>
									{index + 1}º
								</span>
								<img
									src={avatar}
									className={`w-full bg-slate-800 rounded-lg shadow border-4 ${
										me
											? "border-yellow-400"
											: "border-transparent"
									}`}
									alt={`Canal de youtube de ${name}`}
								/>

								<h3 className="text-slate-300 font-semibold pt-2 tracking-wide">
									{name}
								</h3>
								<p className="text-sm text-slate-500">
									{subscribers} Suscriptores
								</p>
							</div>
						);
					}
				)}
			</div>
		</section>
	);
};

export default GridOpponents;
