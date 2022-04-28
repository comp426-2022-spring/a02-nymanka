import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";
let args=process.argv;
let array=[];
if(args.length ==2) {
    array = coinFlips(1);
    console.log(array);
    console.log(countFlips(array));
} else {array = coinFlips(args[2]);
    console.log(array);
    console.log(countFlips(array));}