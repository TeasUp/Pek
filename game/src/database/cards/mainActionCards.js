const actionCards = [
    {
        type: "attack",
        title: "Mohg's Attack",
        description:
            "A powerful melee attack that inflicts damage and a bleeding effect.",
        details: {
            baseDamage: 150,
            focusCost: 10,
            coolDown: 1,
            additionalEffects: [
                { type: "bleed", duration: 3, bleedDamage: 10 },
            ],
            targetType: "single",
            targetKind: "enemy",
        },
    },
    {
        type: "defense",
        title: "Airborne Effect",
        description:
            "Creates a protective shield absorbing incoming damage but gives deBuffs.",
        details: {
            focusCost: 10,
            coolDown: 3,
            additionalEffects: [{ type: "shield", attackProtection: 100 }],
            targetType: "single",
            targetKind: "party",
        },
    },
    {
        type: "attack",
        title: "Do Not Disturb",
        description: "Launch a projectile that damages and slows the target.",
        details: {
            baseDamage: 120,
            focusCost: 10,
            coolDown: 2,
            additionalEffects: [
                { type: "slowness", duration: 1, slownessAmount: 10 },
            ],
            targetType: "single",
            targetKind: "enemy",
        },
    },
    {
        type: "attack",
        title: "Give It Back",
        description:
            "Drains energy from the enemy, dealing damage while restoring health.",
        details: {
            baseDamage: 100,
            focusCost: 15,
            coolDown: "one time use",
            healthRestore: 100,
            targetType: "multiple",
            targetKind: "enemy",
        },
    },
];

export default actionCards;