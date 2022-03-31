import { getNextEncounter } from "../areaFunctions";


describe('Area Functions', () => {

    describe('getNextEncounter', () => {
        describe('when there are still encounters not completed', () => {
            it('should get next encounterIndex', () => {
                const thing = true;

                const result = getNextEncounter(thing);
                const expected = true;

                expect(result).toStrictEqual(expected)
            })
         })
    })

})