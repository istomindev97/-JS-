class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		const newObject = {
			callback: callback,
			time: time,
			canCall: true,
		}

		this.alarmCollection.push(newObject)
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time != time);
	}

	getCurrentFormattedTime() {
		const now = new Date();
		let hours = now.getHours();
		let minutes = now.getMinutes();

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		if (hours < 10) {
			hours = '0' + hours;
		}

		return hours + ':' + minutes;
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			const now = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(alarm => {
				if ((alarm.time === now) && (alarm.canCall === true)) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);


	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}