const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
        
    }


    const programming = ["js", "rb", "py", "java", "cpp"]

    for (const key in programming){
        //console.log(`${key} in programming is ${programming[key]}`)
    }

    const map1 = new Map()    // map = it hold the key-value pair and remember the original insertion order of the keys

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);


for (const key in map1){
    console.log(`map1${key}`);
}