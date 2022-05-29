import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Quiz from "./Quiz";
import Wallet from "./Wallet";
import Character from "./Character";
import Arena from "./Arena";


const steps = [
    { id: "quiz" },
    { id: "wallet" },
    { id: "character" },
    { id: "arena" }
];

const defaultData = {
    personType: 'Blue',
    scoreTotal: '',
    character: ''
};

const Game = () => {
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;
    const [formData, setForm] = useForm(defaultData);

    const props = { formData, setForm, navigation};

    switch (id) {
        case "quiz":
            return <Quiz {...props} />;
        case "wallet":
            return <Wallet {...props} />;
        case "character":
            return <Character {...props} />;
        case "arena":
            return <Arena {...props} />;
        default:
            return null;
    }
};
export default Game;