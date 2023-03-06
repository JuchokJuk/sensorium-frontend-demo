import Image from 'next/image'
import styles from './styles.module.css'

export const Placeholder = () => {
    return (
        <div className={styles.center} data-scroll>
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
    );
}