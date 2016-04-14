import $ from 'jquery';

let markerListener = (label,camera)=>{
  $('#marker-'+label).click(()=>{
    $('.camera').attr('active',false);
    $('#camera-'+camera).attr('active',true);
  });
};

markerListener('mainpathway','mainpathway');
markerListener('frontdesk','frontdesk');
markerListener('kitchen','kitchen');
markerListener('mainpathway2','mainpathway');
markerListener('mainpathway3','mainpathway');
markerListener('silentzone','silentzone');
