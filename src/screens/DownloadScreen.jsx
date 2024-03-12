import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { setObserve } from "../anim";
import { materials } from "../data";

import DownloadsList from "../components/Lists/DownloadsList";
import ModalWindow from "../components/ModalWindow";

export default function DownloadScreen() {
	useEffect(() => {
		setObserve();
	});

	const [modalActive, setModalActive] = useState(false);
	const [dataItem, setDataItem] = useState(0);

	return (
		<>
			<Helmet>
				<title>Скачать | DL Guard</title>
			</Helmet>
			<section className="products _s-anim">
				<h2 className="section__header">Продукты</h2>

				<DownloadsList
					materials={materials}
					setModalActive={setModalActive}
					setDataItem={setDataItem}
				/>

				<ModalWindow
					modalActive={modalActive}
					setModalActive={setModalActive}
					data={materials[dataItem]}
				/>
			</section>
		</>
	);
}
