export const initialArea = {
    name: 'Starter Area',
    level: 1,
    encounters: [],
    currentHeroes: [
        {
            name: 'Bruno',
            class: 'Warrior',
            level: 1,
            resurectionCost: { cards: 10000, suits: { hearts: 0, spades: 0, diamonds: 0, clubs: 0 } },
            image: '',
            health: { base: 100, currentHealth: 30, multi: 1 },
            magic: { base: 10, currentMagic: 10, multi: 1 },
            attack: { base: 50, multi: 1 },
            block: { base: 10, multi: 1 },

            abilities: [ 

                /* ABILITIES.cleave,
                ABILITIES.frenzy */

            ],
            id: 'BrunoWarrior'
        },
        {
            name: 'Kazadal',
            class: 'Healer',
            level: 2,
            resurectionCost: { cards: 10000, suits: { hearts: 0, spades: 0, diamonds: 0, clubs: 0 } },
            image: '',
            health: { base: 100, currentHealth: 80, multi: 1 },
            magic: { base: 100, currentMagic: 50, multi: 1 },
            attack: { base: 50, multi: 1 },
            block: { base: 10, multi: 1 },

            abilities: [ 

                /* ABILITIES.cleave,
                ABILITIES.frenzy */

            ],
            id: 'KazadalHealer'
        }
    ],
    currentEncounter: {
        cardGroup: [
            {
                name: 'Warrior Bob',
                class: 'Warrior',
                level: 1,
                resurectionCost: { cards: 10000, suits: { hearts: 0, spades: 0, diamonds: 0, clubs: 0 } },
                image: '',
                health: { base: 100, currentHealth: 100, multi: 1 },
                attack: { base: 50, multi: 1 },
                block: { base: 10, multi: 1 },
                magic: { base: 0, multi: 1 },
    
                abilities: [ 
    
                    /* ABILITIES.cleave,
                    ABILITIES.frenzy */
    
                ],
                id: 'warriorTest'
            },
            {
                name: 'Healer Bob',
                class: 'Healer',
                level: 1,
                resurectionCost: { cards: 10000, suits: { hearts: 0, spades: 0, diamonds: 0, clubs: 0 } },
                image: '',
                health: { base: 100, currentHealth: 100, multi: 1 },
                attack: { base: 50, multi: 1 },
                block: { base: 10, multi: 1 },
                magic: { base: 0, multi: 1 },
    
                abilities: [ 
    
                    /* ABILITIES.cleave,
                    ABILITIES.frenzy */
    
                ],
                id: 'healerTest'
            }
        ],
        encounterPayout: {
            cards: 1000, 
            suitTypes: ['hearts'], 
            suitPayout: 100}
    },
    completionPayout: {}
}