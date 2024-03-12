import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";
import "./Footer.css";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="wrapper">
				<FooterSocials />

				<p className="copyright">
					© 2024 Святослав &quot;Qadd1s&quot; Барсуков
				</p>

				<FooterNav />
			</div>
		</footer>
	);
}
