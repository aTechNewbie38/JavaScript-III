/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - Look to the left of the dot at call time.
* 2. Explicit Binding - Telling a function what the context of the 'this' keyword going to be using call, apply or bind.
* 3. new Binding - Whenever you have a functioni invoked with a new key, the 'this' keyword is bound to the object being constructed.
* 4. window Binding - If none of these rules apply, then the 'this' keyword is going to default to the window object unless yo are in strict mode, then it's just going to be undefined.
*
* write out a code example of each explanation above
*/

// Principle 1
var sayName = function(){
    console.log(this.name)
};

this.name = 'Maria'; 
sayName();
// code example for Window Binding

// Principle 2
const Obj = {
    greeting: 'Merry Christmas',
    speak: function() {
      return `${this.greeting} and Happy New Year`;
    }
  };
  console.log(Obj.speak()); 
// code example for Implicit Binding


// Principle 3
const animal = new Animal('param');
function Animal(skinColor){
    this.skinColor = skinColor;
    this.color = function(){
        console.log(`The color of my skin is ${skinColor}`);
    }
}
    
const zebra = new Animal('black and white');
zebra.color();
// code example for New Binding

// Principle 4
var sayName = function(lang1, lang2, lang3){
    console.log(' My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3); 
  };
  
  var maria = {
    name: 'Maria',
  };
  
  var languages = ['HTML', 'CSS', 'JavaScript'];
  
  sayName.call(maria, languages[0], languages[1], languages[2]); //Explicit Binding - call method
  sayName.apply(maria, languages); //Explicit Binding - apply method 
  var newFn = sayName.bind(maria, languages[0], languages[1], languages[2]); //Explicit Binding - bind method
  console.log('HERE');
  newFn
// code example for Explicit Binding