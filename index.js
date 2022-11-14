const getDivisorsCount = num => {

    if (!Number.isInteger(num) || num < 0)
        return alert('number должен быть целым числом и больше нуля!');

    let count = 0;
    for (let i = num; i > 0; i--)
        if (!(num % i))
            count++;
    return count;
}

console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5));
console.log(getDivisorsCount(12));
console.log(getDivisorsCount(30));