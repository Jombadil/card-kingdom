import store from "./app/store";

export const calcProduction = (producers, kingdomCards) => {
    let productionTotal = 0;

        for (let i = 0; i < producers.allProducers.length; i++) {

            let multiplier = 1;
            for (let y = 0; y < kingdomCards.allKingdomCards.length; y++ ) {
                if(kingdomCards.allKingdomCards[y].effectedProducer === producers.allProducers[i].name) {
                    multiplier += kingdomCards.allKingdomCards[y].level;
                }
            }

            productionTotal += (producers.allProducers[i].production.count * producers.allProducers[i].production.baseProd * multiplier);
        }

    return productionTotal
}


export const currentCardAmount = () => {
    return store.getState().resources.cards.amount
}

export const calcCost = (baseCost, costIncrease, countOrLevel) => {
    return Math.ceil(baseCost * (Math.pow(costIncrease, countOrLevel)));
}

export const formatNumSymbol = (num, digits) => {
    if(isNaN(num)) return new TypeError('[INVALID_NUMBER]')
    if(isNaN(digits)) return new TypeError('[INVALID_NUMBER]')

    const symbols = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "B" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "Q" },
        { value: 1e18, symbol: "QT" }
      ];
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      var find = symbols.slice().reverse().find(function(item) {
        return num >= item.value;
      });
      return find ? (num / find.value).toFixed(digits).replace(rx, "$1") + find.symbol : "0";
}

export const commas = (num) => {
    if(isNaN(num)) return new TypeError("[INVALID_NUMBER]")
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getDeckCardBG = (type) => {
    switch (type){
        case 'Warrior': 
            return "url('assets/img/deck-cards/card-bg-warrior.png')"
        case 'Healer': 
            return "url('assets/img/deck-cards/card-bg-healer.png')"
        default: return
    }
}