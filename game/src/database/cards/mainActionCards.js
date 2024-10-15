const actionCards = [
    {
        type: "attack",
        title: "Mohg's attack",
        description:
            "A powerful melee attack that inflicts damage and a bleeding effect.",
        details: {
            baseDamage: 150,
            focusCost: 5,
            coolDown: 1,
            healthRestore: 0,
            additionalEffects: [{ type: "bleed", duration: 3, damage: 10 }],
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
            baseDamage: 0,
            focusCost: 15,
            coolDown: 3,
            healthRestore: 0,
            additionalEffects: [{ type: "shield", amount: 100 }],
            targetType: "single",
            targetKind: "party",
        },
    },
    {
        type: "attack",
        title: "Do not Disturb",
        description: "Launch a projectile that damages and slows the target.",
        details: {
            baseDamage: 120,
            focusCost: 10,
            coolDown: 2,
            healthRestore: 0,
            additionalEffects: [{ type: "slow", duration: 1, amount: -10 }],
            targetType: "single",
            targetKind: "enemy",
        },
    },
    {
        type: "attack",
        title: "Give it back",
        description:
            "Drains energy from the enemy, dealing damage while restoring health.",
        details: {
            baseDamage: 100,
            focusCost: 5,
            coolDown: 3,
            healthRestore: 20,
            additionalEffects: [],
            targetType: "single",
            targetKind: "enemy",
        },
    },
    {
        type: "support",
        title: "Phantom blood",
        description:
            "Bleeds to near death, giving a others [Confidence] and [Patience].",
        details: {
            baseDamage: 0,
            focusCost: 20,
            coolDown: "one time use",
            healthRestore: 0,
            additionalEffects: [{ type: "bleed", duration: 4 }],
            targetType: "area",
            targetKind: "self",
        },
    },
];

export default actionCards;
