import { useEffect, useRef } from "react";
import "./TubesCursor.css";

export default function TubesCursor() {
    const canvasRef = useRef(null);

    useEffect(() => {
        let dispose;
        const load = async () => {
            const { initTubesCursor } = await import("./TubesBackground.js");
            dispose = await initTubesCursor(canvasRef.current);
        };
        load();

        return () => {
            if (dispose) dispose();
        };
    }, []);

    return (
        <div id="app">
            <canvas id="canvas" ref={canvasRef}></canvas>
        </div>
    );
}