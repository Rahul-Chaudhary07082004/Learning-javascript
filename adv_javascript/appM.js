// default import
import multiply from "./mathOperationM.js";
console.log(multiply(3, 7));

// named import
import { add, subtract } from "./mathOperationM.js";
console.log(add(2, 4));

console.log(subtract(4, 1));