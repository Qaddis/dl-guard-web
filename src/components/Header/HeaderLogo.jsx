import { NavLink } from "react-router-dom";

export default function MainLogo() {
	return (
		<NavLink to="/">
			<h1 className="logo">
				<img src="/favicon.png" alt="logo" /> <em>DL</em> Guard
			</h1>
		</NavLink>
	);
}
