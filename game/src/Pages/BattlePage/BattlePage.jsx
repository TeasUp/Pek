import React from "react";
import "./BattlePage.css";
import actionCards from "../../database/cards/mainActionCards";
import battleActions from "../../database/options/battleActions";
import cressidaActions from "../../database/cards/partyMembersCards/cressidaActionCards";

export default function battlePage() {
    return (
        <main className="battle-page">
            <section className="main-container">
                <section className="cards">
                    {cressidaActions.map((action) => (
                        <div key={action.title} className="card">
                            {action.type && (
                                <div className="card-type">
                                    {action.type.toUpperCase()}
                                    {action.additionalType &&
                                        ` + ${action.additionalType.toUpperCase()}`}
                                </div>
                            )}
                            {action.title && (
                                <h2 className="card-title">{action.title}</h2>
                            )}
                            {action.description && (
                                <p className="card-description">
                                    {action.description}
                                </p>
                            )}
                            <div className="card-details">
                                {action.type === "attack" &&
                                    action.details.baseDamage && (
                                        <span className="detail">
                                            Base Damage:{" "}
                                            {action.details.baseDamage}
                                        </span>
                                    )}
                                {action.details.focusCost && (
                                    <span className="detail">
                                        Focus Cost: {action.details.focusCost}
                                    </span>
                                )}
                                {action.details.coolDown && (
                                    <span className="detail">
                                        CoolDown: {action.details.coolDown}{" "}
                                        turn(s)
                                    </span>
                                )}
                                {action.details.healthRestore && (
                                    <span className="detail">
                                        Health Restore:{" "}
                                        {action.details.healthRestore}
                                    </span>
                                )}
                                {action.details.additionalEffects &&
                                    action.details.additionalEffects.length >
                                        0 && (
                                        <span className="detail">
                                            Effects:{" "}
                                            {action.details.additionalEffects
                                                .map((effect) => effect.type)
                                                .join(", ")}
                                        </span>
                                    )}
                                {action.details.targetType && (
                                    <span className="detail">
                                        Target Type: {action.details.targetType}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </section>

                <section className="actions">
                    <ul>
                        {battleActions.map((action) => (
                            <li key={action}>
                                <button className="action-button">
                                    {action}
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </main>
    );
}
