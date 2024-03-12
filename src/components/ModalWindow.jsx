export default function ModalWindow({ modalActive, setModalActive, data }) {
	return (
		<div
			className={modalActive ? "modal --active" : "modal"}
			onClick={() => setModalActive(false)}
		>
			<div
				className={modalActive ? "modal__content --active" : "modal__content"}
				onClick={(e) => e.stopPropagation()}
			>
				<button className="btn-close" onClick={() => setModalActive(false)}>
					&#215;
				</button>
				<h3>
					DL Guard | <i>{data.title}</i>
				</h3>
				<p dangerouslySetInnerHTML={{ __html: data.modDesc }} />
				{data.path == "" ? (
					<button disabled className="download-btn">
						Скачать
					</button>
				) : (
					<a href={data.path} download className="download-btn">
						Скачать
					</a>
				)}
			</div>
		</div>
	);
}
