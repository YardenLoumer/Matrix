const should = require('should')
const Matrix = require('./Matrix.js')

describe("test Matrix class", () => {
    it("creating matrix instance", () => {
        const a = new Matrix(`
            1 4 7
            2 5 1
            5 8 0
        `)

        const b = new Matrix(`
           1
        `)

        a.body.should.be.eql([[1,4,7],[2,5,1],[5,8,0]])
        b.body.should.be.eql([[1]])
    })

    it("Add Matrix.getSum", () => {
        const a = new Matrix(`
            1 4 7
            2 5 1
            5 8 0
        `)

        const b = new Matrix(`
            2 4 7
            2 6 1
            5 8 2
        `)

        const c = Matrix.getSum(a, b)
        c.body.should.be.eql([
            [3,8,14],
            [4,11,2],
            [10,16,2]
        ])
    })

    it("Add Matrix.getTranspose", () => {
        const a = new Matrix(`
            1 2 3
            4 5 6
            7 8 9
        `)

        const c = Matrix.getTranspose(a)
        c.body.should.be.eql([
            [1,4,7],
            [2,5,8],
            [3,6,9]
        ])
    })
})