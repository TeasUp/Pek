import React from "react";
import "./BattlePage.css";
import pekActions from "../../database/cards/partyMembersCards/pekActionCards";
import battleActions from "../../database/options/battleActions";

export default function BattlePage() {
    return (
        <main className="battle-page">
            <div className="battle-container">
                <section className="fight-container">
                    {/* Enemy Section */}
                    <section className="enemy-container">
                        <ul className="enemies">
                            <li className="enemy selected">
                                <div className="enemy-image"></div>
                                <div className="enemy-info">
                                    <h2 className="enemy-name">Enemy Name</h2>
                                    <h2 className="enemy-health">120 HP</h2>
                                    <h2 className="enemy-focus">50 Focus</h2>
                                </div>
                            </li>

                            {/* Add more enemies here if needed */}
                            <li className="enemy">
                                <div className="enemy-image"></div>
                                <div className="enemy-info">
                                    <h2 className="enemy-name">Enemy Name 2</h2>
                                    <h2 className="enemy-health">100 HP</h2>
                                    <h2 className="enemy-focus">40 Focus</h2>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <div className="split"></div>

                    {/* Party Section */}
                    <section className="party-container">
                        <ul className="party-members">
                            <li className="member playing">
                                <div className="member-image"></div>
                                <div className="member-info">
                                    <h2 className="member-name">Member Name</h2>
                                    <h2 className="member-health">120 HP</h2>
                                    <h2 className="member-focus">50 Focus</h2>
                                </div>
                            </li>

                            {/* Add more party members here if needed */}
                            <li className="member">
                                <div className="member-image"></div>
                                <div className="member-info">
                                    <h2 className="member-name">
                                        Member Name 2
                                    </h2>
                                    <h2 className="member-health">90 HP</h2>
                                    <h2 className="member-focus">60 Focus</h2>
                                </div>
                            </li>
                        </ul>
                    </section>
                </section>

                <section className="main-container">
                    {/* Cards Section */}
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

                    {/* Actions Section */}
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
