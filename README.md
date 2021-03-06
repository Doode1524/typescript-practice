# typescript-practice

**ts basics cheetsheet**
'tsc filename.ts -w' to run compiler
(argument: type) to assign argument values

// explicit types
variableName: type
arrayName: type[] = []

**union type for arrays**
mixedArray: (type1|type2)[] = []
variableName: type1|type2

**objects**
objName: object
objName: {
    key: type,
    key: type,
}
**dynamic types(any)**
varName: any = whatever
arrayName: any[] = []
objName: {key: any, key2: any, key3: any}

**ts config for workflow**
run 'tsc --init'
in tsconfig:
change rootDir to ts dir
change outDir to js dir
run 'tsc -w' to compile all files
add quotes "include": ["folderName"] in tsconfig to override compiler to only root and out inputs.

**functions**
can declare a function or:
let funcName: Function
// optional params:
funcName = (param?: type )
// default params:
funcName = (param: type = defaultValue)
// return value
funcName = (param: type): returnType => {
    return
}

**type alias**
type AliasName = type1 | type2
type ObjWithAlias = {key1: type, key2: AliasName}

**function signature**
// example 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// example 2
let calc: (a: number, b: number, c: string) => number
calc = (num1: number, num2: number, action: string) => {
    if (action === 'add'){
        return num1 + num2
    } else {
        return num1 - num2
    }
}

// example 3
let logDetails: (obj: {name: string, age: number }) => void
logDetails = (person: {name: string, age: number }) => {
    console.log(`${person.name} is {person.age} years old`)
}

**the dom and type casting**
const anchor = document.querySelector('a')!; // add exlaimation mark  if you know value wont return null
-- now ts knows anchor is HTMLAnchorElement
--or::
const anchor = document.querySelector('a') as HTMLAnchorElement // to declare type (type casting)
something.addEventListenter('action', (e: Event') => {
    e.preventDefault() etc
}
use: valueAsNumber // to log as a number type

**classes**
class className {
    key: type

    constructor(k: type) {
        this.key = k;
        
    }

    funcName() {
        return `${this.k} does something`
    }
}
const newClassObj = new className(whatever)
let newTypeOfWhatever: className[] = []   //arrays are the type

**public, private, and read only**
all properties are public by default
ig:
public key: type

public - change and read value outside and inside of the class
private - only read and change inside class
readonly - only read inside and outside of class but not change

**modules**
in tsconfig: change module to "es2015" and target to "es6"
in index.html, change script to type="module"
export the module
import js, not ts

**interface**
use interface objName {
    to decalre a variable type
}
use implements for class interface

**generics**
// T is defining the type, extends declares required field
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}
let docOne = addUID({name: 'joey', age: 37})
console.log(docOne.age)

// with interfaces
interface Resource<T> {
    uid: number
    resourceName: string
    data: T
}
const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: {name: 'joey'}
}
const docFour: Resource<string[]> = {   /// array of strings
    uid: 2,
    resourceName: 'shopping list',
    data: {'bread', 'milk', 'tp'}
}

**enums**
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON} // sets the resource type based on index

const docThree: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,   //// resourceType 0, for index
    data: {name: 'joey'}
}

**tuples**
let tup: [string, number, boolean] = ['joey', 37, true]
