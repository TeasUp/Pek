import { useState } from "react";
import pekCards from "../cards/partyMembersCards/pekActionCards";
import cressidaCards from "../cards/partyMembersCards/cressidaActionCards";

export default function usePartyMembers() {
    const [partyMembers, setPartyMembers] = useState([
        {
            name: "PEK",
            image: "pek_normal.png",
            stats: {
                health: 80,
                focus: 55,
                confidence: 45,
                creativity: 50,
                instinct: 55,
                patience: 50,
            },
            cards: pekCards,
            currentTurn: true,
            effects: [],
        },
        {
            name: "cressida",
            image: "cressida_normal.png",
            stats: {
                health: 130,
                focus: 50,
                confidence: 45,
                creativity: 45,
                instinct: 55,
                patience: 50,
            },
            cards: cressidaCards,
            currentTurn: false,
            effects: [],
        },
    ]);

    return [partyMembers, setPartyMembers];
}
