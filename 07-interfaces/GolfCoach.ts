import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkOut(): string {
        return "hit 100 balls at thr golf range.";
    }
    
}