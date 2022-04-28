import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';
const args= minimist(process.argv.slice(2))
let call = args["call"];
if((call==undefined) || (call!="heads" && call!="tails")) {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]")
    
} else {
    console.log(flipACoin(call))
}