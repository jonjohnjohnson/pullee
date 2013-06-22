function Pullee() {
  var self = this;
  var startPosition = 0;
  var axisPoint;

  self.init = function(node, axis, threshold, thresholdUnit, execute) {
    //console.log('init()');
    console.log();
    var error = false;
    var errorMessages = [];
    
    if (execute === undefined) {
      throw new Error('all parameteres are required');
    }
    
    if (!(node instanceof HTMLElement)) {
      error = true;
      errorMessages.push('\'node\' must be an HTML element');
    }
    
    if (axis === 'x') {
      axisPoint = 'pageX';
    } else if (axis === 'y') {
      axisPoint = 'pageY';
    } else {
      error = true;
      errorMessages.push('axis must be \'x\' or \'y\'');
    }
    
    if (typeof threshold !== "number") {
      error = true;
      errorMessages.push('threshold must be a number');
    }
    
    if (thresholdUnit !== 'px' && thresholdUnit !== '%') {
      error = true;
      errorMessages.push('thresholdUnit must be a \'px\' or \'%\'');
    }
    
    if (typeof execute !== 'function') {
      error = true;
      errorMessages.push('you must pass in a function to execute');
    }
    
    if (error) {
      var errorMessage = errorMessages.length + ' errors: ' + errorMessages.join(', ');
      throw new Error(errorMessage);
    }
    
    document.body.addEventListener('touchstart', function (e) {
      //console.log('touchstart');
      onStart();
    })
    
    document.body.addEventListener('touchmove', function (e) {
      //console.log('touchmove');
      onMove();
    })
    
    document.body.addEventListener('touchend', function (e) {
      //console.log('touchend');
      onEnd();
    })

  };

  function onStart (e) {
    //console.log('onStart');
    
  };
  
  function onMove (e) {
    //console.log('onMove');
    e.preventDefault();
  };
  
  function onEnd (e) {
    //console.log('onEnd');
    
  };

};