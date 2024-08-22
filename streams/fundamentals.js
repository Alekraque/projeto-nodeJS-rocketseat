// process.stdin
//     .pipe(process.stdout)

import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1
    _Read() {
        const i = this.index++
        
        setTimeout(()=> {
            if (i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(string(i))
                this.push(buf)
            }
        }, 1000)
    }
}

new OneToHundredStream()
    .pipe(process.stdout)