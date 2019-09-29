/*! http://tinynav.viljamis.com v1.1 by @viljamis */
(function ($, window, i) {
  $.fn.tinyNav = function (options) {

    // Default settings
    var settings = $.extend({
      'active' : 'selected', // String: Set the "active" class
      'header' : '', // String: Specify text for "header" and show header instead of the active item
      'label'  : '' // String: sets the <label> text for the <select> (if not set, no label will be added)
    }, options);

    return this.each(function () {

      // Used for namespacing
      i++;

      var $nav = $(this),
        // Namespacing
        namespace = 'tinynav',
        namespace_i = namespace + i,
        l_namespace_i = '.l_' + namespace_i,
        $select = $('<select/>').attr("id", namespace_i).addClass(namespace + ' ' + namespace_i);

      if ($nav.is('ul,ol')) {

        if (settings.header !== '') {
          $select.append(
            $('<option/>').text(settings.header)
          );
        }

        // Build options
        var options = '';

        $nav
          .addClass('l_' + namespace_i)
          .find('a')
          .each(function () {
            options += '<option value="' + $(this).attr('href') + '">';
            var j;
            for (j = 0; j < $(this).parents('ul, ol').length - 1; j++) {
              options += '- ';
            }
            options += $(this).text() + '</option>';
          });

        // Append options into a select
        $select.append(options);

        // Select the active item
        if (!settings.header) {
          $select
            .find(':eq(' + $(l_namespace_i + ' li')
            .index($(l_namespace_i + ' li.' + settings.active)) + ')')
            .attr('selected', true);
        }

        // Change window location
        $select.change(function () {
          window.location.href = $(this).val();
        });

        // Inject select
        $(l_namespace_i).after($select);

        // Inject label
        if (settings.label) {
          $select.before(
            $("<label/>")
              .attr("for", namespace_i)
              .addClass(namespace + '_label ' + namespace_i + '_label')
              .append(settings.label)
          );
        }

      }

    });

  };
})(jQuery, this, 0);



/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2012 David DeSandro / Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);



