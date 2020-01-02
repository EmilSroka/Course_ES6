const numbers = {
	*[Symbol.iterator]({
        start = 0,
        end = 100,
        step = 1
    } = {}){
        for(let i=start; i<=end; i+=step){
            yield i;
        }
    }
};

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

const options = {
    start: 6,
    end: 30,
    step: 4
}

// should print 6..30 by 4s
console.log(`My lucky numbers are: ${[...numbers[Symbol.iterator](options)]}`);

// Hint:
//     [...numbers[Symbol.iterator]( ?? )]
