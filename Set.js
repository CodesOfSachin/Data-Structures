const set = new Set([1,2,3]);
set.add(4)

for(const item of set) {
    console.log(item);
}

set.add(4) // This will be ignored since set already has 4 
console.log(`---------------------------`);


for(const item of set) {
    console.log(item);
}

//has method to check value in Set
console.log(`---------------------------`);
console.log(set.has(4)); // Gives true or False


// Deleting one value from Set
console.log(`---------------------------`);
set.delete(3); 
for(const item of set) {
    console.log(item);
}

// Size property for Set
console.log(`---------------------------`);
console.log(set.size);


// Deleting all values from Set
console.log(`---------------------------`);
set.clear()
console.log(`All values are cleared`);
for(const item of set) {
    console.log(item);
}