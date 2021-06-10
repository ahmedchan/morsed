/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(h,j,e){var a="placeholder" in j.createElement("input");var f="placeholder" in j.createElement("textarea");var k=e.fn;var d=e.valHooks;var b=e.propHooks;var m;var l;if(a&&f){l=k.placeholder=function(){return this};l.input=l.textarea=true}else{l=k.placeholder=function(){var n=this;n.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":c,"blur.placeholder":g}).data("placeholder-enabled",true).trigger("blur.placeholder");return n};l.input=a;l.textarea=f;m={get:function(o){var n=e(o);var p=n.data("placeholder-password");if(p){return p[0].value}return n.data("placeholder-enabled")&&n.hasClass("placeholder")?"":o.value},set:function(o,q){var n=e(o);var p=n.data("placeholder-password");if(p){return p[0].value=q}if(!n.data("placeholder-enabled")){return o.value=q}if(q==""){o.value=q;if(o!=j.activeElement){g.call(o)}}else{if(n.hasClass("placeholder")){c.call(o,true,q)||(o.value=q)}else{o.value=q}}return n}};if(!a){d.input=m;b.value=m}if(!f){d.textarea=m;b.value=m}e(function(){e(j).delegate("form","submit.placeholder",function(){var n=e(".placeholder",this).each(c);setTimeout(function(){n.each(g)},10)})});e(h).bind("beforeunload.placeholder",function(){e(".placeholder").each(function(){this.value=""})})}function i(o){var n={};var p=/^jQuery\d+$/;e.each(o.attributes,function(r,q){if(q.specified&&!p.test(q.name)){n[q.name]=q.value}});return n}function c(o,p){var n=this;var q=e(n);if(n.value==q.attr("placeholder")&&q.hasClass("placeholder")){if(q.data("placeholder-password")){q=q.hide().next().show().attr("id",q.removeAttr("id").data("placeholder-id"));if(o===true){return q[0].value=p}q.focus()}else{n.value="";q.removeClass("placeholder");n==j.activeElement&&n.select()}}}function g(){var r;var n=this;var q=e(n);var p=this.id;if(n.value==""){if(n.type=="password"){if(!q.data("placeholder-textinput")){try{r=q.clone().attr({type:"text"})}catch(o){r=e("<input>").attr(e.extend(i(this),{type:"text"}))}r.removeAttr("name").data({"placeholder-password":q,"placeholder-id":p}).bind("focus.placeholder",c);q.data({"placeholder-textinput":r,"placeholder-id":p}).before(r)}q=q.removeAttr("id").hide().prev().attr("id",p).show()}q.addClass("placeholder");q[0].value=q.attr("placeholder")}else{q.removeClass("placeholder")}}}(this,document,jQuery));

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-teststyles-prefixes
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);
Modernizr.addTest('android',function(){return!!navigator.userAgent.match(/Android/i)});
Modernizr.addTest('chrome',function(){return!!navigator.userAgent.match(/Chrome/i)});
Modernizr.addTest('firefox',function(){return!!navigator.userAgent.match(/Firefox/i)});
Modernizr.addTest('iemobile',function(){return!!navigator.userAgent.match(/IEMobile/i)});
Modernizr.addTest('ie',function(){return!!navigator.userAgent.match(/MSIE/i)});
Modernizr.addTest('ie10',function(){return!!navigator.userAgent.match(/MSIE 10/i)});
Modernizr.addTest('ie11',function(){return!!navigator.userAgent.match(/Trident.*rv:11\./)});
Modernizr.addTest('ios',function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)});
Modernizr.addTest('ios7 ipad',function(){return!!navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)});


//////////// DOM start
$(function(){
	var $win = $(window), $doc = $(document), $body = $(document.body);
  var $navMobileTrigger = $('#nav_mobile_trigger');
  

  function toggleDrawer(evt) {
    evt && evt.preventDefault();

    var $this = $(this);
    
    $body.toggleClass('drawer-opened');
    if($body.hasClass('drawer-opened')){
      $this.html('<i class="fas fa-times"></i>');
    }else {
      $this.html('<i class="fas fa-bars"></i>');
    }
  }

	function isRTL(){
		return $('html').attr('dir') == 'rtl'
	}

	function showRemoteModal(url) {
        var $modal = $('<div class="modal" tabindex="-1" role="dialog" id="ajaxModal" aria-labelledby="ajaxModal"></div>');
        $body.append($modal);
        $modal.append('<div class="spinner white center"><div class="dot1"></div><div class="dot2"></div></div>')
         .on('show.bs.modal', function(){
             var modal = this, hash = modal.id;
             window.location.hash = hash;
             window.onhashchange = function() {
                 if (!location.hash) $(modal).modal('hide');
             }
         }).modal({ backdrop:'static' });

   		$modal.load(url, function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "error") $('#ajaxModal').remove();
        })
        .on('hide.bs.modal', function (event) {
            history.pushState('', document.title, window.location.pathname);
            $('#ajaxModal').remove();
        });
 	}

	$('[data-sticky="header"]').sticky({ topSpacing: 0 });

  var $sideFixed = $('[data-fix="sidebar"]');
  var offsetTop = $sideFixed.data("offset_top");

  $sideFixed.stick_in_parent({offset_top: offsetTop});

	$('[data-parallax="parallax"]').parallaxBackground();

	///// toggle div by class:
	$doc.on('click', '[data-toggle^="class"]', function(e){
      e && e.preventDefault();
      var $this = $(e.currentTarget), $class , $target, $tmp, $classes, $targets, state = $this.data('state');
      !$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
      $class = $this.data()['toggle'];
      $target = $this.data('target') || $this.attr('href');
      $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
      $target && ($targets = $target.split(','));
      $targets && $targets.length && $.each($targets, function( index, value ) {
         var values = [ $classes[index], state ];
         if( ($targets[index] !='#') && $($targets[index]).hasClass($classes[index]) ) {
            ($targets[index] !='#') && $($targets[index]).removeClass($classes[index]);
            $this.removeClass(state);
            localStorage.removeItem($targets[index]);
         }else{
            ($targets[index] !='#') && $($targets[index]).addClass($classes[index])
            $this.toggleClass(state);
            localStorage.setItem($targets[index], JSON.stringify(values));
         }
         //($targets[index] !='#') && $($targets[index]).toggleClass($classes[index]);
      });
      
   });

  $('.js-lecturers').slick({
    rtl:isRTL(),
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

	////////// main slider
	$('.js-slick').slick({
		rtl: isRTL(),
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		draggable: false,
		fade: true,
		speed: 1000
	});

	$('.js-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$(slick.$slides).removeClass('is-animating');
	}).on('afterChange', function(event, slick, currentSlide, nextSlide) {
		$(slick.$slides.get(currentSlide)).addClass('is-animating');
	});


   // ajax modals
	$doc.on('click', '[data-toggle="ajaxModal"]', function (e) {
	  e && e.preventDefault();
	  var $this = $(this), $remote = $this.data('remote') || $this.attr('href');
	  showRemoteModal($remote);
	});

  $navMobileTrigger.on('click', toggleDrawer);

});

	



