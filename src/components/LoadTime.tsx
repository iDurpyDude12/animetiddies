import schedule from "src/lib/schedule.json";
import FetchStatus from "./FetchStatus";

var currentStage = FetchStatus().stage;
var currentLoadsheddingTime;
var loadsheddingTimeEnd;

var time = new Date();
console.log("time:", time);
var day = time.getDay() - 1;
console.log("stage:", currentStage);
console.log("day:", day);
var currentTime24 = time.toTimeString().split(" ")[0];
console.log("currentTime24:", currentTime24);
var scheduleArray = schedule[currentStage][day];
console.log("scheduleArray:", scheduleArray);

for (const schedule of scheduleArray) {
    if (schedule.start > currentTime24) {
        currentLoadsheddingTime = schedule.start;
        break;
    }
}
for (const schedule of scheduleArray) {
    if (schedule.start > currentTime24) {
        loadsheddingTimeEnd = schedule.end;
        break;
    }
}

if (!currentLoadsheddingTime) {
    console.log("Current loadshedding time is smaller than current time \n No Loadshedding left today");
}

console.log("currentLoadsheddingTime:", currentLoadsheddingTime);
console.log("loadsheddingTimeEnd:", loadsheddingTimeEnd);
