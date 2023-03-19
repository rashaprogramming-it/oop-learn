// Процедурный подход (написания программы)
const width = 10
const height = 20

function calcRectArea(width, height) {
    return width * height
}

calcRectArea(width, height) // width * height | 10 * 20 | = 200

/////////////////////////////////////////////////////////////////////

// Объектно-ориентированный подход
class Rectangle {
    private _width // Свойство класса
    private _height // Свойство класса

    constructor(w, h) { // Специальный метод | Блок инструкций
        this._width = w
        this._height = h
    }

    public get width() {
        return this._width
    }

    public set width(value) {
        if (value <= 0) {
            this._width = 1
        } else {
            this._width = value
        }
    }

    // Метод класса
    calcArea() { 
        return this._width * this._height 
        /* 
            Под this подразумевается сам объект (класс)
            В нашем случае это Rectangle 
        */
    }
}

const rect = new Rectangle(5, 10) // Тут мы создаем наш объект с помощью оператора 'new'
// rect.calcArea() // Вызываем метод у созданного нами объекта
rect.width = -2
console.log(rect);

