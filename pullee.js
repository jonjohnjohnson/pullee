<<<<<<< HEAD
<<<<<<< HEAD
//Can you tell me if you see this? 
function Pullee(node, direction, threshold, execute) {
  self = this;

  self.init = function() {
    alert('derp');
  };
=======
=======
>>>>>>> 8c52108cb75050e85038c7c65fa8e4d945c9894a
function Pullee(node, axis, threshold, thresholdUnit, execute) {
  var self = this;
  var startPoint = 0;
  var axisPoint;
<<<<<<< HEAD
>>>>>>> 8c52108cb75050e85038c7c65fa8e4d945c9894a
=======
>>>>>>> 8c52108cb75050e85038c7c65fa8e4d945c9894a
  
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
  if (axis === 'x') {
    axisPoint = 'pageX';
  } else if (axis === 'y') {
    axisPoint = 'pageY';
  } else {
    error = true;
    errorMessages.push('axis must be \'x\' or \'y\'');
  }
  
  // check if threshold is set correctly as a number
  if (typeof threshold !== "number") {
    error = true;
    errorMessages.push('threshold must be a number');
  }
  
  // check if thresholdUnit is set correctly as 'px' or '%'
  if (thresholdUnit !== 'px' && thresholdUnit !== '%') {
    error = true;
    errorMessages.push('thresholdUnit must be a \'px\' or \'%\'');
  }
<<<<<<< HEAD
  
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
  
=======
  
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
  
>>>>>>> 8c52108cb75050e85038c7c65fa8e4d945c9894a
  // register eventListener for initial touch interaction
  node.addEventListener('touchstart', onStart);
  
  // register eventListener for touch movement interaction
  node.addEventListener('touchmove', onMove);
  
  // register eventListener for end of touch interaction
  node.addEventListener('touchend', onEnd);

  function onStart (e) {
    
  };
  
  function onMove (e) {
    e.preventDefault();
  };
  
  function onEnd (e) {
    
  };

};