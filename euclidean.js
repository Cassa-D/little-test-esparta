class Solution {
    solution = (N, M) => {
        const chocosInCircle = []

        for (let i = 0; i < N; i++)
            chocosInCircle.push(i)

        const eaten = []
        let jumpIndex = 0

        while (true) {
            const choco = chocosInCircle[jumpIndex]
            const found = eaten.findIndex((wrapper) => wrapper === choco)

            if (found >= 0)
                return eaten.length

            jumpIndex = (jumpIndex + M) % N
            eaten.push(choco)
        }
    }
}

// let result = new Solution()
// console.log(result.solution(100000, 5))