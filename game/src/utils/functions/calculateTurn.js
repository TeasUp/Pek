export default function calculateTurn(partyMembers) {
    const membersFocus = partyMembers.map((member) => ({
        name: member.name,
        focus: member.stats.focus,
        cards: member.cards,
    }));
    const membersFocusOrdered = membersFocus.sort((a, b) => b.focus - a.focus);

    return membersFocusOrdered;
}
