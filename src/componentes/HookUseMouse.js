import { React, useRef } from "react";
import { useMouse } from "react-use";

import "./style.css";

export default function Demo() {
    const ref = useRef(null);
    const { docX, docY } = useMouse(ref);

    return (
        <div ref={ref} className="content">
            <h2 class="title">Uso de useMouse Hook</h2>
            <h3 className="subtitle">
                Posicion del mouse en el documento - X:{docX}, Y:{docY}
            </h3>
            <hr className="App-hr"></hr>
        </div>
    )
}