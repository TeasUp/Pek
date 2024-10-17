import React from "react";
import "./BattlePage.css";
import pekActions from "../../database/cards/partyMembersCards/pekActionCards";
import battleActions from "../../database/options/battleActions";

export default function BattlePage() {
    return (
        <main className="battle-page">
            <div className="battle-container">
                {" "}
                {/* New container */}
                <section className="main-container">
                    <section className="cards">
                        {pekActions.map((action) => (
                            <div key={action.title} className="card">
                                <div className="card-type">
                                    {action.type.toUpperCase()}
                                    {action.additionalType &&
                                        ` + ${action.additionalType.toUpperCase()}`}
                                </div>

                                <h2 className="card-title">{action.title}</h2>

                                <p className="card-description">
                                    {action.description}
                                </p>

                                <div className="card-details">
                                    {Object.entries(action.details.costs).map(
                                        ([costType, amount]) => (
                                            <span
                                                key={costType}
                                                className="detail detail-cost"
                                            >
                                                {costType
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    costType.slice(1)}{" "}
                                                Cost: {amount}
                                            </span>
                                        )
                                    )}

                                    {action.details.baseDamage && (
                                        <span className="detail detail-info">
                                            Base Damage:{" "}
                                            {action.details.baseDamage}
                                        </span>
                                    )}

                                    <span className="detail detail-info">
                                        CoolDown: {action.details.coolDown}{" "}
                                        {action.details.coolDown !==
                                            "one time use" && "turns"}
                                    </span>

                                    {action.details.healthRestore && (
                                        <span className="detail detail-info">
                                            Health Restore:{" "}
                                            {action.details.healthRestore}
                                        </span>
                                    )}

                                    {(action.details.effects || []).map(
                                        (effect, index) => (
                                            <span
                                                key={`${effect.type}-${index}`}
                                                className="detail detail-effect"
                                            >
                                                {effect.type}
                                                {effect.duration &&
                                                    ` for ${effect.duration} turns`}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="actions">
                        <ul>
                            {battleActions.map((action, index) => (
                                <li key={index}>
                                    <button
                                        className="action-button"
                                        aria-label={action}
                                    >
                                        {action}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
            </div>
        </main>
    );
}
