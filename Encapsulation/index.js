// Понимание инкапсуляции + сокрытия на примере
var Database = /** @class */ (function () {
    function Database(url, port, username, password) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = [];
    }
    Database.prototype.createNewTable = function (table) {
        this._tables.push(table);
    };
    Database.prototype.clearTables = function () {
        this._tables = [];
    };
    Object.defineProperty(Database.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "port", {
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "tables", {
        get: function () {
            return this._tables;
        },
        enumerable: false,
        configurable: true
    });
    return Database;
}());
var db = new Database('https://www.google.com/', 443, 'rashaprogramming', '123');
console.log(db);
db.createNewTable({ name: 'roles' });
db.createNewTable({ name: 'users' });
console.log(db.tables);
db.clearTables();
console.log(db);
