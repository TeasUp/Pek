import { useState, useEffect } from "react";
import calculateTurn from "../functions/calculateTurn";

export default function useCard(partyMembers, setPartyMembers) {
    const [turnsOrder, setTurnsOrder] = useState(calculateTurn(partyMembers));
    const [activePlayerIndex, setActivePlayerIndex] = useState(0);

    const playCard = (card, user) => {
        setPartyMembers(prevMembers => {
            return prevMembers.map((member, index) => {
                const isCurrentPlayer = member.name === user.name;
                const isNextPlayer = index === (activePlayerIndex + 1) % prevMembers.length;
                
                if (isCurrentPlayer) {
                    const updatedStats = {...member.stats};
                    Object.entries(card.details.costs).forEach(([stat, cost]) => {
                        updatedStats[stat] -= cost;
                    });
                    
                    return {
                        ...member,
                        stats: updatedStats,
                        currentTurn: false
                    };
                }
                
                return {
                    ...member,
                    currentTurn: isNextPlayer
                };
            });
        });

        setActivePlayerIndex(current => (current + 1) % partyMembers.length);
    };

    const updateCardCooldowns = () => {
        setPartyMembers((prev) =>
            prev.map((member) => ({
                ...member,
                cards: member.cards.map((card) => ({
                    ...card,
                    cooldown:
                        typeof card.cooldown === "number" && card.cooldown > 0
                            ? card.cooldown - 1
                            : card.cooldown,
                })),
            }))
        );
    };

    useEffect(() => {
        const newTurnOrder = calculateTurn(partyMembers);
        setTurnsOrder(newTurnOrder);
    }, [partyMembers]);

    return { 
        playCard, 
        turnsOrder,
        updateCardCooldowns,
        activePlayerIndex,
        currentPlayer: turnsOrder[activePlayerIndex]
    };
}