(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"66B6":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("CcnG"),o=n("jvbL"),r=(n("Wr5T"),function(){function t(){var t=this;this.alive=!0,this.startPage=1,this.pageChange=new i.m,this.observer=new IntersectionObserver(function(e){return t.checkForPageChange(e)},{threshold:.5})}return t.prototype.ngAfterViewInit=function(){var t=this;this.listItems&&this.listItems.length&&this.observeItems(),this.listItems.changes.pipe(Object(o.a)(function(){return t.alive})).subscribe(function(){return t.observeItems()})},t.prototype.ngOnDestroy=function(){this.observer.disconnect&&this.observer.disconnect()},t.prototype.observeItems=function(){var t=this;this.listItems.forEach(function(e){return t.observer.observe(e.nativeElement)})},t.prototype.checkForPageChange=function(t){var e=this.findMostVisiblePage(t);e&&this.currentPage!==e&&(this.currentPage=e,this.pageChange.emit(this.currentPage))},t.prototype.findMostVisiblePage=function(t){for(var e=new Map,n=0,i=t;n<i.length;n++){var o=i[n];if(!(o.intersectionRatio<.5)){var r=this.elementIndex(o.target);if(-1!==r){var s=this.startPage+Math.floor(r/this.pageSize),c=o.intersectionRatio;e.has(s)&&(c+=e.get(s)),e.set(s,c)}}}var h,u=0;return e.forEach(function(t,e){t>u&&(u=t,h=e)}),h},t.prototype.elementIndex=function(t){return t.parentElement&&t.parentElement.children?Array.from(t.parentElement.children).indexOf(t):-1},t}())},Wr5T:function(t,e){!function(t,e){"use strict";function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,i=this.intersectionRect;this.intersectionRatio=n?i.width*i.height/n:this.isIntersecting?1:0}function i(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=function(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function o(t,e,n,i){"function"==typeof t.addEventListener?t.addEventListener(e,n,i||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function r(t,e,n,i){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,i||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function s(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t,e){for(var n=e;n;){if(n==t)return!0;n=h(n)}return!1}function h(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var u=[];i.prototype.THROTTLE_TIMEOUT=100,i.prototype.POLL_INTERVAL=null,i.prototype.USE_MUTATION_OBSERVER=!0,i.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},i.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},i.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},i.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},i.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},i.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},i.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(o(t,"resize",this._checkForIntersections,!0),o(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},i.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,r(t,"resize",this._checkForIntersections,!0),r(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},i.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),i=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(o){var r=o.element,c=s(r),h=this._rootContainsTarget(r),u=o.entry,a=e&&h&&this._computeTargetAndRootIntersection(r,i),l=o.entry=new n({time:t.performance&&performance.now&&performance.now(),target:r,boundingClientRect:c,rootBounds:i,intersectionRect:a});u?e&&h?this._hasCrossedThreshold(u,l)&&this._queuedEntries.push(l):u&&u.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},i.prototype._computeTargetAndRootIntersection=function(n,i){if("none"!=t.getComputedStyle(n).display){for(var o=s(n),r=h(n),c=!1;!c;){var u=null,a=1==r.nodeType?t.getComputedStyle(r):{};if("none"==a.display)return;if(r==this.root||r==e?(c=!0,u=i):r!=e.body&&r!=e.documentElement&&"visible"!=a.overflow&&(u=s(r)),u&&!(o=function(t,e){var n=Math.max(t.top,e.top),i=Math.min(t.bottom,e.bottom),o=Math.max(t.left,e.left),r=Math.min(t.right,e.right),s=r-o,c=i-n;return s>=0&&c>=0&&{top:n,bottom:i,left:o,right:r,width:s,height:c}}(u,o)))break;r=h(r)}return o}},i.prototype._getRootRect=function(){var t;if(this.root)t=s(this.root);else{var n=e.documentElement,i=e.body;t={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(t)},i.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},i.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,i=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==i)for(var o=0;o<this.thresholds.length;o++){var r=this.thresholds[o];if(r==n||r==i||r<n!=r<i)return!0}},i.prototype._rootIsInDom=function(){return!this.root||c(e,this.root)},i.prototype._rootContainsTarget=function(t){return c(this.root||e,t)},i.prototype._registerInstance=function(){u.indexOf(this)<0&&u.push(this)},i.prototype._unregisterInstance=function(){var t=u.indexOf(this);-1!=t&&u.splice(t,1)},t.IntersectionObserver=i,t.IntersectionObserverEntry=n}}(window,document)},eBxF:function(t,e,n){"use strict";function i(t){var e=t.subscriber,n=t.counter,i=t.period;e.next(n),this.schedule({subscriber:e,counter:n+1,period:i},i)}var o=n("CcnG"),r=n("VNr4"),s=n("F/XL"),c=n("6blF"),h=n("T1DM"),u=n("/21U"),a=n("gI3B"),l=n("jvbL"),f=n("VnD/"),p=n("15JJ"),g=n("t9fZ"),d=n("67Y/"),m=n("ny24"),b=n("FA0J");n("kztb"),n("V+dw"),n("jXul"),n.d(e,"a",function(){return v});var v=function(){function t(t,e,n){this.elementRef=t,this.scrollService=e,this.dimensionsService=n,this.alive=!0,this.windowScroll=!1,this.bottomThreshold=new o.m(!0),this.topThreshold=new o.m(!0)}return Object.defineProperty(t.prototype,"elementScroll",{get:function(){return!this.windowScroll},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"listenWindowScroll",{set:function(t){this.windowScroll=Object(b.a)(t)},enumerable:!0,configurable:!0}),t.prototype.onElementScroll=function(){this.elementScroll&&this.checkPosition(this.elementRef.nativeElement)},t.prototype.ngAfterViewInit=function(){var t=this;this.scrollService.onScroll().pipe(Object(l.a)(function(){return t.alive}),Object(f.a)(function(){return t.windowScroll}),Object(p.a)(function(){return t.getContainerDimensions()})).subscribe(function(e){return t.checkPosition(e)}),this.listItems.changes.pipe(Object(l.a)(function(){return t.alive}),Object(p.a)(function(){return function(t,e){return void 0===t&&(t=0),void 0===e&&(e=h.a),(!Object(u.a)(t)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=h.a),new c.a(function(n){return n.add(e.schedule(i,t,{subscriber:n,counter:0,period:t})),n})}(50).pipe(Object(m.a)(Object(a.a)(1e3)),Object(f.a)(function(){return t.inSyncWithDom()}),Object(g.a)(1))}),Object(p.a)(function(){return t.getContainerDimensions()})).subscribe(function(e){return t.checkPosition(e)}),this.getContainerDimensions().subscribe(function(e){return t.checkPosition(e)})},t.prototype.ngOnDestroy=function(){this.alive=!1},t.prototype.checkPosition=function(t){var e=t.scrollTop,n=null==this.lastScrollPosition,i=e<this.lastScrollPosition;(n||this.lastScrollPosition===e||e>this.lastScrollPosition)&&t.scrollHeight-e-t.clientHeight<=this.threshold&&this.bottomThreshold.emit(),(n||i)&&e<=this.threshold&&this.topThreshold.emit(),this.lastScrollPosition=e},t.prototype.getContainerDimensions=function(){if(this.elementScroll){var t=this.elementRef.nativeElement,e=t.scrollTop,n=t.scrollHeight,i=t.clientHeight;return Object(s.a)({scrollTop:e,scrollHeight:n,clientHeight:i})}return Object(r.a)(this.scrollService.getPosition(),this.dimensionsService.getDimensions()).pipe(Object(d.a)(function(t){var e=t[1];return{scrollTop:t[0].y,scrollHeight:e.scrollHeight,clientHeight:e.clientHeight}}))},t.prototype.inSyncWithDom=function(){return this.elementRef.nativeElement.children.length===this.listItems.length},t}()},jXul:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){this.role="list"},o=function(){this.role="listitem"}},n81q:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("jXul"),n("66B6"),n("eBxF");var i=function(){}}}]);