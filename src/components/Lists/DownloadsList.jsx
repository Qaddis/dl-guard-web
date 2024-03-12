import Button from "../UI/Button/Button";
import OutlineButton from "../UI/OutlineButton/OutlineButton";

export default function DownloadsList({
	materials,
	setModalActive,
	setDataItem,
}) {
	function getIndex(title) {
		for (let i = 0; i <= materials.length; i++) {
			if (materials[i].title == title) return i;
		}
	}

	return (
		<ul className="wrapper downloads">
			{materials.map((item) => (
				<li key={item.title} className="downloads__item">
					<div>
						<h3>
							DL Guard | <i>{item.title}</i>
						</h3>
						<p>{item.description}</p>
					</div>
					<div className="buttons">
						<OutlineButton
							onClick={() => {
								setModalActive(true);
								setDataItem(getIndex(item.title));
							}}
						>
							Подробнее
						</OutlineButton>
						{item.path == "" ? (
							<button disabled className="download-btn">
								Скачать
							</button>
						) : (
							<a href={item.path} download className="download-btn">
								Скачать
							</a>
						)}
					</div>
				</li>
			))}
		</ul>
	);
}
