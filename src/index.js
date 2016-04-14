import AFRAME from 'aframe';
AFRAME.registerComponent('obj-loader', require('aframe-obj-loader-component'));
var extras = require('aframe-extras');
extras.registerAll();
window.onload= function(){
  require('./vr-main.js');
};
