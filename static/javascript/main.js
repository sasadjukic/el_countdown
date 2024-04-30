
class ElectionCountdown{
    constructor({
        selector,
        targetDate
    }) {
        this.selector = selector
        this.targetDate = targetDate
        this.references = {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            minutes: document.querySelector(`${this.selector} [data-value="minutes"]`),
            seconds: document.querySelector(`${this.selector} [data-value="seconds"]`),
        }
    }

    getTimeRemaining(endtime){
        const total = Date.parse(endtime) - Date.parse(new Date())
        const days = Math.floor(total / (1000 * 60 * 60 * 24))
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((total / 1000 / 60) % 60)
        const seconds = Math.floor((total / 1000) % 60)

        return {
            total,
            days,
            hours,
            minutes,
            seconds}
    }

    updateTimer({days, hours, minutes, seconds}){
        this.references.days.textContent = days
        this.references.hours.textContent = hours
        this.references.minutes.textContent = minutes
        this.references.seconds.textContent = seconds
    }

    startTimer(){
        const timer = this.getTimeRemaining(this.targetDate)
        this.updateTimer(timer)
        setInterval(() => {
            const timer = this.getTimeRemaining(this.targetDate)
            this.updateTimer(timer)
        }, 1000)
    }
}

const timer1 = new ElectionCountdown({
    selector: '.clock',
    targetDate: new Date('November, 05, 2024 06:00:00')
})

timer1.startTimer()