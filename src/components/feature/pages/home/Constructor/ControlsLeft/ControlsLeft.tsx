import styles from "./styles.module.scss";
import clsx from "clsx";

interface ControlsLeftProps {
    currentSlideIndex: number;
}

export const ControlsLeft: React.FC<ControlsLeftProps> = ({ currentSlideIndex }) => {
    return (
        <>
            <div
                className={clsx({
                    [styles.shown]: currentSlideIndex === 3,
                    [styles.header]: true
                })}
                style={{ transitionDelay: "0.2s" }}
            ></div>

            <div
                className={clsx({
                    [styles.shown]: currentSlideIndex === 3,
                    [styles.text]: true
                })}
                style={{ transitionDelay: "0.3s" }}
            ></div>

            <div
                className={clsx({
                    [styles.shown]: currentSlideIndex === 3,
                    [styles.button]: true
                })}
                style={{ transitionDelay: "0.4s" }}
            ></div>
        </>
    );
}