module.exports = class Matrix {
    constructor (str = '') {
        const args = str
            .trim()
            .replace(/\n/g, ' | ')
            .replace(/\s+/g, ' ')
            .split(' ')
        this.body = []
        let row = []
        for(const item of args){
            if(item === '|'){
                this.body.push(row)
                row = []
            }
            else{
                const number = parseInt(item)
                row.push(number)
            }
        }
        this.body.push(row)
            
    }

    static create(...args){
        return new Matrix(...args)
    }

    getClone () {
      
        const clone = Matrix.create()
        clone.body = JSON.parse(JSON.stringify(this.body))
        return clone
    }

    static getSum (a, b) {

        const c = a.getClone()

        for(let y=0; y < c.body.length; y++){
            for(let x = 0; x < c.body[y].length; x++){
                c.body[y][x] +=b.body[y][x]
            }
        }
        return c
    }

    static getTranspose (c) {
      
        const d = c.getClone()

        console.log(d.body)

        for(let x=0; x < c.body.length; x++){
            for(let y = 0; y < c.body[x].length; y++){
                d.body[y][x] = c.body[x][y]
            }
        }
        console.log({d})
        return d
    }
}