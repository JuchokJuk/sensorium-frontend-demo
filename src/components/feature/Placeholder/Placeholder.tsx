import Image from 'next/image'
import styles from './styles.module.css'

interface PlaceholderType {
    blockIndex: number;
}

export const Placeholder: React.FC<PlaceholderType> = ({ blockIndex }) => {
    return (
        <div className={styles.center} data-scroll >
            <div className={styles.top}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
                <div className={styles.thirteen}>
                    <Image
                        src="/thirteen.svg"
                        alt="13"
                        width={40}
                        height={31}
                        priority
                    />
                </div>
            </div>
            <span className={styles.blockIndex}>Block #{blockIndex}</span>
        </div>
    );
}