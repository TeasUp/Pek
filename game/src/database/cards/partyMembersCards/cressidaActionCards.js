const cressidaActions = [
    {
        type: "attack",
        title: "Not So Sure",
        description:
            "Swings her sword with doubt, unsure of her strength, but still determined to protect.",
        cooldown: 0,
        details: {
            baseDamage: 9,
            costs: {
                focus: 6,
                confidence: 2,
            },
            coolDown: 2,
            effects: [
                {
                    type: "damage",
                    amount: 9,
                    target: "single",
                    targetKind: "enemy",
                },
            ],
        },
    },
    {
        type: "attack",
        additionalType: "shield",
        title: "You Will Not",
        description:
            "A swing designed more to defend than to harm, reflecting her protective nature.",
        cooldown: 0,
        details: {
            baseDamage: 7,
            costs: {
                focus: 5,
            },
            coolDown: 3,
            effects: [
                {
                    type: "damage",
                    amount: 7,
                    target: "multiple",
                    targetKind: "enemy",
                },
                { type: "shield", attackProtection: 10, target: "party" },
            ],
        },
    },
    {
        type: "attack",
        title: "Fractured",
        description:
            "For a brief moment, she unleashes her Entropy power, creating an unpredictable strike.",
        cooldown: 0,
        details: {
            baseDamage: 15,
            costs: {
                focus: 8,
                confidence: 5,
            },
            coolDown: 4,
            boosts: {
                focus: { target: "party", amount: 15 },
                confidence: { target: "party", amount: 5 },
            },
            effects: [
                {
                    type: "damage",
                    amount: 15,
                    target: "multiple",
                    targetKind: "enemy",
                },
                { type: "slowness", duration: 2, amount: 10, target: "enemy" },
            ],
        },
    },
    {
        type: "shield",
        title: "Wavering Guard",
        description:
            "Raises her sword to form a defense, questioning if she can hold it.",
        cooldown: 0,
        details: {
            costs: {
                focus: 10,
                confidence: 5,
            },
            coolDown: 2,
            boosts: {
                instinct: { target: "self", amount: 15 },
            },
            effects: [{ type: "shield", amount: 15, target: "self" }],
        },
    },
];

export default cressidaActions;
