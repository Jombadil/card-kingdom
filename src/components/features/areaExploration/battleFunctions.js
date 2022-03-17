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

                if (!defenseGroup[dIndex].dead) {

                    let attackAmount = attackGroup[aIndex].attack.base * attackGroup[aIndex].attack.multi;

                    let newHealth = defenseGroup[aIndex].health.currentHealth - attackAmount;
                    let targetID = defenseGroup[aIndex].id;

                    result.push({newHealth: newHealth, targetID: targetID})
                    break;

                } else {
                    dIndex = (dIndex >= defenseGroup.length) ? 0 : dIndex++;
                }
            }
 

            
        }
        
    }
    
    return result

    /* let atkI = 0
    let defI = 0

    let defenseHealthChanges = []
    
    // Run through attacking cards
    for (atkI; atkI < attackGroup.length; atkI++) {

        // Check if attacker card is alive
        if (!attackGroup[atkI].dead) {

            // Repeat defense target cycle if needed
            defI = (defI > defenseGroup.length-1) ? 0 : defI; 

            // Cycle through defense group
            for (let attempts = 0; attempts < 5; attempts++) {
                // Check if defense card is alive
                if (!defenseGroup[defI].dead) {
                    console.log(defenseGroup[defI])
                    console.log(attackGroup[atkI])
                    
                    defenseHealthChanges.push(handleAttack(attackGroup[atkI], defenseGroup[defI]))
                    defI++
                    break;
                }
            }
        }
    }
    console.log(defenseHealthChanges)
    return defenseHealthChanges */
}

export function handleAttack(attacker, defender) {

    let dmg = attacker.attack.base * attacker.attack.multi;
    let block = defender.block.base * defender.block.multi;

    if (dmg > block) {
        let newHealth = defender.health.currentHealth - (attacker.attack.base - defender.block.base);
        console.log(attacker,defender)
        return {card: defender, newHealth: newHealth}
    }
    
}