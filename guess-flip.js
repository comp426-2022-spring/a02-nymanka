import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args[""]//call          
const guess = args.call
const info = flipACoin(guess);
console.log(info)