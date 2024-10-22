import pekActions from "../cards/partyMembersCards/pekActionCards";
import cressidaActions from "../cards/partyMembersCards/cressidaActionCards";
const partyMembers = [
    {
        name: "PEK",
        image: "pek_normal.png",
        stats: {
            health: 80,
            focus: 50,
            confidence: 45,
            creativity: 50,
            instinct: 55,
            patience: 50,
        },
        actions: pekActions,
    },
    {
        name: "cressida",
        image: "pek_normal.png",
        stats: {
            health: 120,
            focus: 50,
            confidence: 45,
            creativity: 50,
            instinct: 55,
            patience: 50,
        },
        actions: cressidaActions,
    },
];

export default partyMembers;