/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/*
 *	jQuery carouFredSel 6.0.3
 *	Demo's and documentation:
 *	caroufredsel.frebsite.nl
 *
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(C($){8($.1r.1v){G}$.1r.6o=$.1r.1v=C(u,w){8(1k.S==0){18(I,\'6p 53 7P 1j "\'+1k.4k+\'".\');G 1k}8(1k.S>1){G 1k.1W(C(){$(1k).1v(u,w)})}E y=1k,$14=1k[0],54=K;8(y.1p(\'55\')){54=y.1Q(\'3o\',\'4l\');y.R(\'3o\',[\'4m\',I])}y.56=C(o,a,b){o=3R($14,o);o.D=6q($14,o.D);o.1M=6r($14,o.1M);o.M=6s($14,o.M);o.V=57($14,o.V);o.X=57($14,o.X);o.1a=6t($14,o.1a);o.1q=6u($14,o.1q);o.1h=6v($14,o.1h);8(a){2Z=$.1N(I,{},$.1r.1v.59,o)}7=$.1N(I,{},$.1r.1v.59,o);7.d=6w(7);z.2b=(7.2b==\'4n\'||7.2b==\'1m\')?\'X\':\'V\';E c=y.13(),2v=5a($1s,7,\'N\');8(3p(7.25)){7.25=\'7Q\'+F.3S}7.4o=5b(7,2v);7.D=6x(7.D,7,c,b);7[7.d[\'N\']]=6y(7[7.d[\'N\']],7,c);7[7.d[\'1d\']]=6z(7[7.d[\'1d\']],7,c);8(7.2l){8(!3T(7[7.d[\'N\']])){7[7.d[\'N\']]=\'2I%\'}}8(3T(7[7.d[\'N\']])){z.6A=I;z.4p=7[7.d[\'N\']];7[7.d[\'N\']]=4q(2v,z.4p);8(!7.D.L){7.D.T.1c=I}}8(7.2l){7.1R=K;7.1i=[0,0,0,0];7.1A=K;7.D.T.1c=K}O{8(!7.D.L){7=6B(7,2v)}8(!7[7.d[\'N\']]){8(!7.D.T.1c&&Y(7.D[7.d[\'N\']])&&7.D.1t==\'*\'){7[7.d[\'N\']]=7.D.L*7.D[7.d[\'N\']];7.1A=K}O{7[7.d[\'N\']]=\'1c\'}}8(1G(7.1A)){7.1A=(Y(7[7.d[\'N\']]))?\'5c\':K}8(7.D.T.1c){7.D.L=31(c,7,0)}}8(7.D.1t!=\'*\'&&!7.D.T.1c){7.D.T.4r=7.D.L;7.D.L=3U(c,7,0)}7.D.L=32(7.D.L,7,7.D.T.2w,$14);7.D.T.1Z=7.D.L;8(7.2l){8(!7.D.T.34){7.D.T.34=7.D.L}8(!7.D.T.1X){7.D.T.1X=7.D.L}7=5d(7,c,2v)}O{7.1i=6C(7.1i);8(7.1A==\'3q\'){7.1A=\'1m\'}O 8(7.1A==\'5e\'){7.1A=\'35\'}1B(7.1A){Q\'5c\':Q\'1m\':Q\'35\':8(7[7.d[\'N\']]!=\'1c\'){7=5f(7,c);7.1R=I}16;2x:7.1A=K;7.1R=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?K:I;16}}8(!Y(7.1M.1C)){7.1M.1C=6D}8(1G(7.1M.D)){7.1M.D=(7.2l||7.D.T.1c||7.D.1t!=\'*\')?\'L\':7.D.L}7.M=$.1N(I,{},7.1M,7.M);7.V=$.1N(I,{},7.1M,7.V);7.X=$.1N(I,{},7.1M,7.X);7.1a=$.1N(I,{},7.1M,7.1a);7.M=6E($14,7.M);7.V=5g($14,7.V);7.X=5g($14,7.X);7.1a=6F($14,7.1a);7.1q=6G($14,7.1q);7.1h=6H($14,7.1h);8(7.2m){7.2m=5h(7.2m)}8(7.M.5i){7.M.4s=7.M.5i;2J(\'M.5i\',\'M.4s\')}8(7.M.5j){7.M.4t=7.M.5j;2J(\'M.5j\',\'M.4t\')}8(7.M.5k){7.M.4u=7.M.5k;2J(\'M.5k\',\'M.4u\')}8(7.M.5l){7.M.2K=7.M.5l;2J(\'M.5l\',\'M.2K\')}};y.6I=C(){y.1p(\'55\',I);E a=y.13(),3V=5m(y,[\'6J\',\'6K\',\'3W\',\'3q\',\'35\',\'5e\',\'1m\',\'5n\',\'N\',\'1d\',\'6L\',\'1S\',\'5o\',\'6M\']),5p=\'7R\';1B(3V.3W){Q\'6N\':Q\'7S\':5p=3V.3W;16}$1s.11(3V).11({\'7T\':\'3r\',\'3W\':5p});y.1p(\'6O\',3V).11({\'6J\':\'1m\',\'6K\':\'3X\',\'3W\':\'6N\',\'3q\':0,\'35\':\'M\',\'5e\':\'M\',\'1m\':0,\'5n\':1,\'6L\':0,\'1S\':0,\'5o\':0,\'6M\':0});4v(a,7);5q(a,7);8(7.2l){5r(7,a)}};y.6P=C(){y.5s();y.12(H(\'5t\',F),C(e,a){e.1f();8(!z.2c){8(7.M.W){7.M.W.36(2y(\'4w\',F))}}z.2c=I;8(7.M.1H){7.M.1H=K;y.R(H(\'3a\',F),a)}G I});y.12(H(\'5u\',F),C(e){e.1f();8(z.20){3Y(U)}G I});y.12(H(\'3a\',F),C(e,a,b){e.1f();1u=3s(1u);8(a&&z.20){U.2c=I;E c=2n()-U.2L;U.1C-=c;8(U.3t){U.3t.1C-=c}8(U.3u){U.3u.1C-=c}3Y(U,K)}8(!z.26&&!z.20){8(b){1u.3v+=2n()-1u.2L}}8(!z.26){8(7.M.W){7.M.W.36(2y(\'6Q\',F))}}z.26=I;8(7.M.4t){E d=7.M.2K-1u.3v,3b=2I-1I.2z(d*2I/7.M.2K);7.M.4t.1g($14,3b,d)}G I});y.12(H(\'1H\',F),C(e,b,c,d){e.1f();1u=3s(1u);E v=[b,c,d],t=[\'2M\',\'27\',\'3c\'],a=3d(v,t);b=a[0];c=a[1];d=a[2];8(b!=\'V\'&&b!=\'X\'){b=z.2b}8(!Y(c)){c=0}8(!1l(d)){d=K}8(d){z.2c=K;7.M.1H=I}8(!7.M.1H){e.2d();G 18(F,\'3w 4w: 2o 3e.\')}8(z.26){8(7.M.W){7.M.W.2N(2y(\'4w\',F));7.M.W.2N(2y(\'6Q\',F))}}z.26=K;1u.2L=2n();E f=7.M.2K+c;3Z=f-1u.3v;3b=2I-1I.2z(3Z*2I/f);8(7.M.1e){1u.1e=7U(C(){E a=2n()-1u.2L+1u.3v,3b=1I.2z(a*2I/f);7.M.1e.4x.1g(7.M.1e.2p[0],3b)},7.M.1e.5v)}1u.M=7V(C(){8(7.M.1e){7.M.1e.4x.1g(7.M.1e.2p[0],2I)}8(7.M.4u){7.M.4u.1g($14,3b,3Z)}8(z.20){y.R(H(\'1H\',F),b)}O{y.R(H(b,F),7.M)}},3Z);8(7.M.4s){7.M.4s.1g($14,3b,3Z)}G I});y.12(H(\'3f\',F),C(e){e.1f();8(U.2c){U.2c=K;z.26=K;z.20=I;U.2L=2n();2O(U)}O{y.R(H(\'1H\',F))}G I});y.12(H(\'V\',F)+\' \'+H(\'X\',F),C(e,b,f,g,h){e.1f();8(z.2c||y.2e(\':3r\')){e.2d();G 18(F,\'3w 4w 7W 3r: 2o 3e.\')}E i=(Y(7.D.4y))?7.D.4y:7.D.L+1;8(i>J.P){e.2d();G 18(F,\'2o 6R D (\'+J.P+\' P, \'+i+\' 6S): 2o 3e.\')}E v=[b,f,g,h],t=[\'2f\',\'27/2M\',\'C\',\'3c\'],a=3d(v,t);b=a[0];f=a[1];g=a[2];h=a[3];E k=e.5w.17(F.3x.41.S);8(!1D(b)){b={}}8(1n(g)){b.3g=g}8(1l(h)){b.3y=h}b=$.1N(I,{},7[k],b);8(b.5x&&!b.5x.1g($14,k)){e.2d();G 18(F,\'7X "5x" 7Y K.\')}8(!Y(f)){8(7.D.1t!=\'*\'){f=\'L\'}O{E m=[f,b.D,7[k].D];1j(E a=0,l=m.S;a<l;a++){8(Y(m[a])||m[a]==\'6T\'||m[a]==\'L\'){f=m[a];16}}}1B(f){Q\'6T\':e.2d();G y.1Q(H(k+\'7Z\',F),[b,g]);16;Q\'L\':8(!7.D.T.1c&&7.D.1t==\'*\'){f=7.D.L}16}}8(U.2c){y.R(H(\'3f\',F));y.R(H(\'3y\',F),[k,[b,f,g]]);e.2d();G 18(F,\'3w 80 3e.\')}8(b.1C>0){8(z.20){8(b.3y){y.R(H(\'3y\',F),[k,[b,f,g]])}e.2d();G 18(F,\'3w 81 3e.\')}}1u.3v=0;y.R(H(\'6U\'+k,F),[b,f]);8(7.2m){E s=7.2m,c=[b,f];1j(E j=0,l=s.S;j<l;j++){E d=k;8(!s[j][2]){d=(d==\'V\')?\'X\':\'V\'}8(!s[j][1]){c[0]=s[j][0].1Q(\'3o\',[\'4z\',d])}c[1]=f+s[j][3];s[j][0].R(\'3o\',[\'6U\'+d,c])}}G I});y.12(H(\'82\',F),C(e,b,c){e.1f();E d=y.13();8(!7.1T){8(J.Z==0){8(7.3z){y.R(H(\'X\',F),J.P-1)}G e.2d()}}1U(d,7);8(!Y(c)){8(7.D.T.1c){c=4A(d,7,J.P-1)}O 8(7.D.1t!=\'*\'){E f=(Y(b.D))?b.D:5y(y,7);c=6V(d,7,J.P-1,f)}O{c=7.D.L}c=4B(c,7,b.D,$14)}8(!7.1T){8(J.P-c<J.Z){c=J.P-J.Z}}7.D.T.1Z=7.D.L;8(7.D.T.1c){E g=31(d,7,J.P-c);8(7.D.L+c<=g&&c<J.P){c++;g=31(d,7,J.P-c)}7.D.L=32(g,7,7.D.T.2w,$14)}O 8(7.D.1t!=\'*\'){E g=3U(d,7,J.P-c);7.D.L=32(g,7,7.D.T.2w,$14)}1U(d,7,I);8(c==0){e.2d();G 18(F,\'0 D 4C 1M: 2o 3e.\')}18(F,\'6W \'+c+\' D 5z.\');J.Z+=c;2g(J.Z>=J.P){J.Z-=J.P}8(!7.1T){8(J.Z==0&&b.4D){b.4D.1g($14,\'V\')}8(!7.3z){3A(7,J.Z,F)}}y.13().17(J.P-c,J.P).83(y);8(J.P<7.D.L+c){y.13().17(0,(7.D.L+c)-J.P).4E(I).42(y)}E d=y.13(),3h=6X(d,7,c),2h=6Y(d,7),1Y=d.1O(c-1),21=3h.3i(),2q=2h.3i();1U(d,7);E h=0,2A=0;8(7.1A){E p=4F(2h,7);h=p[0];2A=p[1]}E i=(h<0)?7.1i[7.d[3]]:0;E j=K,2P=$();8(7.D.L<c){2P=d.17(7.D.T.1Z,c);8(b.1V==\'6Z\'){E k=7.D[7.d[\'N\']];j=2P;1Y=2q;5A(j);7.D[7.d[\'N\']]=\'1c\'}}E l=K,3B=2Q(d.17(0,c),7,\'N\'),2i=4G(4H(2h,7,I),7,!7.1R),3C=0,28={},4I={},2r={},2R={},4J={},2S={},5B={},2T=5C(b,7,c,3B);1B(b.1V){Q\'1J\':Q\'1J-1w\':3C=2Q(d.17(0,7.D.L),7,\'N\');16}8(j){7.D[7.d[\'N\']]=k}1U(d,7,I);8(2A>=0){1U(21,7,7.1i[7.d[1]])}8(h>=0){1U(1Y,7,7.1i[7.d[3]])}8(7.1A){7.1i[7.d[1]]=2A;7.1i[7.d[3]]=h}2S[7.d[\'1m\']]=-(3B-i);5B[7.d[\'1m\']]=-(3C-i);4I[7.d[\'1m\']]=2i[7.d[\'N\']];E m=C(){},1P=C(){},1E=C(){},3D=C(){},2B=C(){},5D=C(){},1F=C(){},3E=C(){},1x=C(){},1y=C(){},1K=C(){};1B(b.1V){Q\'3j\':Q\'1J\':Q\'1J-1w\':Q\'22\':Q\'22-1w\':l=y.4E(I).42($1s);16}1B(b.1V){Q\'3j\':Q\'22\':Q\'22-1w\':l.13().17(0,c).2s();l.13().17(7.D.T.1Z).2s();16;Q\'1J\':Q\'1J-1w\':l.13().17(7.D.L).2s();l.11(5B);16}y.11(2S);U=43(2T,b.2j);28[7.d[\'1m\']]=(7.1R)?7.1i[7.d[3]]:0;8(7[7.d[\'N\']]==\'1c\'||7[7.d[\'1d\']]==\'1c\'){m=C(){$1s.11(2i)};1P=C(){U.19.1b([$1s,2i])}}8(7.1R){8(2q.5E(1Y).S){2r[7.d[\'1S\']]=1Y.1p(\'29\');8(h<0){1Y.11(2r)}O{1F=C(){1Y.11(2r)};3E=C(){U.19.1b([1Y,2r])}}}1B(b.1V){Q\'1J\':Q\'1J-1w\':l.13().1O(c-1).11(2r);16}8(2q.5E(21).S){2R[7.d[\'1S\']]=21.1p(\'29\');1E=C(){21.11(2R)};3D=C(){U.19.1b([21,2R])}}8(2A>=0){4J[7.d[\'1S\']]=2q.1p(\'29\')+7.1i[7.d[1]];2B=C(){2q.11(4J)};5D=C(){U.19.1b([2q,4J])}}}1K=C(){y.11(28)};E n=7.D.L+c-J.P;1y=C(){8(n>0){y.13().17(J.P).2s();3h=$(y.13().17(J.P-(7.D.L-n)).3F().70(y.13().17(0,n).3F()))}5F(j);8(7.1R){E a=y.13().1O(7.D.L+c-1);a.11(7.d[\'1S\'],a.1p(\'29\'))}};E o=5G(3h,2P,2h,c,\'V\',2T,2i);1x=C(){5H(y,l,b);z.20=K;2a.3g=44($14,b,\'3g\',o,2a);2C=5I(y,2C,F);8(!z.26){y.R(H(\'1H\',F))}};z.20=I;1u=3s(1u);2a.3G=44($14,b,\'3G\',o,2a);1B(b.1V){Q\'3X\':y.11(28);m();1E();2B();1F();1K();1y();1x();16;Q\'1w\':U.19.1b([y,{\'1L\':0},C(){m();1E();2B();1F();1K();1y();U=43(2T,b.2j);U.19.1b([y,{\'1L\':1},1x]);2O(U)}]);16;Q\'3j\':y.11({\'1L\':0});U.19.1b([l,{\'1L\':0}]);U.19.1b([y,{\'1L\':1},1x]);1P();1E();2B();1F();1K();1y();16;Q\'1J\':U.19.1b([l,28,C(){1E();2B();1F();1K();1y();1x()}]);1P();16;Q\'1J-1w\':U.19.1b([y,{\'1L\':0}]);U.19.1b([l,28,C(){y.11({\'1L\':1});1E();2B();1F();1K();1y();1x()}]);1P();16;Q\'22\':U.19.1b([l,4I,1x]);1P();1E();2B();1F();1K();1y();16;Q\'22-1w\':y.11({\'1L\':0});U.19.1b([y,{\'1L\':1}]);U.19.1b([l,4I,1x]);1P();1E();2B();1F();1K();1y();16;2x:U.19.1b([y,28,C(){1y();1x()}]);1P();3D();5D();3E();16}2O(U);5J(7.25,y,F);y.R(H(\'3H\',F),[K,2i]);G I});y.12(H(\'84\',F),C(e,c,d){e.1f();E f=y.13();8(!7.1T){8(J.Z==7.D.L){8(7.3z){y.R(H(\'V\',F),J.P-1)}G e.2d()}}1U(f,7);8(!Y(d)){8(7.D.1t!=\'*\'){E g=(Y(c.D))?c.D:5y(y,7);d=71(f,7,0,g)}O{d=7.D.L}d=4B(d,7,c.D,$14)}E h=(J.Z==0)?J.P:J.Z;8(!7.1T){8(7.D.T.1c){E i=31(f,7,d),g=4A(f,7,h-1)}O{E i=7.D.L,g=7.D.L}8(d+i>h){d=h-g}}7.D.T.1Z=7.D.L;8(7.D.T.1c){E i=5K(f,7,d,h);2g(7.D.L-d>=i&&d<J.P){d++;i=5K(f,7,d,h)}7.D.L=32(i,7,7.D.T.2w,$14)}O 8(7.D.1t!=\'*\'){E i=3U(f,7,d);7.D.L=32(i,7,7.D.T.2w,$14)}1U(f,7,I);8(d==0){e.2d();G 18(F,\'0 D 4C 1M: 2o 3e.\')}18(F,\'6W \'+d+\' D 72.\');J.Z-=d;2g(J.Z<0){J.Z+=J.P}8(!7.1T){8(J.Z==7.D.L&&c.4D){c.4D.1g($14,\'X\')}8(!7.3z){3A(7,J.Z,F)}}8(J.P<7.D.L+d){y.13().17(0,(7.D.L+d)-J.P).4E(I).42(y)}E f=y.13(),3h=73(f,7),2h=74(f,7,d),1Y=f.1O(d-1),21=3h.3i(),2q=2h.3i();1U(f,7);E j=0,2A=0;8(7.1A){E p=4F(2h,7);j=p[0];2A=p[1]}E k=K,2P=$();8(7.D.T.1Z<d){2P=f.17(7.D.T.1Z,d);8(c.1V==\'6Z\'){E l=7.D[7.d[\'N\']];k=2P;1Y=21;5A(k);7.D[7.d[\'N\']]=\'1c\'}}E m=K,3B=2Q(f.17(0,d),7,\'N\'),2i=4G(4H(2h,7,I),7,!7.1R),3C=0,28={},4K={},2r={},2R={},2S={},2T=5C(c,7,d,3B);1B(c.1V){Q\'22\':Q\'22-1w\':3C=2Q(f.17(0,7.D.T.1Z),7,\'N\');16}8(k){7.D[7.d[\'N\']]=l}8(7.1A){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}1U(f,7,I);1U(21,7,7.1i[7.d[1]]);8(7.1A){7.1i[7.d[1]]=2A;7.1i[7.d[3]]=j}2S[7.d[\'1m\']]=(7.1R)?7.1i[7.d[3]]:0;E n=C(){},1P=C(){},1E=C(){},3D=C(){},1F=C(){},3E=C(){},1x=C(){},1y=C(){},1K=C(){};1B(c.1V){Q\'3j\':Q\'1J\':Q\'1J-1w\':Q\'22\':Q\'22-1w\':m=y.4E(I).42($1s);m.13().17(7.D.T.1Z).2s();16}1B(c.1V){Q\'3j\':Q\'1J\':Q\'1J-1w\':m.11(\'5n\',0);16}U=43(2T,c.2j);28[7.d[\'1m\']]=-3B;4K[7.d[\'1m\']]=-3C;8(j<0){28[7.d[\'1m\']]+=j}8(7[7.d[\'N\']]==\'1c\'||7[7.d[\'1d\']]==\'1c\'){n=C(){$1s.11(2i)};1P=C(){U.19.1b([$1s,2i])}}8(7.1R){E o=2q.1p(\'29\');8(2A>=0){o+=7.1i[7.d[1]]}2q.11(7.d[\'1S\'],o);8(1Y.5E(21).S){2R[7.d[\'1S\']]=21.1p(\'29\')}1E=C(){21.11(2R)};3D=C(){U.19.1b([21,2R])};E q=1Y.1p(\'29\');8(j>0){q+=7.1i[7.d[3]]}2r[7.d[\'1S\']]=q;1F=C(){1Y.11(2r)};3E=C(){U.19.1b([1Y,2r])}}1K=C(){y.11(2S)};E r=7.D.L+d-J.P;1y=C(){8(r>0){y.13().17(J.P).2s()}E a=y.13().17(0,d).42(y).3i();8(r>0){2h=3I(f,7)}5F(k);8(7.1R){8(J.P<7.D.L+d){E b=y.13().1O(7.D.L-1);b.11(7.d[\'1S\'],b.1p(\'29\')+7.1i[7.d[3]])}a.11(7.d[\'1S\'],a.1p(\'29\'))}};E s=5G(3h,2P,2h,d,\'X\',2T,2i);1x=C(){5H(y,m,c);z.20=K;2a.3g=44($14,c,\'3g\',s,2a);2C=5I(y,2C,F);8(!z.26){y.R(H(\'1H\',F))}};z.20=I;1u=3s(1u);2a.3G=44($14,c,\'3G\',s,2a);1B(c.1V){Q\'3X\':y.11(28);n();1E();1F();1K();1y();1x();16;Q\'1w\':U.19.1b([y,{\'1L\':0},C(){n();1E();1F();1K();1y();U=43(2T,c.2j);U.19.1b([y,{\'1L\':1},1x]);2O(U)}]);16;Q\'3j\':y.11({\'1L\':0});U.19.1b([m,{\'1L\':0}]);U.19.1b([y,{\'1L\':1},1x]);1P();1E();1F();1K();1y();16;Q\'1J\':y.11(7.d[\'1m\'],$1s[7.d[\'N\']]());U.19.1b([y,2S,1x]);1P();1E();1F();1y();16;Q\'1J-1w\':y.11(7.d[\'1m\'],$1s[7.d[\'N\']]());U.19.1b([m,{\'1L\':0}]);U.19.1b([y,2S,1x]);1P();1E();1F();1y();16;Q\'22\':U.19.1b([m,4K,1x]);1P();1E();1F();1K();1y();16;Q\'22-1w\':y.11({\'1L\':0});U.19.1b([y,{\'1L\':1}]);U.19.1b([m,4K,1x]);1P();1E();1F();1K();1y();16;2x:U.19.1b([y,28,C(){1K();1y();1x()}]);1P();3D();3E();16}2O(U);5J(7.25,y,F);y.R(H(\'3H\',F),[K,2i]);G I});y.12(H(\'3k\',F),C(e,b,c,d,f,g,h){e.1f();E v=[b,c,d,f,g,h],t=[\'2M/27/2f\',\'27\',\'3c\',\'2f\',\'2M\',\'C\'],a=3d(v,t);f=a[3];g=a[4];h=a[5];b=3J(a[0],a[1],a[2],J,y);8(b==0){G K}8(!1D(f)){f=K}8(z.20){8(!1D(f)||f.1C>0){G K}}8(g!=\'V\'&&g!=\'X\'){8(7.1T){g=(b<=J.P/2)?\'X\':\'V\'}O{g=(J.Z==0||J.Z>b)?\'X\':\'V\'}}8(g==\'V\'){b=J.P-b}y.R(H(g,F),[f,b,h]);G I});y.12(H(\'85\',F),C(e,a,b){e.1f();E c=y.1Q(H(\'45\',F));G y.1Q(H(\'5L\',F),[c-1,a,\'V\',b])});y.12(H(\'86\',F),C(e,a,b){e.1f();E c=y.1Q(H(\'45\',F));G y.1Q(H(\'5L\',F),[c+1,a,\'X\',b])});y.12(H(\'5L\',F),C(e,a,b,c,d){e.1f();8(!Y(a)){a=y.1Q(H(\'45\',F))}E f=7.1a.D||7.D.L,1X=1I.2z(J.P/f)-1;8(a<0){a=1X}8(a>1X){a=0}G y.1Q(H(\'3k\',F),[a*f,0,I,b,c,d])});y.12(H(\'75\',F),C(e,s){e.1f();8(s){s=3J(s,0,I,J,y)}O{s=0}s+=J.Z;8(s!=0){8(D.P>0){2g(s>J.P){s-=J.P}}y.87(y.13().17(s,J.P))}G I});y.12(H(\'2m\',F),C(e,s){e.1f();8(s){s=5h(s)}O 8(7.2m){s=7.2m}O{G 18(F,\'6p 88 4C 2m.\')}E n=y.1Q(H(\'4l\',F)),x=I;1j(E j=0,l=s.S;j<l;j++){8(!s[j][0].1Q(H(\'3k\',F),[n,s[j][3],I])){x=K}}G x});y.12(H(\'3y\',F),C(e,a,b){e.1f();8(1n(a)){a.1g($14,2C)}O 8(2U(a)){2C=a}O 8(!1G(a)){2C.1b([a,b])}G 2C});y.12(H(\'89\',F),C(e,b,c,d,f){e.1f();E v=[b,c,d,f],t=[\'2M/2f\',\'2M/27/2f\',\'3c\',\'27\'],a=3d(v,t);b=a[0];c=a[1];d=a[2];f=a[3];8(1D(b)&&!2t(b)){b=$(b)}O 8(1o(b)){b=$(b)}8(!2t(b)||b.S==0){G 18(F,\'2o a 5M 2f.\')}8(1G(c)){c=\'4L\'}4v(b,7);5q(b,7);E g=c,46=\'46\';8(c==\'4L\'){8(d){8(J.Z==0){c=J.P-1;46=\'76\'}O{c=J.Z;J.Z+=b.S}8(c<0){c=0}}O{c=J.P-1;46=\'76\'}}O{c=3J(c,f,d,J,y)}8(g!=\'4L\'&&!d){8(c<J.Z){J.Z+=b.S}}8(J.Z>=J.P){J.Z-=J.P}E h=y.13().1O(c);8(h.S){h[46](b)}O{y.77(b)}J.P=y.13().S;y.R(H(\'4M\',F));y.R(H(\'5N\',F));G I});y.12(H(\'78\',F),C(e,c,d,f){e.1f();E v=[c,d,f],t=[\'2M/27/2f\',\'3c\',\'27\'],a=3d(v,t);c=a[0];d=a[1];f=a[2];E g=K;8(c 2V $&&c.S>1){h=$();c.1W(C(i,a){E b=y.R(H(\'78\',F),[$(1k),d,f]);8(b)h=h.8a(b)});G h}8(1G(c)||c==\'4L\'){h=y.13().3i()}O{c=3J(c,f,d,J,y);E h=y.13().1O(c);8(h.S){8(c<J.Z)J.Z-=h.S}}8(h&&h.S){h.8b();J.P=y.13().S;y.R(H(\'4M\',F))}G h});y.12(H(\'3G\',F)+\' \'+H(\'3g\',F),C(e,a){e.1f();E b=e.5w.17(F.3x.41.S);8(2U(a)){2a[b]=a}8(1n(a)){2a[b].1b(a)}G 2a[b]});y.12(H(\'4l\',F),C(e,a){e.1f();8(J.Z==0){E b=0}O{E b=J.P-J.Z}8(1n(a)){a.1g($14,b)}G b});y.12(H(\'45\',F),C(e,a){e.1f();E b=7.1a.D||7.D.L,1X=1I.2z(J.P/b-1),2k;8(J.Z==0){2k=0}O 8(J.Z<J.P%b){2k=0}O 8(J.Z==b&&!7.1T){2k=1X}O{2k=1I.79((J.P-J.Z)/b)}8(2k<0){2k=0}8(2k>1X){2k=1X}8(1n(a)){a.1g($14,2k)}G 2k});y.12(H(\'8c\',F),C(e,a){e.1f();E b=3I(y.13(),7);8(1n(a)){a.1g($14,b)}G b});y.12(H(\'17\',F),C(e,f,l,b){e.1f();8(J.P==0){G K}E v=[f,l,b],t=[\'27\',\'27\',\'C\'],a=3d(v,t);f=(Y(a[0]))?a[0]:0;l=(Y(a[1]))?a[1]:J.P;b=a[2];f+=J.Z;l+=J.Z;8(D.P>0){2g(f>J.P){f-=J.P}2g(l>J.P){l-=J.P}2g(f<0){f+=J.P}2g(l<0){l+=J.P}}E c=y.13(),$i;8(l>f){$i=c.17(f,l)}O{$i=$(c.17(f,J.P).3F().70(c.17(0,l).3F()))}8(1n(b)){b.1g($14,$i)}G $i});y.12(H(\'26\',F)+\' \'+H(\'2c\',F)+\' \'+H(\'20\',F),C(e,a){e.1f();E b=e.5w.17(F.3x.41.S),5O=z[b];8(1n(a)){a.1g($14,5O)}G 5O});y.12(H(\'4z\',F),C(e,a,b,c){e.1f();E d=K;8(1n(a)){a.1g($14,7)}O 8(1D(a)){2Z=$.1N(I,{},2Z,a);8(b!==K)d=I;O 7=$.1N(I,{},7,a)}O 8(!1G(a)){8(1n(b)){E f=4N(\'7.\'+a);8(1G(f)){f=\'\'}b.1g($14,f)}O 8(!1G(b)){8(2W c!==\'3c\')c=I;4N(\'2Z.\'+a+\' = b\');8(c!==K)d=I;O 4N(\'7.\'+a+\' = b\')}O{G 4N(\'7.\'+a)}}8(d){1U(y.13(),7);y.56(2Z);y.5P();E g=4O(y,7);y.R(H(\'3H\',F),[I,g])}G 7});y.12(H(\'5N\',F),C(e,a,b){e.1f();8(1G(a)){a=$(\'8d\')}O 8(1o(a)){a=$(a)}8(!2t(a)||a.S==0){G 18(F,\'2o a 5M 2f.\')}8(!1o(b)){b=\'a.6o\'}a.8e(b).1W(C(){E h=1k.7a||\'\';8(h.S>0&&y.13().7b($(h))!=-1){$(1k).23(\'5Q\').5Q(C(e){e.2D();y.R(H(\'3k\',F),h)})}});G I});y.12(H(\'3H\',F),C(e,b,c){e.1f();8(!7.1a.1z){G}E d=7.1a.D||7.D.L,4P=1I.2z(J.P/d);8(b){8(7.1a.3K){7.1a.1z.13().2s();7.1a.1z.1W(C(){1j(E a=0;a<4P;a++){E i=y.13().1O(3J(a*d,0,I,J,y));$(1k).77(7.1a.3K.1g(i[0],a+1))}})}7.1a.1z.1W(C(){$(1k).13().23(7.1a.3L).1W(C(a){$(1k).12(7.1a.3L,C(e){e.2D();y.R(H(\'3k\',F),[a*d,-7.1a.4Q,I,7.1a])})})})}E f=y.1Q(H(\'45\',F))+7.1a.4Q;8(f>=4P){f=0}8(f<0){f=4P-1}7.1a.1z.1W(C(){$(1k).13().2N(2y(\'7c\',F)).1O(f).36(2y(\'7c\',F))});G I});y.12(H(\'4M\',F),C(e){E a=7.D.L,2E=y.13(),2v=5a($1s,7,\'N\');J.P=2E.S;7.4o=5b(7,2v);8(z.4p){7[7.d[\'N\']]=4q(2v,z.4p)}8(7.2l){7.D.N=7.D.3M.N;7.D.1d=7.D.3M.1d;7=5d(7,2E,2v);a=7.D.L;5r(7,2E)}O 8(7.D.T.1c){a=31(2E,7,0)}O 8(7.D.1t!=\'*\'){a=3U(2E,7,0)}8(!7.1T&&J.Z!=0&&a>J.Z){8(7.D.T.1c){E b=4A(2E,7,J.Z)-J.Z}O 8(7.D.1t!=\'*\'){E b=7d(2E,7,J.Z)-J.Z}O{E b=7.D.L-J.Z}18(F,\'8f 8g-1T: 8h \'+b+\' D 5z.\');y.R(H(\'V\',F),b)}7.D.L=32(a,7,7.D.T.2w,$14);7.D.T.1Z=7.D.L;7=5f(7,2E);E c=4O(y,7);y.R(H(\'3H\',F),[I,c]);4R(7,J.P,F);3A(7,J.Z,F);G c});y.12(H(\'4m\',F),C(e,a){e.1f();1u=3s(1u);y.1p(\'55\',K);y.R(H(\'5u\',F));8(a){y.R(H(\'75\',F))}1U(y.13(),7);8(7.2l){y.13().1W(C(){$(1k).11($(1k).1p(\'7e\'))})}y.11(y.1p(\'6O\'));y.5s();y.5R();$1s.8i(y);G I});y.12(H(\'18\',F),C(e){18(F,\'3w N: \'+7.N);18(F,\'3w 1d: \'+7.1d);18(F,\'7f 8j: \'+7.D.N);18(F,\'7f 8k: \'+7.D.1d);18(F,\'47 48 D L: \'+7.D.L);8(7.M.1H){18(F,\'47 48 D 5S 8l: \'+7.M.D)}8(7.V.W){18(F,\'47 48 D 5S 5z: \'+7.V.D)}8(7.X.W){18(F,\'47 48 D 5S 72: \'+7.X.D)}G F.18});y.12(\'3o\',C(e,n,o){e.1f();G y.1Q(H(n,F),o)})};y.5s=C(){y.23(H(\'\',F));y.23(H(\'\',F,K));y.23(\'3o\')};y.5P=C(){y.5R();4R(7,J.P,F);3A(7,J.Z,F);8(7.M.2F){E b=3N(7.M.2F);$1s.12(H(\'4S\',F,K),C(){y.R(H(\'3a\',F),b)}).12(H(\'4T\',F,K),C(){y.R(H(\'3f\',F))})}8(7.M.W){7.M.W.12(H(7.M.3L,F,K),C(e){e.2D();E a=K,b=2G;8(z.26){a=\'1H\'}O 8(7.M.4U){a=\'3a\';b=3N(7.M.4U)}8(a){y.R(H(a,F),b)}})}8(7.V.W){7.V.W.12(H(7.V.3L,F,K),C(e){e.2D();y.R(H(\'V\',F))});8(7.V.2F){E b=3N(7.V.2F);7.V.W.12(H(\'4S\',F,K),C(){y.R(H(\'3a\',F),b)}).12(H(\'4T\',F,K),C(){y.R(H(\'3f\',F))})}}8(7.X.W){7.X.W.12(H(7.X.3L,F,K),C(e){e.2D();y.R(H(\'X\',F))});8(7.X.2F){E b=3N(7.X.2F);7.X.W.12(H(\'4S\',F,K),C(){y.R(H(\'3a\',F),b)}).12(H(\'4T\',F,K),C(){y.R(H(\'3f\',F))})}}8(7.1a.1z){8(7.1a.2F){E b=3N(7.1a.2F);7.1a.1z.12(H(\'4S\',F,K),C(){y.R(H(\'3a\',F),b)}).12(H(\'4T\',F,K),C(){y.R(H(\'3f\',F))})}}8(7.V.2X||7.X.2X){$(4a).12(H(\'7g\',F,K,I,I),C(e){E k=e.7h;8(k==7.X.2X){e.2D();y.R(H(\'X\',F))}8(k==7.V.2X){e.2D();y.R(H(\'V\',F))}})}8(7.1a.4V){$(4a).12(H(\'7g\',F,K,I,I),C(e){E k=e.7h;8(k>=49&&k<58){k=(k-49)*7.D.L;8(k<=J.P){e.2D();y.R(H(\'3k\',F),[k,0,I,7.1a])}}})}8(7.V.4W||7.X.4W){2J(\'4b 4c-7i\',\'4b 8m-7i\');8($.1r.4c){E c=(7.V.4W)?C(){y.R(H(\'V\',F))}:2G,4d=(7.X.4W)?C(){y.R(H(\'X\',F))}:2G;8(4d||4d){8(!z.4c){z.4c=I;E d={\'8n\':30,\'8o\':30,\'8p\':I};1B(7.2b){Q\'4n\':Q\'5T\':d.8q=c;d.8r=4d;16;2x:d.8s=4d;d.8t=c}$1s.4c(d)}}}}8($.1r.1q){E f=\'8u\'8v 3l;8((f&&7.1q.4e)||(!f&&7.1q.5U)){E g=$.1N(I,{},7.V,7.1q),7j=$.1N(I,{},7.X,7.1q),5V=C(){y.R(H(\'V\',F),[g])},5W=C(){y.R(H(\'X\',F),[7j])};1B(7.2b){Q\'4n\':Q\'5T\':7.1q.2H.8w=5W;7.1q.2H.8x=5V;16;2x:7.1q.2H.8y=5W;7.1q.2H.8z=5V}8(z.1q){y.1q(\'4m\')}$1s.1q(7.1q.2H);$1s.11(\'7k\',\'8A\');z.1q=I}}8($.1r.1h){8(7.V.1h){2J(\'7l V.1h 7m\',\'4b 1h 4z 2f\');7.V.1h=2G;7.1h={D:5X(7.V.1h)}}8(7.X.1h){2J(\'7l X.1h 7m\',\'4b 1h 4z 2f\');7.X.1h=2G;7.1h={D:5X(7.X.1h)}}8(7.1h){E h=$.1N(I,{},7.V,7.1h),7n=$.1N(I,{},7.X,7.1h);8(z.1h){$1s.23(H(\'1h\',F,K))}$1s.12(H(\'1h\',F,K),C(e,a){e.2D();8(a>0){y.R(H(\'V\',F),[h])}O{y.R(H(\'X\',F),[7n])}});z.1h=I}}8(7.M.1H){y.R(H(\'1H\',F),7.M.5Y)}8(z.6A){E i=$(3l),5Z=0,61=0;i.12(H(\'8B\',F,K,I,I),C(e){E a=i.N(),62=i.1d();8(a!=5Z||62!=61){y.R(H(\'5u\',F));8(7.M.63&&!z.26){y.R(H(\'1H\',F))}1U(y.13(),7);y.R(H(\'4M\',F));5Z=a;61=62}})}};y.5R=C(){E a=H(\'\',F),3O=H(\'\',F,K);64=H(\'\',F,K,I,I);$(4a).23(64);$(3l).23(64);$1s.23(3O);8(7.M.W){7.M.W.23(3O)}8(7.V.W){7.V.W.23(3O)}8(7.X.W){7.X.W.23(3O)}8(7.1a.1z){7.1a.1z.23(3O);8(7.1a.3K){7.1a.1z.13().2s()}}8(z.1q){y.1q(\'4m\');$1s.11(\'7k\',\'2x\');z.1q=K}8(z.1h){z.1h=K}4R(7,\'4f\',F);3A(7,\'2N\',F)};8(1l(w)){w={\'18\':w}}E z={\'2b\':\'X\',\'26\':I,\'20\':K,\'2c\':K,\'1h\':K,\'1q\':K},J={\'P\':y.13().S,\'Z\':0},1u={\'M\':2G,\'1e\':2G,\'2L\':2n(),\'3v\':0},U={\'2c\':K,\'1C\':0,\'2L\':0,\'2j\':\'\',\'19\':[]},2a={\'3G\':[],\'3g\':[]},2C=[],F=$.1N(I,{},$.1r.1v.7o,w),7={},2Z=$.1N(I,{},u),$1s=y.8C(\'<\'+F.65.53+\' 8D="\'+F.65.7p+\'" />\').66();F.4k=y.4k;F.3S=$.1r.1v.3S++;y.56(2Z,I,54);y.6I();y.6P();y.5P();8(2U(7.D.3m)){E A=7.D.3m}O{E A=[];8(7.D.3m!=0){A.1b(7.D.3m)}}8(7.25){A.8E(4g(7q(7.25),10))}8(A.S>0){1j(E a=0,l=A.S;a<l;a++){E s=A[a];8(s==0){68}8(s===I){s=3l.8F.7a;8(s.S<1){68}}O 8(s===\'7r\'){s=1I.4h(1I.7r()*J.P)}8(y.1Q(H(\'3k\',F),[s,0,I,{1V:\'3X\'}])){16}}}E B=4O(y,7),7s=3I(y.13(),7);8(7.7t){7.7t.1g($14,{\'N\':B.N,\'1d\':B.1d,\'D\':7s})}y.R(H(\'3H\',F),[I,B]);y.R(H(\'5N\',F));8(F.18){y.R(H(\'18\',F))}G y};$.1r.1v.3S=1;$.1r.1v.59={\'2m\':K,\'3z\':I,\'1T\':I,\'2l\':K,\'2b\':\'1m\',\'D\':{\'3m\':0},\'1M\':{\'2j\':\'8G\',\'1C\':6D,\'2F\':K,\'3L\':\'5Q\',\'3y\':K}};$.1r.1v.7o={\'18\':K,\'3x\':{\'41\':\'\',\'7u\':\'8H\'},\'65\':{\'53\':\'8I\',\'7p\':\'8J\'},\'69\':{}};$.1r.1v.7v=C(a){G\'<a 8K="#"><7w>\'+a+\'</7w></a>\'};$.1r.1v.7x=C(a){$(1k).11(\'N\',a+\'%\')};$.1r.1v.25={3F:C(n){n+=\'=\';E b=4a.25.3P(\';\');1j(E a=0,l=b.S;a<l;a++){E c=b[a];2g(c.8L(0)==\' \'){c=c.17(1)}8(c.3Q(n)==0){G c.17(n.S)}}G 0},6a:C(n,v,d){E e="";8(d){E a=6b 7y();a.8M(a.2n()+(d*24*60*60*8N));e="; 8O="+a.8P()}4a.25=n+\'=\'+v+e+\'; 8Q=/\'},2s:C(n){$.1r.1v.25.6a(n,"",-1)}};C 43(d,e){G{19:[],1C:d,8R:d,2j:e,2L:2n()}}C 2O(s){8(1D(s.3t)){2O(s.3t)}1j(E a=0,l=s.19.S;a<l;a++){E b=s.19[a];8(!b){68}8(b[3]){b[0].5t()}b[0].8S(b[1],{8T:b[2],1C:s.1C,2j:s.2j})}8(1D(s.3u)){2O(s.3u)}}C 3Y(s,c){8(!1l(c)){c=I}8(1D(s.3t)){3Y(s.3t,c)}1j(E a=0,l=s.19.S;a<l;a++){E b=s.19[a];b[0].5t(I);8(c){b[0].11(b[1]);8(1n(b[2])){b[2]()}}}8(1D(s.3u)){3Y(s.3u,c)}}C 5H(a,b,o){8(b){b.2s()}1B(o.1V){Q\'1w\':Q\'3j\':Q\'1J-1w\':Q\'22-1w\':a.11(\'1t\',\'\');16}}C 44(d,o,b,a,c){8(o[b]){o[b].1g(d,a)}8(c[b].S){1j(E i=0,l=c[b].S;i<l;i++){c[b][i].1g(d,a)}}G[]}C 5I(a,q,c){8(q.S){a.R(H(q[0][0],c),q[0][1]);q.8U()}G q}C 5A(b){b.1W(C(){E a=$(1k);a.1p(\'7z\',a.2e(\':3r\')).4f()})}C 5F(b){8(b){b.1W(C(){E a=$(1k);8(!a.1p(\'7z\')){a.4i()}})}}C 3s(t){8(t.M){8V(t.M)}8(t.1e){8W(t.1e)}G t}C 5G(a,b,c,d,e,f,g){G{\'N\':g.N,\'1d\':g.1d,\'D\':{\'1Z\':a,\'8X\':b,\'6b\':c,\'L\':c},\'1M\':{\'D\':d,\'2b\':e,\'1C\':f}}}C 5C(a,o,b,c){E d=a.1C;8(a.1V==\'3X\'){G 0}8(d==\'M\'){d=o.1M.1C/o.1M.D*b}O 8(d<10){d=c/d}8(d<1){G 0}8(a.1V==\'1w\'){d=d/2}G 1I.79(d)}C 4R(o,t,c){E a=(Y(o.D.4y))?o.D.4y:o.D.L+1;8(t==\'4i\'||t==\'4f\'){E f=t}O 8(a>t){18(c,\'2o 6R D (\'+t+\' P, \'+a+\' 6S): 8Y 8Z.\');E f=\'4f\'}O{E f=\'4i\'}E s=(f==\'4i\')?\'2N\':\'36\',h=2y(\'3r\',c);8(o.M.W){o.M.W[f]()[s](h)}8(o.V.W){o.V.W[f]()[s](h)}8(o.X.W){o.X.W[f]()[s](h)}8(o.1a.1z){o.1a.1z[f]()[s](h)}}C 3A(o,f,c){8(o.1T||o.3z)G;E a=(f==\'2N\'||f==\'36\')?f:K,4X=2y(\'90\',c);8(o.M.W&&a){o.M.W[a](4X)}8(o.V.W){E b=a||(f==0)?\'36\':\'2N\';o.V.W[b](4X)}8(o.X.W){E b=a||(f==o.D.L)?\'36\':\'2N\';o.X.W[b](4X)}}C 3R(a,b){8(1n(b)){b=b.1g(a)}O 8(1G(b)){b={}}G b}C 6q(a,b){b=3R(a,b);8(Y(b)){b={\'L\':b}}O 8(b==\'1c\'){b={\'L\':b,\'N\':b,\'1d\':b}}O 8(!1D(b)){b={}}G b}C 6r(a,b){b=3R(a,b);8(Y(b)){8(b<=50){b={\'D\':b}}O{b={\'1C\':b}}}O 8(1o(b)){b={\'2j\':b}}O 8(!1D(b)){b={}}G b}C 4Y(a,b){b=3R(a,b);8(1o(b)){E c=6c(b);8(c==-1){b=$(b)}O{b=c}}G b}C 6s(a,b){b=4Y(a,b);8(2t(b)){b={\'W\':b}}O 8(1l(b)){b={\'1H\':b}}O 8(Y(b)){b={\'2K\':b}}8(b.1e){8(1o(b.1e)||2t(b.1e)){b.1e={\'2p\':b.1e}}}G b}C 6E(a,b){8(1n(b.W)){b.W=b.W.1g(a)}8(1o(b.W)){b.W=$(b.W)}8(!1l(b.1H)){b.1H=I}8(!Y(b.5Y)){b.5Y=0}8(1G(b.4U)){b.4U=I}8(!1l(b.63)){b.63=I}8(!Y(b.2K)){b.2K=(b.1C<10)?91:b.1C*5}8(b.1e){8(1n(b.1e.2p)){b.1e.2p=b.1e.2p.1g(a)}8(1o(b.1e.2p)){b.1e.2p=$(b.1e.2p)}8(b.1e.2p){8(!1n(b.1e.4x)){b.1e.4x=$.1r.1v.7x}8(!Y(b.1e.5v)){b.1e.5v=50}}O{b.1e=K}}G b}C 57(a,b){b=4Y(a,b);8(2t(b)){b={\'W\':b}}O 8(Y(b)){b={\'2X\':b}}G b}C 5g(a,b){8(1n(b.W)){b.W=b.W.1g(a)}8(1o(b.W)){b.W=$(b.W)}8(1o(b.2X)){b.2X=6c(b.2X)}G b}C 6t(a,b){b=4Y(a,b);8(2t(b)){b={\'1z\':b}}O 8(1l(b)){b={\'4V\':b}}G b}C 6F(a,b){8(1n(b.1z)){b.1z=b.1z.1g(a)}8(1o(b.1z)){b.1z=$(b.1z)}8(!Y(b.D)){b.D=K}8(!1l(b.4V)){b.4V=K}8(!1n(b.3K)&&!4Z(b.3K)){b.3K=$.1r.1v.7v}8(!Y(b.4Q)){b.4Q=0}G b}C 6u(a,b){8(1n(b)){b=b.1g(a)}8(1G(b)){b={\'4e\':K}}8(3p(b)){b={\'4e\':b}}O 8(Y(b)){b={\'D\':b}}G b}C 6G(a,b){8(!1l(b.4e)){b.4e=I}8(!1l(b.5U)){b.5U=K}8(!1D(b.2H)){b.2H={}}8(!1l(b.2H.7A)){b.2H.7A=K}G b}C 6v(a,b){8(1n(b)){b=b.1g(a)}8(3p(b)){b={}}O 8(Y(b)){b={\'D\':b}}O 8(1G(b)){b=K}G b}C 6H(a,b){G b}C 3J(a,b,c,d,e){8(1o(a)){a=$(a,e)}8(1D(a)){a=$(a,e)}8(2t(a)){a=e.13().7b(a);8(!1l(c)){c=K}}O{8(!1l(c)){c=I}}8(!Y(a)){a=0}8(!Y(b)){b=0}8(c){a+=d.Z}a+=b;8(d.P>0){2g(a>=d.P){a-=d.P}2g(a<0){a+=d.P}}G a}C 4A(i,o,s){E t=0,x=0;1j(E a=s;a>=0;a--){E j=i.1O(a);t+=(j.2e(\':L\'))?j[o.d[\'2u\']](I):0;8(t>o.4o){G x}8(a==0){a=i.S}x++}}C 7d(i,o,s){G 6d(i,o.D.1t,o.D.T.4r,s)}C 6V(i,o,s,m){G 6d(i,o.D.1t,m,s)}C 6d(i,f,m,s){E t=0,x=0;1j(E a=s,l=i.S;a>=0;a--){x++;8(x==l){G x}E j=i.1O(a);8(j.2e(f)){t++;8(t==m){G x}}8(a==0){a=l}}}C 5y(a,o){G o.D.T.4r||a.13().17(0,o.D.L).1t(o.D.1t).S}C 31(i,o,s){E t=0,x=0;1j(E a=s,l=i.S-1;a<=l;a++){E j=i.1O(a);t+=(j.2e(\':L\'))?j[o.d[\'2u\']](I):0;8(t>o.4o){G x}x++;8(x==l+1){G x}8(a==l){a=-1}}}C 5K(i,o,s,l){E v=31(i,o,s);8(!o.1T){8(s+v>l){v=l-s}}G v}C 3U(i,o,s){G 6e(i,o.D.1t,o.D.T.4r,s,o.1T)}C 71(i,o,s,m){G 6e(i,o.D.1t,m+1,s,o.1T)-1}C 6e(i,f,m,s,c){E t=0,x=0;1j(E a=s,l=i.S-1;a<=l;a++){x++;8(x>=l){G x}E j=i.1O(a);8(j.2e(f)){t++;8(t==m){G x}}8(a==l){a=-1}}}C 3I(i,o){G i.17(0,o.D.L)}C 6X(i,o,n){G i.17(n,o.D.T.1Z+n)}C 6Y(i,o){G i.17(0,o.D.L)}C 73(i,o){G i.17(0,o.D.T.1Z)}C 74(i,o,n){G i.17(n,o.D.L+n)}C 4v(i,o,d){8(o.1R){8(!1o(d)){d=\'29\'}i.1W(C(){E j=$(1k),m=4g(j.11(o.d[\'1S\']),10);8(!Y(m)){m=0}j.1p(d,m)})}}C 1U(i,o,m){8(o.1R){E x=(1l(m))?m:K;8(!Y(m)){m=0}4v(i,o,\'7B\');i.1W(C(){E j=$(1k);j.11(o.d[\'1S\'],((x)?j.1p(\'7B\'):m+j.1p(\'29\')))})}}C 5q(i,o){8(o.2l){i.1W(C(){E j=$(1k),s=5m(j,[\'N\',\'1d\']);j.1p(\'7e\',s)})}}C 5r(o,b){E c=o.D.L,7C=o.D[o.d[\'N\']],6f=o[o.d[\'1d\']],7D=3T(6f);b.1W(C(){E a=$(1k),6g=7C-7E(a,o,\'92\');a[o.d[\'N\']](6g);8(7D){a[o.d[\'1d\']](4q(6g,6f))}})}C 4O(a,o){E b=a.66(),$i=a.13(),$v=3I($i,o),51=4G(4H($v,o,I),o,K);b.11(51);8(o.1R){E p=o.1i,r=p[o.d[1]];8(o.1A&&r<0){r=0}E c=$v.3i();c.11(o.d[\'1S\'],c.1p(\'29\')+r);a.11(o.d[\'3q\'],p[o.d[0]]);a.11(o.d[\'1m\'],p[o.d[3]])}a.11(o.d[\'N\'],51[o.d[\'N\']]+(2Q($i,o,\'N\')*2));a.11(o.d[\'1d\'],6h($i,o,\'1d\'));G 51}C 4H(i,o,a){G[2Q(i,o,\'N\',a),6h(i,o,\'1d\',a)]}C 6h(i,o,a,b){8(!1l(b)){b=K}8(Y(o[o.d[a]])&&b){G o[o.d[a]]}8(Y(o.D[o.d[a]])){G o.D[o.d[a]]}a=(a.6i().3Q(\'N\')>-1)?\'2u\':\'3n\';G 4j(i,o,a)}C 4j(i,o,b){E s=0;1j(E a=0,l=i.S;a<l;a++){E j=i.1O(a);E m=(j.2e(\':L\'))?j[o.d[b]](I):0;8(s<m){s=m}}G s}C 2Q(i,o,b,c){8(!1l(c)){c=K}8(Y(o[o.d[b]])&&c){G o[o.d[b]]}8(Y(o.D[o.d[b]])){G o.D[o.d[b]]*i.S}E d=(b.6i().3Q(\'N\')>-1)?\'2u\':\'3n\',s=0;1j(E a=0,l=i.S;a<l;a++){E j=i.1O(a);s+=(j.2e(\':L\'))?j[o.d[d]](I):0}G s}C 5a(a,o,d){E b=a.2e(\':L\');8(b){a.4f()}E s=a.66()[o.d[d]]();8(b){a.4i()}G s}C 5b(o,a){G(Y(o[o.d[\'N\']]))?o[o.d[\'N\']]:a}C 6j(i,o,b){E s=K,v=K;1j(E a=0,l=i.S;a<l;a++){E j=i.1O(a);E c=(j.2e(\':L\'))?j[o.d[b]](I):0;8(s===K){s=c}O 8(s!=c){v=I}8(s==0){v=I}}G v}C 7E(i,o,d){G i[o.d[\'93\'+d]](I)-i[o.d[d.6i()]]()}C 4q(s,o){8(3T(o)){o=4g(o.17(0,-1),10);8(!Y(o)){G s}s*=o/2I}G s}C H(n,c,a,b,d){8(!1l(a)){a=I}8(!1l(b)){b=I}8(!1l(d)){d=K}8(a){n=c.3x.41+n}8(b){n=n+\'.\'+c.3x.7u}8(b&&d){n+=c.3S}G n}C 2y(n,c){G(1o(c.69[n]))?c.69[n]:n}C 4G(a,o,p){8(!1l(p)){p=I}E b=(o.1R&&p)?o.1i:[0,0,0,0];E c={};c[o.d[\'N\']]=a[0]+b[1]+b[3];c[o.d[\'1d\']]=a[1]+b[0]+b[2];G c}C 3d(c,d){E e=[];1j(E a=0,7F=c.S;a<7F;a++){1j(E b=0,7G=d.S;b<7G;b++){8(d[b].3Q(2W c[a])>-1&&1G(e[b])){e[b]=c[a];16}}}G e}C 6C(p){8(1G(p)){G[0,0,0,0]}8(Y(p)){G[p,p,p,p]}8(1o(p)){p=p.3P(\'94\').7H(\'\').3P(\'95\').7H(\'\').3P(\' \')}8(!2U(p)){G[0,0,0,0]}1j(E i=0;i<4;i++){p[i]=4g(p[i],10)}1B(p.S){Q 0:G[0,0,0,0];Q 1:G[p[0],p[0],p[0],p[0]];Q 2:G[p[0],p[1],p[0],p[1]];Q 3:G[p[0],p[1],p[2],p[1]];2x:G[p[0],p[1],p[2],p[3]]}}C 4F(a,o){E x=(Y(o[o.d[\'N\']]))?1I.2z(o[o.d[\'N\']]-2Q(a,o,\'N\')):0;1B(o.1A){Q\'1m\':G[0,x];Q\'35\':G[x,0];Q\'5c\':2x:G[1I.2z(x/2),1I.4h(x/2)]}}C 6w(o){E a=[[\'N\',\'7I\',\'2u\',\'1d\',\'7J\',\'3n\',\'1m\',\'3q\',\'1S\',0,1,2,3],[\'1d\',\'7J\',\'3n\',\'N\',\'7I\',\'2u\',\'3q\',\'1m\',\'5o\',3,2,1,0]];E b=a[0].S,7K=(o.2b==\'35\'||o.2b==\'1m\')?0:1;E c={};1j(E d=0;d<b;d++){c[a[0][d]]=a[7K][d]}G c}C 4B(x,o,a,b){E v=x;8(1n(a)){v=a.1g(b,v)}O 8(1o(a)){E p=a.3P(\'+\'),m=a.3P(\'-\');8(m.S>p.S){E c=I,6k=m[0],2Y=m[1]}O{E c=K,6k=p[0],2Y=p[1]}1B(6k){Q\'96\':v=(x%2==1)?x-1:x;16;Q\'97\':v=(x%2==0)?x-1:x;16;2x:v=x;16}2Y=4g(2Y,10);8(Y(2Y)){8(c){2Y=-2Y}v+=2Y}}8(!Y(v)||v<1){v=1}G v}C 32(x,o,a,b){G 6l(4B(x,o,a,b),o.D.T)}C 6l(v,i){8(Y(i.34)&&v<i.34){v=i.34}8(Y(i.1X)&&v>i.1X){v=i.1X}8(v<1){v=1}G v}C 5h(s){8(!2U(s)){s=[[s]]}8(!2U(s[0])){s=[s]}1j(E j=0,l=s.S;j<l;j++){8(1o(s[j][0])){s[j][0]=$(s[j][0])}8(!1l(s[j][1])){s[j][1]=I}8(!1l(s[j][2])){s[j][2]=I}8(!Y(s[j][3])){s[j][3]=0}}G s}C 6c(k){8(k==\'35\'){G 39}8(k==\'1m\'){G 37}8(k==\'4n\'){G 38}8(k==\'5T\'){G 40}G-1}C 5J(n,a,c){8(n){E v=a.1Q(H(\'4l\',c));$.1r.1v.25.6a(n,v)}}C 7q(n){E c=$.1r.1v.25.3F(n);G(c==\'\')?0:c}C 5m(a,b){E c={},52;1j(E p=0,l=b.S;p<l;p++){52=b[p];c[52]=a.11(52)}G c}C 6x(a,b,c,d){8(!1D(a.T)){a.T={}}8(!1D(a.3M)){a.3M={}}8(a.3m==0&&Y(d)){a.3m=d}8(1D(a.L)){a.T.34=a.L.34;a.T.1X=a.L.1X;a.L=K}O 8(1o(a.L)){8(a.L==\'1c\'){a.T.1c=I}O{a.T.2w=a.L}a.L=K}O 8(1n(a.L)){a.T.2w=a.L;a.L=K}8(!1o(a.1t)){a.1t=(c.1t(\':3r\').S>0)?\':L\':\'*\'}8(!a[b.d[\'N\']]){8(b.2l){18(I,\'7L a \'+b.d[\'N\']+\' 1j 4b D!\');a[b.d[\'N\']]=4j(c,b,\'2u\')}O{a[b.d[\'N\']]=(6j(c,b,\'2u\'))?\'1c\':c[b.d[\'2u\']](I)}}8(!a[b.d[\'1d\']]){a[b.d[\'1d\']]=(6j(c,b,\'3n\'))?\'1c\':c[b.d[\'3n\']](I)}a.3M.N=a.N;a.3M.1d=a.1d;G a}C 6B(a,b){8(a.D[a.d[\'N\']]==\'1c\'){a.D.T.1c=I}8(!a.D.T.1c){8(Y(a[a.d[\'N\']])){a.D.L=1I.4h(a[a.d[\'N\']]/a.D[a.d[\'N\']])}O{a.D.L=1I.4h(b/a.D[a.d[\'N\']]);a[a.d[\'N\']]=a.D.L*a.D[a.d[\'N\']];8(!a.D.T.2w){a.1A=K}}8(a.D.L==\'98\'||a.D.L<1){18(I,\'2o a 5M 27 48 L D: 7L 4C "1c".\');a.D.T.1c=I}}G a}C 6y(a,b,c){8(a==\'M\'){a=4j(c,b,\'2u\')}G a}C 6z(a,b,c){8(a==\'M\'){a=4j(c,b,\'3n\')}8(!a){a=b.D[b.d[\'1d\']]}G a}C 5f(o,a){E p=4F(3I(a,o),o);o.1i[o.d[1]]=p[1];o.1i[o.d[3]]=p[0];G o}C 5d(o,a,b){E c=6l(1I.2z(o[o.d[\'N\']]/o.D[o.d[\'N\']]),o.D.T);8(c>a.S){c=a.S}E d=1I.4h(o[o.d[\'N\']]/c);o.D.L=c;o.D[o.d[\'N\']]=d;o[o.d[\'N\']]=c*d;G o}C 3N(p){8(1o(p)){E i=(p.3Q(\'99\')>-1)?I:K,r=(p.3Q(\'3f\')>-1)?I:K}O{E i=r=K}G[i,r]}C 5X(a){G(Y(a))?a:2G}C 6m(a){G(a===2G)}C 1G(a){G(6m(a)||2W a==\'7M\'||a===\'\'||a===\'7M\')}C 2U(a){G(a 2V 9a)}C 2t(a){G(a 2V 7N)}C 1D(a){G((a 2V 9b||2W a==\'2f\')&&!6m(a)&&!2t(a)&&!2U(a))}C Y(a){G((a 2V 47||2W a==\'27\')&&!9c(a))}C 1o(a){G((a 2V 9d||2W a==\'2M\')&&!1G(a)&&!3p(a)&&!4Z(a))}C 1n(a){G(a 2V 9e||2W a==\'C\')}C 1l(a){G(a 2V 9f||2W a==\'3c\'||3p(a)||4Z(a))}C 3p(a){G(a===I||a===\'I\')}C 4Z(a){G(a===K||a===\'K\')}C 3T(x){G(1o(x)&&x.17(-1)==\'%\')}C 2n(){G 6b 7y().2n()}C 2J(o,n){18(I,o+\' 2e 9g, 9h 1j 9i 9j 9k 9l. 9m \'+n+\' 9n.\')}C 18(d,m){8(1D(d)){E s=\' (\'+d.4k+\')\';d=d.18}O{E s=\'\'}8(!d){G K}8(1o(m)){m=\'1v\'+s+\': \'+m}O{m=[\'1v\'+s+\':\',m]}8(3l.6n&&3l.6n.7O){3l.6n.7O(m)}G K}$.1N($.2j,{\'9o\':C(t){E a=t*t;G t*(-a*t+4*a-6*t+4)},\'9p\':C(t){G t*(4*t*t-9*t+6)},\'9q\':C(t){E a=t*t;G t*(33*a*a-9r*a*t+9s*a-67*t+15)}})})(7N);',62,587,'|||||||opts|if||||||||||||||||||||||||||||||function|items|var|conf|return|cf_e|true|itms|false|visible|auto|width|else|total|case|trigger|length|visibleConf|scrl|prev|button|next|is_number|first||css|bind|children|tt0||break|slice|debug|anims|pagination|push|variable|height|progress|stopPropagation|call|mousewheel|padding|for|this|is_boolean|left|is_function|is_string|data|swipe|fn|wrp|filter|tmrs|carouFredSel|fade|_onafter|_moveitems|container|align|switch|duration|is_object|_s_paddingold|_s_paddingcur|is_undefined|play|Math|cover|_position|opacity|scroll|extend|eq|_a_wrapper|triggerHandler|usePadding|marginRight|circular|sz_resetMargin|fx|each|max|i_cur_l|old|isScrolling|i_old_l|uncover|unbind||cookie|isPaused|number|a_cfs|_cfs_origCssMargin|clbk|direction|isStopped|stopImmediatePropagation|is|object|while|i_new|w_siz|easing|nr|responsive|synchronise|getTime|Not|bar|i_new_l|a_cur|remove|is_jquery|outerWidth|avail_primary|adjust|default|cf_c|ceil|pR|_s_paddingnew|queu|preventDefault|a_itm|pauseOnHover|null|options|100|deprecated|timeoutDuration|startTime|string|removeClass|sc_startScroll|i_skp|ms_getTotalSize|a_old|a_lef|a_dur|is_array|instanceof|typeof|key|adj|opts_orig||gn_getVisibleItemsNext|cf_getItemsAdjust||min|right|addClass||||pause|perc|boolean|cf_sortParams|scrolling|resume|onAfter|i_old|last|crossfade|slideTo|window|start|outerHeight|_cfs_triggerEvent|is_true|top|hidden|sc_clearTimers|pre|post|timePassed|Carousel|events|queue|infinite|nv_enableNavi|i_siz|i_siz_vis|_a_paddingold|_a_paddingcur|get|onBefore|updatePageStatus|gi_getCurrentItems|gn_getItemIndex|anchorBuilder|event|sizesConf|bt_pauseOnHoverConfig|ns2|split|indexOf|go_getObject|serialNumber|is_percentage|gn_getVisibleItemsNextFilter|orgCSS|position|none|sc_stopScroll|dur2||prefix|appendTo|sc_setScroll|sc_fireCallbacks|currentPage|before|Number|of||document|the|touchwipe|wN|onTouch|hide|parseInt|floor|show|ms_getTrueLargestSize|selector|currentPosition|destroy|up|maxDimension|primarySizePercentage|ms_getPercentage|org|onTimeoutStart|onTimeoutPause|onTimeoutEnd|sz_storeMargin|stopped|updater|minimum|configuration|gn_getVisibleItemsPrev|cf_getAdjust|to|onEnd|clone|cf_getAlignPadding|cf_mapWrapperSizes|ms_getSizes|a_wsz|a_new|a_cfs_vis|end|updateSizes|eval|sz_setSizes|pgs|deviation|nv_showNavi|mouseenter|mouseleave|pauseOnEvent|keys|wipe|di|go_getNaviObject|is_false||sz|prop|element|starting_position|_cfs_isCarousel|_cfs_init|go_getPrevNextObject||defaults|ms_getParentSize|ms_getMaxDimension|center|in_getResponsiveValues|bottom|in_getAlignPadding|go_complementPrevNextObject|cf_getSynchArr|onPauseStart|onPausePause|onPauseEnd|pauseDuration|in_mapCss|zIndex|marginBottom|newPosition|sz_storeSizes|sz_setResponsiveSizes|_cfs_unbind_events|stop|finish|interval|type|conditions|gn_getVisibleOrg|backward|sc_hideHiddenItems|a_lef_vis|sc_getDuration|_a_paddingnew|not|sc_showHiddenItems|sc_mapCallbackArguments|sc_afterScroll|sc_fireQueue|cf_setCookie|gn_getVisibleItemsNextTestCircular|slideToPage|valid|linkAnchors|value|_cfs_bind_buttons|click|_cfs_unbind_buttons|scrolled|down|onMouse|swP|swN|bt_mousesheelNumber|delay|_windowWidth||_windowHeight|nh|pauseOnResize|ns3|wrapper|parent||continue|classnames|set|new|cf_getKeyCode|gn_getItemsPrevFilter|gn_getItemsNextFilter|seco|nw|ms_getLargestSize|toLowerCase|ms_hasVariableSizes|sta|cf_getItemAdjustMinMax|is_null|console|caroufredsel|No|go_getItemsObject|go_getScrollObject|go_getAutoObject|go_getPaginationObject|go_getSwipeObject|go_getMousewheelObject|cf_getDimensions|in_complementItems|in_complementPrimarySize|in_complementSecondarySize|upDateOnWindowResize|in_complementVisibleItems|cf_getPadding|500|go_complementAutoObject|go_complementPaginationObject|go_complementSwipeObject|go_complementMousewheelObject|_cfs_build|textAlign|float|marginTop|marginLeft|absolute|_cfs_origCss|_cfs_bind_events|paused|enough|needed|page|slide_|gn_getScrollItemsPrevFilter|Scrolling|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|gn_getScrollItemsNextFilter|forward|gi_getOldItemsNext|gi_getNewItemsNext|jumpToStart|after|append|removeItem|round|hash|index|selected|gn_getVisibleItemsPrevFilter|_cfs_origCssSizes|Item|keyup|keyCode|plugin|scN|cursor|The|option|mcN|configs|classname|cf_getCookie|random|itm|onCreate|namespace|pageAnchorBuilder|span|progressbarUpdater|Date|_cfs_isHidden|triggerOnTouchEnd|_cfs_tempCssMargin|newS|secp|ms_getPaddingBorderMargin|l1|l2|join|innerWidth|innerHeight|dx|Set|undefined|jQuery|log|found|caroufredsel_cookie_|relative|fixed|overflow|setInterval|setTimeout|or|Callback|returned|Page|resumed|currently|slide_prev|prependTo|slide_next|prevPage|nextPage|prepend|carousel|insertItem|add|detach|currentVisible|body|find|Preventing|non|sliding|replaceWith|widths|heights|automatically|touchSwipe|min_move_x|min_move_y|preventDefaultEvents|wipeUp|wipeDown|wipeLeft|wipeRight|ontouchstart|in|swipeUp|swipeDown|swipeLeft|swipeRight|move|resize|wrap|class|unshift|location|swing|cfs|div|caroufredsel_wrapper|href|charAt|setTime|1000|expires|toGMTString|path|orgDuration|animate|complete|shift|clearTimeout|clearInterval|skipped|Hiding|navigation|disabled|2500|Width|outer|px|em|even|odd|Infinity|immediate|Array|Object|isNaN|String|Function|Boolean|DEPRECATED|support|it|will|be|removed|Use|instead|quadratic|cubic|elastic|106|126'.split('|'),0,{}))


/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */

