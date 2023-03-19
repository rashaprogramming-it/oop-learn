var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Полиморфизм
// Параметрический (Истинный) полиморфизм
// Наследование | ООП
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.greeting = function () {
        console.log("Hello! I'm human. My name is ".concat(this._firstName));
    };
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "Last name: ".concat(this._firstName, " | First name: ").concat(this._lastName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value <= 0) {
                this._age = 0;
            }
            else {
                this._age = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, inn, number, snils) {
        var _this = 
        // super() - функция, вызывающая в самом начале родительский конструктор
        _super.call(this, firstName, lastName, age) || this;
        _this.inn = inn;
        _this.number = number;
        _this.snils = snils;
        return _this;
    }
    Employee.prototype.greeting = function () {
        console.log("Hello! I'm worker. My name is ".concat(this.firstName));
    };
    return Employee;
}(Person));
var employee1 = new Employee('Rashid', 'Shermukhamedov', 18, 12345, 10, 918273645);
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(firstName, lastName, age, inn, number, snils, level) {
        var _this = _super.call(this, firstName, lastName, age, inn, number, snils) || this;
        _this.level = level;
        return _this;
    }
    Developer.prototype.greeting = function () {
        console.log("Hello! I'm developer. My name is ".concat(this.firstName));
    };
    return Developer;
}(Employee));
var rashaprogramming = new Developer('Rashid', 'Shermukhamedov', 18, 54321, 7, 192837465, 'Junior');
// Вызываем геттер из класса Person, используя его при этом с классом Developer
// console.log(rashaprogramming.fullName) 
var employee = new Employee('Employee', 'Lastname', 21, 41243, 3, 123456543);
var person = new Person('Person', 'lastname', 41);
// Поскольку методы наследуются, то у каждого объекта будет метод greeting
// rashaprogramming.greeting()
// employee.greeting()
// person.greeting()
var personList = [rashaprogramming, employee, person];
function massGreeting(persons) {
    for (var i = 0; i <= persons.length; i++) {
        var person_1 = persons[i];
        person_1.greeting();
    }
}
massGreeting(personList);
