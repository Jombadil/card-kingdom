import store from '../../../app/store.js';
import {PLAYING_CARDS} from '../../../gameObjects/defaultPlayingCards.js';

export function randCard() {
    return PLAYING_CARDS[Math.floor(Math.random() * PLAYING_CARDS.length)];
}

export function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getPlayingCardName(card) {
    return `${card.type} of ${capFirstLetter(card.suit)}`
}

export function scorePokerHand(currentHand) {

    let handSplit = []; // array of arrays containing [value, suit]
    let handValues = []; // array of hand values
    let handSuits = []; // array of hand suits

    let dupes = []; // collect duplicate values
    let dupe1Amount, dupe2Amount; // collect value repeats ... there can only be 2 pairs
    
    //CARD PAYOUTS                       //SUIT PAYOUTS
    const RFbaseCardPayout  = 100000;      const RFbaseSuitPayout = 1000;
    const SFbaseCardPayout  = 50000;       const SFbaseSuitPayout = 500;
    const K4baseCardPayout  = 35000;       const K4baseSuitPayout = 100;
    const FHbaseCardPayout  = 15000;       const FHbaseSuitPayout = 25;
    const FbaseCardPayout   = 15000;       const FbaseSuitPayout  = 25;
    const SbaseCardPayout   = 10000;       const SbaseSuitPayout  = 20;
    const K3baseCardPayout  = 5000;        const K3baseSuitPayout = 15;     let k3value;
    const P2baseCardPayout  = 2000;        const P2baseSuitPayout = 10;
    const PbaseCardPayout   = 1000;        const PbaseSuitPayout  = 5;
    const HbaseCardPayout   = 500;         const HbaseSuitPayout  = 2;      let highest = 0;


    let cardPayout = 0;
    let suitPayout = 0;
    let payoutSuits = [];
    let msg = '';

    // FINAL REWARD OBJECT
    let rewardObj = {
        hand: currentHand, 
        cardAmount: cardPayout, 
        suitAmount: suitPayout, 
        suits: payoutSuits
    }

    if (currentHand.length === 5) { // CHECK TO SEE IF YOU HAVE 5 CARDS
        
        // split card values and suits and push to arrays
        for (let i = 0; i < currentHand.length; i++) {
            handSplit.push(currentHand[i].split(''));
            handValues.push(handSplit[i][0]);
            handSuits.push(handSplit[i][1]);
        }
        
        // convert handsplit letter values to number values & suit letters to suit names
        for (let i = 0; i < handSplit.length; i++) {
            handSplit[i][0] = convertValueLetter(handSplit[i][0]);
            handSplit[i][1] = convertSuitLetter(handSplit[i][1]);
        }
        
        convertValsToNums(handValues);
        sortValues(handValues);
        getHighCard();
        checkDuplicates();
        checkDuplicateRepeats();
        

        /////// DETERMIN BEST HAND ///////

             if ( checkRoyalFlush()    )  { return royalFlushPayout()    }
        else if ( checkStraightFlush() )  { return straightFlushPayout() }
        else if ( checkFourOfKind()    )  { return fourOfKindPayout()    }
        else if ( checkFullHouse()     )  { return fullHousePayout()     }
        else if ( checkFlush()         )  { return flushPayout()         }
        else if ( checkStraight()      )  { return straightPayout()      }
        else if ( checkThreeOfKind()   )  { return threeOfKindPayout()   }
        else if ( checkTwoPair()       )  { return twoPairPayout()       }
        else if ( checkPair()          )  { return pairPayout()          }
        else                              { return highCardPayout()}


        /////// HAND ORGINIZATION FUNCTIONS ///////

        function checkDuplicates() {
            for (let i = 0; i < handValues.length; i++){
                let arr = handValues.filter(value => value === handValues[i]);
                
                if (!dupes.includes(arr[0]) && arr.length > 1) {
                    dupes.push(arr[0]);
                }
            }
        }

        function checkDuplicateRepeats() {
            if (dupes[0]) {
                dupe1Amount = [dupes[0], handValues.filter(value => value === dupes[0]).length];
            }
            if (dupes[1]) {
                dupe2Amount = [dupes[1], handValues.filter(value => value === dupes[1]).length]
            }
        }

        function getHighCard() {
            highest = Math.max(...handValues);
        }

        function sortValues(arr) {
            arr.sort(function(a, b) {
                return a - b;
            });
        }

        function convertValsToNums(arr) {
            for (let i = 0; i < arr.length; i++) {
                arr[i] = convertValueLetter(arr[i]);
            }
        }

        function convertSuitLetter(item) {
            if (item === 'H') {return 'hearts'}
            else if (item === 'D') {return 'diamonds'}
            else if (item === 'S') {return 'spades'}
            else if (item === 'C') {return 'clubs'} 
        }
        
        function convertValueLetter(item) {
            if (item === 'A') {return 14}
            else if (item === 'K') {return 13}
            else if (item === 'Q') {return 12}
            else if (item === 'J') {return 11}
            else if (item === 'T') {return 10}
            else { return parseInt(item)}
        }

        

        /////// HAND CHECK FUNCTIONS ///////

        function checkFlush() {
            let result = new Set(handSuits).size === 1 ? true : false;
            return result;
        }

        // const increasingSequence = (arr) => arr.every((val, idx) => val === arr[0] + idx);
        function checkStraight() {
            return handValues.every((val,idx) => val === handValues[0] + idx)
            // return handValues.every((val,idx) => val === handValues[idx + 1] - 1)
        }

        function checkRoyalFlush() {
            if (checkFlush() && checkStraight() && highest === 14) { return true };
        }

        function checkStraightFlush() {
            if (checkFlush() && checkStraight()) { return true };
        }

        function checkFullHouse() {
            if (dupe2Amount) {if (dupe1Amount[1] + dupe2Amount[1] === 5) { return true }}
        }

        function checkPair() {
            if (dupe1Amount) { return true }
        }

        function checkTwoPair() {
            if (dupe2Amount) { return true }
        }
        
        function checkThreeOfKind() {
            if (dupe1Amount) {if (dupe1Amount[1] === 3) { k3value = dupe1Amount[0]; return true }};
            if (dupe2Amount) {if (dupe2Amount[1] === 3) { k3value = dupe2Amount[0]; return true }};
        }

        function checkFourOfKind() {
            if (dupe1Amount) {if (dupe1Amount[1] === 4) { return true }};
            if (dupe2Amount) {if (dupe2Amount[1] === 4) { return true }};
        }



        /////// PAYOUT FUNCTIONS ///////

        function dealerMultiplier() {
            return 1 + store.getState().producers.allProducers[store.getState().producers.allProducers.findIndex(prod => prod.name === 'Dealer')].production.count / 100
        }

        
        // ROYAL FLUSH
        function royalFlushPayout() {
            cardPayout = Math.floor(RFbaseCardPayout * dealerMultiplier());         // Card Payout
            suitPayout = Math.floor(RFbaseSuitPayout * dealerMultiplier());         // Suit Payout
            payoutSuits = [handSplit[0][1]];
            msg = `You got a Royal Flush! Your payout is ${cardPayout} Cards & ${suitPayout} ${payoutSuits[0]}`
            return getRewardObj(cardPayout, suitPayout, payoutSuits, msg)
        }

        // STRAIGHT FLUSH
        function straightFlushPayout() {
            cardPayout = Math.floor(SFbaseCardPayout * dealerMultiplier());         // Card Payout
            suitPayout = Math.floor(SFbaseSuitPayout * dealerMultiplier());         // Suit Payout
            payoutSuits = handSplit[0][1];
            msg = `You got a Straight Flush! Your payout is ${cardPayout} Cards & ${suitPayout} ${payoutSuits}`
            return getRewardObj(cardPayout, suitPayout, payoutSuits, msg)
        }

        // FOUR OF A KIND
        function fourOfKindPayout() {
            cardPayout = Math.floor(K4baseCardPayout * dealerMultiplier());         // Card Payout
            suitPayout = Math.floor(K4baseSuitPayout * dealerMultiplier());         // Suit Payout
            payoutSuits = ['diamonds', 'hearts', 'clubs', 'spades'];
            msg = `You got a Four of a Kind! Your payout is ${cardPayout} Cards & ${suitPayout} of each suit.`;
            return getRewardObj(cardPayout, suitPayout, payoutSuits, msg)
        }

        // FULLHOUSE
        function fullHousePayout() {
            cardPayout = Math.floor(FHbaseCardPayout * dealerMultiplier());         // Card Payout
            suitPayout = Math.floor(FHbaseSuitPayout * dealerMultiplier());         // Suit Payout
            for (let i = 0; i < handSplit.length; i++) { payoutSuits.push(handSplit[i][1]) }; // Suits to Payout
            msg = `You got a Full House! Your payout is ${cardPayout} Cards & ${suitPayout} per suit used.`;
            // alert(`You got a Full House! Your payout is ${cardPayout} Cards & ${suitPayout} per suit used.`)
            return getRewardObj(cardPayout, suitPayout, payoutSuits, msg)
        }

        // FLUSH
        function flushPayout() {
            cardPayout = Math.floor(FbaseCardPayout * dealerMultiplier());         // Card Payout
            suitPayout = Math.floor(FbaseSuitPayout * dealerMultiplier());         // Suit Payout
            payoutSuits = handSplit[0][1];
            msg = `You got a Flush! Your payout is ${cardPayout} Cards & ${suitPayout} ${payoutSuits}`;
            // alert(`You got a Flush! Your payout is ${cardPayout} Cards & ${suitPayout} ${payoutSuits}`)
            return getRewardObj(cardPayout, suitPayout, payoutSuits, msg)
        }

        // STRAIGHT
        function straightPayout() {
            cardPayout = Math.floor(SbaseCardPayout * dealerMultiplier());         // Card Payout
            suitPayout = Math.floor(SbaseSuitPayout * dealerMultiplier());         // Suit Payout

            let suits = [];
            for (let i = 0; i < handSplit.length; i++) { suits.push(handSplit[i][1]) }
            rewardObj = {cardAmount: cardPayout, suitAmount: suitPayout, suits: suits, msg: `You got a Straight! Your payout is ${cardPayout} Cards & ${suitPayout} per suit used.`}
            return rewardObj
        }

        // THREE OF A KIND
        function threeOfKindPayout() {
            cardPayout = Math.floor(K3baseCardPayout * dealerMultiplier());         // Card Payout
            suitPayout = Math.floor(K3baseSuitPayout * dealerMultiplier());         // Suit Payout

            let suits = [];
            for (let i = 0; i < handSplit.length; i++) { 
                if (handSplit[i][0] === k3value) { suits.push(handSplit[i][1]) } 
            }
            rewardObj = {cardAmount: cardPayout, suitAmount: suitPayout, suits: suits, msg: `You got Three of a Kind! Your payout is ${cardPayout} Cards & ${suitPayout} per suit used.`}
            return rewardObj
        }

        // TWO PAIR
        function twoPairPayout() {
            cardPayout = Math.floor(P2baseCardPayout * dealerMultiplier());         // Card Payout
            suitPayout = Math.floor(P2baseSuitPayout * dealerMultiplier());         // Suit Payout

            let suits = [];
            for (let i = 0; i < handSplit.length; i++) { 
                if (handSplit[i][0] === dupe1Amount[0] || handSplit[i][0] === dupe2Amount[0]) { suits.push(handSplit[i][1]) } 
            }
            rewardObj = {cardAmount: cardPayout, suitAmount: suitPayout, suits: suits, msg: `You got Two Pair! Your payout is ${cardPayout} Cards & ${suitPayout} per suit used.`}
            return rewardObj
        }

        // PAIR
        function pairPayout() {
            cardPayout = Math.floor(PbaseCardPayout * dealerMultiplier());         // Card Payout
            suitPayout = Math.floor(PbaseSuitPayout * dealerMultiplier());         // Suit Payout

            let suits = [];
            for (let i = 0; i < handSplit.length; i++) { 
                if (handSplit[i][0] === dupe1Amount[0]) { suits.push(handSplit[i][1]) } 
            }
            rewardObj = {cardAmount: cardPayout, suitAmount: suitPayout, suits: suits, msg: `You got a Pair! Your payout is ${cardPayout} Cards & ${suitPayout} per suit used.`}
            return rewardObj
        }

        // HIGH CARD
        function highCardPayout() {
            cardPayout = Math.floor(HbaseCardPayout * highest * dealerMultiplier());            // Card Payout
            suitPayout = Math.floor(HbaseSuitPayout * dealerMultiplier());                      // Suit Payout

            let suits = [];
            for (let i = 0; i < handSplit.length; i++) { 
                if (handSplit[i][0] === highest) { suits.push(handSplit[i][1]) } 
            }
            rewardObj = {cardAmount: cardPayout, suitAmount: suitPayout, suits: suits, msg: `High Card! Your payout is ${cardPayout} Cards & ${suitPayout} per suit used.`}
            return rewardObj
        }

        function getRewardObj(cardPayout, suitPayout, payoutSuits, msg) {
            rewardObj = {
                header: 'Poker Payout',
                hand: currentHand, 
                cardAmount: cardPayout, 
                suitAmount: suitPayout, 
                suits: payoutSuits,
                msg: msg
            }
            return rewardObj
        }

    } else {alert('ya need 5 cards brah')}
}