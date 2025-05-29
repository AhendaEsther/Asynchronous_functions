
// You are building a system that sends email reminders to users 5 seconds after they register. 
// Create an async function sendReminder(email) that waits 5 seconds using setTimeout
//  and then logs "Reminder sent to [email]". Simulate sending a reminder to 3 users.

// 1.Pseudocode
// Create an async function sendReminder that takes in email as a parameter.


async function sendReminder(email) {
    return new Promise((resolve) => {
    setTimeout(() => {
    console.log(`Reminder sent to ${email}`);
    resolve();
    }, 5000);
    });
}
async function simulateReminders() {
    await sendReminder("alooesther@gmail.com");
    await sendReminder("kembocaro@gmail.com");
    await sendReminder("ameerakech@gmail.com");
}
simulateReminders();


// You want to simulate a login system that tries to log in a user. 
// The first two attempts fail, but the third succeeds. Write a function tryLogin() that uses a counter and Promises. 
// Use setTimeout to simulate a 1-second delay between attempts. Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.

function tryLogin() {
let attempts = 0;
    return new Promise((resolve) => {
        const attemptLogin = () => {
        setTimeout(() => {
        attempts++;
        if (attempts < 3) {
        console.log("Login failed");
        attemptLogin();
        } else {
        console.log("Login successful");
        resolve();}
        }, 1000);
        };
        attemptLogin();
    });
}
tryLogin().then(() => console.log("Completed login attempts"));


// Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval.
//  When the countdown reaches 0, stop the interval and log "Time's up!".

function countdownTimer() {
    let count = 5;
    const intervalId = setInterval(() => {
    console.log(count);
    count--;
    if (count < 0) {
    clearInterval(intervalId);
    console.log("Time's up!");}
    }, 1000);
}
countdownTimer();


// You are simulating a page that loads data in stages. Create an async function called loadPage() that: logs "Loading header...", 
// waits 1 second; logs "Loading content...", waits 2 seconds; logs "Loading footer...", 
// waits 1 second; and finally logs "Page fully loaded". Use setTimeout inside Promises and await them in sequence.


async function loadPage() {
    const loadWithDelay = (message, delay) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(message);
                resolve();
            }, delay);
        });
    };
    await loadWithDelay("Loading header...", 1000);
    await loadWithDelay("Loading content...", 2000);
    await loadWithDelay("Loading footer...", 1000);
    console.log("Page fully loaded");
}
loadPage();


// You are simulating fetching stock prices with delays. Write a function fetchPrice(symbol) that returns a Promise 
// which resolves after 2 seconds with the message "Price for [symbol] retrieved". 
// Use async/await to call it for two different stocks ("AAPL" and "GOOG") and log the messages in order.


function fetchPrice(symbol) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Price for ${symbol} retrieved`);
        }, 2000);
    });
}
async function getStockPrices() {
    const priceAAPL = await fetchPrice("AAPL");
    console.log(priceAAPL);
    const priceGOOG = await fetchPrice("GOOG");
    console.log(priceGOOG);
}
getStockPrices();