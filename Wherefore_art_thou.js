/** Wherefore art thou
  * Make a function that looks through an array of objects (first argument) and
  * returns an array of all objects that have matching property and value pairs
  * (second argument). Each property and value pair of the source object has to
  * be present in the object from the collection if it is to be included in the
  * returned array.
  *
  * For example, if the first argument is [{ first: "Romeo", last: "Montague" },
  * { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
  * and the second argument is { last: "Capulet" }, then you must return the 
  * third object from the array (the first argument), because it contains the
  * property and its value, that was passed on as the second argument.
  *
  */
  

function whatIsInAName(collection, source) {
  /** Using a Object.keys() method I return an array of a given object
    * own enumerable properties.
    */
  var sourceKeys = Object.keys(source);

  // I filter through the "collection" array using .filter().
  return collection.filter(function (obj) {
  	// Using a for loop I loop through each item in the object.
    for(var i = 0; i < sourceKeys.length; i++) {
      /** I use a if statement to check if the object in the collection doesn't 
        * have the key and the property value doesn't match the value
        * in source array. 
        */
      if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        // Return false if the statement is correct. 
        return false;
      }
    }
    return true;
  });

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });  
//should return [{ first: "Tybalt", last: "Capulet" }].

whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
//should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
//should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
// should return [{ "a": 1, "b": 2, "c": 2 }].
