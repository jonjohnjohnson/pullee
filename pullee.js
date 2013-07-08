function Pullee(node, axis, threshold, thresholdUnit, execute) {
  var start = {};
  var move = {};
  var thresholdInPercent;
  move.isPulling = false;
  move.isTouching = false;
  move.hasPulled = false;
  move.hasMoved;
  
  var output = document.getElementById('output');
  
  // create a variable called error which is set to false and turned true if an error occurs
  var error = false;
  // create an array which takes all error messages when an errors occur
  var errorMessages = [];
  
  // check if execute was passed and tells if all params were passed
  if (execute === undefined) {
    throw new Error('All parameteres are required');
  }
  
  // check if node is set correctly as an HTML element
  if (!(node instanceof HTMLElement)) {
    error = true;
    errorMessages.push('\'node\' must be an HTML element');
  }
  
  // check if the axis is set correctly as 'x' or 'y'
  if (axis !== 'x' && axis !== 'y') {
    error = true;
    errorMessages.push('axis must be \'x\' or \'y\'');
  }
  
  // check if threshold is set correctly as a number
  if (typeof threshold !== 'number') {
    error = true;
    errorMessages.push('threshold must be a number');
  }
  
  // check if thresholdUnit is set correctly as 'px' or '%'
  if (thresholdUnit !== 'px' && thresholdUnit !== '%') {
    error = true;
    errorMessages.push('thresholdUnit must be a \'px\' or \'%\'');
  }
  
  // check if execute is set correctly as a function
  if (typeof execute !== 'function') {
    error = true;
    errorMessages.push('you must pass in a function to execute');
  }
  
  // check if error variable is set to true and throw the error(s) that happened
  if (error) {
    var errorMessage = errorMessages.length + ' errors: ' + errorMessages.join(', ');
    throw new Error(errorMessage);
  }
  
  // store originial threshold value if unit type is '%' before the threshold is overwritten in 'px' to use for touch logic
  // original value is retained to re-execute logic to calculate 'px' dimension on resize of window which can alter '%' dimension in px
  if (thresholdUnit === '%') {
    thresholdInPercent = threshold;
  }
  
  // if threshold is in '%' translate it into 'px' to use against touch logic which is in 'px'
  function calculateThresholdInPx () {
    if (thresholdUnit === '%') {
      var nodeDimension;
      if (axis === 'x') {
        nodeDimension = parseInt(getComputedStyle(node).width, 10);
      } else {
        nodeDimension = parseInt(getComputedStyle(node).height, 10);
      }
      threshold = nodeDimension * (thresholdInPercent/100);
    }
  }
  
  calculateThresholdInPx();
  window.addEventListener('resize', calculateThresholdInPx);
  
  // register eventListener for initial touch interaction
  node.addEventListener('touchstart', onStart);
  
  // register eventListener for touch movement interaction
  node.addEventListener('touchmove', onMove);
  
  // register eventListener for end of touch interaction
  node.addEventListener('touchend', onEnd);

  function onStart (e) {
  
    // create x and y points from intitial touch interaction
    start.x = e.pageX;
    start.y = e.pageY;
    
  };
  
  function onMove (e) {
    
    // checks to see if only one touch interaction is happening
    if (e.touches.length < 2) {
    
      // create x and y points to check touch direction from initial interaction
      move.x = e.pageX;
      move.y = e.pageY;
      
      // if touch has already been moving and is actually pulling keep going
      if (move.isPulling && move.isTouching) {
      
        pull(e);
        
      } else if (!move.isPulling && !move.isTouching) {
        
        // set to moving state after first touch movement which will only allow checking for pull on initial movement
        move.isTouching = true;
        
        // check if axis  is set to 'x' or 'y'
        if (axis === 'x') {
        
          // since axis is 'x' check if touch interaction is more x than y
          if (Math.abs(move.x - start.x) > Math.abs(move.y - start.y)) {
            pull(e);
          }
          
        } else {
        
          // since axis is 'y' check if touch interaction is more y than x
          if (Math.abs(move.y - start.y) > Math.abs(move.x - start.x)) {
            pull(e);
          }
          
        }
        
      }
      
    }
    
  };
  
  function onEnd (e) {
    
    if (move.hasPulled) {
      execute(move.hasMoved);
    }
    
    // clear output contents after touch interaction is over
    output.innerHTML = '';
    
    // set the isPulling and isTouching to false for next touch interaction to handle logic to set them true again
    move.isPulling = false;
    move.isTouching = false;
    move.hasPulled = false;
    
  };
  
  function pull (e) {
    
    // set isPulling to be true to keep pulling logic on next touchmovement point
    move.isPulling = true;
    
    //prevent browsers native behavior, primarily scrolling
    e.preventDefault();
    if (axis === 'x') {
      move.hasMoved = (move.x - start.x) / threshold;
    } else {
      move.hasMoved = (move.y - start.y) / threshold;
    }
    
    if (Math.abs(move.hasMoved) >= 1) {
      move.hasPulled = true;
      move.hasMoved = Math.max(-1, Math.min(1, move.hasMoved));
    }
    
    output.innerHTML = move.hasMoved + '%';
  }

};







