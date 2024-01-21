import { Coach } from "./Coach";

export class CricketCoach implements Coach{

    getDailyWorkOut(): string {
       return "practice your spin bowling technique.";
    }
    
}