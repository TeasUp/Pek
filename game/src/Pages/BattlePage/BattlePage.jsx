import React from "react";

let exampleCards = [
    {
        type: "attack",
        title: "card1",
        description: "this card does this action 1",
        details: { atk: 100, focus: -10 },
    },
    {
        type: "think",
        title: "card2",
        description: "this card does this action 2",
        details: { think: 100, attack: -10 },
    },
    {
        type: "environment",
        title: "card3",
        description: "this card does this action 3",
        details: { environment: 100, think: -10 },
    },
    {
        type: "guard",
        title: "card4",
        description: "this card does this action 4",
        details: { guard: 100, sacrifice: -10 },
    },
    {
        type: "sacrifice",
        title: "card5",
        description: "this card does this action 5",
        details: { sacrifice: 100, guard: -10 },
    },
];

export default function battlePage() {
    return (
        <main>
            <section className="cards">
                <ul>
                    {
                        exampleCards.forEach(card => {
                            <li>
                                    type: {card.type}
                                    title: {card.title}
                                    description: {card.description}
                                    details: {card.details}
                            </li>
                        })
                    }
                </ul>
            </section>
        </main>
    );
}
