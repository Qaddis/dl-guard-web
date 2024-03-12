import styles from "./OutlineButton.module.css";

const OutlineButton = ({ children, onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default OutlineButton;
