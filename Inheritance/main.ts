// // Наследование | ООП
// class Person {
//     private _firstName;
//     private _lastName;
//     private _age;

//     constructor(firstName, lastName, age) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }

//     public get fullName() {
//         return `Last name: ${this._firstName} | First name: ${this._lastName}`
//     }

//     get firstName() {
//         return this._firstName
//     }

//     set firstName(value) {
//         this._firstName = value
//     }

//     get lastName() {
//         return this._lastName
//     }

//     set lastName(value) {
//         this._lastName = value
//     }

//     get age() {
//         return this._age
//     }

//     set age(value) {
//         if (value <= 0) {
//             this._age = 0
//         } else {
//             this._age = value
//         }
//     }
// }

// class Employee extends Person { // Ключевое слово extends - в переводе "расширяет"
//     private inn;
//     private number;
//     private snils;

//     constructor(firstName, lastName, age, inn, number, snils) {
//         // super() - функция, вызывающая в самом начале родительский конструктор
//         super(firstName, lastName, age) 

//         this.inn = inn
//         this.number = number
//         this.snils = snils
//     }
// }

// const employee1 = new Employee('Rashid', 'Shermukhamedov', 18, 12345, 10, 918273645)


// class Developer extends Employee {
//     private level;

//     constructor(firstName, lastName, age, inn, number, snils, level) {
//         super(firstName, lastName, age, inn, number, snils) 
//         this.level = level
//     }
// }

// const rashaprogramming = new Developer('Rashid', 'Shermukhamedov', 18, 54321, 7, 192837465, 'Junior')

// // Вызываем геттер из класса Person, используя его при этом с классом Developer
// console.log(rashaprogramming.fullName) 
