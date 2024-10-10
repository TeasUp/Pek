const pekActions = [
    {
        type: "deBuff",
        title: "Your Mind Is A Prison",
        description:
            "Traps an enemy in their own thoughts, confusing them and limiting their actions for a turn.",
        details: {
            baseDamage: 0,
            focusCost: 10,
            coolDown: 2,
            healthRestore: 0,
            additionalEffects: [],
            targetType: "single",
            descriptionNotes:
                "Reduces target's effectiveness in the next action.",
        },
    },
    {
        type: "deBuff",
        title: "Reality Is A Changing",
        description:
            "Alters the fabric of reality around an enemy, causing disorientation and random effects.",
        details: {
            baseDamage: 0,
            focusCost: 15,
            coolDown: 3,
            healthRestore: 0,
            additionalEffects: [{ type: "confusion", duration: 1 }],
            targetType: "single",
            descriptionNotes: "Chance to miss next attack.",
        },
    },
    {
        type: "buff",
        title: "Think Pek, THINK",
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
            targetType: "self",
            descriptionNotes: "Reveals the enemy's next action.",
        },
    },
    {
        type: "buff",
        title: "I Hear It, Deep Within",
        description:
            "Taps into instincts to gain a defensive advantage, increasing the chance to evade attacks.",
        details: {
            baseDamage: 0,
            focusCost: 8,
            coolDown: 2,
            healthRestore: 0,
            additionalEffects: [{ type: "evasion boost", amount: 30 }],
            targetType: "self",
            descriptionNotes: "Increases evasion for the next turn.",
        },
    },
];

export default pekActions;
