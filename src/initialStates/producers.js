export const initialProducers = {
    totalProducerProduction: 0,
    unlockPercentage: .8,
    allProducers: [
        {
            name: 'Woodblock Printer',
            production: {count: 0, baseProd: 5, multiplier: 1},
            cost: {currentCost: 100, baseCost: 100, costIncrease: 1.15},
            toggles: {unlocked: false, enabled: false},
            tooltip: {cps: 0, produced: 0, msg: 'Woodblock printing technology may have printed the first playing cards in the 9th century AD in the Tang dynasty. Who knew?!'},
            id: 0
        },
        {
            name: 'Party Magician',
            production: {count: 0, baseProd: 20, multiplier: 1},
            cost: {currentCost: 500, baseCost: 500, costIncrease: 1.15},
            toggles: {unlocked: false, enabled: false},
            tooltip: {cps: 0, produced: 0, msg: 'Pulling cards from kid&apos;s ears.'},
            id: 1
        },
        {
            name: 'Print Press',
            production: {count: 0, baseProd: 50, multiplier: 1},
            cost: {currentCost: 1000, baseCost: 1000, costIncrease: 1.15},
            toggles: {unlocked: false, enabled: false},
            tooltip: {cps: 0, produced: 0, msg: 'Woodblock printing technology may have printed the first playing cards in the 9th century AD in the Tang dynasty. Who knew?!'},
            id: 2
        },
        {
            name: 'Dealer',
            production: {count: 0, baseProd: 100, multiplier: 1},
            cost: {currentCost: 5000, baseCost: 5000, costIncrease: 1.15},
            toggles: {unlocked: false, enabled: false},
            tooltip: {cps: 0, produced: 0, msg: 'Woodblock printing technology may have printed the first playing cards in the 9th century AD in the Tang dynasty. Who knew?!'},
            id: 3
        }
    ]
}