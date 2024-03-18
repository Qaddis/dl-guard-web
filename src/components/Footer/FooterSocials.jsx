export default function FooterSocials() {
	return (
		<ul className="socials">
			<li>
				<a
					href="https://vk.com/qaddis"
					target="_blank"
					className="socials__link"
				>
					<svg>
						<use xlinkHref="#vk-svg"></use>
					</svg>
				</a>
			</li>
			<li>
				<a href="https://t.me/qaddis" target="_blank" className="socials__link">
					<svg>
						<use xlinkHref="#telegram-svg"></use>
					</svg>
				</a>
			</li>
			<li>
				<a
					href="https://github.com/Qaddis"
					target="_blank"
					className="socials__link github"
				>
					<svg>
						<use xlinkHref="#github-svg"></use>
					</svg>
				</a>
			</li>
		</ul>
	);
}
