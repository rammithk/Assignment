// Asynchronous JavaScript Assignment
// 1. **Basic `setTimeout`:**
// - Write a function called `delayedMessage` that takes a message and a delay (in milliseconds) as arguments. Use
// `setTimeout` to log the message to the console after the specified delay.

// function delayMessage(){
//     setTimeout(()=>{
//         console.log("Delay Message");
//     },2000)
// }
// delayMessage();

// 2. **Basic `setInterval`:**
// - Create a function called `countdown` that takes a number as an argument. Use `setInterval` to log the countdown
// from that number to zero, decrementing by 1 every second. Stop the interval when it reaches zero.

// function countdown(num){
//     let intervalevent= setInterval(()=>{
//         console.log(num);
//         if(num===0)
//         {
//             clearInterval(intervalevent);
//             console.log("countdown completed!");
//         }
//         num--;
//     },2000)
// }
// countdown(10);
// 3. **Clearing Intervals:**
// - Extend the `countdown` function from the previous question to also accept a callback function that gets executed
// when the countdown reaches zero. Ensure the interval is cleared after the countdown completes.

// function countdown(num,callback){
//     let intervalevent= setInterval(()=>{
//         console.log(num);
//         if(num===0)
//         {
//             clearInterval(intervalevent);
//             if(typeof callback=="function")
//             callback();
//         }

//         num--;
//     },2000)
// }
// countdown(8,function(){
//     console.log("countdown completed! Executing callback function");
// })


// 4. **Using Promises with `setTimeout`:**
// - Write a function called `wait` that returns a Promise. The Promise should resolve after a delay (in milliseconds) that is
// passed as an argument to the function. Test this function by logging a message to the console once the promise resolves.

// function wait(ms){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//            resolve();
//         },ms)
//     })
// }

// wait(2000).then(()=>{
//     console.log("2 seconds have passed!")
// })

// 5. **Promise-based Countdown:**
// - Refactor the `countdown` function to return a Promise that resolves when the countdown completes. Use the `wait`
// function from the previous question to handle the delay between countdown steps.

// function wait(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });
// }

// function countdown(number) {
//     return new Promise(async (resolve) => {
//         for (let i = number; i >= 0; i--) {
//             console.log(i);
//             await wait(1000); // Wait for 1 second between each countdown step
//         }
//         resolve("Countdown complete!");
//     });
// }

// Example usage:
// countdown(5).then((message) => {
//     console.log(message); // This will log "Countdown complete!" after the countdown finishes
// });


// 6. **Chaining Promises:**
// - Create a function `delayedLogSequence` that takes an array of messages and delays (in milliseconds). The function
// should use Promises to log each message to the console in sequence, waiting for the specified delay between each log.

// function wait(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function delayedLogSequence(messages, delays) {
//     return new Promise(async (resolve) => {
//         for (let i = 0; i < messages.length; i++) {
//             console.log(messages[i]);
//             await wait(delays[i]); // Wait for the specified delay before logging the next message
//         }
//         resolve("All messages logged!");
//     });
// }

// // Example usage:
// const messages = ["First message", "Second message", "Third message"];
// const delays = [1000, 2000, 1500]; // Delays in milliseconds

// delayedLogSequence(messages, delays).then((message) => {
//     console.log(message); // This will log "All messages logged!" after the sequence completes
// });


// 7. **Using `async/await` with Promises:**
// - Rewrite the `delayedLogSequence` function using `async/await` instead of chaining `.then()` methods. Ensure the
// function logs each message with the specified delay.

// function wait(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function delayedLogSequence(messages, delays) {
//     return new Promise(async (resolve) => {
//         for (let i = 0; i < messages.length; i++) {
//             console.log(messages[i]);
//             await wait(delays[i]); // Wait for the specified delay before logging the next message
//         }
//         resolve("All messages logged!");
//     });
// }

// // Example usage:
// const messages = ["First message", "Second message", "Third message"];
// const delays = [1000, 2000, 1500]; // Delays in milliseconds

// delayedLogSequence(messages, delays).then((message) => {
//     console.log(message); // This will log "All messages logged!" after the sequence completes
// });


// 8. **Combining `setTimeout` and Promises:**
// - Create a function called `randomDelayMessage` that logs a message to the console after a random delay between 1
// and 5 seconds. Use `setTimeout` and a Promise to implement this.

// function randomDelayMessage(message) {
//     return new Promise((resolve) => {
//         // Generate a random delay between 1 and 5 seconds (1000 to 5000 milliseconds)
//         const delay = Math.floor(Math.random() * 5000) + 1000;

//         setTimeout(() => {
//             console.log(message);
//             resolve(); // Resolve the Promise after logging the message
//         }, delay);
//     });
// }

// // Example usage:
// randomDelayMessage("This message is displayed after a random delay.").then(() => {
//     console.log("Message logged after random delay.");
// });


// 9. **Using `setInterval` with Promises:**
// - Write a function called `repeatAction` that takes an action (a function), an interval (in milliseconds), and a duration (in
// milliseconds). Use `setInterval` to repeatedly execute the action at the specified interval, but stop after the specified
// duration. Return a Promise that resolves when the repeating action stops.
function repeatAction(action, interval, duration) {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            action();
        }, interval);

        // Stop the interval after the specified duration
        setTimeout(() => {
            clearInterval(intervalId);
            resolve("Action stopped after the specified duration");
        }, duration);
    });
}

// Example usage:
repeatAction(() => {
    console.log("Action executed");
}, 1000, 5000).then((message) => {
    console.log(message); // Logs "Action stopped after the specified duration" after 5 seconds
});
