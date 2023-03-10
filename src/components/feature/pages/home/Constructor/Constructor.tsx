import styles from "./styles.module.scss";
import { CSSTransition } from 'react-transition-group';
import clsx from "clsx";
import ControlsLeft from "./ControlsLeft";
import ControlsRight from "./ControlsRight";

interface ConstructorProps {
    currentSlideIndex: number;
}

export const Constructor: React.FC<ConstructorProps> = ({ currentSlideIndex }) => {
    return (
        <>
            <div className={styles['constructor']}>


                <div className={styles['avatar']}>
                </div>

                <div className={styles['controls-left']}>
                    <ControlsLeft currentSlideIndex={currentSlideIndex} />
                </div>


                <div className={styles['controls-right']}>
                    <ControlsRight currentSlideIndex={currentSlideIndex} />
                </div>

                <div className={styles['color-picker']}>
                    color-picker
                </div>

            </div>
        </>
    );
}