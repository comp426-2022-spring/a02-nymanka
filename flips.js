import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args["number"]
const flips = args.number

const flip_array = [];
flip_array = coinFlips(flips)

if (flips == null) {
    flip_array[i] = coinFlip();
    if (flip_array[i] == "heads") {
        console.log("{ heads: 1 }")
    } else {
        console.log("{ tails: 1 }")
    }
} else {
    const map = countFlips(flip_array)

    console.log(flip_array);
    console.log(countFlips(flip_array))
}