import './styles.css';

const myfunc = setInterval(function() {
  
  const targetDate = new Date('Jul 17, 2021');
  const currentDate = new Date();
  let time = targetDate - currentDate;      
 
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
      
  
  document.querySelector('[data-value="days"]').innerHTML = days;
  document.querySelector('[data-value="hours"]').innerHTML = hours;
  document.querySelector('[data-value="mins"]').innerHTML = mins; 
  document.querySelector('[data-value="secs"]').innerHTML = secs; 
      
  if (time < 0) {
      clearInterval(myfunc);
      document.querySelector('[data-value="days"]').innerHTML = "";
      document.querySelector('[data-value="hours"]').innerHTML = ""; 
      document.querySelector('[data-value="mins"]').innerHTML = "";
      document.querySelector('[data-value="secs"]').innerHTML = "";
  }
  }, 1000);