;(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el),
        vars = $.extend({}, $.flexslider.defaults, options),
        namespace = vars.namespace,
        touch = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
        eventType = (touch) ? "touchend" : "click",
        vertical = vars.direction === "vertical",
        reverse = vars.reverse,
        carousel = (vars.itemWidth > 0),
        fade = vars.animation === "fade",
        asNav = vars.asNavFor !== "",
        methods = {};

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Privat slider methods
    methods = {
      init: function() {
        slider.animating = false;
        slider.currentSlide = vars.startAt;
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = vars.selector.substr(0,vars.selector.search(' '));
        slider.slides = $(vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(vars.sync).length > 0;
        // SLIDE:
        if (vars.animation === "slide") vars.animation = "swing";
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        // TOUCH/USECSS:
        slider.transitions = !vars.video && !fade && vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        // CONTROLSCONTAINER:
        if (vars.controlsContainer !== "") slider.controlsContainer = $(vars.controlsContainer).length > 0 && $(vars.controlsContainer);
        // MANUAL:
        if (vars.manualControls !== "") slider.manualControls = $(vars.manualControls).length > 0 && $(vars.manualControls);

        // RANDOMIZE:
        if (vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // ASNAV:
        if (asNav) methods.asNav.setup();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (vars.controlNav) methods.controlNav.setup();

        // DIRECTIONNAV:
        if (vars.directionNav) methods.directionNav.setup();

        // KEYBOARD:
        if (vars.keyboard && ($(slider.containerSelector).length === 1 || vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (vars.pausePlay) methods.pausePlay.setup();

        // SLIDSESHOW
        if (vars.slideshow) {
          if (vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) slider.pause();
            }, function() {
              if (!slider.manualPause && !slider.manualPlay) slider.play();
            });
          }
          // initialize animation
          (vars.initDelay > 0) ? setTimeout(slider.play, vars.initDelay) : slider.play();
        }

        // TOUCH
        if (touch && vars.touch) methods.touch();

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && vars.smoothHeight)) $(window).bind("resize focus", methods.resize);


        // API: start() Callback
        setTimeout(function(){
          vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          slider.slides.click(function(e){
            e.preventDefault();
            var $slide = $(this),
                target = $slide.index();
            if (!$(vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
              slider.direction = (slider.currentItem < target) ? "next" : "prev";
              slider.flexAnimate(target, vars.pauseOnAction, false, true, true);
            }
          });
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              item = (vars.controlNav === "thumbnails") ? '<img src="' + slider.slides.eq(i).attr("data-thumb") + '"/>' : '<a>' + j + '</a>';
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();
            var $this = $(this),
                target = slider.controlNav.index($this);

            if (!$this.hasClass(namespace + 'active')) {
              slider.direction = (target > slider.currentSlide) ? "next" : "prev";
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.controlNavScaffold.delegate('a', "click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.live(eventType, function(event) {
            event.preventDefault();
            var $this = $(this),
                target = slider.controlNav.index($this);

            if (!$this.hasClass(namespace + 'active')) {
              (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.controlNav.live("click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        set: function() {
          var selector = (vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + vars.nextText + '</a></li></ul>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, vars.pauseOnAction);
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.directionNav.bind("click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass);
          } else if (!vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass);
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass);
            } else {
              slider.directionNav.removeClass(disabledClass);
            }
          } else {
            slider.directionNav.removeClass(disabledClass);
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();
            if ($(this).hasClass(namespace + 'pause')) {
              slider.manualPause = true;
              slider.manualPlay = false;
              slider.pause();
            } else {
              slider.manualPause = false;
              slider.manualPlay = true;
              slider.play();
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.pausePlay.bind("click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').text(vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').text(vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          scrolling = false;

        el.addEventListener('touchstart', onTouchStart, false);
        function onTouchStart(e) {
          if (slider.animating) {
            e.preventDefault();
          } else if (e.touches.length === 1) {
            slider.pause();
            // CAROUSEL:
            cwidth = (vertical) ? slider.h : slider. w;
            startT = Number(new Date());
            // CAROUSEL:
            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                     (carousel && reverse) ? slider.limit - (((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo) :
                     (carousel && slider.currentSlide === slider.last) ? slider.limit :
                     (carousel) ? ((slider.itemW + vars.itemMargin) * slider.move) * slider.currentSlide :
                     (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
            startX = (vertical) ? e.touches[0].pageY : e.touches[0].pageX;
            startY = (vertical) ? e.touches[0].pageX : e.touches[0].pageY;

            el.addEventListener('touchmove', onTouchMove, false);
            el.addEventListener('touchend', onTouchEnd, false);
          }
        }

        function onTouchMove(e) {
          dx = (vertical) ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;
          scrolling = (vertical) ? (Math.abs(dx) < Math.abs(e.touches[0].pageX - startY)) : (Math.abs(dx) < Math.abs(e.touches[0].pageY - startY));

          if (!scrolling || Number(new Date()) - startT > 500) {
            e.preventDefault();
            if (!fade && slider.transitions) {
              if (!vars.animationLoop) {
                dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
              }
              slider.setProps(offset + dx, "setTouch");
            }
          }
        }

        function onTouchEnd(e) {
          // finish the touch by undoing the touch session
          el.removeEventListener('touchmove', onTouchMove, false);

          if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
            var updateDx = (reverse) ? -dx : dx,
                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
              slider.flexAnimate(target, vars.pauseOnAction);
            } else {
              if (!fade) slider.flexAnimate(slider.currentSlide, vars.pauseOnAction, true);
            }
          }
          el.removeEventListener('touchend', onTouchEnd, false);
          startX = null;
          startY = null;
          dx = null;
          offset = null;
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) slider.doMath();

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (vars.smoothHeight) methods.smoothHeight();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      }
    }

    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;
        // API: before() animation Callback
        vars.before(slider);

        // SLIDESHOW:
        if (pause) slider.pause();

        // SYNC:
        if (slider.syncExists && !fromNav) methods.sync("animate");

        // CONTROLNAV
        if (vars.controlNav) methods.controlNav.active();

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (vars.directionNav) methods.directionNav.update();

        if (target === slider.last) {
          // API: end() of cycle Callback
          vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!vars.animationLoop) slider.pause();
        }

        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            margin = (vars.itemWidth > slider.w) ? vars.itemMargin * 2 : vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", vars.animationSpeed);
          if (slider.transitions) {
            if (!vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              slider.wrapup(dimension);
            });
          } else {
            slider.container.animate(slider.args, vars.animationSpeed, vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            slider.slides.eq(slider.currentSlide).fadeOut(vars.animationSpeed, vars.easing);
            slider.slides.eq(target).fadeIn(vars.animationSpeed, vars.easing, slider.wrapup);
          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });

            slider.slides.unbind("webkitTransitionEnd transitionend");
            slider.slides.eq(slider.currentSlide).bind("webkitTransitionEnd transitionend", function() {
              // API: after() animation Callback
              vars.after(slider);
            });

            slider.animating = false;
            slider.currentSlide = slider.animatingTo;
          }
        }
        // SMOOTH HEIGHT:
        if (vars.smoothHeight) methods.smoothHeight(vars.animationSpeed);
      }
    }
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      vars.after(slider);
    }

    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating) slider.flexAnimate(slider.getTarget("next"));
    }
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.playing = false;
      // PAUSEPLAY:
      if (vars.pausePlay) methods.pausePlay.update("play");
      // SYNC:
      if (slider.syncExists) methods.sync("pause");
    }
    // SLIDESHOW:
    slider.play = function() {
      slider.animatedSlides = setInterval(slider.animateSlides, vars.slideshowSpeed);
      slider.playing = true;
      // PAUSEPLAY:
      if (vars.pausePlay) methods.pausePlay.update("pause");
      // SYNC:
      if (slider.syncExists) methods.sync("play");
    }
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    }
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    }

    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());
            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) slider.container.css(slider.args);
    }

    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") slider.container.find('.clone').remove();
          slider.container.append(slider.slides.first().clone().addClass('clone')).prepend(slider.slides.last().clone().addClass('clone'));
        }
        slider.newSlides = $(vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (vars.smoothHeight) methods.smoothHeight();
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE:
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") {
          if (!touch) {
            slider.slides.eq(slider.currentSlide).fadeIn(vars.animationSpeed, vars.easing);
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (vars.smoothHeight) methods.smoothHeight();
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
    }

    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = vars.itemMargin,
          minItems = vars.minItems,
          maxItems = vars.maxItems;

      slider.w = slider.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? maxItems * slider.itemT : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * minItems))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * maxItems))/maxItems :
                       (vars.itemWidth > slider.w) ? slider.w : vars.itemWidth;
        slider.visible = Math.floor(slider.w/(slider.itemW + slideMargin));
        slider.move = (vars.move > 0 && vars.move < slider.visible ) ? vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (vars.itemWidth > slider.w) ? ((slider.itemW + (slideMargin * 2)) * slider.count) - slider.w - slideMargin : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    }

    slider.update = function(pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (vars.directionNav) methods.directionNav.update();

    }

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      vars.added(slider);
    }
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      vars.removed(slider);
    }

    //FlexSlider: Initialize
    methods.init();
  }

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order

    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.

    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed
  }


  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) options = {};

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

        if ($slides.length === 1) {
          $slides.fadeIn(400);
          if (options.start) options.start($this);
        } else if ($this.data('flexslider') == undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") $slider.flexAnimate(options, true);
      }
    }
  }

})(jQuery);




