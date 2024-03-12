/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF("/lock.glb");

	const rotateModel = () => {
		if (group.current) {
			group.current.rotation.y += 0.02;
			requestAnimationFrame(rotateModel);
		}
	};

	requestAnimationFrame(rotateModel);

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene">
				<mesh
					name="Cube"
					geometry={nodes.Cube.geometry}
					material={materials.Корпус}
					position={[0.006, 0, -0.001]}
					rotation={[0, -Math.PI / 2, 0]}
					scale={[0.35, 1, 1]}
				/>
				<group
					name="Окружность"
					position={[0.006, 0.098, 0.389]}
					rotation={[Math.PI / 2, -Math.PI / 2, 0]}
					scale={0.276}
				>
					<mesh
						name="Окружность_1"
						geometry={nodes.Окружность_1.geometry}
						material={materials["Доп элемент"]}
					/>
					<mesh
						name="Окружность_2"
						geometry={nodes.Окружность_2.geometry}
						material={materials.Ничего}
					/>
				</group>
				<mesh
					name="Цилиндр"
					geometry={nodes.Цилиндр.geometry}
					material={materials.Металл}
					position={[-0.57, 0.632, 0]}
					scale={0.171}
				/>
				<mesh
					name="Окружность001"
					geometry={nodes.Окружность001.geometry}
					material={materials.Ничего}
					position={[0.647, 1, 0.041]}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/lock.glb");
