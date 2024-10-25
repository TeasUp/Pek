export default function canUseCard(memberStats, costs) {
    const canUse = Object.entries(costs).every(([stat, cost]) => {
        return memberStats[stat] >= cost;
    });

    return canUse;
}
