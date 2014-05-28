// === PART A ===
var people = {};

people.index = {};

people.meet = function(nameA,nameB) {
    if (nameA == nameB) { //identical names does nothing except return false
        return false;
    }
    if (!people.index[nameA] && !people.index[nameB]) { //neither person exists, add them both to index, meeting count is automatically 1
        people.index[nameA] = {name: nameA, friends: {}};
        people.index[nameB] = {name: nameB, friends: {}};
        people.index[nameA].friends[nameB] = 1;
        people.index[nameB].friends[nameA] = 1;
        return 1;
    }
    if (!people.index[nameA] && people.index[nameB]) { //nameA isn't in people index but nameB is, add them to index, meeting count is automatically 1
        people.index[nameA] = {name: nameA, friends: {}};
        people.index[nameA].friends[nameB] = 1;
        people.index[nameB].friends[nameA] = 1;
        return 1;
    }
    if (!people.index[nameB] && people.index[nameA]) { //nameB isn't in people index but nameA is, add them to index, meeting count is automatically 1
        people.index[nameB] = {name: nameB, friends: {}};
        people.index[nameB].friends[nameA] = 1;
        people.index[nameA].friends[nameB] = 1;
        return 1;
    }
    if (!people.index[nameA].friends[nameB]) { //both people exist, but if no meeting has happened between them, meeting count is 1
       people.index[nameA].friends[nameB] = 1;
       people.index[nameB].friends[nameA] = 1;
       return 1;
    }
    people.index[nameA].friends[nameB] += 1; //both people exist and have met before, update meeting counts appropriately
    people.index[nameB].friends[nameA] += 1;
    return people.index[nameA].friends[nameB]; //return the value of their meetings, which is the same between them
}

people.haveMet = function(nameA,nameB) {
    if ((!people.index[nameA] && !people.index[nameB]) || (!people.index[nameA] && people.index[nameB]) || (!people.index[nameB] && people.index[nameA])) { //one or more people don't exist yet, haven't met
        return 0; //meeting is impossible because one or more of the people don't exist yet
    }
  if (people.index[nameA].friends[nameB] >= 1) { //just check meeting in one direction, since the opposite direction will return same value
        return 1; //yes they have met
    } else {
        return 0; //no they have not met
    }
}

people.friendsBase = function(name) { //for use in friendsOfFriends function and friendsOf
    if (!people.index[name]) { //name doesn't exist, return undefined
        return undefined;
    }
    var friendsArray = [];
    for (prop in people.index[name].friends) {
        friendsArray.push(prop);
    }
    return friendsArray;
}

people.friendsOf = function(name) {
    return (people.friendsBase(name)).sort().join(", ");
}

// === PART B ===
people.union = function(objA, objB) {
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

people.friendsOfFriends = function(name) {
    var firstFriends = {};
    var secondFriends = {};
    var allFriends = [];
    for (prop in people.index[name].friends) {
        firstFriends[prop] = prop;
    }
    for (prop in firstFriends) {
        for (key in people.index[prop].friends) {
            secondFriends[key] = key;
        }
    }
    var finalObject = people.union(firstFriends, secondFriends);
    for (prop in finalObject) {
        allFriends.push(prop);
    }
    return (allFriends.sort().join(', '));
}