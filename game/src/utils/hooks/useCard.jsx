import { useState, useEffect } from "react";
import calculateTurn from "../../utils/functions/calculateTurn";

export default function useCard(partyMembers, setPartyMembers) {
    const [turnsOrder, setTurnsOrder] = useState(calculateTurn(partyMembers));

    const playCard = (card, user) => {
        const userMember = partyMembers.find(
            (member) => member.name === user.name
        );
        const cardCosts = card.details.costs;
        // const cardEffects = card.details.effects;

        Object.entries(cardCosts).forEach(([key, value]) => {
            setPartyMembers((prevValue) => {
                const newValue = [...prevValue];
                newValue.find(
                    (member) => member.name === userMember.name
                ).stats[key] -= value;
                return newValue;
            });
        });
    };

    useEffect(() => {
        setTurnsOrder(calculateTurn(partyMembers));
    }, [partyMembers]);

    return { playCard, turnsOrder };
}
