class Solution {
    solution = (A) => {
        const pairs = [];
        A.forEach((number) => {
            const found = pairs.findIndex((pair) => pair[0] === number && pair.length === 1);
            if (found >= 0)
                pairs[found].push(number);
            else
                pairs.push([number]);
        });
        return pairs.find((pair) => pair.length % 2 === 1)[0];
    }
}

// const result = new Solution()
// console.log(result.solution([9, 3, 9, 3, 9, 7, 9]))