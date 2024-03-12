import { NavLink } from "react-router-dom";

export default function BurgerMenu({ isActive, setIsActive }) {
	const screenNow = ({ isActive }) =>
		isActive ? "menu__link menu__link--active" : "menu__link";

	return (
		<div
			className={isActive ? "menu --active" : "menu"}
			onClick={() => {
				setIsActive(false);
			}}
		>
			<div
				className={isActive ? "menu__content --active" : "menu__content"}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<h2 className="menu__header">DL Guard</h2>
				<NavLink
					to="/"
					className={screenNow}
					onClick={() => setIsActive(false)}
				>
					Главная
				</NavLink>
				<NavLink
					to="/download"
					className={screenNow}
					onClick={() => setIsActive(false)}
				>
					Скачать
				</NavLink>
				<NavLink
					to="/about"
					className={screenNow}
					onClick={() => setIsActive(false)}
				>
					О проекте
				</NavLink>
			</div>
		</div>
	);
}
