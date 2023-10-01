
const clock = document.querySelector(".clock");
let sec = 0,
    min = 0,
    hr = 0,
    intervalId;

const startStopwatch = () => {
    intervalId = setInterval(() => {
        if (sec < 59) {
            sec++;
        } else if (min < 59) {
            sec = 0;
            min++;
        } else {
            sec = 0;
            min = 0;
            hr++;
        }

        const seconds = String(sec).padStart(2, "0");
        const minutes = String(min).padStart(2, "0");
        const hours = String(hr).padStart(2, "0");

        // Change: Fixed the string interpolation by using backticks
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }, 1000);
};
      
const stopStopwatch = () => {
    clearInterval(intervalId);
};

// To start the stopwatch, call startStopwatch()
// To stop the stopwatch, call stopStopwatch()
