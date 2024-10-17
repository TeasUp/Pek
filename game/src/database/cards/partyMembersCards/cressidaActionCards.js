const cressidaActions = [
    {
        type: "attack",
        title: "Not So Sure",
        description:
            "Swings her sword with doubt, unsure of her strength, but still determined to protect.",
        details: {
            baseDamage: 9,
            focusCost: 6,
            coolDown: 2,
            targetType: "single",
            targetKind: "enemy",
        },
    },
    {
        type: "attack",
        additionalType: "defense",
        title: "You Will Not",
        description:
            "A swing designed more to defend than to harm, reflecting her nature...",
        details: {
            baseDamage: 7,
            focusCost: 5,
            coolDown: 3,
            additionalEffects: [{ type: "shield", attackProtection: 10 }],
            targetType: "multiple",
            targetKind: "both",
        },
    },
    {
        type: "attack",
        title: "Fractured ",
        description:
            "Harnesses creativity to gain insight into the next moves, boosting members' stats.",
        details: {
            baseDamage: 15,
            focusCost: 8,
            coolDown: 4,
            additionalEffects: [
                { type: "slowness", duration: 2, slownessAmount: 10   },
                { type: "focus boost", amount: 15 },
            ],
            targetType: "multiple",
            targetKind: "party",
        },
    },
    {
        type: "shield",
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
        type: "attack",
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

export default cressidaActions;
