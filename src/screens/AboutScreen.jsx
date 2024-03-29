import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { setObserve } from "../anim";

export default function AboutScreen() {
	useEffect(() => {
		setObserve();
	});

	return (
		<>
			<Helmet>
				<title>О проекте | DL Guard</title>
			</Helmet>
			<section className="info _s-anim">
				<h2 className="section__header">О проекте</h2>
				<div className="wrapper">
					<p>
						<i>DL Guard</i> - <em>в первую очередь эксперимент, проект</em>,
						который создал ученик 10 ИМП класса (на момент 2023-2024 годов){" "}
						<em>Барсуков Святослав</em>.<br />
						Для проекта я использовал все свои знания и навыки - работа с
						Arduino, программирование на Python и JS,
						<br />
						веб разработка и прототипирование веб интерфейсов, работа с базами
						данных и много чего ещё.
						<br />
						Так же я многому научился в процессе работы над этим проектом.
						<br />
						Моей целью было создать что-то похожее на настоящий,
						&quot;крупный&quot; продукт.
						<br />
						Что-то такое, что могло бы выделятся масштабами как в списке
						проектов других учеников, так и в списке моих проектов.
						<br />
						Для связи можете написать мне в VK или Telegram (указаны в нижней
						части страницы), или на E-Mail:{" "}
						<a href="mailto:svyatoslavb1107@gmail.com">
							svyatoslavb1107@gmail.com
						</a>
						.
					</p>
					<hr />
					<p>
						<i>Шрифты</i> - Google Fonts (Poppins, Roboto Slab, Caveat, Ubuntu)
						<br />
						<i>Иконки</i> - Iconfinder (VK, Telegram, Github, NFC)
						<br />
						<i>Логотип, 3д модель и название</i> - интеллектуальная
						собственность автора (Барсуков Святослав)
						<br />
					</p>
				</div>
			</section>
		</>
	);
}
