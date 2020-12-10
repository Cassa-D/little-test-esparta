class Solution {
    solution = (A) => {
        const distictValues = [];
        A.forEach(number => {
            const found = distictValues.findIndex(value => value === number)
            if (found < 0)
                distictValues.push(number)
        });
        return distictValues.length
    }
}

// const result = new Solution()
// console.log(result.solution([2, 1, 1, 2, 3, 1, 4, 2, 3, 1, 0, 2]))