// Camera slideshow v1.3.4 - a jQuery slideshow with many effects, transitions, easy to customize, using canvas and mobile ready, based on jQuery 1.4+
// Copyright (c) 2012 by Manuel Masia - www.pixedelic.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
;(function($){$.fn.camera = function(opts, callback) {
	
	var defaults = {
		alignment			: 'center', //topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight
		
		autoAdvance			: true,	//true, false
		
		mobileAutoAdvance	: true, //true, false. Auto-advancing for mobile devices
		
		barDirection		: 'leftToRight',	//'leftToRight', 'rightToLeft', 'topToBottom', 'bottomToTop'
		
		barPosition			: 'bottom',	//'bottom', 'left', 'top', 'right'
		
		cols				: 6,
		
		easing				: 'easeInOutExpo',	//for the complete list http://jqueryui.com/demos/effect/easing.html
		
		mobileEasing		: '',	//leave empty if you want to display the same easing on mobile devices and on desktop etc.
		
		fx					: 'random',	//'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight'
										//you can also use more than one effect, just separate them with commas: 'simpleFade, scrollRight, scrollBottom'

		mobileFx			: '',	//leave empty if you want to display the same effect on mobile devices and on desktop etc.

		gridDifference		: 250,	//to make the grid blocks slower than the slices, this value must be smaller than transPeriod
		
		height				: '50%',	//here you can type pixels (for instance '300px'), a percentage (relative to the width of the slideshow, for instance '50%') or 'auto'
		
		imagePath			: 'images/',	//he path to the image folder (it serves for the blank.gif, when you want to display videos)
		
		hover				: true,	//true, false. Puase on state hover. Not available for mobile devices
				
		loader				: 'pie',	//pie, bar, none (even if you choose "pie", old browsers like IE8- can't display it... they will display always a loading bar)
		
		loaderColor			: '#eeeeee', 
		
		loaderBgColor		: '#222222', 
		
		loaderOpacity		: .8,	//0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1
		
		loaderPadding		: 2,	//how many empty pixels you want to display between the loader and its background
		
		loaderStroke		: 7,	//the thickness both of the pie loader and of the bar loader. Remember: for the pie, the loader thickness must be less than a half of the pie diameter
				
		minHeight			: '200px',	//you can also leave it blank
		
		navigation			: true,	//true or false, to display or not the navigation buttons
		
		navigationHover		: true,	//if true the navigation button (prev, next and play/stop buttons) will be visible on hover state only, if false they will be visible always
		
		mobileNavHover		: true,	//same as above, but only for mobile devices
		
		opacityOnGrid		: false,	//true, false. Decide to apply a fade effect to blocks and slices: if your slideshow is fullscreen or simply big, I recommend to set it false to have a smoother effect 
		
		overlayer			: true,	//a layer on the images to prevent the users grab them simply by clicking the right button of their mouse (.camera_overlayer)
		
		pagination			: true,
		
		playPause			: true,	//true or false, to display or not the play/pause buttons
		
		pauseOnClick		: true,	//true, false. It stops the slideshow when you click the sliders.
		
		pieDiameter			: 38,
		
		piePosition			: 'rightTop',	//'rightTop', 'leftTop', 'leftBottom', 'rightBottom'
		
		portrait			: false, //true, false. Select true if you don't want that your images are cropped
		
		rows				: 4,
		
		slicedCols			: 12,	//if 0 the same value of cols
		
		slicedRows			: 8,	//if 0 the same value of rows
		
		slideOn				: 'random',	//next, prev, random: decide if the transition effect will be applied to the current (prev) or the next slide
		
		thumbnails			: false,
		
		time				: 7000,	//milliseconds between the end of the sliding effect and the start of the nex one
		
		transPeriod			: 1500,	//lenght of the sliding effect in milliseconds
		
////////callbacks

		onEndTransition		: function() {  },	//this callback is invoked when the transition effect ends

		onLoaded			: function() {  },	//this callback is invoked when the image on a slide has completely loaded
		
		onStartLoading		: function() {  },	//this callback is invoked when the image on a slide start loading
		
		onStartTransition	: function() {  }	//this callback is invoked when the transition effect starts

    };
	
	
	function isMobile() {
		if( navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPod/i)
			){
				return true;
		}
	}

	var opts = $.extend({}, defaults, opts);
	
	var wrap = $(this).addClass('camera_wrap');
	
	wrap.wrapInner(
        '<div class="camera_src" />'
		).wrapInner(
	    '<div class="camera_fakehover" />'
		);
		
	var fakeHover = $('.camera_fakehover',wrap);
	
	fakeHover.append(
		'<div class="camera_target"></div>'
		);
	if(opts.overlayer == true){
		fakeHover.append(
			'<div class="camera_overlayer"></div>'
			)
	}
		fakeHover.append(
        '<div class="camera_target_content"></div>'
		);
		
	var loader;
	
	if(opts.loader=='pie' && $.browser.msie && $.browser.version < 9){
		loader = 'bar';
	} else {
		loader = opts.loader;
	}
	
	if(loader == 'pie'){
		fakeHover.append(
			'<div class="camera_pie"></div>'
			)
	} else if (loader == 'bar') {
		fakeHover.append(
			'<div class="camera_bar"></div>'
			)
	} else {
		fakeHover.append(
			'<div class="camera_bar" style="display:none"></div>'
			)
	}
	
	if(opts.playPause==true){
		fakeHover.append(
        '<div class="camera_commands"></div>'
		)
	}
		
	if(opts.navigation==true){
		fakeHover.append(
			'<div class="camera_prev"><span></span></div>'
			).append(
			'<div class="camera_next"><span></span></div>'
			);
	}
		
	if(opts.thumbnails==true){
		wrap.append(
			'<div class="camera_thumbs_cont" />'
			);
	}
	
	if(opts.thumbnails==true && opts.pagination!=true){
		$('.camera_thumbs_cont',wrap).wrap(
			'<div />'
			).wrap(
				'<div class="camera_thumbs" />'
			).wrap(
				'<div />'
			).wrap(
				'<div class="camera_command_wrap" />'
			);
	}
		
	if(opts.pagination==true){
		wrap.append(
			'<div class="camera_pag"></div>'
			);
	}
		
	wrap.append(
		'<div class="camera_loader"></div>'
		);
		
	$('.camera_caption',wrap).each(function(){
		$(this).wrapInner('<div />');
	});
		
                
	var pieID = 'pie_'+wrap.index(),
		elem = $('.camera_src',wrap),
		target = $('.camera_target',wrap),
		content = $('.camera_target_content',wrap),
		pieContainer = $('.camera_pie',wrap),
		barContainer = $('.camera_bar',wrap),
		prevNav = $('.camera_prev',wrap),
		nextNav = $('.camera_next',wrap),
		commands = $('.camera_commands',wrap),
		pagination = $('.camera_pag',wrap),
		thumbs = $('.camera_thumbs_cont',wrap);	

	
	var w,
		h;


	var allImg = new Array();
	$('> div', elem).each( function() { 
		allImg.push($(this).attr('data-src'));
	});
	
	var allLinks = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-link')){
			allLinks.push($(this).attr('data-link'));
		} else {
			allLinks.push('');
		}
	});
	
	var allTargets = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-target')){
			allTargets.push($(this).attr('data-target'));
		} else {
			allTargets.push('');
		}
	});
	
	var allPor = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-portrait')){
			allPor.push($(this).attr('data-portrait'));
		} else {
			allPor.push('');
		}
	});
	
	var allAlign= new Array();
	$('> div', elem).each( function() { 
		if($(this).attr('data-alignment')){
			allAlign.push($(this).attr('data-alignment'));
		} else {
			allAlign.push('');
		}
	});
	
		
	var allThumbs = new Array();
	$('> div', elem).each( function() { 
		if($(this).attr('data-thumb')){
			allThumbs.push($(this).attr('data-thumb'));
		} else {
			allThumbs.push('');
		}
	});
	
	var amountSlide = allImg.length;

	$(content).append('<div class="cameraContents" />');
	var loopMove;
	for (loopMove=0;loopMove<amountSlide;loopMove++)
	{
		$('.cameraContents',content).append('<div class="cameraContent" />');
		if(allLinks[loopMove]!=''){
			//only for Wordpress plugin
			var dataBox = $('> div ',elem).eq(loopMove).attr('data-box');
			if(typeof dataBox !== 'undefined' && dataBox !== false && dataBox != '') {
				dataBox = 'data-box="'+$('> div ',elem).eq(loopMove).attr('data-box')+'"';
			} else {
				dataBox = '';
			}
			//
			$('.camera_target_content .cameraContent:eq('+loopMove+')',wrap).append('<a class="camera_link" href="'+allLinks[loopMove]+'" '+dataBox+' target="'+allTargets[loopMove]+'"></a>');
		}

	}
	$('.camera_caption',wrap).each(function(){
		var ind = $(this).parent().index(),
			cont = wrap.find('.cameraContent').eq(ind);
		$(this).appendTo(cont);
	});
	
	target.append('<div class="cameraCont" />');
	var cameraCont = $('.cameraCont',wrap);
	

	
	var loop;
	for (loop=0;loop<amountSlide;loop++)
	{
		cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
		var div = $('> div:eq('+loop+')',elem);
		target.find('.cameraSlide_'+loop).clone(div);
	}
	
	
	function thumbnailVisible() {
		var wTh = $(thumbs).width();
		$('li', thumbs).removeClass('camera_visThumb');
		$('li', thumbs).each(function(){
			var pos = $(this).position(),
				ulW = $('ul', thumbs).outerWidth(),
				offUl = $('ul', thumbs).offset().left,
				offDiv = $('> div',thumbs).offset().left,
				ulLeft = offDiv-offUl;
				if(ulLeft>0){
					$('.camera_prevThumbs',camera_thumbs_wrap).removeClass('hideNav');
				} else {
					$('.camera_prevThumbs',camera_thumbs_wrap).addClass('hideNav');
				}
				if((ulW-ulLeft)>wTh){
					$('.camera_nextThumbs',camera_thumbs_wrap).removeClass('hideNav');
				} else {
					$('.camera_nextThumbs',camera_thumbs_wrap).addClass('hideNav');
				}
				var left = pos.left,
					right = pos.left+($(this).width());
				if(right-ulLeft<=wTh && left-ulLeft>=0){
					$(this).addClass('camera_visThumb');
				}
		});
	}
	
	$(window).bind('load resize pageshow',function(){
		thumbnailPos();
		thumbnailVisible();
	});


	cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
	
	
	var started;
	
	wrap.show();
	var w = target.width();
	var h = target.height();
	
	var setPause;
		
	$(window).bind('resize pageshow',function(){
		if(started == true) {
			resizeImage();
		}
		$('ul', thumbs).animate({'margin-top':0},0,thumbnailPos);
		if(!elem.hasClass('paused')){
			elem.addClass('paused');
			if($('.camera_stop',camera_thumbs_wrap).length){
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				if(loader!='none'){
					$('#'+pieID).hide();
				}
			} else {
				if(loader!='none'){
					$('#'+pieID).hide();
				}
			}
			clearTimeout(setPause);
			setPause = setTimeout(function(){
				elem.removeClass('paused');
				if($('.camera_play',camera_thumbs_wrap).length){
					$('.camera_play',camera_thumbs_wrap).hide();
					$('.camera_stop',camera_thumbs_wrap).show();
					if(loader!='none'){
						$('#'+pieID).fadeIn();
					}
				} else {
					if(loader!='none'){
						$('#'+pieID).fadeIn();
					}
				}
			},1500);
		}
	});
	
	function resizeImage(){	
		var res;
		function resizeImageWork(){
			w = wrap.width();
			if(opts.height.indexOf('%')!=-1) {
				var startH = Math.round(w / (100/parseFloat(opts.height)));
				if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
					h = parseFloat(opts.minHeight);
				} else {
					h = startH;
				}
				wrap.css({height:h});
			} else if (opts.height=='auto') {
				h = wrap.height();
			} else {
				h = parseFloat(opts.height);
				wrap.css({height:h});
			}
			$('.camerarelative',target).css({'width':w,'height':h});
			$('.imgLoaded',target).each(function(){
				var t = $(this),
					wT = t.attr('width'),
					hT = t.attr('height'),
					imgLoadIn = t.index(),
					mTop,
					mLeft,
					alignment = t.attr('data-alignment'),
					portrait =  t.attr('data-portrait');
					
					if(typeof alignment === 'undefined' || alignment === false || alignment === ''){
						alignment = opts.alignment;
					}
					
					if(typeof portrait === 'undefined' || portrait === false || portrait === ''){
						portrait = opts.portrait;
					}
										
					if(portrait==false||portrait=='false'){
						if((wT/hT)<(w/h)) {
							var r = w / wT;
							var d = (Math.abs(h - (hT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mTop = 0;
									break;
								case 'topCenter':
									mTop = 0;
									break;
								case 'topRight':
									mTop = 0;
									break;
								case 'centerLeft':
									mTop = '-'+d+'px';
									break;
								case 'center':
									mTop = '-'+d+'px';
									break;
								case 'centerRight':
									mTop = '-'+d+'px';
									break;
								case 'bottomLeft':
									mTop = '-'+d*2+'px';
									break;
								case 'bottomCenter':
									mTop = '-'+d*2+'px';
									break;
								case 'bottomRight':
									mTop = '-'+d*2+'px';
									break;
							}
							t.css({
								'height' : hT*r,
								'margin-left' : 0,
								'margin-right' : 0,
								'margin-top' : mTop,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : w
							});
						}
						else {
							var r = h / hT;
							var d = (Math.abs(w - (wT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mLeft = 0;
									break;
								case 'topCenter':
									mLeft = '-'+d+'px';
									break;
								case 'topRight':
									mLeft = '-'+d*2+'px';
									break;
								case 'centerLeft':
									mLeft = 0;
									break;
								case 'center':
									mLeft = '-'+d+'px';
									break;
								case 'centerRight':
									mLeft = '-'+d*2+'px';
									break;
								case 'bottomLeft':
									mLeft = 0;
									break;
								case 'bottomCenter':
									mLeft = '-'+d+'px';
									break;
								case 'bottomRight':
									mLeft = '-'+d*2+'px';
									break;
							}
							t.css({
								'height' : h,
								'margin-left' : mLeft,
								'margin-right' : mLeft,
								'margin-top' : 0,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : wT*r
							});
						}
					} else {
						if((wT/hT)<(w/h)) {
							var r = h / hT;
							var d = (Math.abs(w - (wT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mLeft = 0;
									break;
								case 'topCenter':
									mLeft = d+'px';
									break;
								case 'topRight':
									mLeft = d*2+'px';
									break;
								case 'centerLeft':
									mLeft = 0;
									break;
								case 'center':
									mLeft = d+'px';
									break;
								case 'centerRight':
									mLeft = d*2+'px';
									break;
								case 'bottomLeft':
									mLeft = 0;
									break;
								case 'bottomCenter':
									mLeft = d+'px';
									break;
								case 'bottomRight':
									mLeft = d*2+'px';
									break;
							}
							t.css({
								'height' : h,
								'margin-left' : mLeft,
								'margin-right' : mLeft,
								'margin-top' : 0,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : wT*r
							});
						}
						else {
							var r = w / wT;
							var d = (Math.abs(h - (hT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mTop = 0;
									break;
								case 'topCenter':
									mTop = 0;
									break;
								case 'topRight':
									mTop = 0;
									break;
								case 'centerLeft':
									mTop = d+'px';
									break;
								case 'center':
									mTop = d+'px';
									break;
								case 'centerRight':
									mTop = d+'px';
									break;
								case 'bottomLeft':
									mTop = d*2+'px';
									break;
								case 'bottomCenter':
									mTop = d*2+'px';
									break;
								case 'bottomRight':
									mTop = d*2+'px';
									break;
							}
							t.css({
								'height' : hT*r,
								'margin-left' : 0,
								'margin-right' : 0,
								'margin-top' : mTop,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : w
							});
						}
					}
			});
		}
		if (started == true) {
			clearTimeout(res);
			res = setTimeout(resizeImageWork,200);
		} else {
			resizeImageWork();
		}
		
		started = true;
	}
	
	
	var u,
		setT;

	var clickEv,
		autoAdv,
		navHover,
		commands,
		pagination;

	var videoHover,
		videoPresent;
		
	if(isMobile() && opts.mobileAutoAdvance!=''){
		autoAdv = opts.mobileAutoAdvance;
	} else {
		autoAdv = opts.autoAdvance;
	}
	
	if(autoAdv==false){
		elem.addClass('paused');
	}

	if(isMobile() && opts.mobileNavHover!=''){
		navHover = opts.mobileNavHover;
	} else {
		navHover = opts.navigationHover;
	}

	if(elem.length!=0){
			
		var selector = $('.cameraSlide',target);
		selector.wrapInner('<div class="camerarelative" />');
		
		var navSlide;
			
		var barDirection = opts.barDirection;
	
		var camera_thumbs_wrap = wrap;


		$('iframe',fakeHover).each(function(){
			var t = $(this);
			var src = t.attr('src');
			t.attr('data-src',src);
			var divInd = t.parent().index('.camera_src > div');
			$('.camera_target_content .cameraContent:eq('+divInd+')',wrap).append(t);
		});
		function imgFake() {
				$('iframe',fakeHover).each(function(){
					$('.camera_caption',fakeHover).show();
					var t = $(this);
					var cloneSrc = t.attr('data-src');
					t.attr('src',cloneSrc);
					var imgFakeUrl = opts.imagePath+'blank.gif';
					var imgFake = new Image();
					imgFake.src = imgFakeUrl;
					if(opts.height.indexOf('%')!=-1) {
						var startH = Math.round(w / (100/parseFloat(opts.height)));
						if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
							h = parseFloat(opts.minHeight);
						} else {
							h = startH;
						}
					} else if (opts.height=='auto') {
						h = wrap.height();
					} else {
						h = parseFloat(opts.height);
					}
					t.after($(imgFake).attr({'class':'imgFake','width':w,'height':h}));
					var clone = t.clone();
					t.remove();
					$(imgFake).bind('click',function(){
						if($(this).css('position')=='absolute') {
							$(this).remove();
							if(cloneSrc.indexOf('vimeo') != -1 || cloneSrc.indexOf('youtube') != -1) {
								if(cloneSrc.indexOf('?') != -1){
									autoplay = '&autoplay=1';
								} else {
									autoplay = '?autoplay=1';
								}
							} else if(cloneSrc.indexOf('dailymotion') != -1) {
								if(cloneSrc.indexOf('?') != -1){
									autoplay = '&autoPlay=1';
								} else {
									autoplay = '?autoPlay=1';
								}
							}
							clone.attr('src',cloneSrc+autoplay);
							videoPresent = true;
						} else {
							$(this).css({position:'absolute',top:0,left:0,zIndex:10}).after(clone);
							clone.css({position:'absolute',top:0,left:0,zIndex:9});
						}
					});
				});
		}
		
		imgFake();
		
		
		if(opts.hover==true){
			if(!isMobile()){
				fakeHover.hover(function(){
					elem.addClass('hovered');
				},function(){
					elem.removeClass('hovered');
				});
			}
		}

		if(navHover==true){
			$(prevNav,wrap).animate({opacity:0},0);
			$(nextNav,wrap).animate({opacity:0},0);
			$(commands,wrap).animate({opacity:0},0);
			if(isMobile()){
				fakeHover.on('vmouseover',function(){
					$(prevNav,wrap).animate({opacity:1},200);
					$(nextNav,wrap).animate({opacity:1},200);
					$(commands,wrap).animate({opacity:1},200);
				});
				fakeHover.on('vmouseout',function(){
					$(prevNav,wrap).delay(500).animate({opacity:0},200);
					$(nextNav,wrap).delay(500).animate({opacity:0},200);
					$(commands,wrap).delay(500).animate({opacity:0},200);
				});
			} else {
				fakeHover.hover(function(){
					$(prevNav,wrap).animate({opacity:1},200);
					$(nextNav,wrap).animate({opacity:1},200);
					$(commands,wrap).animate({opacity:1},200);
				},function(){
					$(prevNav,wrap).animate({opacity:0},200);
					$(nextNav,wrap).animate({opacity:0},200);
					$(commands,wrap).animate({opacity:0},200);
				});
			}
		}
		
	
		$('.camera_stop',camera_thumbs_wrap).on('click',function(){
			autoAdv = false;
			elem.addClass('paused');
			if($('.camera_stop',camera_thumbs_wrap).length){
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				if(loader!='none'){
					$('#'+pieID).hide();
				}
			} else {
				if(loader!='none'){
					$('#'+pieID).hide();
				}
			}
		});
	
		$('.camera_play',camera_thumbs_wrap).on('click',function(){
			autoAdv = true;
			elem.removeClass('paused');
			if($('.camera_play',camera_thumbs_wrap).length){
				$('.camera_play',camera_thumbs_wrap).hide();
				$('.camera_stop',camera_thumbs_wrap).show();
				if(loader!='none'){
					$('#'+pieID).show();
				}
			} else {
				if(loader!='none'){
					$('#'+pieID).show();
				}
			}
		});
	
		if(opts.pauseOnClick==true){
			$('.camera_target_content',fakeHover).mouseup(function(){
				autoAdv = false;
				elem.addClass('paused');
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				$('#'+pieID).hide();
			});
		}
		$('.cameraContent, .imgFake',fakeHover).hover(function(){
			videoHover = true;
		},function(){
			videoHover = false;
		});
		
		$('.cameraContent, .imgFake',fakeHover).bind('click',function(){
			if(videoPresent == true && videoHover == true) {
				autoAdv = false;
				$('.camera_caption',fakeHover).hide();
				elem.addClass('paused');
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				$('#'+pieID).hide();
			}
		});
		
		
	}
	
	
		function shuffle(arr) {
			for(
			  var j, x, i = arr.length; i;
			  j = parseInt(Math.random() * i),
			  x = arr[--i], arr[i] = arr[j], arr[j] = x
			);
			return arr;
		}
	
		function isInteger(s) {
			return Math.ceil(s) == Math.floor(s);
		}	
	
		if (loader != 'pie') {
			barContainer.append('<span class="camera_bar_cont" />');
			$('.camera_bar_cont',barContainer)
				.animate({opacity:opts.loaderOpacity},0)
				.css({'position':'absolute', 'left':0, 'right':0, 'top':0, 'bottom':0, 'background-color':opts.loaderBgColor})
				.append('<span id="'+pieID+'" />');
			$('#'+pieID).animate({opacity:0},0);
			var canvas = $('#'+pieID);
			canvas.css({'position':'absolute', 'background-color':opts.loaderColor});
			switch(opts.barPosition){
				case 'left':
					barContainer.css({right:'auto',width:opts.loaderStroke});
					break;
				case 'right':
					barContainer.css({left:'auto',width:opts.loaderStroke});
					break;
				case 'top':
					barContainer.css({bottom:'auto',height:opts.loaderStroke});
					break;
				case 'bottom':
					barContainer.css({top:'auto',height:opts.loaderStroke});
					break;
			}
			switch(barDirection){
				case 'leftToRight':
					canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
					break;
				case 'rightToLeft':
					canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
					break;
				case 'topToBottom':
					canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
					break;
				case 'bottomToTop':
					canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
					break;
			}
		} else {
			pieContainer.append('<canvas id="'+pieID+'"></canvas>');
			var G_vmlCanvasManager;
			var canvas = document.getElementById(pieID);
			canvas.setAttribute("width", opts.pieDiameter);
			canvas.setAttribute("height", opts.pieDiameter);
			var piePosition;
			switch(opts.piePosition){
				case 'leftTop' :
					piePosition = 'left:0; top:0;';
					break;
				case 'rightTop' :
					piePosition = 'right:0; top:0;';
					break;
				case 'leftBottom' :
					piePosition = 'left:0; bottom:0;';
					break;
				case 'rightBottom' :
					piePosition = 'right:0; bottom:0;';
					break;
			}
			canvas.setAttribute("style", "position:absolute; z-index:1002; "+piePosition);
			var rad;
			var radNew;
	
			if (canvas && canvas.getContext) {
				var ctx = canvas.getContext("2d");
				ctx.rotate(Math.PI*(3/2));
				ctx.translate(-opts.pieDiameter,0);
			}
		
		}
		if(loader=='none' || autoAdv==false) {
			$('#'+pieID).hide();
			$('.camera_canvas_wrap',camera_thumbs_wrap).hide();
		}
		
		if($(pagination).length) {
			$(pagination).append('<ul class="camera_pag_ul" />');
			var li;
			for (li = 0; li < amountSlide; li++){
				$('.camera_pag_ul',wrap).append('<li class="pag_nav_'+li+'" style="position:relative; z-index:1002"><span><span>'+li+'</span></span></li>');
			}
			$('.camera_pag_ul li',wrap).hover(function(){
				$(this).addClass('camera_hover');
				if($('.camera_thumb',this).length){
					var wTh = $('.camera_thumb',this).outerWidth(),
					hTh = $('.camera_thumb',this).outerHeight(),
					wTt = $(this).outerWidth();
					$('.camera_thumb',this).show().css({'top':'-'+hTh+'px','left':'-'+(wTh-wTt)/2+'px'}).animate({'opacity':1,'margin-top':'-3px'},200);
					$('.thumb_arrow',this).show().animate({'opacity':1,'margin-top':'-3px'},200);
				}
			},function(){
				$(this).removeClass('camera_hover');
				$('.camera_thumb',this).animate({'margin-top':'-20px','opacity':0},200,function(){
					$(this).css({marginTop:'5px'}).hide();
				});
				$('.thumb_arrow',this).animate({'margin-top':'-20px','opacity':0},200,function(){
					$(this).css({marginTop:'5px'}).hide();
				});
			});
		}
			
	
	
		if($(thumbs).length) {
			var thumbUrl;
			if(!$(pagination).length) {
				$(thumbs).append('<div />');
				$(thumbs).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');
				$('> div',thumbs).append('<ul />');
				$.each(allThumbs, function(i, val) {
					if($('> div', elem).eq(i).attr('data-thumb')!='') {
						var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
							newImg = new Image();
						newImg.src = thumbUrl;
						$('ul',thumbs).append('<li class="pix_thumb pix_thumb_'+i+'" />');
						$('li.pix_thumb_'+i,thumbs).append($(newImg).attr('class','camera_thumb'));
					}
				});
			} else {
				$.each(allThumbs, function(i, val) {
					if($('> div', elem).eq(i).attr('data-thumb')!='') {
						var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
							newImg = new Image();
						newImg.src = thumbUrl;
						$('li.pag_nav_'+i,pagination).append($(newImg).attr('class','camera_thumb').css({'position':'absolute'}).animate({opacity:0},0));
						$('li.pag_nav_'+i+' > img',pagination).after('<div class="thumb_arrow" />');
						$('li.pag_nav_'+i+' > .thumb_arrow',pagination).animate({opacity:0},0);
					}
				});
				wrap.css({marginBottom:$(pagination).outerHeight()});
			}
		} else if(!$(thumbs).length && $(pagination).length) {
			wrap.css({marginBottom:$(pagination).outerHeight()});
		}

	
		var firstPos = true;

		function thumbnailPos() {
			if($(thumbs).length && !$(pagination).length) {
				var wTh = $(thumbs).outerWidth(),
					owTh = $('ul > li',thumbs).outerWidth(),
					pos = $('li.cameracurrent', thumbs).length ? $('li.cameracurrent', thumbs).position() : '',
					ulW = ($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth()),
					offUl = $('ul', thumbs).offset().left,
					offDiv = $('> div', thumbs).offset().left,
					ulLeft;

					if(offUl<0){
						ulLeft = '-'+ (offDiv-offUl);
					} else {
						ulLeft = offDiv-offUl;
					}
					
					
					
				if(firstPos == true) {
					$('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
					if($(thumbs).length && !$(pagination).lenght) {
						wrap.css({marginBottom:$(thumbs).outerHeight()});
					}
					thumbnailVisible();
					/*I repeat this two lines because of a problem with iPhones*/
					$('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
					if($(thumbs).length && !$(pagination).lenght) {
						wrap.css({marginBottom:$(thumbs).outerHeight()});
					}
					/*...*/
				}
				firstPos = false;
				
					var left = $('li.cameracurrent', thumbs).length ? pos.left : '',
						right = $('li.cameracurrent', thumbs).length ? pos.left+($('li.cameracurrent', thumbs).outerWidth()) : '';
					if(left<$('li.cameracurrent', thumbs).outerWidth()) {
						left = 0;
					}
					if(right-ulLeft>wTh){
						if((left+wTh)<ulW){
							$('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
						} else {
							$('ul', thumbs).animate({'margin-left':'-'+($('ul', thumbs).outerWidth()-wTh)+'px'},500,thumbnailVisible);
						}
					} else if(left-ulLeft<0) {
						$('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
					} else {
						$('ul', thumbs).css({'margin-left':'auto', 'margin-right':'auto'});
						setTimeout(thumbnailVisible,100);
					}
					
			}
		}

		if($(commands).length) {
			$(commands).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>');
			if(autoAdv==true){
				$('.camera_play',camera_thumbs_wrap).hide();
				$('.camera_stop',camera_thumbs_wrap).show();
			} else {
				$('.camera_stop',camera_thumbs_wrap).hide();
				$('.camera_play',camera_thumbs_wrap).show();
			}
			
		}
			
			
		function canvasLoader() {
			rad = 0;
			var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
				barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height();

			if (loader != 'pie') {
				switch(barDirection){
					case 'leftToRight':
						$('#'+pieID).css({'right':barWidth});
						break;
					case 'rightToLeft':
						$('#'+pieID).css({'left':barWidth});
						break;
					case 'topToBottom':
						$('#'+pieID).css({'bottom':barHeight});
						break;
					case 'bottomToTop':
						$('#'+pieID).css({'top':barHeight});
						break;
				}
			} else {
				ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter); 
			}
		}
		
		
		canvasLoader();
		
		
		$('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
			$(this).css('visibility','hidden');
		});
		
		opts.onStartLoading.call(this);
		
		nextSlide();
		
	
	/*************************** FUNCTION nextSlide() ***************************/
	
	function nextSlide(navSlide){ 
		elem.addClass('camerasliding');
		
		videoPresent = false;
		var vis = parseFloat($('div.cameraSlide.cameracurrent',target).index());

		if(navSlide>0){ 
			var slideI = navSlide-1;
		} else if (vis == amountSlide-1) { 
			var slideI = 0;
		} else {
			var slideI = vis+1;
		}
		
				
		var slide = $('.cameraSlide:eq('+slideI+')',target);
		var slideNext = $('.cameraSlide:eq('+(slideI+1)+')',target).addClass('cameranext');
		if( vis != slideI+1 ) {
			slideNext.hide();
		}
		$('.cameraContent',fakeHover).fadeOut(600);
		$('.camera_caption',fakeHover).show();
		
		$('.camerarelative',slide).append($('> div ',elem).eq(slideI).find('> div.camera_effected'));

		$('.camera_target_content .cameraContent:eq('+slideI+')',wrap).append($('> div ',elem).eq(slideI).find('> div'));
		
		if(!$('.imgLoaded',slide).length){
			var imgUrl = allImg[slideI];
			var imgLoaded = new Image();
			imgLoaded.src = imgUrl +"?"+ new Date().getTime();
			slide.css('visibility','hidden');
			slide.prepend($(imgLoaded).attr('class','imgLoaded').css('visibility','hidden'));
			var wT, hT;
			if (!$(imgLoaded).get(0).complete || wT == '0' || hT == '0' || typeof wT === 'undefined' || wT === false || typeof hT === 'undefined' || hT === false) {
				$('.camera_loader',wrap).delay(500).fadeIn(400);
				imgLoaded.onload = function() {
					wT = imgLoaded.naturalWidth;
					hT = imgLoaded.naturalHeight;
					$(imgLoaded).attr('data-alignment',allAlign[slideI]).attr('data-portrait',allPor[slideI]);
					$(imgLoaded).attr('width',wT);
					$(imgLoaded).attr('height',hT);
					target.find('.cameraSlide_'+slideI).hide().css('visibility','visible');
					resizeImage();
					nextSlide(slideI+1);
				};
			}
		} else {
			if( allImg.length > (slideI+1) && !$('.imgLoaded',slideNext).length ){
				var imgUrl2 = allImg[(slideI+1)];
				var imgLoaded2 = new Image();
				imgLoaded2.src = imgUrl2 +"?"+ new Date().getTime();
				slideNext.prepend($(imgLoaded2).attr('class','imgLoaded').css('visibility','hidden'));
				imgLoaded2.onload = function() {
					wT = imgLoaded2.naturalWidth;
					hT = imgLoaded2.naturalHeight;
					$(imgLoaded2).attr('data-alignment',allAlign[slideI+1]).attr('data-portrait',allPor[slideI+1]);
					$(imgLoaded2).attr('width',wT);
					$(imgLoaded2).attr('height',hT);
					resizeImage();
				};
			}
			opts.onLoaded.call(this);
			if($('.camera_loader',wrap).is(':visible')){
				$('.camera_loader',wrap).fadeOut(400);
			} else {
				$('.camera_loader',wrap).css({'visibility':'hidden'});
				$('.camera_loader',wrap).fadeOut(400,function(){
					$('.camera_loader',wrap).css({'visibility':'visible'});
				});
			}
			var rows = opts.rows,
				cols = opts.cols,
				couples = 1,
				difference = 0,
				dataSlideOn,
				time,
				transPeriod,
				fx,
				easing,
				randomFx = new Array('simpleFade','curtainTopLeft','curtainTopRight','curtainBottomLeft','curtainBottomRight','curtainSliceLeft','curtainSliceRight','blindCurtainTopLeft','blindCurtainTopRight','blindCurtainBottomLeft','blindCurtainBottomRight','blindCurtainSliceBottom','blindCurtainSliceTop','stampede','mosaic','mosaicReverse','mosaicRandom','mosaicSpiral','mosaicSpiralReverse','topLeftBottomRight','bottomRightTopLeft','bottomLeftTopRight','topRightBottomLeft','scrollLeft','scrollRight','scrollTop','scrollBottom','scrollHorz');
				marginLeft = 0,
				marginTop = 0,
				opacityOnGrid = 0;
				
				if(opts.opacityOnGrid==true){
					opacityOnGrid = 0;
				} else {
					opacityOnGrid = 1;
				}
 
			
			
			var dataFx = $(' > div',elem).eq(slideI).attr('data-fx');
				
			if(isMobile()&&opts.mobileFx!=''&&opts.mobileFx!='default'){
				fx = opts.mobileFx;
			} else {
				if(typeof dataFx !== 'undefined' && dataFx!== false && dataFx!== 'default'){
					fx = dataFx;
				} else {
					fx = opts.fx;
				}
			}
			
			if(fx=='random') {
				fx = shuffle(randomFx);
				fx = fx[0];
			} else {
				fx = fx;
				if(fx.indexOf(',')>0){
					fx = fx.replace(/ /g,'');
					fx = fx.split(',');
					fx = shuffle(fx);
					fx = fx[0];
				}
			}
			
			dataEasing = $(' > div',elem).eq(slideI).attr('data-easing');
			mobileEasing = $(' > div',elem).eq(slideI).attr('data-mobileEasing');

			if(isMobile()&&opts.mobileEasing!=''&&opts.mobileEasing!='default'){
				if(typeof mobileEasing !== 'undefined' && mobileEasing!== false && mobileEasing!== 'default') {
					easing = mobileEasing;
				} else {
					easing = opts.mobileEasing;
				}
			} else {
				if(typeof dataEasing !== 'undefined' && dataEasing!== false && dataEasing!== 'default') {
					easing = dataEasing;
				} else {
					easing = opts.easing;
				}
			}
	
			dataSlideOn = $(' > div',elem).eq(slideI).attr('data-slideOn');
			if(typeof dataSlideOn !== 'undefined' && dataSlideOn!== false){
				slideOn = dataSlideOn;
			} else {
				if(opts.slideOn=='random'){
					var slideOn = new Array('next','prev');
					slideOn = shuffle(slideOn);
					slideOn = slideOn[0];
				} else {
					slideOn = opts.slideOn;
				}
			}
				
			var dataTime = $(' > div',elem).eq(slideI).attr('data-time');
			if(typeof dataTime !== 'undefined' && dataTime!== false && dataTime!== ''){
				time = parseFloat(dataTime);
			} else {
				time = opts.time;
			}
				
			var dataTransPeriod = $(' > div',elem).eq(slideI).attr('data-transPeriod');
			if(typeof dataTransPeriod !== 'undefined' && dataTransPeriod!== false && dataTransPeriod!== ''){
				transPeriod = parseFloat(dataTransPeriod);
			} else {
				transPeriod = opts.transPeriod;
			}
				
			if(!$(elem).hasClass('camerastarted')){
				fx = 'simpleFade';
				slideOn = 'next';
				easing = '';
				transPeriod = 400;
				$(elem).addClass('camerastarted')
			}
	
			switch(fx){
				case 'simpleFade':
					cols = 1;
					rows = 1;
						break;
				case 'curtainTopLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainTopRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainBottomLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainBottomRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainSliceLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainSliceRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'blindCurtainTopLeft':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainTopRight':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainBottomLeft':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainBottomRight':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainSliceTop':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainSliceBottom':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'stampede':
					difference = '-'+transPeriod;
						break;
				case 'mosaic':
					difference = opts.gridDifference;
						break;
				case 'mosaicReverse':
					difference = opts.gridDifference;
						break;
				case 'mosaicRandom':
						break;
				case 'mosaicSpiral':
					difference = opts.gridDifference;
					couples = 1.7;
						break;
				case 'mosaicSpiralReverse':
					difference = opts.gridDifference;
					couples = 1.7;
						break;
				case 'topLeftBottomRight':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'bottomRightTopLeft':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'bottomLeftTopRight':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'topRightBottomLeft':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'scrollLeft':
					cols = 1;
					rows = 1;
						break;
				case 'scrollRight':
					cols = 1;
					rows = 1;
						break;
				case 'scrollTop':
					cols = 1;
					rows = 1;
						break;
				case 'scrollBottom':
					cols = 1;
					rows = 1;
						break;
				case 'scrollHorz':
					cols = 1;
					rows = 1;
						break;
			}
			
			var cycle = 0;
			var blocks = rows*cols;
			var leftScrap = w-(Math.floor(w/cols)*cols);
			var topScrap = h-(Math.floor(h/rows)*rows);
			var addLeft;
			var addTop;
			var tAppW = 0;	
			var tAppH = 0;
			var arr = new Array();
			var delay = new Array();
			var order = new Array();
			while(cycle < blocks){
				arr.push(cycle);
				delay.push(cycle);
				cameraCont.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
				var tApp = $('.cameraappended:eq('+cycle+')',target);
				if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
					selector.eq(slideI).clone().show().appendTo(tApp);
				} else {
					if(slideOn=='next'){
						selector.eq(slideI).clone().show().appendTo(tApp);
					} else {
						selector.eq(vis).clone().show().appendTo(tApp);
					}
				}

				if(cycle%cols<leftScrap){
					addLeft = 1;
				} else {
					addLeft = 0;
				}
				if(cycle%cols==0){
					tAppW = 0;
				}
				if(Math.floor(cycle/cols)<topScrap){
					addTop = 1;
				} else {
					addTop = 0;
				}
				tApp.css({
					'height': Math.floor((h/rows)+addTop+1),
					'left': tAppW,
					'top': tAppH,
					'width': Math.floor((w/cols)+addLeft+1)
				});
				$('> .cameraSlide', tApp).css({
					'height': h,
					'margin-left': '-'+tAppW+'px',
					'margin-top': '-'+tAppH+'px',
					'width': w
				});
				tAppW = tAppW+tApp.width()-1;
				if(cycle%cols==cols-1){
					tAppH = tAppH + tApp.height() - 1;
				}
				cycle++;
			}
			

			
			switch(fx){
				case 'curtainTopLeft':
						break;
				case 'curtainBottomLeft':
						break;
				case 'curtainSliceLeft':
						break;
				case 'curtainTopRight':
					arr = arr.reverse();
						break;
				case 'curtainBottomRight':
					arr = arr.reverse();
						break;
				case 'curtainSliceRight':
					arr = arr.reverse();
						break;
				case 'blindCurtainTopLeft':
						break;
				case 'blindCurtainBottomLeft':
					arr = arr.reverse();
						break;
				case 'blindCurtainSliceTop':
						break;
				case 'blindCurtainTopRight':
						break;
				case 'blindCurtainBottomRight':
					arr = arr.reverse();
						break;
				case 'blindCurtainSliceBottom':
					arr = arr.reverse();
						break;
				case 'stampede':
					arr = shuffle(arr);
						break;
				case 'mosaic':
						break;
				case 'mosaicReverse':
					arr = arr.reverse();
						break;
				case 'mosaicRandom':
					arr = shuffle(arr);
						break;
				case 'mosaicSpiral':
					var rows2 = rows/2, x, y, z, n=0;
						for (z = 0; z < rows2; z++){
							y = z;
							for (x = z; x < cols - z - 1; x++) {
								order[n++] = y * cols + x;
							}
							x = cols - z - 1;
							for (y = z; y < rows - z - 1; y++) {
								order[n++] = y * cols + x;
							}
							y = rows - z - 1;
							for (x = cols - z - 1; x > z; x--) {
								order[n++] = y * cols + x;
							}
							x = z;
							for (y = rows - z - 1; y > z; y--) {
								order[n++] = y * cols + x;
							}
						}
						
						arr = order;

						break;
				case 'mosaicSpiralReverse':
					var rows2 = rows/2, x, y, z, n=blocks-1;
						for (z = 0; z < rows2; z++){
							y = z;
							for (x = z; x < cols - z - 1; x++) {
								order[n--] = y * cols + x;
							}
							x = cols - z - 1;
							for (y = z; y < rows - z - 1; y++) {
								order[n--] = y * cols + x;
							}
							y = rows - z - 1;
							for (x = cols - z - 1; x > z; x--) {
								order[n--] = y * cols + x;
							}
							x = z;
							for (y = rows - z - 1; y > z; y--) {
								order[n--] = y * cols + x;
							}
						}

						arr = order;
						
						break;
				case 'topLeftBottomRight':
					for (var y = 0; y < rows; y++)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order;
						break;
				case 'bottomRightTopLeft':
					for (var y = 0; y < rows; y++)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order.reverse();
						break;
				case 'bottomLeftTopRight':
					for (var y = rows; y > 0; y--)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order;
						break;
				case 'topRightBottomLeft':
					for (var y = 0; y < rows; y++)
					for (var x = cols; x > 0; x--) {
						order.push(x + y);
					}
						delay = order;
						break;
			}
			
			
						
			$.each(arr, function(index, value) {

				if(value%cols<leftScrap){
					addLeft = 1;
				} else {
					addLeft = 0;
				}
				if(value%cols==0){
					tAppW = 0;
				}
				if(Math.floor(value/cols)<topScrap){
					addTop = 1;
				} else {
					addTop = 0;
				}
							
				switch(fx){
					case 'simpleFade':
						height = h;
						width = w;
						opacityOnGrid = 0;
							break;
					case 'curtainTopLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainTopRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainBottomLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainBottomRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainSliceLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1);
						if(value%2==0){
							marginTop = Math.floor((h/rows)+addTop+1)+'px';					
						} else {
							marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';					
						}
							break;
					case 'curtainSliceRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1);
						if(value%2==0){
							marginTop = Math.floor((h/rows)+addTop+1)+'px';					
						} else {
							marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';					
						}
							break;
					case 'blindCurtainTopLeft':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainTopRight':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainBottomLeft':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainBottomRight':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainSliceBottom':
						height = Math.floor((h/rows)+addTop+1),
						width = 0;
						if(value%2==0){
							marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
						} else {
							marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
						}
							break;
					case 'blindCurtainSliceTop':
						height = Math.floor((h/rows)+addTop+1),
						width = 0;
						if(value%2==0){
							marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
						} else {
							marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
						}
							break;
					case 'stampede':
						height = 0;
						width = 0;					
						marginLeft = (w*0.2)*(((index)%cols)-(cols-(Math.floor(cols/2))))+'px';					
						marginTop = (h*0.2)*((Math.floor(index/cols)+1)-(rows-(Math.floor(rows/2))))+'px';	
							break;
					case 'mosaic':
						height = 0;
						width = 0;					
							break;
					case 'mosaicReverse':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'mosaicRandom':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'mosaicSpiral':
						height = 0;
						width = 0;
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'mosaicSpiralReverse':
						height = 0;
						width = 0;
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'topLeftBottomRight':
						height = 0;
						width = 0;					
							break;
					case 'bottomRightTopLeft':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'bottomLeftTopRight':
						height = 0;
						width = 0;					
						marginLeft = 0;					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'topRightBottomLeft':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = 0;					
							break;
					case 'scrollRight':
						height = h;
						width = w;
						marginLeft = -w;					
							break;
					case 'scrollLeft':
						height = h;
						width = w;
						marginLeft = w;					
							break;
					case 'scrollTop':
						height = h;
						width = w;
						marginTop = h;					
							break;
					case 'scrollBottom':
						height = h;
						width = w;
						marginTop = -h;					
							break;
					case 'scrollHorz':
						height = h;
						width = w;
						if(vis==0 && slideI==amountSlide-1) {
							marginLeft = -w;	
						} else if(vis<slideI  || (vis==amountSlide-1 && slideI==0)) {
							marginLeft = w;	
						} else {
							marginLeft = -w;	
						}
							break;
					}
					
			
				var tApp = $('.cameraappended:eq('+value+')',target);
								
				if(typeof u !== 'undefined'){
					clearInterval(u);
					clearTimeout(setT);
					setT = setTimeout(canvasLoader,transPeriod+difference);
				}
				
				
				if($(pagination).length){
					$('.camera_pag li',wrap).removeClass('cameracurrent');
					$('.camera_pag li',wrap).eq(slideI).addClass('cameracurrent');
				}
						
				if($(thumbs).length){
					$('li', thumbs).removeClass('cameracurrent');
					$('li', thumbs).eq(slideI).addClass('cameracurrent');
					$('li', thumbs).not('.cameracurrent').find('img').animate({opacity:.5},0);
					$('li.cameracurrent img', thumbs).animate({opacity:1},0);
					$('li', thumbs).hover(function(){
						$('img',this).stop(true,false).animate({opacity:1},150);
					},function(){
						if(!$(this).hasClass('cameracurrent')){
							$('img',this).stop(true,false).animate({opacity:.5},150);
						}
					});
				}
								
						
				var easedTime = parseFloat(transPeriod)+parseFloat(difference);
				
				function cameraeased() {

					$(this).addClass('cameraeased');
					if($('.cameraeased',target).length>=0){
						$(thumbs).css({visibility:'visible'});
					}
					if($('.cameraeased',target).length==blocks){
						
						thumbnailPos();
						
						$('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
							$(this).css('visibility','hidden');
						});
		
						selector.eq(slideI).show().css('z-index','999').removeClass('cameranext').addClass('cameracurrent');
						selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
						if (vis >= 0) {
							$('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
						}
						
						opts.onEndTransition.call(this);
						
						if($('> div', elem).eq(slideI).attr('data-video')!='hide' && $('.cameraContent.cameracurrent .imgFake',fakeHover).length ){
							$('.cameraContent.cameracurrent .imgFake',fakeHover).click();
						}

						
						var lMoveIn = selector.eq(slideI).find('.fadeIn').length;
						var lMoveInContent = $('.cameraContent',fakeHover).eq(slideI).find('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom').length;
						
						if (lMoveIn!=0){
							$('.cameraSlide.cameracurrent .fadeIn',fakeHover).each(function(){
								if($(this).attr('data-easing')!=''){
									var easeMove = $(this).attr('data-easing');
								} else {
									var easeMove = easing;
								}
								var t = $(this);
								if(typeof t.attr('data-outerWidth') === 'undefined' || t.attr('data-outerWidth') === false || t.attr('data-outerWidth') === '') {
									var wMoveIn = t.outerWidth();
									t.attr('data-outerWidth',wMoveIn);
								} else {
									var wMoveIn = t.attr('data-outerWidth');
								}
								if(typeof t.attr('data-outerHeight') === 'undefined' || t.attr('data-outerHeight') === false || t.attr('data-outerHeight') === '') {
									var hMoveIn = t.outerHeight();
									t.attr('data-outerHeight',hMoveIn);
								} else {
									var hMoveIn = t.attr('data-outerHeight');
								}
								//t.css('width',wMoveIn);
								var pos = t.position();
								var left = pos.left;
								var top = pos.top;
								var tClass = t.attr('class');
								var ind = t.index();
								var hRel = t.parents('.camerarelative').outerHeight();
								var wRel = t.parents('.camerarelative').outerWidth();
								if(tClass.indexOf("fadeIn") != -1) {
									t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveIn)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveIn)*0.15,easeMove);
								} else {
									t.css('visibility','visible');
								}
							});
						}

						$('.cameraContent.cameracurrent',fakeHover).show();
						if (lMoveInContent!=0){
							
							$('.cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom',fakeHover).each(function(){
								if($(this).attr('data-easing')!=''){
									var easeMove = $(this).attr('data-easing');
								} else {
									var easeMove = easing;
								}
								var t = $(this);
								var pos = t.position();
								var left = pos.left;
								var top = pos.top;
								var tClass = t.attr('class');
								var ind = t.index();
								var thisH = t.outerHeight();
								if(tClass.indexOf("moveFromLeft") != -1) {
									t.css({'left':'-'+(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("moveFromRight") != -1) {
									t.css({'left':w+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("moveFromTop") != -1) {
									t.css({'top':'-'+h+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove,function(){
										t.css({top:'auto',bottom:0});
									});
								} else if(tClass.indexOf("moveFromBottom") != -1) {
									t.css({'top':h+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromLeft") != -1) {
									t.animate({opacity:0},0).css({'left':'-'+(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromRight") != -1) {
									t.animate({opacity:0},0).css({'left':(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromTop") != -1) {
									t.animate({opacity:0},0).css({'top':'-'+(h)+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top,opacity:1},(time/lMoveInContent)*0.15,easeMove,function(){
										t.css({top:'auto',bottom:0});
									});
								} else if(tClass.indexOf("fadeFromBottom") != -1) {
									t.animate({opacity:0},0).css({'bottom':'-'+thisH+'px'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'bottom':'0',opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeIn") != -1) {
									t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else {
									t.css('visibility','visible');
								}
							});
						}

						
						$('.cameraappended',target).remove();
						elem.removeClass('camerasliding');	
							selector.eq(vis).hide();
							var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
								barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height(),
								radSum;
							if (loader != 'pie') {
								radSum = 0.05;
							} else {
								radSum = 0.005;
							}
							$('#'+pieID).animate({opacity:opts.loaderOpacity},200);
							u = setInterval(
								function(){
									if(elem.hasClass('stopped')){
										clearInterval(u);
									}
									if (loader != 'pie') {
										if(rad<=1.002 && !elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')){
											rad = (rad+radSum);
										} else if (rad<=1 && (elem.hasClass('stopped') || elem.hasClass('paused') || elem.hasClass('stopped') || elem.hasClass('hovered'))){
											rad = rad;
										} else {
											if(!elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')) {
												clearInterval(u);
												imgFake();
												$('#'+pieID).animate({opacity:0},200,function(){
													clearTimeout(setT);
													setT = setTimeout(canvasLoader,easedTime);
													nextSlide();
													opts.onStartLoading.call(this);
												});
											}
										}
										switch(barDirection){
											case 'leftToRight':
												$('#'+pieID).animate({'right':barWidth-(barWidth*rad)},(time*radSum),'linear');
												break;
											case 'rightToLeft':
												$('#'+pieID).animate({'left':barWidth-(barWidth*rad)},(time*radSum),'linear');
												break;
											case 'topToBottom':
												$('#'+pieID).animate({'bottom':barHeight-(barHeight*rad)},(time*radSum),'linear');
												break;
											case 'bottomToTop':
												$('#'+pieID).animate({'bottom':barHeight-(barHeight*rad)},(time*radSum),'linear');
												break;
										}
										
									} else {
										radNew = rad;
										ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter);
										ctx.globalCompositeOperation = 'destination-over';
										ctx.beginPath();
										ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2,false);
										ctx.lineWidth = opts.loaderStroke;
										ctx.strokeStyle = opts.loaderBgColor;
										ctx.stroke();
										ctx.closePath();
										ctx.globalCompositeOperation = 'source-over';
										ctx.beginPath();
										ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2*radNew,false);
										ctx.lineWidth = opts.loaderStroke-(opts.loaderPadding*2);
										ctx.strokeStyle = opts.loaderColor;
										ctx.stroke();
										ctx.closePath();
												
										if(rad<=1.002 && !elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')){
											rad = (rad+radSum);
										} else if (rad<=1 && (elem.hasClass('stopped') || elem.hasClass('paused') || elem.hasClass('hovered'))){
											rad = rad;
										} else {
											if(!elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')) {
												clearInterval(u);
												imgFake();
												$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},200,function(){
													clearTimeout(setT);
													setT = setTimeout(canvasLoader,easedTime);
													nextSlide();
													opts.onStartLoading.call(this);
												});
											}
										}
									}
								},time*radSum
							);
						}

				}


				
				if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
					opts.onStartTransition.call(this);
					easedTime = 0;
					tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
							'display' : 'block',
							'height': height,
							'margin-left': marginLeft,
							'margin-top': marginTop,
							'width': width
						}).animate({
							'height': Math.floor((h/rows)+addTop+1),
							'margin-top' : 0,
							'margin-left' : 0,
							'width' : Math.floor((w/cols)+addLeft+1)
						},(transPeriod-difference),easing,cameraeased);
					selector.eq(vis).delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).animate({
							'margin-left': marginLeft*(-1),
							'margin-top': marginTop*(-1)
						},(transPeriod-difference),easing,function(){
							$(this).css({'margin-top' : 0,'margin-left' : 0});
						});
				} else {
					opts.onStartTransition.call(this);
					easedTime = parseFloat(transPeriod)+parseFloat(difference);
					if(slideOn=='next'){
						tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
								'display' : 'block',
								'height': height,
								'margin-left': marginLeft,
								'margin-top': marginTop,
								'width': width,
								'opacity' : opacityOnGrid
							}).animate({
								'height': Math.floor((h/rows)+addTop+1),
								'margin-top' : 0,
								'margin-left' : 0,
								'opacity' : 1,
								'width' : Math.floor((w/cols)+addLeft+1)
							},(transPeriod-difference),easing,cameraeased);
					} else {
						selector.eq(slideI).show().css('z-index','999').addClass('cameracurrent');
						selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
						tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
								'display' : 'block',
								'height': Math.floor((h/rows)+addTop+1),
								'margin-top' : 0,
								'margin-left' : 0,
								'opacity' : 1,
								'width' : Math.floor((w/cols)+addLeft+1)
							}).animate({
								'height': height,
								'margin-left': marginLeft,
								'margin-top': marginTop,
								'width': width,
								'opacity' : opacityOnGrid
							},(transPeriod-difference),easing,cameraeased);
					}
				}





			});
				
				
				
	 
		}
	}


				if($(prevNav).length){
					$(prevNav).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum!=0){
								nextSlide(idNum);
							} else {
								nextSlide(amountSlide);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}
			
				if($(nextNav).length){
					$(nextNav).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index()); 
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum==amountSlide-1){
								nextSlide(1);
							} else {
								nextSlide(idNum+2);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}


				if(isMobile()){
					fakeHover.bind('swipeleft',function(event){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index()); 
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum==amountSlide-1){
								nextSlide(1);
							} else {
								nextSlide(idNum+2);
						   }
						   opts.onStartLoading.call(this);
						}
					});
					fakeHover.bind('swiperight',function(event){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum!=0){
								nextSlide(idNum);
							} else {
								nextSlide(amountSlide);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}

				if($(pagination).length){
					$('.camera_pag li',wrap).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($(this).index());
							var curNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							if(idNum!=curNum) {
								clearInterval(u);
								imgFake();
								$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
								canvasLoader();
								nextSlide(idNum+1);
								opts.onStartLoading.call(this);
							}
						}
					});
				}

				if($(thumbs).length) {

					$('.pix_thumb img',thumbs).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($(this).parents('li').index());
							var curNum = parseFloat($('.cameracurrent',target).index());
							if(idNum!=curNum) {
								clearInterval(u);
								imgFake();
								$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
								$('.pix_thumb',thumbs).removeClass('cameracurrent');
								$(this).parents('li').addClass('cameracurrent');
								canvasLoader();
								nextSlide(idNum+1);
								thumbnailPos();
								opts.onStartLoading.call(this);
							}
						}
					});

					$('.camera_thumbs_cont .camera_prevThumbs',camera_thumbs_wrap).hover(function(){
						$(this).stop(true,false).animate({opacity:1},250);
					},function(){
						$(this).stop(true,false).animate({opacity:.7},250);
					});
					$('.camera_prevThumbs',camera_thumbs_wrap).click(function(){
						var sum = 0,
							wTh = $(thumbs).outerWidth(),
							offUl = $('ul', thumbs).offset().left,
							offDiv = $('> div', thumbs).offset().left,
							ulLeft = offDiv-offUl;
							$('.camera_visThumb',thumbs).each(function(){
								var tW = $(this).outerWidth();
								sum = sum+tW;
							});
							if(ulLeft-sum>0){
								$('ul', thumbs).animate({'margin-left':'-'+(ulLeft-sum)+'px'},500,thumbnailVisible);
							} else {
								$('ul', thumbs).animate({'margin-left':0},500,thumbnailVisible);
							}
					});

					$('.camera_thumbs_cont .camera_nextThumbs',camera_thumbs_wrap).hover(function(){
						$(this).stop(true,false).animate({opacity:1},250);
					},function(){
						$(this).stop(true,false).animate({opacity:.7},250);
					});
					$('.camera_nextThumbs',camera_thumbs_wrap).click(function(){
						var sum = 0,
							wTh = $(thumbs).outerWidth(),
							ulW = $('ul', thumbs).outerWidth(),
							offUl = $('ul', thumbs).offset().left,
							offDiv = $('> div', thumbs).offset().left,
							ulLeft = offDiv-offUl;
							$('.camera_visThumb',thumbs).each(function(){
								var tW = $(this).outerWidth();
								sum = sum+tW;
							});
							if(ulLeft+sum+sum<ulW){
								$('ul', thumbs).animate({'margin-left':'-'+(ulLeft+sum)+'px'},500,thumbnailVisible);
							} else {
								$('ul', thumbs).animate({'margin-left':'-'+(ulW-wTh)+'px'},500,thumbnailVisible);
							}
					});

				}
		
		
	
}

})(jQuery);

