import { React, useState } from "react";
import { useKey } from "react-use";

import "./style.css";

export default function Demo5() {
    const [count, set] = useState(0);
    const increment = () => set(count => ++count);
    const decrement = () => set(count => --count);
    useKey("ArrowDown", decrement);
    useKey("ArrowUp", increment);

    return (
        <div className="content">
            <h2 class="title">Uso de useKey Hook</h2>
            <h3 className="subtitle">
                Presiona la tecla flecha hacia arriba para sumar o abajo para restar: {count}
            </h3>
            <hr className="App-hr"></hr>
        </div>
    )
}