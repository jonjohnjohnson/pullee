function Pullee() {
  self = this;

  self.init = function(node, axis, threshold, thresholdUnit, execute) {
    //console.log('init()');
    if (!execute) {
      throw new Error('All parameters are required');
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