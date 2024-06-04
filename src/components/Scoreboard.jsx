import { useState, useEffect } from "react";

function Scoreboard() {
    const [score, setScore] = useState(0);

    return (
        <div className="scoreboard">
            <h1>Pokemon Memory Card</h1>
            <h3>Score: {score}</h3>
        </div>
    );
}

export default Scoreboard;