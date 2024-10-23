const pekActions = [
    {
        type: "deBuff",
        title: "Mind Prison",
        description:
            "Traps an enemy in their own thoughts, confusing them and limiting their actions for a turn.",
        details: {
            costs: {
                focus: 10,
                health: 10,
            },
            coolDown: "one time use",
            effects: [
                {
                    type: "confusion",
                    duration: 5,
                    target: "multiple",
                    targetKind: "enemy",
                },
            ],
        },
    },
    {
        type: "deBuff",
        title: "It's Changing",
        description:
            "Alters the fabric of reality around an enemy, causing disorientation and bleeding.",
        details: {
            costs: {
                focus: 5,
                health: 3,
            },
            coolDown: 3,
            effects: [
                {
                    type: "confusion",
                    duration: 3,
                    target: "single",
                    targetKind: "enemy",
                },
                { type: "bleed", duration: 3, amount: 10, target: "enemy" },
            ],
        },
    },
    {
        type: "buff",
        title: "Think, THINK",
        description:
            "Harnesses creativity to boost the party's attack and focus.",
        details: {
            costs: {
                focus: 5,
            },
            coolDown: 4,
            boosts: {
                attack: { target: "party", amount: 10 },
                focus: { target: "party", amount: 15 },
            },
        },
    },
    {
        type: "buff",
        title: "I Hear It",
        description:
            "Taps into instincts to gain a defensive advantage, increasing evasion.",
        details: {
            costs: {
                focus: 10,
            },
            coolDown: 2,
            boosts: {
                instinct: { target: "self", amount: 15 },
            },
            effects: [{ type: "evasion", amount: 15, target: "self" }],
        },
    },
    {
        type: "buff",
        title: "Phantom Blood",
        description:
            "Sacrifices her own health to grant others confidence and patience.",
        details: {
            costs: {
                focus: 15,
            },
            coolDown: 2,
            boosts: {
                confidence: { target: "party", amount: 10 },
                patience: { target: "party", amount: 10 },
            },
            effects: [{ type: "sacrifice", amountPercent: 70, target: "self" }],
        },
    },
];

export default pekActions;
