/* eslint-disable react/prop-types */
export default function PresentingList({ data }) {
	return (
		<ul className="presenting-list">
			{data.map((item) => (
				<li
					key={item.title}
					className={
						item.isRight
							? "presenting-list__item presenting-list__item--right _anim"
							: "presenting-list__item _anim"
					}
				>
					<h3 dangerouslySetInnerHTML={{ __html: item.title }} />
					<p>{item.description}</p>
				</li>
			))}
		</ul>
	);
}
