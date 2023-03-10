import styles from "./styles.module.scss";

export const Header: React.FC = () => {
    return (
        <div className={styles['header-container']}>
            <div className={styles.header}></div>
        </div>
    );
}