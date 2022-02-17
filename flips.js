import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist"

args = minimist(process.argv.slice(2))
args["number"]
flips = args.number

results = coinFlips(flips)

info = countFlips(results)

console.log(results)
console.log("{ tails: " + info.get("tails") + ", heads: " + info.get("heads") + " }")