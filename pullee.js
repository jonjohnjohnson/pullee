function Pullee(node, direction, threshold, execute) {
  self = this;

  self.init = function() {
    alert('derp');
  };
  
  document.body.addEventListener('touchstart', function (e) {
    onStart();
  })
  
  document.body.addEventListener('touchmove', function (e) {
    e.preventDefault();
    onMove();
  })
  
  document.body.addEventListener('touchend', function (e) {
    onEnd();
  })
  
  function onStart (e) {
    
  };
  
  function onMove (e) {
    
  };
  
  function onEnd (e) {
    
  };

};