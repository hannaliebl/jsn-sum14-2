//==== PART A ====

//duplicate an object
function copy(obj) {
    second = {};
    secondKeys = [];
    secondValues = [];
    for (keys in obj) {
        secondKeys.push(keys);
    }
    for (values in obj) {
        secondValues.push(obj[values]);
    }
    var newObjectLength = secondKeys.length;
    for (i = 0; i <= (newObjectLength - 1); i++) {
        second[secondKeys[i]] = secondValues[i];
    }
    return second;
}

//check if both keys and values are equal in two objects
function equal(objA, objB) {
    arrAKeys = [];
    arrAValues = [];
    arrBKeys = [];
    arrBValues = [];
    for (keys in objA) {
       arrAKeys.push(keys);
    }
    for (vals in objA) {
       arrAValues.push(objA[vals]);
    }
    for (keys in objB) {
       arrBKeys.push(keys);
    }
    for (vals in objB) {
       arrBValues.push(objB[vals]);
    }
    if (arrAKeys.join(',') === arrBKeys.join(',')) {
        if (arrAValues.join(',') === arrBValues.join(',')) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// check if keys in two objects are the same
function similar(objA, objB) {
    if (((Object.keys(objA).length) === 0) || (Object.keys(objB).length) === 0) {
        return false;
    }
    if ((Object.keys(objA).length) !== (Object.keys(objB).length)) {
        return false;
    }
    for (keys in objA) {
        if (objB.hasOwnProperty(keys)) {
            return true;
        } else {
            return false;
        }
    }
}

//=== PART B ===

function isObject(obj) {
    if (typeof obj === "object") {
        return true;
    } else {
        return false;
    }
}

// combine all properties of two objects into one object, shared properties get value of a[key] || b[key]
function union(objA, objB) {
    if (isObject(objA) === false || isObject(objB) === false) {
        return undefined;
    }
    var unionObj = {};
    for (keys in objA) {
        if (!(objB.hasOwnProperty(keys))){
           unionObj[keys] = objA[keys]; //keys unique to ObjA            
        } else {
            unionObj[keys] = objA[keys] || objB[keys];
        }
    }    
    for (keys in objB) {
        if (!(objA.hasOwnProperty(keys))) {
           unionObj[keys] = objB[keys]; //keys unique to ObjB
        }
    }
    return unionObj;
}

// combine only shared properties of two objects into one object, shared properties getting value of a[key] && b[key]
function intersect(objA, objB) {
    if (isObject(objA) === false || isObject(objB) === false) {
        return undefined;
    }
    var intersectObj = {};
    for (keys in objA) {
        if (objB.hasOwnProperty(keys)) {
            intersectObj[keys] = objA[keys] && objB[keys];
        }
    }
    return intersectObj;
}

// find all properties of a which are not in b
function subtraction(objA, objB) {
    if (isObject(objA) === false || isObject(objB) === false) {
        return undefined;
    }
    var subtractObj = {};
    for (keys in objA) {
        if (!(objB.hasOwnProperty(keys))) {
           subtractObj[keys] = objA[keys]; //keys unique to ObjA
        }
    }
    return subtractObj;
}

// === PART C ===
function assert(claim,message) {
    if (!claim) {
        console.error(message);
    } else {
        console.log("Test passed");
    }
}

//union(a,b) tests, use a and b:
a1 = {a:1, b:0};
b1 = {a:0, c:0};
union_answer1 = {a:1, b:0, c:0}; //the true value of a in a1 takes precedence
a2 = {a: "hello", b: "howdy", c: false};
b2 = {c: true, d: "hi"};
union_answer2 = {a: "hello", b: "howdy", c: true, d: "hi"}; //the true value of c in b2 takes precedence
a3 = {a: 1, c: "c"};
b3 = {b: 2, d: "string"};
union_answer3 = {a: 1, c: "c", b: 2, d: "string"} //all unique values are represented
a4 = {};
b4 = "I am not an object : (";
union_answer4 = undefined; // if one argument is not an object, returns undefined
a5 = {};
b5 = {};
union_answer5 = {}; //no keys or values in either argument, return empty object

assert(equal((union(a1,b1)), union_answer1),"Union function, test 1 failed");
assert(equal((union(a2,b2)), union_answer2),"Union function, test 2 failed");
assert(equal((union(a3,b3)), union_answer3),"Union function, test 3 failed");
assert(equal((union(a4,b4)), union_answer4),"Union function, test 4 failed");
assert(equal((union(a5,b5)), union_answer5),"Union function, test 5 failed");

//intersect(x, y) tests, use x and y:
x1 = {a: 1, b: 0};
y1 = {a: 0, c: 0};
intersect_answer1 = {a: 0}; //both x1 and x2 have property a, second property wins
x2 = {a: false, b: 2, c: "red"};
y2 = {d: "blue", e: false, f: 101};
intersect_answer2 = {}; //no intersecting properties
x3 = {a: true, b: "a", c: 100};
y3 = {a: false, b: "z", c: 1};
intersect_answer3 = {a: false, b: "z", c: 1}; //all intersecting properties, second property always wins
x4 = {};
y4 = "I am not an object : (";
intersect_answer4 = undefined; // if one argument is not an object, returns undefined
x5 = {a: "aaaa", b: 123};
y5 = {a: true, c: true};
intersect_answer5 = {a: true}; //similar to test 1, different values, though

assert(equal((intersect(x1,y1)), intersect_answer1),"Intersect function, test 1 failed");
assert(equal((intersect(x2,y2)), intersect_answer2),"Intersect function, test 2 failed");
assert(equal((intersect(x3,y3)), intersect_answer3),"Intersect function, test 3 failed");
assert(equal((intersect(x4,y4)), intersect_answer4),"Intersect function, test 4 failed");
assert(equal((intersect(x5,y5)), intersect_answer5),"Intersect function, test 5 failed");

//subtaction(c, d) tests, use c and d:
c1 = {a: 1, b: 0};
d1 = {a: 0, c: 0};
subtraction_answer1 = {b: 0}; //unique property between both objects considering first object first is c
c2 = {};
d2 = {};
subtraction_answer2 = {}; //no unique propeties, empty object
c3 = {a: "a", b: "b"};
d3 = {a: "aa", b: "bb"} //still no unique properties, empty object
subtraction_answer3 = {};
c4 = "I am not an object : (";
d4 = {a: "im an object!"};
subtraction_answer4 = undefined; //if one argument is not an object, returns undefined
c5 = {a: "aa", b: false, c: 123};
d5 = {d: false, e: 54, f: "string"};
subtraction_answer5 = {a: "aa", b: false, c: 123} //all properties are unique between both objects, so return only the first object's properties

assert(equal((subtraction(c1,d1)), subtraction_answer1),"Subtraction function, test 1 failed");
assert(equal((subtraction(c2,d2)), subtraction_answer2),"Subtraction function, test 2 failed");
assert(equal((subtraction(c3,d3)), subtraction_answer3),"Subtraction function, test 3 failed");
assert(equal((subtraction(c4,d4)), subtraction_answer4),"Subtraction function, test 4 failed");
assert(equal((subtraction(c5,d5)), subtraction_answer5),"Subtraction function, test 5 failed");