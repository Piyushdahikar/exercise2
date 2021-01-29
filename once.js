let functionMap = new Map();
//fn --> function Name and count--> number of times functio to be called
function callTImeOnly(fn, count){
    return function(args){
        let context = this;
        if(functionMap.has(fn.name) && functionMap.get(fn.name) >= count){
            return;
        }else if(functionMap.has(fn.name) && functionMap.get(fn.name) < count){
            let functionCount = functionMap.get(fn.name) + 1;
            functionMap.set(fn.name, functionCount);
            return fn.apply(this, args);
        }else{
            functionMap.set(fn.name, 1);
            return fn.apply(this, args);
        }
    }
}

// Example 1---------> called twice
let count =0;
function counter(){
    console.log(count);
    return count++;
}
callTImeOnly(counter, 2)();
callTImeOnly(counter, 2)();
callTImeOnly(counter, 2)();
callTImeOnly(counter, 2)();
callTImeOnly(counter, 2)();

// Example 2 ----> called once
function display(){
    console.log("display called");
}
callTImeOnly(display, 1)();
callTImeOnly(display, 1)();
