export const initialCardDeck = {
    currentDeck: [
        {
            name: 'Warrior Bob',
            class: 'Warrior',
            level: 0,
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
        }
    ]
}