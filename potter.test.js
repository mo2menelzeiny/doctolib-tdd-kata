import {calculate} from './potter'
describe('Potter Mania', () => {
    // 5 book types
    // any copy is worth 8
    // 5% discount on 2 distinct
    // 10% disoucnt on 3 
    // 20% on 4
    // 25% on 5
    // types from 1 to 5
    // [1, 1, 1, 1] all the same
    
    describe('calculating price', () => {
        it('should return 0', () => {
            expect(calculate([])).toBe(0)
        })

        it('should calculate price of one book', () => {
            expect(calculate([1])).toBe(8)
        })

        it('should calculate price of two identical books', () => {
            expect(calculate([1, 1])).toBe(16)
        })

        it('should calculate price of two distinct books', () => {
            expect(calculate([1, 2])).toBe(15.2)
        })

        it('should calculate price of three distinct books', () => {
            expect(calculate([1, 2, 3])).toBe(21.6)
        })

        it('should calculate price of four distinct books', () => {
            expect(calculate([1, 2, 3, 4])).toBe(25.6)
        })

        it('should calculate price of five distinct books', () => {
            expect(calculate([1, 2, 3, 4, 5])).toBe(30)
        })

        it('should calculate price of 1 distinct 1 repetitive books', () => {
            expect(calculate([1, 1, 2])).toBe(15.2 + 8)
        })
    })
})