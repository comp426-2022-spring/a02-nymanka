import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist";

args = minimist(process.argv.slice(2))
args["call"]

guess = args.call
info = flipACoin(guess)

console.log("{ call: " + info.get("call") + ", flip: " + info.get("flip") + ", result: " + info.get("result") + " }")
