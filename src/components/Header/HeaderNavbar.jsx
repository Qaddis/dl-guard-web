import { NavLink } from "react-router-dom";

export default function HeaderNavbar() {
	const setIsActive = ({ isActive }) =>
		isActive ? "navbar__link navbar__link--active" : "navbar__link";

	return (
		<ul className="navbar">
			<li>
				<NavLink to="/" className={setIsActive}>
					Главная
				</NavLink>
			</li>
			<li>
				<NavLink to="/download" className={setIsActive}>
					Скачать
				</NavLink>
			</li>
			<li>
				<NavLink to="/about" className={setIsActive}>
					О проекте
				</NavLink>
			</li>
		</ul>
	);
}
