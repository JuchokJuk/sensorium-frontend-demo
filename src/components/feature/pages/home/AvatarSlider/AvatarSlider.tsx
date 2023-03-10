import clsx from "clsx";
import styles from "./styles.module.scss";
import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface AvatarSliderProps {
    currentSlideIndex: number;
}

const TickerPortal: React.FC<AvatarSliderProps> = ({ currentSlideIndex }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])

    return mounted
        ? createPortal(
            <CSSTransition
                in={currentSlideIndex === 0}
                timeout={1000}
                classNames={{
                    enterActive: styles['ticker-transition-enter-active'],
                    enterDone: styles['ticker-transition-enter-done'],
                    exitActive: styles['ticker-transition-exit-active'],
                    exitDone: styles['ticker-transition-exit-done']
                }}
            >
                <div className={styles.ticker}>

                </div>
            </CSSTransition>,
            document.body)
        : null

}

export const AvatarSlider: React.FC<AvatarSliderProps> = ({ currentSlideIndex }) => {

    return (
        <>
            <div
                className={
                    clsx({
                        [styles['avatar-slider']]: true,
                        [styles[`avatar-slider_step-${currentSlideIndex}`]]: true
                    })
                }
            >
                <div className={styles['background-container']}>

                    <div className={styles.background}>
                        <div className={styles.card}></div>
                    </div>
                </div>

                <TickerPortal currentSlideIndex={currentSlideIndex} />

            </div>
        </>
    );
}