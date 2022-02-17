import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist";

args = minimist(process.argv.slice(2))
args["call"]

guess = args.call
info = flipACoin(guess)

console.log(info)
