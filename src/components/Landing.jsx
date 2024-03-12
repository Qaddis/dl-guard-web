/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import Lock from "./Lock";

import Button from "./UI/Button/Button";

export default function Landing() {
	return (
		<div className="wrapper">
			<div className="tagline">
				<h2>
					<em>Открытый</em> код.
					<br />
					<i>Надежная</i> защита.
				</h2>
				<p>
					Система электронных пропусков с открытыми исходниками и возможностью
					дальнейшей доработки.
				</p>
				<div>
					<Link to="/download">
						<Button>Скачать</Button>
					</Link>
					<span>или</span>
					<button>
						<a href="#dignity" className="more-info">
							Узнать больше
						</a>
					</button>
				</div>
			</div>
			<div className="scene-3d">
				<Canvas camera={{ position: [0, 1.5, 6], zoom: [2.42] }}>
					<ambientLight intensity={2} />
					<pointLight
						position={[0, -0.5, 6]}
						target={[0, -0.5, 0]}
						intensity={Math.PI * 2}
						castShadow
					/>
					<directionalLight
						position={[0, 3, 3]}
						intensity={Math.PI}
						castShadow
					/>
					<Suspense fallback={null}>
						<Lock position={[0, -0.5, 0]} />
					</Suspense>
				</Canvas>
			</div>
		</div>
	);
}
