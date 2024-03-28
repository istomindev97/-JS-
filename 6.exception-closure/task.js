function parseCount(value) {
	let result = Number.parseFloat(value);
	if (isNaN(result)) {
		throw new Error('Невалидное значение');
	}
	return result;
}

function validateCount(input) {
	try {
		return parseCount(input);
	} catch (error) {
		return error;
	}
}


// Задача 2 


class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}


	get perimeter() {
		let perimeter = this.a + this.b + this.c;
		return perimeter;
	}

	get area() {
		let halfPerimeter = (this.a + this.b + this.c) / 2;
		let result = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
		return +result.toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		};
	}
}