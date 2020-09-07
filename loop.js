// we run a program
// every single program has threat
// every single program has event loop
// the event loop run every time 
// every time that event loop run is a tick

// node run the myfile.js

const pendingTimers = [];
const pendingOSTask = [];
const pedingOperations = [];


// New timers, tasks, operations are recorded from myFile running

myFile.runContents();

function souldContinue(){

    // Check one: Any pending setTimeOut, setInterval, setInmmidiate?
    // Check two:  Any pending OS tasks? (Like server listening to port)
    // Check three; Any pending long running operations? (Like fs modulo)


    return pendingTimers.length || pendingOSTask.length || pedingOperations.length
}

// the event loop start to run 
// entire body execute in one 'tick'
while(souldContinue()){

  // 1)Node looks at pendingTimers and sess if any functions 
  // are ready to be call setTimeOut, setInterval
  // 2) Node looks at pendingOSTasks and pendingOperations 
  // and calls relevant callbacks
  // 3) Pause execution, Continue when..
    // - a new pendingOSTask is done
    // - a new pendingOperation is done
    // - a timer is about to complete
  // 4) Look at pendingTimers, call any setInmmediate
  // 5) handle any close event (.on('close', ()=>..))
  
}





// exit back to terminal