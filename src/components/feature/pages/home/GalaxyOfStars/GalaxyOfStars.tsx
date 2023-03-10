import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

interface GalaxyOfStarsProps {
    currentSlideIndex: number;
}

export const GalaxyOfStars: React.FC<GalaxyOfStarsProps> = ({ currentSlideIndex }) => {

    const [prevSlideIndex, setPrevSlideIndex] = useState(0);
    const [isMovingForward, setIsMovingForward] = useState(true)

    const firstLineRef = useRef(null);
    const secondLineRef = useRef(null);

    function transformLetters(lettersContainer: HTMLElement, leaving: boolean) {
        const array = Array.from(lettersContainer.children)
        for (let i = 0; i < array.length; i++) {
            const radius = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)

            const directionAngle = leaving ?
                (i / array.length) * Math.PI + Math.PI :
                -(i / array.length) * Math.PI + -Math.PI;

            const positionX = Math.cos(directionAngle) * radius;
            const positionY = Math.sin(directionAngle) * radius;

            const angle = leaving ? 0 : (Math.random() - 0.5) * 360;

            (array[i] as HTMLElement).style.transform = `translate(${positionX}px, ${positionY}px) rotate(${angle}deg)`
        }
    }

    function resetLetters(lettersContainer: HTMLElement) {
        for (const letter of Array.from(lettersContainer.children)) {
            (letter as HTMLElement).style.transform = `translate(0px, 0px) rotate(0deg)`
        }
    }

    useEffect(() => {
        if (!firstLineRef.current || !secondLineRef.current) return;

        if(prevSlideIndex < currentSlideIndex){
            setIsMovingForward(true)
        }else{
            setIsMovingForward(false)
        }

        if (currentSlideIndex === 2) {
            resetLetters(firstLineRef.current);
            resetLetters(secondLineRef.current);
        } else if (currentSlideIndex === 3) {
            transformLetters(firstLineRef.current, true);
            transformLetters(secondLineRef.current, true);
        } else if (currentSlideIndex === 1) {
            transformLetters(firstLineRef.current, false);
            transformLetters(secondLineRef.current, false);
        }
        setPrevSlideIndex(currentSlideIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstLineRef, secondLineRef, currentSlideIndex])


    return (
        <div className={styles['galaxy-of-stars']}>
            <div className={styles.header}>
                <div
                    className={
                        clsx({
                            [styles.line]: true,
                            [styles['transition-delay']]: !isMovingForward
                        })
                    }
                    ref={firstLineRef}
                >
                    <span>A</span>
                    <span> </span>
                    <span>G</span>
                    <span>A</span>
                    <span>L</span>
                    <span>A</span>
                    <span>X</span>
                    <span>Y</span>
                </div>
                <div
                    className={
                        clsx({
                            [styles.line]: true,
                            [styles['transition-delay']]: isMovingForward
                        })
                    }
                    ref={secondLineRef}
                >
                    <span>O</span>
                    <span>F</span>
                    <span> </span>
                    <span>S</span>
                    <span>T</span>
                    <span>A</span>
                    <span>R</span>
                    <span>S</span>
                </div>
            </div>
            <p className={styles.text}>
            A collection of 10,000 dancers and DJs featuring varied skills and fanbases. As an organizer of the galaxy’s top events, select promising talents and build entire festivals around them.
            </p>
        </div>
    );
}