;(function($){$.fn.cameraStop = function() {
	var wrap = $(this),
		elem = $('.camera_src',wrap),
		pieID = 'pie_'+wrap.index();
	elem.addClass('stopped');
	if($('.camera_showcommands').length) {
		var camera_thumbs_wrap = $('.camera_thumbs_wrap',wrap);
	} else {
		var camera_thumbs_wrap = wrap;
	}
}
})(jQuery);

;(function($){$.fn.cameraPause = function() {
	var wrap = $(this);
	var elem = $('.camera_src',wrap);
	elem.addClass('paused');
}
})(jQuery);

;(function($){$.fn.cameraResume = function() {
	var wrap = $(this);
	var elem = $('.camera_src',wrap);
	if(typeof autoAdv === 'undefined' || autoAdv!==true){
		elem.removeClass('paused');
	}
}
})(jQuery);




/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

// jQuery Quovolver v1.0 - http://sandbox.sebnitu.com/jquery/quovolver
// By Sebastian Nitu - Copyright 2009 - All rights reserved
(function($) { $.fn.quovolver = function(speed, delay) {if (!speed) speed = 10;if (!delay) delay = 6000;var quaSpd = (speed*4);if (quaSpd > (delay)) delay = quaSpd;var	quote = $(this),firstQuo = $(this).filter(':first'),lastQuo = $(this).filter(':last'),wrapElem = '<div id="quote_wrap"></div>';$(this).wrapAll(wrapElem);$(this).hide();$(firstQuo).show();$(this).parent().css({height: $(firstQuo).height()});		setInterval(function(){if($(lastQuo).is(':visible')) {var nextElem = $(firstQuo);var wrapHeight = $(nextElem).height();} else {var nextElem = $(quote).filter(':visible').next();var wrapHeight = $(nextElem).height();}$(quote).filter(':visible').fadeOut(speed);setTimeout(function() {$(quote).parent().animate({height: wrapHeight}, speed);}, speed);if($(lastQuo).is(':visible')) {setTimeout(function() {$(firstQuo).fadeIn(speed*2);}, speed*2);} else {setTimeout(function() {$(nextElem).fadeIn(speed);}, speed*2);}}, delay); }; })(jQuery);