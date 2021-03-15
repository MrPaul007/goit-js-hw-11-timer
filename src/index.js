import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  findDate(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
  }

  findElements() {
    const timer = document.querySelector(`${this.selector}`);

    const daysEl = timer.querySelector('[data-value="days"]');
    const hoursEl = timer.querySelector('[data-value="hours"]');
    const minsEl = timer.querySelector('[data-value="mins"]');
    const secsEl = timer.querySelector('[data-value="secs"]');
    return { daysEl, hoursEl, minsEl, secsEl };
  }

  counter() {
    const currentDate = new Date();

    let time = this.targetDate - currentDate;

    const { days, hours, mins, secs } = this.findDate(time);

    const { secsEl, minsEl, hoursEl, daysEl } = this.findElements();

    daysEl.innerHTML = days.toString().padStart(2, 0);
    hoursEl.innerHTML = hours.toString().padStart(2, 0);
    minsEl.innerHTML = mins.toString().padStart(2, 0);
    secsEl.innerHTML = secs.toString().padStart(2, 0);
  }
  start() {
    this.counter();

    setInterval(() => {
      this.counter();
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('2021-09-07'),
});

timer.start();



// const myfunc = setInterval(function() {
  
//   const targetDate = new Date('Jul 17, 2021');
//   const currentDate = new Date();
//   let time = targetDate - currentDate;      
 
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((time % (1000 * 60)) / 1000);
      
  
//   document.querySelector('[data-value="days"]').innerHTML = days;
//   document.querySelector('[data-value="hours"]').innerHTML = hours;
//   document.querySelector('[data-value="mins"]').innerHTML = mins; 
//   document.querySelector('[data-value="secs"]').innerHTML = secs; 
      
//   if (time < 0) {
//       clearInterval(myfunc);
//       document.querySelector('[data-value="days"]').innerHTML = "";
//       document.querySelector('[data-value="hours"]').innerHTML = ""; 
//       document.querySelector('[data-value="mins"]').innerHTML = "";
//       document.querySelector('[data-value="secs"]').innerHTML = "";
//   }
//   }, 1000);
