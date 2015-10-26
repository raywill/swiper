!function(t,e){"function"==typeof define?define(e):this[t]=e()}("Swiper",function(){function t(t){this.version="1.3.1",this._default={container:".swiper",item:".item",direction:"vertical",threshold:50,duration:300},this._options=e(this._default,t),this._start={},this._move={},this._end={},this._prev=0,this._current=0,this._offset=0,this._eventHandlers={},this._cache={},this.$container=document.querySelector(this._options.container),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this._width=this.$container.offsetWidth,this._height=this.$container.offsetHeight,this._init(),this._bind()}function e(t,e){for(var n in e)t[n]=e[n];return t}function n(){}return t.prototype._init=function(){var t=this,e=t._width,n=t._height,i=e,r=n*t.count;"horizontal"===t._options.direction&&(i=e*t.count,r=n),t.$container.style.width=i+"px",t.$container.style.height=r+"px",Array.prototype.forEach.call(t.$items,function(t,i){t.style.width=e+"px",t.style.height=n+"px"})},t.prototype._bind=function(){var t=this;this.$container.addEventListener("touchstart",function(e){t._start.x=e.changedTouches[0].pageX,t._start.y=e.changedTouches[0].pageY,t.$container.style["-webkit-transition"]="none",t.$container.style.transition="none"},!1),this.$container.addEventListener("touchmove",function(e){t._move.x=e.changedTouches[0].pageX,t._move.y=e.changedTouches[0].pageY;var n=t._move.y-t._start.y,i="translate3d(0, "+(n-t._offset)+"px, 0)";"horizontal"===t._options.direction&&(n=t._move.x-t._start.x,i="translate3d("+(n-t._offset)+"px, 0, 0)"),t.$container.style["-webkit-transform"]=i,t.$container.style.transform=i,e.preventDefault()},!1),this.$container.addEventListener("touchend",function(e){t._end.x=e.changedTouches[0].pageX,t._end.y=e.changedTouches[0].pageY;var n=t._end.y-t._start.y;"horizontal"===t._options.direction&&(n=t._end.x-t._start.x),t._prev=t._current,n>t._options.threshold?t._current=0===t._current?0:--t._current:n<-t._options.threshold&&(t._current=t._current<t.count-1?++t._current:t._current),t._show(t._current),e.preventDefault()},!1),this.$container.addEventListener("transitionEnd",function(t){},!1),this.$container.addEventListener("webkitTransitionEnd",function(e){if(e.target!==t.$container)return!1;if(t._current!=t._prev){var i=t._eventHandlers.swiped||n;i.apply(t,[t._prev,t._current])}e.preventDefault()},!1)},t.prototype._show=function(t){this._offset=t*this._height;var e="translate3d(0, -"+this._offset+"px, 0)";"horizontal"===this._options.direction&&(this._offset=t*this._width,e="translate3d(-"+this._offset+"px, 0, 0)");var n=this._options.duration+"ms";this.$container.style["-webkit-transition"]=n,this.$container.style.transition=n,this.$container.style["-webkit-transform"]=e,this.$container.style.transform=e},t.prototype.next=function(){return this._current>=this.count-1?void 0:(this._prev=this._current,this._show(++this._current),this)},t.prototype.on=function(t,e){if(this._eventHandlers[t])throw new Error("event "+t+" is already register");if("function"!=typeof e)throw new Error("parameter callback must be a function");return this._eventHandlers[t]=e,this},t});