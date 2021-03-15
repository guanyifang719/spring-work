var sum = 0
const save = () => (number) => {
    if (number) {
        return sum ? sum += number : sum = number
    }
    else {
        return sum
    }
}
const add = save()

add(100)
add(200)
add(300)
console.log(add())


