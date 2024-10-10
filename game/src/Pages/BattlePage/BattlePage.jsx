import React from "react";
import "./BattlePage.css";
import actionCards from "../../database/cards/mainActionCards";

export default function battlePage() {
    return (
        <main className="battle-page">
            <section className="cards">
                {actionCards.map((action) => (
                    <div key={action.title} className="card">
                        <div className="card-type">
                            {action.type.toUpperCase()}
                        </div>
                        <h2 className="card-title">
                            {action.title.toUpperCase()}
                        </h2>
                        <p className="card-description">{action.description}</p>
                        <div className="card-details">
                            {action.type === "attack" && (
                                <span className="detail">
                                    Base Damage: {action.details.baseDamage}
                                </span>
                            )}
                            <span className="detail">
                                Focus Cost: {action.details.focusCost}
                            </span>
                            <span className="detail">
                                CoolDown:{" "}
                                {action.details.coolDown === "one time use"
                                    ? "One-time use"
                                    : `${action.details.coolDown} turn(s)`}
                            </span>
                            {action.details.healthRestore > 0 && (
                                <span className="detail">
                                    Health Restore:{" "}
                                    {action.details.healthRestore}
                                </span>
                            )}
                            {action.details.additionalEffects &&
                                action.details.additionalEffects.length > 0 && (
                                    <span className="detail">
                                        Effects:{" "}
                                        {action.details.additionalEffects
                                            .map((effect) => effect.type)
                                            .join(", ")}
                                    </span>
                                )}
                            <span className="detail">
                                Target Type: {action.details.targetType}
                            </span>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
