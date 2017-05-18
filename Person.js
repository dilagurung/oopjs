/**
 * Created by oa on 5/18/2017.
 */
'use strict';
  class Person
{


constructor(name)
{
    this.name=name;

}



      firstMethod(name)
      {


          return Person.defaultArg;
      }


 }
Person.defaultArg=42; //default variable declaration
module.exports = Person;

/*

// Our Polygon class above is an example of a Class declaration.
// ES6 classes also support Class expressions - just another way
// of defining a new class. For example:
const MyPoly = class Poly {
    getPolyName() {
        ChromeSamples.log('Hi. I was created with a Class expression. My name is ' +
            Poly.name);
    }
};

let inst = new MyPoly();
inst.getPolyName();
*/
