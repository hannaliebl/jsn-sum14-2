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
