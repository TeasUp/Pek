export default function calculateTurn(partyMembers) {
    return partyMembers
        .map((member) => ({
            name: member.name,
            focus: member.stats.focus,
            cards: member.cards,
            currentTurn: member.currentTurn,
        }))
        .sort((a, b) => b.focus - a.focus);
}
