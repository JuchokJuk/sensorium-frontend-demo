import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import { clsx } from 'clsx';

export const CustomCursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [state, setState] = useState('hidden');

    const [timeoutId, _setTimeoutId] = useState<number|null>(null);
    const timeoutIdRef = useRef(timeoutId);
    const setTimeoutId = (id:number) => {
        timeoutIdRef.current = id;
        _setTimeoutId(id);
    }; // 😋 delicious

    useEffect(() => {
        window.addEventListener("mousemove", mouseMoveHandler, false);
        window.addEventListener("wheel", mouseWheelHandler, false);
        window.addEventListener("mouseout", mouseOutHandler, false);
        window.addEventListener("mouseover", mouseOverHandler, false);

        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler);
            window.removeEventListener("wheel", mouseWheelHandler);
            window.removeEventListener("mouseout", mouseOutHandler);
            window.removeEventListener("mouseover", mouseOverHandler);
        }
    }, []);

    function mouseMoveHandler(e: MouseEvent) {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    function mouseWheelHandler() {
        setState("scroll");
        if (timeoutIdRef.current !== null){
            clearTimeout(timeoutIdRef.current)
        }
        const id = window.setTimeout(() => {
            setState("normal");
        }, 400);
        setTimeoutId(id)
    }

    function mouseOutHandler() {
        setState("hidden");
    }

    function mouseOverHandler() {
        setState("normal");
    }

    return (
        <div
            className={
                clsx({
                    [styles.outer]: true,
                    [styles.outer_scroll]: state === "scroll",
                    [styles.outer_hidden]: state === "hidden",
                })
            }
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
            <div className={styles.innerGlow}></div>
            <div className={styles.inner}></div>
        </div>
    );
}