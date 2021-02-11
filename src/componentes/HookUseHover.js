import { React } from "react";
import { useHover } from "react-use";

import "./style.css";

export default function Demo2() {
    const element = hovered => <h2 class="title">Uso de useHover Hook, Hover sobre mi!</h2>;
    const[hoverable, hovered] = useHover(element);

    return (
        <div className="content">
            {hoverable}
            <h3 className="subtitle">{hovered ? "HOVERED" : ""}</h3>
            <hr className="App-hr"></hr>
        </div>
    )
}