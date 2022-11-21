
import {
  Route,
	useParams,
} from "react-router-dom";

const links = new Map([
	["vsc", "https://code.visualstudio.com/"],
	["pwned", "https://haveibeenpwned.com/"],
	["mld", "https://drawsql.app/"],
	["rr", "https://www.youtube.com/watch?v=a3Z7zEc7AXQ"],
]);

export default function Id() {
	const { id } = useParams();
	window.location.href = links.get(id || "") || "/";

	return ( 
		<div
			className="bg-slate-300 dark:bg-slate-800 dark:text-white h-screen flex flex-row items-center justify-center"
		>
			<h1>Redirecting...</h1>
		</div>
	);
}
