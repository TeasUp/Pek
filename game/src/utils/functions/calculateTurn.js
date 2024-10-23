export default function calculateTurn(partyMembers) {
    const membersFocus = partyMembers.map((member) => ({
        name: member.name,
        focus: member.stats.focus,
        actions: member.actions,
    }));
    const membersFocusOrdered = membersFocus.sort((a, b) => b.focus - a.focus);

    return membersFocusOrdered;
}
