import { React } from "react";
import { useGeolocation } from "react-use";

import "./style.css";

export default function Demo3() {
    const state = useGeolocation();

    return (
        <div className="content">
            <h2 class="title">Uso de useGeolocation Hook</h2>
            <h3 className="subtitle">
                {JSON.stringify(state, null, 2)}
            </h3>
            <hr className="App-hr"></hr>
        </div>
    )
}