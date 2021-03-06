export const initialArea = {
    name: 'Starter Area',
    level: 1,
    fighting: false,
    encounters: [
        {
            completed: false, 
            completionPayout: 'payout', 
            enemyCards: [
                {
                    name: 'Warrior Bob',
                    class: 'Warrior',
                    level: 1,
                    dead: false,
                    image: '',
                    health: { base: 400, currentHealth: 20, multi: 1 },
                    attack: { base: 10, multi: 1 },
                    block: { base: 10, multi: 1 },
                    magic: { base: 0, multi: 1 },
                    abilities: [],
                    id: 'warriorBob'
                },
                {
                    name: 'Warrior Ned',
                    class: 'Warrior',
                    level: 1,
                    dead: false,
                    image: '',
                    health: { base: 400, currentHealth: 20, multi: 1 },
                    attack: { base: 10, multi: 1 },
                    block: { base: 10, multi: 1 },
                    magic: { base: 0, multi: 1 },
                    abilities: [],
                    id: 'warriorNed'
                }/* ,
                {
                    name: 'Warrior Sam',
                    class: 'Warrior',
                    level: 1,
                    dead: false,
                    image: '',
                    health: { base: 400, currentHealth: 20, multi: 1 },
                    attack: { base: 10, multi: 1 },
                    block: { base: 10, multi: 1 },
                    magic: { base: 0, multi: 1 },
            
                    abilities: [],
                    id: 'warriorSam'
                },
                {
                    name: 'Healer Bob',
                    class: 'Healer',
                    level: 1,
                    dead: false,
                    image: '',
                    health: { base: 400, currentHealth: 20, multi: 1 },
                    attack: { base: 10, multi: 1 },
                    block: { base: 10, multi: 1 },
                    magic: { base: 0, multi: 1 },
            
                    abilities: [],
                    id: 'healerTest'
                } */
            ]
        }
    ],
    currentHeroes: [
        {
            name: 'Bruno',
            class: 'Warrior',
            level: 1,
            dead: false,
            resurectionCost: { cards: 10000, suits: { hearts: 0, spades: 0, diamonds: 0, clubs: 0 } },
            image: '',
            health: { base: 400, currentHealth: 400, multi: 1 },
            attack: { base: 20, multi: 1 },
            block: { base: 10, multi: 1 },
            magic: { base: 0, multi: 1 },

            abilities: [],
            id: 'BrunoWarrior'
        },
        {
            name: 'Kazadal',
            class: 'Healer',
            level: 2,
            dead: false,
            resurectionCost: { cards: 10000, suits: { hearts: 0, spades: 0, diamonds: 0, clubs: 0 } },
            image: '',
            health: { base: 100, currentHealth: 80, multi: 1 },
            magic: { base: 100, currentMagic: 50, multi: 1 },
            attack: { base: 20, multi: 1 },
            block: { base: 10, multi: 1 },

            abilities: [],
            id: 'KazadalHealer'
        },
        {
            name: 'Help',
            class: 'Healer',
            level: 2,
            dead: false,
            resurectionCost: { cards: 10000, suits: { hearts: 0, spades: 0, diamonds: 0, clubs: 0 } },
            image: '',
            health: { base: 100, currentHealth: 80, multi: 1 },
            magic: { base: 100, currentMagic: 50, multi: 1 },
            attack: { base: 20, multi: 1 },
            block: { base: 10, multi: 1 },

            abilities: [],
            id: 'Help'
        }
    ],
    currentEncounter: [],
    currentEncounterPayout: {
            cards: 1000, 
            suitTypes: ['hearts'], 
            suitPayout: 100
    },
    completionPayout: {}
}