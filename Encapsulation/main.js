// Процедурный подход (написания программы)
var width = 10;
var height = 20;
function calcRectArea(width, height) {
    return width * height;
}
calcRectArea(width, height); // width * height | 10 * 20 | = 200
/////////////////////////////////////////////////////////////////////
// Объектно-ориентированный подход
var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this._width = w;
        this._height = h;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value <= 0) {
                this._width = 1;
            }
            else {
                this._width = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    // Метод класса
    Rectangle.prototype.calcArea = function () {
        return this._width * this._height;
        /*
            Под this подразумевается сам объект (класс)
            В нашем случае это Rectangle
        */
    };
    return Rectangle;
}());
var rect = new Rectangle(5, 10); // Тут мы создаем наш объект с помощью оператора 'new'
// rect.calcArea() // Вызываем метод у созданного нами объекта
rect.width = -2;
console.log(rect);
