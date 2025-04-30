'use client';

import { useState } from "react";

export default function Button() {

    const [name, setName] = useState('Patrícia');

    function handleClick() {
        setName('Precious!');
        alert(name);
    }

    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
             onClick={handleClick}>
                Alterar nome
            </button>
            <h3>{name}</h3>
        </div>
    );
}