export function getTargetList(cardGroup) {

    let targets = [];

    for (const card in cardGroup) {
        targets.push(cardGroup[card]);
    }

    
    targets.sort(function(a,b) {
        return b.health.currentHealth - a.health.currentHealth;
    });

    return targets
}

export function handleAttackOrder(attackGroup, defenseGroup, defenseTeam) {
    let result = [defenseTeam];
    let dIndex = 0;
    
    for (let aIndex = 0; aIndex < attackGroup.length; aIndex++) {

        if (!attackGroup[aIndex].dead) {
            
            for (let attackAttempts = 0; attackAttempts < defenseGroup.length; attackAttempts++) {

                console.log(aIndex, dIndex, attackAttempts, result)
                if (!defenseGroup[dIndex].dead) {

                    console.log('attack')

                    let attackAmount = attackGroup[aIndex].attack.base * attackGroup[aIndex].attack.multi;
                    console.log(defenseGroup[aIndex].block.base * defenseGroup[aIndex].block.multi)

                    let newHealth = defenseGroup[aIndex].health.currentHealth - attackAmount;
                    let targetID = defenseGroup[aIndex].id;

                    result.push({newHealth: newHealth, targetID: targetID})

                    if (dIndex === defenseGroup.length-1) {
                        dIndex = 0;
                    } else {dIndex++}
                    break;

                } else {
                    console.log(aIndex, dIndex, defenseGroup.length, attackAttempts)
                    if (dIndex === defenseGroup.length) {
                        dIndex = 0;
                    } else {dIndex++}
                    // dIndex = (dIndex === defenseGroup.length) ? 0 : dIndex++;
                    console.log(dIndex)
                }
            }
            
        }
        
    }

    console.log(result)
    return result
}

export function handleAttack(attacker, defender) {

    let dmg = attacker.attack.base * attacker.attack.multi;
    let block = defender.block.base * defender.block.multi;
    let defHealth = defender.health.currentHealth;
    let newHealth = 0;
    let targetID = defender.id;

    if (dmg > block) {
        newHealth = defHealth - (dmg - block);
        console.log(attacker,defender)
        return {newHealth: newHealth, targetID: targetID}
    } else {
        return {newHealth: 'blocked', targetID: targetID} // Maybe tie 'blocked' to a trigger for block animation
    }
    
}