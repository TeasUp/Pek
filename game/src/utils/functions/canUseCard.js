export default function canUseCard(memberStats, costs, cooldown) {
    if (cooldown === "used" || (typeof cooldown === "number" && cooldown > 0)) {
        return false;
    }

    return Object.entries(costs).every(
        ([stat, cost]) => memberStats[stat] >= cost
    );
}
