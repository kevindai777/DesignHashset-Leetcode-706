//Objective is to design a Hashset without using any built in libraries
//add: adds given key to hashet
//remove: removes given key in hashset
//contains: returns whether given key is in the hashset


//O(1) solution for 'add'
//O(n) solution for 'remove' and 'contains'
//The time complexity for 'remove' and 'contains' can be improved by using a linked list

class HashSet {
    constructor() {
        this.index = 9377
        this.values = new Array(this.index).fill(0).map(() => [])
    }

    add(key) {
        let index = key % this.index 
        this.values[index].push(key)
    }

    remove(key) {
        let index = key % this.index 
        this.values[index] = this.values[index].filter(x => x != key)
    }

    contains(key) {
        let index = key % index 
        return this.values[index].includes(key)
    }
}