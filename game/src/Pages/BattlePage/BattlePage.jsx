import React from "react";
import "./BattlePage.css";

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
        <main className="battle-page">
            <section className="cards">
                {exampleCards.map((card) => (
                    <div key={card.title} className="card">
                        <div className="card-type">
                            {card.type.toUpperCase()}
                        </div>
                        <h2 className="card-title">
                            {card.title.toUpperCase()}
                        </h2>
                        <p className="card-description">{card.description}</p>
                        <div className="card-details">
                            {Object.entries(card.details).map(
                                ([key, value]) => (
                                    <span key={key} className="detail">
                                        {key.toUpperCase()}: {value}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
