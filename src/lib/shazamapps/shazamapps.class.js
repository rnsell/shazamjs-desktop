/*jslint vars: true, devel:true, nomen: true, node: true, indent: 2, maxerr: 50*/
/*global describe, it, angular*/
'use strict';


(function () {

  var app = angular.module("shazamApp");

  function ShazamApp(shazamHeader, appDesc, visible, enabled, billyImg, billySrc, shazamImg, shazamSrc) {
    this.shazamHeader = shazamHeader;
    this.appDesc = appDesc;
    this.visible = visible;
    this.enabled = enabled;
    this.billyImg = billyImg;
    this.billySrc = billySrc;
    this.shazamImg = shazamImg;
    this.shazamSrc = shazamSrc;
    this.count = 0;
  }

  app.factory('ShazamAppClass', function () {
    return ShazamApp;
  });

}());
