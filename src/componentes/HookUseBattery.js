import { React } from "react";
import { useBattery } from "react-use";

import "./style.css";

export default function Demo4() {
    const batteryState = useBattery();

    if(!batteryState.isSupported) {
        return (
            <div className="content">
                <h2 class="title">Uso de useBattery Hook</h2>
                <h3 className="subtitle">
                    Battery sensor: not supported
                </h3>
                <hr className="App-hr"></hr>
            </div>
        );
    };

    if(!batteryState.fetched) {
        return (
            <div className="content">
                <h2 class="title">Uso de useGeolocation Hook</h2>
                <h3 className="subtitle">
                    Battery sensor: supported
                </h3>
                <h3 className="subtitle">
                    Battery state: fetching
                </h3>
                <hr className="App-hr"></hr>
            </div>
        );
    };

    return (
        <div className="content">
            <h2 class="title">Uso de useGeolocation Hook</h2>
            <h3 className="subtitle">
                <strong>Battery sensor</strong>: supported
            </h3>
            <h3 className="subtitle">
                <strong>Battery state</strong>: fetched
            </h3>
            <h3 className="subtitle">
                <strong>Charge level</strong>: { (batteryState.level * 100).toFixed(0) }%
            </h3>
            <h3 className="subtitle">
                <strong>Charging</strong>: { batteryState.charging ? 'yes' : 'no' }
            </h3>
            <h3 className="subtitle">
                <strong>Charging time</strong>: { batteryState.chargingTime ? batteryState.chargingTime : 'finished' }
            </h3>
            <h3 className="subtitle">
                <strong>Discharging time</strong>: { batteryState.dischargingTime }
            </h3>
            <hr className="App-hr"></hr>
        </div>
    );
};