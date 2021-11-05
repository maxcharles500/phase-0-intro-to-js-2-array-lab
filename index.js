// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}
function destructivelyPrependCat(name) {
    return cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    return cats.pop()
}
function destructivelyRemoveFirstCat() {
    return cats.shift()
}
function appendCat(name) {
    const allCats = [...cats, name];
    return allCats
}
function prependCat(name) {
    const preCats = [name, ...cats]
    return preCats
}
function removeLastCat() {
    return cats.slice(0, cats.length - 1)
}
function removeFirstCat() {
    return cats.slice(1)
}