const pekActions = [
    {
        type: "deBuff",
        title: "Mind Prison",
        description:
            "Traps an enemy in their own thoughts, confusing them and limiting their actions for a turn.",
        details: {
            focusCost: 15,
            coolDown: "one time use",
            additionalEffects: [{ type: "confusion", duration: 5 }],
            targetType: "multiple",
            targetKind: "enemy",
        },
    },
    {
        type: "deBuff",
        title: "It's Changing",
        description:
            "Alters the fabric of reality around an enemy, causing disorientation.",
        details: {
            focusCost: 5,
            coolDown: 3,
            additionalEffects: [
                { type: "confusion", duration: 3 },
                { type: "bleed", duration: 3, bleedDamage: 10 },
            ],
            targetType: "single",
            targetKind: "enemy",
        },
    },
    {
        type: "buff",
        title: "Think, THINK",
        description:
            "Harnesses creativity to gain insight into the next moves, boosting members' stats.",
        details: {
            focusCost: 5,
            coolDown: 3,
            additionalEffects: [
                { type: "attack boost", amount: 10 },
                { type: "focus boost", amount: 15 },
            ],
            targetType: "multiple",
            targetKind: "party",
        },
    },
    {
        type: "buff",
        title: "I Hear It",
        description:
            "Taps into instincts to gain a defensive advantage, increasing the chance to evade attacks.",
        details: {
            focusCost: 10,
            coolDown: 2,
            additionalEffects: [{ type: "instinct boost", amount: 15 }],
            targetType: "single",
            targetKind: "self",
        },
    },
    {
        type: "buff",
        title: "Phantom Blood",
        description:
            "Bleeds to near death, giving a others [Confidence] and [Patience].",
        details: {
            focusCost: 15,
            coolDown: 2,
            additionalEffects: [
                { type: "bleed", duration: 4, bleedDamage: 10 },
            ],
            targetType: "single",
            targetKind: "self",
        },
    },
];

export default pekActions;