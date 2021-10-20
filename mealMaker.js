// Create menu object
const menu = {
  // create courses property
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  // Creating getter and setter methods for the courses
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains){
    this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(desserts){
    this._courses.desserts = desserts;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  // Add dish to course
addDishToCourse(courseName, dishName, dishPrice){
  const dish = {
    name: dishName,
    price: dishPrice
  };
  this._courses[courseName].push(dish);
},
// Get random dish from course
getRandomDishFromCourse(courseName){
  //Retrieve array of the selected course 
  const dishes = this._courses[courseName];
  //random dish selector
  const randNum = Math.floor(Math.random() * dishes.length);
  return dishes[randNum];
},
// Generate a 3 course meal
generateRandomMeal() {
  const appetizer = this.getRandomDishFromCourse('appetizers');// get appetizer dish
  const main = this.getRandomDishFromCourse('mains');// get main dish
  const dessert = this.getRandomDishFromCourse('desserts');// get dessert dish
  // Calculate total price
const totalPrice = appetizer.price + main.price + dessert.price;

return `Your meal is; ${appetizer.name} for appetizer, ${main.name} for main dish and ${dessert.name} for dessert. The price is ${totalPrice} cedis.`;
}

};

// Add dish to courses
//Appetizers
menu.addDishToCourse('appetizers', 'Plantain chips', 2.37);
menu.addDishToCourse('appetizers', 'puff-puff', 2.00);
menu.addDishToCourse('appetizers', 'goat khebabs', 5.88);
menu.addDishToCourse('appetizers', 'Sausage khebabs', 3.50);
menu.addDishToCourse('appetizers', 'Boiled eggs with pepper', 2.00);
// Main
menu.addDishToCourse('mains', 'Waakye', 12.00);
menu.addDishToCourse('mains', 'Banku and Tilapia', 25.00);
menu.addDishToCourse('mains', 'Red-Red', 10.50);
menu.addDishToCourse('mains', 'Fufu and goat light soup', 20.00);
menu.addDishToCourse('mains', 'Tuo Zaafi', 15.00);
// Desserts
menu.addDishToCourse('desserts', 'Sobolo', 5.00);
menu.addDishToCourse('desserts', 'Brukina', 7.50);
menu.addDishToCourse('desserts', 'Asaana', 5.50);
menu.addDishToCourse('desserts', 'Kelewele', 10.00);
menu.addDishToCourse('desserts', 'Pancakes', 11.75);
// Generate meal
const meal = menu.generateRandomMeal();
console.log(meal);
