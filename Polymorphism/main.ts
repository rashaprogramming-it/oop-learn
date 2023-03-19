// Полиморфизм
// Параметрический (Истинный) полиморфизм
// Наследование | ООП
class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    public greeting() {
        console.log(`Hello! I'm human. My name is ${this._firstName}`)
    }

    public get fullName() {
        return `Last name: ${this._firstName} | First name: ${this._lastName}`
    }

    get firstName() {
        return this._firstName
    }

    set firstName(value) {
        this._firstName = value
    }

    get lastName() {
        return this._lastName
    }

    set lastName(value) {
        this._lastName = value
    }

    get age() {
        return this._age
    }

    set age(value) {
        if (value <= 0) {
            this._age = 0
        } else {
            this._age = value
        }
    }
}

class Employee extends Person { // Ключевое слово extends - в переводе "расширяет"
    private inn;
    private number;
    private snils;

    constructor(firstName, lastName, age, inn, number, snils) {
        // super() - функция, вызывающая в самом начале родительский конструктор
        super(firstName, lastName, age) 

        this.inn = inn
        this.number = number
        this.snils = snils
    }

    greeting() {
        console.log(`Hello! I'm worker. My name is ${this.firstName}`)
    }
}

const employee1 = new Employee('Rashid', 'Shermukhamedov', 18, 12345, 10, 918273645)


class Developer extends Employee {
    private level;

    constructor(firstName, lastName, age, inn, number, snils, level) {
        super(firstName, lastName, age, inn, number, snils) 
        this.level = level
    }

    greeting() {
        console.log(`Hello! I'm developer. My name is ${this.firstName}`)
    }
}

const rashaprogramming = new Developer('Rashid', 'Shermukhamedov', 18, 54321, 7, 192837465, 'Junior')

// Вызываем геттер из класса Person, используя его при этом с классом Developer
// console.log(rashaprogramming.fullName) 

const employee = new Employee('Employee', 'Lastname', 21, 41243, 3, 123456543)
const person = new Person('Person', 'lastname', 41)

// Поскольку методы наследуются, то у каждого объекта будет метод greeting
// rashaprogramming.greeting()
// employee.greeting()
// person.greeting()

const personList: Person[] = [rashaprogramming, employee, person]

function massGreeting(persons: Person[]) {
    for (let i = 0; i<= persons.length; i++) {
        const person = persons[i]
        person.greeting()
    }
}

massGreeting(personList)