class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		let newState = this.state * 1.5;
		if (newState > 100) {
			newState = 100;
		}
		this._state = newState;
	}


	set state(newState) {

		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
		this.state = 100;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'detective';
	}
}

class Library {
	constructor(name, ...books) {
		this.name = name;
		this.books = [...books];
	}

	addBook(book) {
		if (book._state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let item of this.books) {
			if (item[type] === value) {
				return item;
			}

		}
		return null;
	}

	giveBookByName(bookName) {
		for (let book of this.books) {
			if (book.name === bookName) {
				this.books.splice(this.books.indexOf(book), 1);
				return book;
			}
		}
		return null;
	}

}









class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.subject = '';
		this.marks = {};
	}

	setSubject(subjectName) {
		this.subject = subjectName;
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return 'Невалидное значение';
		}


		if (!this.marks.hasOwnProperty(subject)) {
			this.marks[subject] = [];
		}

		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject)) {
			return 0;
		}


		const sum = this.marks[subject].reduce((acc, current) => acc + current, 0);
		const avg = sum / this.marks[subject].length;
		return avg;
	}

	getAverage() {
		let totalAverage = 0;
		const subjects = Object.keys(this.marks);
		subjects.forEach(subject => {
			totalAverage += this.getAverageBySubject(subject);
		});


		return totalAverage / subjects.length;
	}
}


  
  
  
  
  
