import { useEffect } from "react";
import { adventeges, techs } from "../data";
import { setObserve } from "../anim";

import Landing from "../components/Landing";
import PresentingList from "../components/Lists/PresentingList";

export default function MainScreen() {
	useEffect(() => {
		setObserve();
	});

	return (
		<>
			<section className="landing _s-anim">
				<Landing />
			</section>
			<hr />
			<section id="dignity" className="dignity">
				<div className="wrapper">
					<h2 className="section__header">Достоинства</h2>
					<PresentingList data={adventeges} />
				</div>
			</section>
			<hr />
			<section className="technologies">
				<div className="wrapper">
					<h2 className="section__header">Технологии</h2>
					<PresentingList data={techs} />
				</div>
			</section>
		</>
	);
}
