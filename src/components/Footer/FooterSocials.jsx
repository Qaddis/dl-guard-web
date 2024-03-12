export default function FooterSocials() {
	return (
		<ul className="socials">
			<li>
				<a
					href="https://vk.com/b4d_9etaw4y"
					target="_blank"
					className="socials__link"
				>
					<svg>
						<use xlinkHref="#vk-svg"></use>
					</svg>
				</a>
			</li>
			<li>
				<a
					href="https://web.telegram.org/k/#1011776438"
					target="_blank"
					className="socials__link"
				>
					<svg>
						<use xlinkHref="#telegram-svg"></use>
					</svg>
				</a>
			</li>
			<li>
				<a href="#!" target="_blank" className="socials__link">
					<svg>
						<use xlinkHref="#linkedin-svg"></use>
					</svg>
				</a>
			</li>
			<li>
				<a
					href="https://github.com/Sun-R1se"
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
