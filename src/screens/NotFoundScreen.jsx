import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function NotFoundScreen() {
	return (
		<>
			<Helmet>
				<title>Страница не найдена | DL Guard</title>
			</Helmet>
			<section className="not-found">
				<h2>
					Страница <i>не найдена</i>
				</h2>
				<Link to="/" className="nf-button">
					На главную
				</Link>
			</section>
		</>
	);
}
