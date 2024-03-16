function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.subject = '';
	this.marks = [];
}

let studentFirst = new Student("Василиса", "женский", 19);
let studentSecond = new Student();
let studentThird = new Student();

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (this.hasOwnProperty('marks') === true) {
		this.marks.push(...marksToAdd);
	}
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
		return 0;
	} else {
		const sum = this.marks.reduce((acc, current) => acc + current, 0);
		const avg = sum / this.marks.length;
		return avg;
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}