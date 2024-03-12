import { Link } from "react-router-dom";

export default function NotFoundScreen() {
	return (
		<section className="not-found">
			<h2>
				Страница <i>не найдена</i>
			</h2>
			<Link to="/" className="nf-button">
				На главную
			</Link>
		</section>
	);
}
