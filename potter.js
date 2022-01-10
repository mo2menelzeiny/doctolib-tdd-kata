export function calculate(arr) {
    const set = new Set(arr)
    
    let factor = 0
    if (set.size === 2) {
        factor = 0.95
    } else if (set.size === 3) {
        factor = 0.9
    } else if (set.size === 4) {
        factor = 0.80
    } else if (set.size === 5){
        factor = 0.75
    }

    console.log('equal: ', set.size === arr.length, set, arr, arr.length - set.size)

    let result = set.size > 1 ? set.size * 8 * factor + (arr.length - set.size) * 8 : arr.length * 8

    return result
}