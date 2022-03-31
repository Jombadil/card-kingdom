import {getTargetList, handleAttackOrder, handleAttack, calcNewHealth, calcDamage, calcBlock, handleHealthChange, checkTeamDeath, cycleNextDefender, getNextLivingTargetIndex, calcRemainingHealth, getNextEncounter} from '../battleFunctions'


describe('battle functions', () => {
    
  describe('getTargetList', () => {
    it('should sort cards in ascending order by remaining health', () => {
      const cardGroup = [
        {id: '1', health: {currentHealth: 100}},
        {id: '2', health: {currentHealth: 50}},
        {id: '3', health: {currentHealth: 75}},
        {id: '4', health: {currentHealth: 80}},
        {id: '5', health: {currentHealth: 20}}
      ]

      const result = getTargetList(cardGroup)
      const expected = [cardGroup[0], cardGroup[3], cardGroup[2], cardGroup[1], cardGroup[4]]
      
      expect(result).toStrictEqual(expected)
    })
  })

  describe('checkTeamDeath', () => {
    describe('when there are no deaths', () => {
        it('should return false', () => {
            const team = [{dead: false}, {dead: false}, {dead: false}, {dead: false}, {dead: false}]

            const result = checkTeamDeath(team)
            const expected = false

            expect(result).toStrictEqual(expected)
        })
    })
    describe('when there are some deaths', () => {
        it('should return false', () => {
            const team = [{dead: false}, {dead: true}, {dead: false}, {dead: true}, {dead: false}]

            const result = checkTeamDeath(team)
            const expected = false

            expect(result).toStrictEqual(expected)
        })
    })
    describe('when whole team is dead', () => {
        it('should return true', () => {
            const team = [{dead: true}, {dead: true}, {dead: true}, {dead: true}, {dead: true}]

            const result = checkTeamDeath(team)
            const expected = true

            expect(result).toStrictEqual(expected)
        })
    })
  })

  describe('cycleNextDefender', () => {
      describe('when next sequential defender index is correct', () => {
          it('should return the next targetIndex', () => {
              const targetIndex = 0;
              const defenseGroup = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]

              const result = cycleNextDefender(targetIndex, defenseGroup)
              const expected = 1

              expect(result).toStrictEqual(expected)
          })
      })
      describe('when next sequential defender should cycle back to the first in group', () => {
          it('should return the first targetIndex in group, which is 0', () => {
            const targetIndex = 4;
            const defenseGroup = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]

            const result = cycleNextDefender(targetIndex, defenseGroup)
            const expected = 0

            expect(result).toStrictEqual(expected)
          })
      })
  })

  describe('getNextLivingTargetIndex', () => {
      describe('when next target is dead', () => { 
          it('should return next living target', () => {
            const cardIndex = 0
            const team = [{dead: true, id: 1}, {dead: true, id: 2}, {dead: false, id: 3}, {dead: false, id: 4}, {dead: false, id: 5}]

            const result = getNextLivingTargetIndex(cardIndex, team)
            const expected = 2

            expect(result).toStrictEqual(expected)
          })
       })
       describe('when next target is alive', () => { 
        it('should return next index', () => {
          const targetIndex = 0
          const defenseGroup = [{dead: true, id: 1}, {dead: false, id: 2}, {dead: false, id: 3}, {dead: false, id: 4}, {dead: false, id: 5}]

          const result = getNextLivingTargetIndex(targetIndex, defenseGroup)
          const expected = 1

          expect(result).toStrictEqual(expected)
        })
     })
     describe('when next few targets are dead', () => { 
        it('should return next living target', () => {
          const targetIndex = 0
          const defenseGroup = [{dead: true, id: 1}, {dead: true, id: 2}, {dead: true, id: 3}, {dead: false, id: 4}, {dead: false, id: 5}]

          const result = getNextLivingTargetIndex(targetIndex, defenseGroup)
          const expected = 3

          expect(result).toStrictEqual(expected)
        })
     })
  })

//   describe('handleAttack', () => {
//       describe('when damage is greater than block and less than remaining health', () => {
//           it('should call changeHealth on target card')
//       })
//   })

  describe('calcRemainingHealth', () => {
      describe('when given damageAmount, blockAmount, and defenderHealth', () => {
          it('returns resulting number', () => {
              const damageAmount = 40;
              const blockAmount = 20;
              const defenderHealth = 60;

              const result = calcRemainingHealth(damageAmount, blockAmount, defenderHealth)
              const expected = 40;

              expect(result).toStrictEqual(expected)
          })
      })
  })

  describe('calcNewHealth', () => {
    it('should return the new defender health after subtracting damage', () => {
      const dmg = 20;
      const block = 10;
      const defHealth = 10;

      const result = calcNewHealth(dmg, block, defHealth)
      const expected = 0;
      
      expect(result).toStrictEqual(expected)
    })
  })

  describe('calcDamage', () => {
    it('should return the total damage from attacker', () => {
      const attacker = {attack: { base: 10, multi: 2 }};

      const result = calcDamage(attacker)
      const expected = 20;
      
      expect(result).toStrictEqual(expected)
    })
  })

  describe('calcBlock', () => {
    it('should return the total block amount from defender', () => {
      const defender = {block: { base: 10, multi: 2 }};

      const result = calcBlock(defender)
      const expected = 20;
      
      expect(result).toStrictEqual(expected)
    })
  })

  describe('getNextEncounter', () => { 
      describe('when it is the first encounter', () => {
          it('should return 0', () => {
              const encounters = [
                  {completed: false},
                  {completed: false},
                  {completed: false}
              ]

              const result = getNextEncounter(encounters)
              const expected = 0

              expect(result).toStrictEqual(expected)
          })
      })
      describe('when it is the second encounter', () => {
        it('should return 1', () => {
            const encounters = [
                {completed: true},
                {completed: false},
                {completed: false}
            ]

            const result = getNextEncounter(encounters)
            const expected = 1

            expect(result).toStrictEqual(expected)
        })
      })
      describe('when it is the third encounter', () => {
        it('should return 2', () => {
            const encounters = [
                {completed: true},
                {completed: true},
                {completed: false}
            ]

            const result = getNextEncounter(encounters)
            const expected = 2

            expect(result).toStrictEqual(expected)
        })
      })
   })
})

