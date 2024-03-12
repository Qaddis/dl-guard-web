import { useState } from "react";

import MainLogo from "./HeaderLogo";
import HeaderNavbar from "./HeaderNavbar";
import BurgerMenu from "../BurgerMenu";
import "./Header.css";

export default function Header() {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<header className="header">
			<div className="wrapper">
				<MainLogo />
				<HeaderNavbar />
				<button
					className="burger-btn"
					onClick={() => {
						setMenuActive(true);
					}}
				>
					<img src="/burger.png" />
				</button>
			</div>
			<BurgerMenu isActive={menuActive} setIsActive={setMenuActive} />
		</header>
	);
}
