// class User {
//     username: string;
//     age: number;
// }

// class Car {

// }

// interface Repository<T> {
//     // Создаем 4 метода (CRUD)
//     create: (obj: T) => T // C - Create - Создание
//     get: () => T // R - Read - Чтение
//     update: (obj: T) => T // U - Update - Обновление
//     delete: (obj: T) => T // D - Delete - Удаление
// } // T - дженерик | Тут у нас это как обобщение, так как CRUD у нас может быть для пользователя, книги и т.п. Поэтому T - означает любую сущность

// class UserRepo implements Repository<User> { // Дженериком даем понять, что именно отправляем в интерфейс
//     create(obj: User): User {
//         return undefined
//     }

//     get(): User {

//     }

//     update(obj: User): User {
//         return undefined
//     }

//     delete(obj: User): User {
//         return undefined
//     }
// }

// class CarRepo implements Repository<Car> {
//     create(obj: Car): Car {
//         return undefined
//     }

//     get(): Car {

//     }

//     update(obj: Car): Car {
//         return undefined
//     }

//     delete(obj: Car): Car {
//         return undefined
//     }
// }