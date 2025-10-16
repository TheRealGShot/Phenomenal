//Lab 1
console.log("Lab 1");
class Car{
    constructor(make, model, year, color){
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color; //extension
	}
    getDescription(){
        return this.year+" "+this.color+" "+this.make+" "+this.model; //extension color
    }
}
const car1 = new Car("Toyota", "Camry", 2021, "Black"); //extension color
console.log(car1.getDescription()); // "2021 Black Toyota Camry"

//Lab 2
console.log("Lab 2");
class BankAccount {
    constructor(owner, balance){
		this.owner = owner;
		this.balance = balance;
	}
    deposit(amount){
        this.balance +=amount;
    }
    withdraw(amount){
        if (this.balance - amount < 0){ //extension
            console.log("Insufficient funds");
        } else {
            this.balance -=amount;
        }
    }
    getBalance(){
        return "Balance: $"+this.balance;
    }
}
const acc = new BankAccount("Alex", 100);
acc.deposit(50);
acc.withdraw(30);
console.log(acc.getBalance()); // "Balance: $120"
acc.withdraw(130); //extension

//Lab 3
console.log("Lab 3");
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return "Hi, I'm "+this.name+", and I'm +"+this.age+" years old.";
    }
}
class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
    introduce(){
        return "Hi, I'm "+this.name+", I'm "+this.age+" years old, and I'm in "+this.grade+" grade.";
    }
}
const s1 = new Student("Maya", 17, "11th");
console.log(s1.introduce()); // "Hi, I'm Maya, I'm 17 years old, and I'm in 11th grade."

//Lab 4
console.log("Lab 4");
class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
let listBooks = (books) => {
    for(let i = 0; i<books.length; i++){
        console.log(books[i].title+" by "+books[i].author);
    }
}
let getShortBooks = (books) => { //extension
    let shortBooks = "";
    for(let i = 0; i<books.length; i++){
        if(books[i].pages<350){
            shortBooks+=" "+books[i].title;
        }
    }
    return shortBooks;
}
const library = [
  new Book("1984", "George Orwell", 328),
  new Book("The Hobbit", "J.R.R. Tolkien", 310),
  new Book("Dune", "Frank Herbert", 412)
];
listBooks(library);
// Output:
// "1984 by George Orwell"
// "The Hobbit by J.R.R. Tolkien"
// "Dune by Frank Herbert"
console.log(getShortBooks(library));

//Lab 5
console.log("Lab 5");
class User{
    #password;
    constructor(username){
        this.username = username;
    }
    setPassword(password){
        if (password.length<6){ //extension
            console.log("Password not long enough!");
        } else {
            this.password = password;
        }
    }
    checkPassword(key){
        if(key == this.password){
            return "Access granted";
        } else {
            return "Access denied";
        }
    }
}
const u1 = new User("azahar");
u1.setPassword("abc123");
console.log(u1.checkPassword("abc123")); // "Access granted"
console.log(u1.checkPassword("wrong")); // "Access denied"
const u2 = new User("gabe"); //extension
u2.setPassword("abc");