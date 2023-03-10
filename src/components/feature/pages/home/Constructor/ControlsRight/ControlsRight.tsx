import styles from "./styles.module.scss";
import clsx from "clsx";

interface ControlsRightProps {
    currentSlideIndex: number;
}

export const ControlsRight: React.FC<ControlsRightProps> = ({ currentSlideIndex }) => {
    return (
        <>
            {new Array(7).fill(0).map((element, index) => {
                return (
                    <div key={index}
                        className={
                            clsx({
                                [styles.shown]: currentSlideIndex === 3,
                                [styles['list-item']]: true
                            })
                        }
                        style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                    >
                    </div>
                );
            })}
        </>
    );
}