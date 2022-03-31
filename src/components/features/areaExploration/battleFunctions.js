import { handleFightInterval } from "../../../actions/actions";
import store from "../../../app/store";
import { changeHealth, clearCurrentEncounter, setFightInterval, toggleCardDeath, toggleFighting } from "../../../reducers/areaSlice";


export function getTargetList(cardGroup) {
    let targets = [];
    for (const card of cardGroup) {
        targets.push(card);
    }    
    targets.sort(function(a,b) {
        return b.health.currentHealth - a.health.currentHealth;
    });
    return targets
}


export function getNextLivingTargetIndex(cardIndex, cardGroup) {
    do { 
        cardIndex = cycleNextDefender(cardIndex, cardGroup) 
    } while (cardGroup[cardIndex].dead)
    return cardIndex 
}


export function handleAttackOrder(attackGroup, defenseGroup, defenseTeam, dispatch) {
    console.log('round')
    let targetIndex = 0;

    /* for (let i = 0; i < 5; i++) {
        if (checkTeamDeath(defenseGroup)) {
            dispatch(clearCurrentEncounter());
            dispatch(toggleFighting()); 
            return 
        } 
        handleAttack(attackGroup[0], defenseGroup[targetIndex], defenseGroup, defenseTeam, dispatch)

    } */

    for (let attackerIndex = 0; attackerIndex < attackGroup.length; attackerIndex++) {
        // I think I need to use selector to get the new state inside the loop
        let attacker = attackGroup[attackerIndex];

        if (checkTeamDeath(defenseGroup)) {
            dispatch(clearCurrentEncounter());
            dispatch(toggleFighting()); 
            return 
        } 
        if (!attacker.dead) {
            if (defenseGroup[targetIndex].dead) {
                do {
                    targetIndex = cycleNextDefender(targetIndex, defenseGroup)
                } while (defenseGroup[targetIndex].dead)
            }
            handleAttack(attacker, defenseGroup[targetIndex], defenseGroup, defenseTeam, dispatch)

            targetIndex = cycleNextDefender(targetIndex, defenseGroup)
        }
    }

    /* for (const attacker of attackGroup) {
        if (!checkTeamDeath(defenseGroup)) {
            if (!attacker.dead) {
                if (defenseGroup[targetIndex].dead) {
                    do {
                        targetIndex = cycleNextDefender(targetIndex, defenseGroup)
                        console.log(defenseGroup[targetIndex].dead)
                    } while (defenseGroup[targetIndex].dead)
                }
                handleAttack(attacker, defenseGroup[targetIndex], defenseTeam, dispatch)

                targetIndex = cycleNextDefender(targetIndex, defenseGroup)
            }
        } else { dispatch(toggleFighting()); return }
    } */
}

export function handleHealthChange(card, newHealth, defenseTeam, dispatch) {
    const result = {team: defenseTeam, id: card.id, newHealth: newHealth};
    dispatch(changeHealth(result))
}

export function handleCardDeath(card, defenseTeam, dispatch) {
    const result = {team: defenseTeam, id: card.id}
    dispatch(toggleCardDeath(result))
}

export function calcRemainingHealth(damageAmount, blockAmount, defenderHealth) {
    const remainingHealth = defenderHealth - (damageAmount - blockAmount);
    return remainingHealth
}

export function handleAttack(attacker, defender, defenseGroup, defenseTeam, dispatch) {

    const damangeAmount = calcDamage(attacker);
    const blockAmount = calcBlock(defender);
    const defenderHealth = defender.health.currentHealth;
    
    const remainingHealth = calcRemainingHealth(damangeAmount, blockAmount, defenderHealth);
    console.log(attacker.name, defender.name, remainingHealth)
    if (remainingHealth > 0) {
        handleHealthChange(defender, remainingHealth, defenseTeam, dispatch)
    } else {
        handleHealthChange(defender, 0, defenseTeam, dispatch);
        handleCardDeath(defender, defenseTeam, dispatch);
    }
}

export function calcNewHealth(damangeAmount, blockAmount, defenderHealth) {
    if (blockAmount > damangeAmount) {
        return defenderHealth - (damangeAmount - blockAmount);
    } else { return defenderHealth - (damangeAmount - blockAmount); }
}

export function calcDamage(attacker) {
    return attacker.attack.base * attacker.attack.multi;
}

export function calcBlock(defender) {
    return defender.block.base * defender.block.multi;
}

export function cycleNextDefender(targetIndex, defenseGroup) {
    targetIndex++
    if (targetIndex >= defenseGroup.length) {
        return 0
    } else {
        return targetIndex
    }
}

export function checkTeamDeath(cardGroup) {
    return cardGroup.every((card) => card.dead === true)
}

export function getNextEncounter(encounters) {
    let encounterIndex = 0;

    if (encounters[encounterIndex].completed === true) {
        do { encounterIndex++ } while (encounters[encounterIndex].completed === true)
    }

    return encounterIndex;

}