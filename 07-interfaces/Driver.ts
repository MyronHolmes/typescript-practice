import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach;
let myGolfCoach = new GolfCoach;

// declare an arry for coaches that is initally empty
let theCoaches: Coach[] = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for (let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkOut())
}