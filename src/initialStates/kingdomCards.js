export const initialKingdomCards = {
    allKingdomCards: [
        {
            name: 'Lumber Mill',
            level: 0,
            cost: { currentCost: 10000, baseCost: 10000, costIncrease: 1.75 },
            toggles: {unlocked: false, enabled: false},
            effectedProducer: 'Woodblock Printer',
            id: 0
        },
        {
            name: 'Magic School',
            level: 0,
            cost: { currentCost: 20000, baseCost: 20000, costIncrease: 1.75 },
            toggles: {unlocked: false, enabled: false},
            effectedProducer: 'none',
            id: 1
        },
        {
            name: 'Blacksmith',
            level: 0,
            cost: { currentCost: 30000, baseCost: 30000, costIncrease: 1.75 },
            toggles: {unlocked: false, enabled: false},
            effectedProducer: 'none',
            id: 2
        },
        {
            name: 'Casino',
            level: 0,
            cost: { currentCost: 40000, baseCost: 40000, costIncrease: 1.75 },
            toggles: {unlocked: false, enabled: false},
            effectedProducer: 'none',
            id: 3
        }
    ]
}