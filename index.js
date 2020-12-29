// Import stylesheets
import "./style.css";

// normalize object to string of array
function normal(ob, stack) {
  let result = stack;
  for (let key in ob) {
    console.log(key, ob[key], typeof ob[key]);
    if (typeof ob[key] == "object") {
      normal(ob[key], stack);
    } else {
      stack.push(ob[key]);
    }
    console.log("result", stack);
  }
  return stack;
}
