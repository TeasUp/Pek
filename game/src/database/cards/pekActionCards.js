const pekActions = [
    {
        type: "deBuff",
        title: "Mind Prison",
        description:
            "Traps an enemy in their own thoughts, confusing them and limiting their actions for a turn.",
        details: {
            baseDamage: 0,
            focusCost: 10,
            coolDown: "one time use",
            healthRestore: 0,
            additionalEffects: [],
            targetType: "single",
        },
    },
    {
        type: "deBuff",
        title: "It's Changing",
        description:
            "Alters the fabric of reality around an enemy, causing disorientation and random effects.",
        details: {
            baseDamage: 0,
            focusCost: 15,
            coolDown: 3,
            healthRestore: 0,
            additionalEffects: [{ type: "confusion", duration: 1 }],
            targetType: "single",
        },
    },
    {
        type: "buff",
        title: "Think, THINK",
        description:
            "Harnesses creativity to gain insight into the next moves, boosting Pek’s stats.",
        details: {
            baseDamage: 0,
            focusCost: 5,
            coolDown: 1,
            healthRestore: 0,
            additionalEffects: [
                { type: "attack boost", amount: 10 },
                { type: "focus boost", amount: 15 },
            ],
            targetKind: "self",
        },
    },
    {
        type: "buff",
        title: "I Hear It",
        description:
            "Taps into instincts to gain a defensive advantage, increasing the chance to evade attacks.",
        details: {
            baseDamage: 0,
            focusCost: 8,
            coolDown: 2,
            healthRestore: 0,
            additionalEffects: [{ type: "evasion boost", amount: 30 }],
            targetKind: "self",
        },
    },
];

export default pekActions;
