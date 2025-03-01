/**
 * Global variables
 */
"use strict";

var userAgent = navigator.userAgent.toLowerCase(),
	initialDate = new Date(),

	$document = $(document),
	$window = $(window),
	$html = $("html"),

	isDesktop = $html.hasClass("desktop"),
	isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
	isSafari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1,
	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	isTouch = "ontouchstart" in window,
	onloadCaptchaCallback,
	detailsBlock = document.getElementsByClassName('block-with-details'),
	isNoviBuilder = false,
	plugins = {
		bootstrapDateTimePicker: $("[data-time-picker]"),
		bootstrapModalDialog: $('.modal'),
		bootstrapModalNotification: $('.notification'),
		bootstrapTooltip: $("[data-toggle='tooltip']"),
		buttonNina: $('.button-nina'),
		captcha: $('.recaptcha'),
		customToggle: $("[data-custom-toggle]"),
		lightGallery: $("[data-lightgallery='group']"),
		lightGalleryItem: $("[data-lightgallery='item']"),
		lightDynamicGalleryItem: $("[data-lightgallery='dynamic']"),
		owl: $(".owl-carousel"),
		pageLoader: $(".page-loader"),
		parallaxText: $('.parallax-text'),
		pointerEvents: isIE < 11 ? "js/pointer-events.min.js" : false,
		rdInputLabel: $(".form-label"),
		rdMailForm: $(".rd-mailform"),
		rdNavbar: $(".rd-navbar"),
		regula: $("[data-constraints]"),
		selectFilter: $(".select-filter"),
		stepper: $("input[type='number']"),
		swiper: $(".swiper-slider"),
		viewAnimate: $('.view-animate'),
		maps: $(".google-map-container")
	};



/**
 * @desc Check the element was been scrolled into the view
 * @param {object} elem - jQuery object
 * @return {boolean}
 */
function isScrolledIntoView ( elem ) {
	if ( isNoviBuilder ) return true;
	return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
}

/**
 * @desc Calls a function when element has been scrolled into the view
 * @param {object} element - jQuery object
 * @param {function} func - init function
 */
function lazyInit( element, func ) {
	var scrollHandler = function () {
		if ( ( !element.hasClass( 'lazy-loaded' ) && ( isScrolledIntoView( element ) ) ) ) {
			func.call();
			element.addClass( 'lazy-loaded' );
		}
	};

	scrollHandler();
	$window.on( 'scroll', scrollHandler );
}

/**
 * Initialize All Scripts
 */
$document.ready(function () {
	isNoviBuilder = window.xMode;

	/**
	 * getSwiperHeight
	 * @description  calculate the height of swiper slider basing on data attr
	 */
	function getSwiperHeight(object, attr) {
		var val = object.attr("data-" + attr),
			dim;

		if (!val) {
			return undefined;
		}

		dim = val.match(/(px)|(%)|(vh)$/i);

		if (dim.length) {
			switch (dim[0]) {
				case "px":
					return parseFloat(val);
				case "vh":
					return $(window).height() * (parseFloat(val) / 100);
				case "%":
					return object.width() * (parseFloat(val) / 100);
			}
		} else {
			return undefined;
		}
	}

	/**
	 * toggleSwiperInnerVideos
	 * @description  toggle swiper videos on active slides
	 */
	function toggleSwiperInnerVideos(swiper) {
		var prevSlide = $(swiper.slides[swiper.previousIndex]),
			nextSlide = $(swiper.slides[swiper.activeIndex]),
			videos;

		prevSlide.find("video").each(function () {
			this.pause();
		});

		videos = nextSlide.find("video");
		if (videos.length) {
			videos.get(0).play();
		}
	}

	/**
	 * toggleSwiperCaptionAnimation
	 * @description  toggle swiper animations on active slides
	 */
	function toggleSwiperCaptionAnimation(swiper) {
		var prevSlide = $(swiper.container),
			nextSlide = $(swiper.slides[swiper.activeIndex]);

		prevSlide
			.find("[data-caption-animate]")
			.each(function () {
				var $this = $(this);
				$this
					.removeClass("animated")
					.removeClass($this.attr("data-caption-animate"))
					.addClass("not-animated");
			});

		nextSlide
			.find("[data-caption-animate]")
			.each(function () {
				var $this = $(this),
					delay = $this.attr("data-caption-delay");


				if (!isNoviBuilder) {
					setTimeout(function () {
						$this
							.removeClass("not-animated")
							.addClass($this.attr("data-caption-animate"))
							.addClass("animated");
					}, delay ? parseInt(delay) : 0);
				} else {
					$this
						.removeClass("not-animated")
				}
			});
	}

	/**
	 * initSwiperWaypoints
	 * @description  init waypoints on new slides
	 */
	function initSwiperWaypoints(swiper) {
		var prevSlide = $(swiper.container),
			nextSlide = $(swiper.slides[swiper.activeIndex]);

		prevSlide
			.find('[data-custom-scroll-to]')
			.each(function () {
				var $this = $(this);
				initCustomScrollTo($this);
			});

		nextSlide
			.find('[data-custom-scroll-to]')
			.each(function () {
				var $this = $(this);
				initCustomScrollTo($this);
			});
	}

	/**
	 * initSwiperButtonsNina
	 * @description  toggle waypoints on active slides
	 */
	function initSwiperButtonsNina(swiper) {
		var prevSlide = $(swiper.container),
			nextSlide = $(swiper.slides[swiper.activeIndex]);

		prevSlide
			.find('.button-nina')
			.each(function () {
				initNinaButtons(this);
			});

		nextSlide
			.find('.button-nina')
			.each(function () {
				initNinaButtons(this);
			});
	}

	/**
	 * makeParallax
	 * @description  create swiper parallax scrolling effect
	 */
	function makeParallax(el, speed, wrapper, prevScroll) {
		var scrollY = window.scrollY || window.pageYOffset;

		if (prevScroll != scrollY) {
			prevScroll = scrollY;
			el.addClass('no-transition');
			el[0].style['transform'] = 'translate3d(0,' + -scrollY * (1 - speed) + 'px,0)';
			el.height();
			el.removeClass('no-transition');

			if (el.attr('data-fade') === 'true') {
				var bound = el[0].getBoundingClientRect(),
					offsetTop = bound.top * 2 + scrollY,
					sceneHeight = wrapper.outerHeight(),
					sceneDevider = wrapper.offset().top + sceneHeight / 2.0,
					layerDevider = offsetTop + el.outerHeight() / 2.0,
					pos = sceneHeight / 6.0,
					opacity;
				if (sceneDevider + pos > layerDevider && sceneDevider - pos < layerDevider) {
					el[0].style["opacity"] = 1;
				} else {
					if (sceneDevider - pos < layerDevider) {
						opacity = 1 + ((sceneDevider + pos - layerDevider) / sceneHeight / 3.0 * 5);
					} else {
						opacity = 1 - ((sceneDevider - pos - layerDevider) / sceneHeight / 3.0 * 5);
					}
					el[0].style["opacity"] = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity.toFixed(2);
				}
			}
		}

		requestAnimationFrame(function () {
			makeParallax(el, speed, wrapper, prevScroll);
		});
	}

	/**
	 * initCustomScrollTo
	 * @description  init smooth anchor animations
	 */
	function initCustomScrollTo(obj) {
		var $this = $(obj);
		if (!isNoviBuilder) {
			$this.on('click', function (e) {
				e.preventDefault();
				$("body, html").stop().animate({
					scrollTop: $($(this).attr('data-custom-scroll-to')).offset().top
				}, 1000, function () {
					$window.trigger("resize");
				});
			});
		}
	}

	/**
	 * initOwlCarousel
	 * @description  Init owl carousel plugin
	 */
	function initOwlCarousel(c) {
		var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-", "-xl-"],
			values = [0, 480, 768, 992, 1200, 1600],
			responsive = {};

		for (var j = 0; j < values.length; j++) {
			responsive[values[j]] = {};
			for (var k = j; k >= -1; k--) {
				if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
					responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
				}
				if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
					responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
				}
				if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
					responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
				}
			}
		}

		// Enable custom pagination
		if (c.attr('data-dots-custom')) {
			c.on("initialized.owl.carousel", function (event) {
				var carousel = $(event.currentTarget),
					customPag = $(carousel.attr("data-dots-custom")),
					active = 0;

				if (carousel.attr('data-active')) {
					active = parseInt(carousel.attr('data-active'), 10);
				}

				carousel.trigger('to.owl.carousel', [active, 300, true]);
				customPag.find("[data-owl-item='" + active + "']").addClass("active");

				customPag.find("[data-owl-item]").on('click', function (e) {
					e.preventDefault();
					carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute("data-owl-item"), 10), 300, true]);
				});

				carousel.on("translate.owl.carousel", function (event) {
					customPag.find(".active").removeClass("active");
					customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active")
				});
			});
		}

		c.on("initialized.owl.carousel", function () {
			initLightGalleryItem(c.find('[data-lightgallery="item"]'), 'lightGallery-in-carousel');
		});

		if (c.attr('data-nav-custom')) {
			c.on("initialized.owl.carousel", function (event) {
				var carousel = $(event.currentTarget),
					customNav = $(carousel.attr("data-nav-custom"));

				// Custom Navigation Events
				customNav.find(".owl-arrow-next").click(function (e) {
					e.preventDefault();
					carousel.trigger('next.owl.carousel');
				});
				customNav.find(".owl-arrow-prev").click(function (e) {
					e.preventDefault();
					carousel.trigger('prev.owl.carousel');
				});
			});
		}

		if (c.attr('data-custom-nav')) {
			c.on("initialized.owl.carousel", function (event) {
				var carousel = $(event.currentTarget),
					customNav = carousel.parent().find('.owl-carousel-widget-nav');

				// Custom Navigation Events
				customNav.find(".slick-next").click(function (e) {
					e.preventDefault();
					carousel.trigger('next.owl.carousel');
				});
				customNav.find(".slick-prev").click(function (e) {
					e.preventDefault();
					carousel.trigger('prev.owl.carousel');
				});
			});
		}

		c.owlCarousel({
			autoplay: isNoviBuilder ? false : c.attr("data-autoplay") === "true",
			loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
			items: 1,
			center: c.attr("data-center") === "true",
			dotsContainer: c.attr("data-pagination-class") || false,
			navContainer: c.attr("data-navigation-class") || false,
			mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
			nav: c.attr("data-nav") === "true",
			dots: ( isNoviBuilder && c.attr("data-nav") !== "true" ) ? true : c.attr("data-dots") === "true",
			dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : false,
			animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : false,
			animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
			responsive: responsive,
			navText: c.attr("data-nav-text") ? $.parseJSON(c.attr("data-nav-text")) : [],
			navClass: c.attr("data-nav-class") ? $.parseJSON(c.attr("data-nav-class")) : ['owl-prev', 'owl-next']
		});
	}


	/**
	 * Parallax text
	 * @description  function for parallax text
	 */
	function scrollText($this) {
		var translate = (scrollTop - $($this).data('orig-offset')) / $window.height() * 35;
		$($this).css({transform: 'translate3d(0,' + translate + '%' + ', 0)'});
	}

	/**
	 * initNinaButtons
	 * @description  Make hover effect for nina buttons
	 */
	function initNinaButtons(ninaButtons) {
		for (var i = 0; i < ninaButtons.length; i++) {
			var btn = ninaButtons[i],
				origContent = btn.innerHTML.trim();

			if (!origContent) {
				continue;
			}

			var textNode = Array.prototype.slice.call(ninaButtons[i].childNodes).filter(function (node) {
				return node.nodeType === 3;
			}).pop();
			if (textNode == null) {
				continue;
			}

			var dummy = document.createElement('div');
			btn.replaceChild(dummy, textNode);
			dummy.outerHTML = textNode.textContent.split('').map(function (letter) {
				return "<span>" + letter.trim() + "</span>";
			}).join('');

			Array.prototype.slice.call(btn.childNodes).forEach(function (el, count) {
				el.style.transition = 'opacity .22s ' + 0.03 * count + 's,' + ' transform .22s ' + 0.03 * count + 's' + ', color .22s';
			});

			btn.innerHTML += "<span class='button-original-content'>" + origContent + "</span>";

			var delay = 0.03 * (btn.childElementCount - 1);
			// btn.getElementsByClassName('button-original-content')[0].style.transitionDelay = delay + 's';
			btn.getElementsByClassName('button-original-content')[0].style.transition = 'background .22s, color .22s, transform .22s ' + delay + 's';

			btn.addEventListener('mouseenter', function (e) {
				e.stopPropagation();
			});

			btn.addEventListener('mouseleave', function (e) {
				e.stopPropagation();
			});
		}
	}


	/**
	 * attachFormValidator
	 * @description  attach form validation to elements
	 */
	function attachFormValidator(elements) {
		for (var i = 0; i < elements.length; i++) {
			var o = $(elements[i]), v;
			o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
			v = o.parent().find(".form-validation");
			if (v.is(":last-child")) {
				o.addClass("form-control-last-child");
			}
		}

		elements
			.on('input change propertychange blur', function (e) {
				var $this = $(this), results;

				if (e.type != "blur") {
					if (!$this.parent().hasClass("has-error")) {
						return;
					}
				}

				if ($this.parents('.rd-mailform').hasClass('success')) {
					return;
				}

				if ((results = $this.regula('validate')).length) {
					for (i = 0; i < results.length; i++) {
						$this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error")
					}
				} else {
					$this.siblings(".form-validation").text("").parent().removeClass("has-error")
				}
			})
			.regula('bind');

		var regularConstraintsMessages = [
			{
				type: regula.Constraint.Required,
				newMessage: "The text field is required."
			},
			{
				type: regula.Constraint.Email,
				newMessage: "The email is not a valid email."
			},
			{
				type: regula.Constraint.Numeric,
				newMessage: "Only numbers are required"
			},
			{
				type: regula.Constraint.Selected,
				newMessage: "Please choose an option."
			}
		];


		for (var i = 0; i < regularConstraintsMessages.length; i++) {
			var regularConstraint = regularConstraintsMessages[i];

			regula.override({
				constraintType: regularConstraint.type,
				defaultMessage: regularConstraint.newMessage
			});
		}
	}

	/**
	 * isValidated
	 * @description  check if all elemnts pass validation
	 */
	function isValidated(elements, captcha) {
		var results, errors = 0;

		if (elements.length) {
			for (j = 0; j < elements.length; j++) {

				var $input = $(elements[j]);
				if ((results = $input.regula('validate')).length) {
					for (k = 0; k < results.length; k++) {
						errors++;
						$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
					}
				} else {
					$input.siblings(".form-validation").text("").parent().removeClass("has-error")
				}
			}

			if (captcha) {
				if (captcha.length) {
					return validateReCaptcha(captcha) && errors == 0
				}
			}

			return errors == 0;
		}
		return true;
	}

	/**
	 * Init Bootstrap tooltip
	 * @description  calls a function when need to init bootstrap tooltips
	 */
	function initBootstrapTooltip(tooltipPlacement) {
		plugins.bootstrapTooltip.tooltip('dispose');

		if (window.innerWidth < 576) {
			plugins.bootstrapTooltip.tooltip({placement: 'bottom'});
		} else {
			plugins.bootstrapTooltip.tooltip({placement: tooltipPlacement});
		}
	}

	/**
	 * lightGallery
	 * @description Enables lightGallery plugin
	 */
	function initLightGallery(itemsToInit, addClass) {
		if (!isNoviBuilder) {
			$(itemsToInit).lightGallery({
				thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
				selector: "[data-lightgallery='item']",
				autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true",
				pause: parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
				addClass: addClass,
				mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide",
				loop: $(itemsToInit).attr("data-lg-loop") !== "false"
			});
		}
	}

	function initDynamicLightGallery(itemsToInit, addClass) {
		if (!isNoviBuilder) {
			$(itemsToInit).on("click", function () {
				$(itemsToInit).lightGallery({
					thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
					selector: "[data-lightgallery='item']",
					autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true",
					pause: parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
					addClass: addClass,
					mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide",
					loop: $(itemsToInit).attr("data-lg-loop") !== "false",
					dynamic: true,
					dynamicEl:
					JSON.parse($(itemsToInit).attr("data-lg-dynamic-elements")) || []
				});
			});
		}
	}

	function initLightGalleryItem(itemToInit, addClass) {
		if (!isNoviBuilder) {
			$(itemToInit).lightGallery({
				selector: "this",
				addClass: addClass,
				counter: false,
				youtubePlayerParams: {
					modestbranding: 1,
					showinfo: 0,
					rel: 0,
					controls: 0
				},
				vimeoPlayerParams: {
					byline: 0,
					portrait: 0
				}
			});
		}
	}

	if (plugins.lightGallery.length) {
		for (var i = 0; i < plugins.lightGallery.length; i++) {
			initLightGallery(plugins.lightGallery[i]);
		}
	}

	if (plugins.lightGalleryItem.length) {
		for (var i = 0; i < plugins.lightGalleryItem.length; i++) {
			initLightGalleryItem(plugins.lightGalleryItem[i]);
		}
	}

	if (plugins.lightDynamicGalleryItem.length) {
		for (var i = 0; i < plugins.lightDynamicGalleryItem.length; i++) {
			initDynamicLightGallery(plugins.lightDynamicGalleryItem[i]);
		}
	}

	/**
	 * Copyright Year
	 * @description  Evaluates correct copyright year
	 */
	var o = $(".copyright-year");
	if (o.length) {
		o.text(initialDate.getFullYear());
	}

	/**
	 * Page loader
	 * @description Enables Page loader
	 */
	if (plugins.pageLoader.length > 0) {
		var loader = setTimeout(function () {
			plugins.pageLoader.addClass("loaded");
			plugins.pageLoader.fadeOut(500, function () {
				$(this).remove();
			});

			$window.trigger("resize");
		}, 1000);
	}

	/**
	 * validateReCaptcha
	 * @description  validate google reCaptcha
	 */
	function validateReCaptcha(captcha) {
		var $captchaToken = captcha.find('.g-recaptcha-response').val();

		if ($captchaToken == '') {
			captcha
				.siblings('.form-validation')
				.html('Please, prove that you are not robot.')
				.addClass('active');
			captcha
				.closest('.form-group')
				.addClass('has-error');

			captcha.bind('propertychange', function () {
				var $this = $(this),
					$captchaToken = $this.find('.g-recaptcha-response').val();

				if ($captchaToken != '') {
					$this
						.closest('.form-group')
						.removeClass('has-error');
					$this
						.siblings('.form-validation')
						.removeClass('active')
						.html('');
					$this.unbind('propertychange');
				}
			});

			return false;
		}

		return true;
	}

	/**
	 * onloadCaptchaCallback
	 * @description  init google reCaptcha
	 */
	onloadCaptchaCallback = function () {
		for (i = 0; i < plugins.captcha.length; i++) {
			var $capthcaItem = $(plugins.captcha[i]);

			grecaptcha.render(
				$capthcaItem.attr('id'),
				{
					sitekey: $capthcaItem.attr('data-sitekey'),
					size: $capthcaItem.attr('data-size') ? $capthcaItem.attr('data-size') : 'normal',
					theme: $capthcaItem.attr('data-theme') ? $capthcaItem.attr('data-theme') : 'light',
					callback: function (e) {
						$('.recaptcha').trigger('propertychange');
					}
				}
			);
			$capthcaItem.after("<span class='form-validation'></span>");
		}
	};

	/**
	 * Google ReCaptcha
	 * @description Enables Google ReCaptcha
	 */
	if (plugins.captcha.length) {
		$.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en");
	}

	/**
	 * Is Mac os
	 * @description  add additional class on html if mac os.
	 */
	if (navigator.platform.match(/(Mac)/i)) $html.addClass("mac-os");

	/**
	 * Is Safari
	 * @description  add additional class on html if safari.
	 */
	if (isSafari) $html.addClass("safari");

	/**
	 * IE Polyfills
	 * @description  Adds some loosing functionality to IE browsers
	 */
	if (isIE) {
		if (isIE < 10) {
			$html.addClass("lt-ie-10");
		}

		if (isIE < 11) {
			if (plugins.pointerEvents) {
				$.getScript(plugins.pointerEvents)
					.done(function () {
						$html.addClass("ie-10");
						PointerEventsPolyfill.initialize({});
					});
			}
		}

		if (isIE === 11) {
			$("html").addClass("ie-11");
		}

		if (isIE === 12) {
			$("html").addClass("ie-edge");
		}
	}

	/**
	 * Bootstrap Tooltips
	 * @description Activate Bootstrap Tooltips
	 */
	if (plugins.bootstrapTooltip.length && !isNoviBuilder) {
		var tooltipPlacement = plugins.bootstrapTooltip.attr('data-placement');
		initBootstrapTooltip(tooltipPlacement);
		$(window).on('resize orientationchange', function () {
			initBootstrapTooltip(tooltipPlacement);
		})
	}

	/**
	 * bootstrapModalDialog
	 * @description Stop video in bootstrapModalDialog
	 */
	if (plugins.bootstrapModalDialog.length > 0) {
		var i = 0;

		for (i = 0; i < plugins.bootstrapModalDialog.length; i++) {
			var modalItem = $(plugins.bootstrapModalDialog[i]);

			modalItem.on('hidden.bs.modal', $.proxy(function () {
				var activeModal = $(this),
					rdVideoInside = activeModal.find('video'),
					youTubeVideoInside = activeModal.find('iframe');

				if (rdVideoInside.length) {
					rdVideoInside[0].pause();
				}

				if (youTubeVideoInside.length) {
					var videoUrl = youTubeVideoInside.attr('src');

					youTubeVideoInside
						.attr('src', '')
						.attr('src', videoUrl);
				}
			}, modalItem))
		}
	}

	/**
	 * @desc Google map function for getting latitude and longitude
	 */
	function getLatLngObject(str, marker, map, callback) {
		var coordinates = {};
		try {
			coordinates = JSON.parse(str);
			callback(new google.maps.LatLng(
				coordinates.lat,
				coordinates.lng
			), marker, map)
		} catch (e) {
			map.geocoder.geocode({'address': str}, function (results, status) {
				if (status === google.maps.GeocoderStatus.OK) {
					var latitude = results[0].geometry.location.lat();
					var longitude = results[0].geometry.location.lng();

					callback(new google.maps.LatLng(
						parseFloat(latitude),
						parseFloat(longitude)
					), marker, map)
				}
			})
		}
	}

	/**
	 * @desc Initialize Google maps
	 */
	function initMaps() {
		var key;

		for ( var i = 0; i < plugins.maps.length; i++ ) {
			if ( plugins.maps[i].hasAttribute( "data-key" ) ) {
				key = plugins.maps[i].getAttribute( "data-key" );
				break;
			}
		}

		$.getScript('//maps.google.com/maps/api/js?'+ ( key ? 'key='+ key + '&' : '' ) +'sensor=false&libraries=geometry,places&v=quarterly', function () {
			var head = document.getElementsByTagName('head')[0],
				insertBefore = head.insertBefore;

			head.insertBefore = function (newElement, referenceElement) {
				if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') !== -1 || newElement.innerHTML.indexOf('gm-style') !== -1) {
					return;
				}
				insertBefore.call(head, newElement, referenceElement);
			};
			var geocoder = new google.maps.Geocoder;
			for (var i = 0; i < plugins.maps.length; i++) {
				var zoom = parseInt(plugins.maps[i].getAttribute("data-zoom"), 10) || 11;
				var styles = plugins.maps[i].hasAttribute('data-styles') ? JSON.parse(plugins.maps[i].getAttribute("data-styles")) : [];
				var center = plugins.maps[i].getAttribute("data-center") || "New York";

				// Initialize map
				var map = new google.maps.Map(plugins.maps[i].querySelectorAll(".google-map")[0], {
					zoom: zoom,
					styles: styles,
					scrollwheel: false,
					center: {lat: 0, lng: 0}
				});

				// Add map object to map node
				plugins.maps[i].map = map;
				plugins.maps[i].geocoder = geocoder;
				plugins.maps[i].keySupported = true;
				plugins.maps[i].google = google;

				// Get Center coordinates from attribute
				getLatLngObject(center, null, plugins.maps[i], function (location, markerElement, mapElement) {
					mapElement.map.setCenter(location);
				});

				// Add markers from google-map-markers array
				var markerItems = plugins.maps[i].querySelectorAll(".google-map-markers li");

				if (markerItems.length){
					var markers = [];
					for (var j = 0; j < markerItems.length; j++){
						var markerElement = markerItems[j];
						getLatLngObject(markerElement.getAttribute("data-location"), markerElement, plugins.maps[i], function(location, markerElement, mapElement){
							var icon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
							var activeIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active");
							var info = markerElement.getAttribute("data-description") || "";
							var infoWindow = new google.maps.InfoWindow({
								content: info
							});
							markerElement.infoWindow = infoWindow;
							var markerData = {
								position: location,
								map: mapElement.map
							}
							if (icon){
								markerData.icon = icon;
							}
							var marker = new google.maps.Marker(markerData);
							markerElement.gmarker = marker;
							markers.push({markerElement: markerElement, infoWindow: infoWindow});
							marker.isActive = false;
							// Handle infoWindow close click
							google.maps.event.addListener(infoWindow,'closeclick',(function(markerElement, mapElement){
								var markerIcon = null;
								markerElement.gmarker.isActive = false;
								markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
								markerElement.gmarker.setIcon(markerIcon);
							}).bind(this, markerElement, mapElement));


							// Set marker active on Click and open infoWindow
							google.maps.event.addListener(marker, 'click', (function(markerElement, mapElement) {
								if (markerElement.infoWindow.getContent().length === 0) return;
								var gMarker, currentMarker = markerElement.gmarker, currentInfoWindow;
								for (var k =0; k < markers.length; k++){
									var markerIcon;
									if (markers[k].markerElement === markerElement){
										currentInfoWindow = markers[k].infoWindow;
									}
									gMarker = markers[k].markerElement.gmarker;
									if (gMarker.isActive && markers[k].markerElement !== markerElement){
										gMarker.isActive = false;
										markerIcon = markers[k].markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")
										gMarker.setIcon(markerIcon);
										markers[k].infoWindow.close();
									}
								}

								currentMarker.isActive = !currentMarker.isActive;
								if (currentMarker.isActive) {
									if (markerIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active")){
										currentMarker.setIcon(markerIcon);
									}

									currentInfoWindow.open(map, marker);
								}else{
									if (markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")){
										currentMarker.setIcon(markerIcon);
									}
									currentInfoWindow.close();
								}
							}).bind(this, markerElement, mapElement))
						})
					}
				}
			}
		});
	}

	// Google maps
	if( plugins.maps.length ) {
		lazyInit( plugins.maps, initMaps );
	}

	/**
	 * UI To Top
	 * @description Enables ToTop Button
	 */
	if (isDesktop && !isNoviBuilder) {
		$().UItoTop({
			easingType: 'easeOutQuart',
			containerClass: 'ui-to-top'
		});
	}

	/**
	 * RD Navbar
	 * @description Enables RD Navbar plugin
	 */
	if (plugins.rdNavbar.length) {
		var aliaces, i, j, len, value, values, responsiveNavbar;

		aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"];
		values = [0, 576, 768, 992, 1200, 1600];
		responsiveNavbar = {};

		for (i = j = 0, len = values.length; j < len; i = ++j) {
			value = values[i];
			if (!responsiveNavbar[values[i]]) {
				responsiveNavbar[values[i]] = {};
			}
			if (plugins.rdNavbar.attr('data' + aliaces[i] + 'layout')) {
				responsiveNavbar[values[i]].layout = plugins.rdNavbar.attr('data' + aliaces[i] + 'layout');
			}
			if (plugins.rdNavbar.attr('data' + aliaces[i] + 'device-layout')) {
				responsiveNavbar[values[i]]['deviceLayout'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'device-layout');
			}
			if (plugins.rdNavbar.attr('data' + aliaces[i] + 'hover-on')) {
				responsiveNavbar[values[i]]['focusOnHover'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'hover-on') === 'true';
			}
			if (plugins.rdNavbar.attr('data' + aliaces[i] + 'auto-height')) {
				responsiveNavbar[values[i]]['autoHeight'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'auto-height') === 'true';
			}

			if (isNoviBuilder) {
				responsiveNavbar[values[i]]['stickUp'] = false;
			} else if (plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up')) {
				responsiveNavbar[values[i]]['stickUp'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up') === 'true';
			}

			if (plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset')) {
				responsiveNavbar[values[i]]['stickUpOffset'] = plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset');
			}
		}


		plugins.rdNavbar.RDNavbar({
			anchorNav: !isNoviBuilder,
			stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
			responsive: responsiveNavbar,
			callbacks: {
				onStuck: function () {
					var navbarSearch = this.$element.find('.rd-search input');

					if (navbarSearch) {
						navbarSearch.val('').trigger('propertychange');
					}
				},
				onDropdownOver: function () {
					return !isNoviBuilder;
				},
				onUnstuck: function () {
					if (this.$clone === null)
						return;

					var navbarSearch = this.$clone.find('.rd-search input');

					if (navbarSearch) {
						navbarSearch.val('').trigger('propertychange');
						navbarSearch.trigger('blur');
					}

				}
			}
		});


		if (plugins.rdNavbar.attr("data-body-class")) {
			document.body.className += ' ' + plugins.rdNavbar.attr("data-body-class");
		}
	}

	/**
	 * ViewPort Universal
	 * @description Add class in viewport
	 */
	if (plugins.viewAnimate.length) {
		var i;
		for (i = 0; i < plugins.viewAnimate.length; i++) {
			var $view = $(plugins.viewAnimate[i]).not('.active');
			$document.on("scroll", $.proxy(function () {
				if (isScrolledIntoView(this)) {
					this.addClass("active");
				}
			}, $view))
				.trigger("scroll");
		}
	}

	/**
	 * Swiper 3.1.7
	 * @description  Enable Swiper Slider
	 */
	if (plugins.swiper.length) {
		for (var i = 0; i < plugins.swiper.length; i++) {
			var s = $(plugins.swiper[i]);
			var pag = s.find(".swiper-pagination"),
				next = s.find(".swiper-button-next"),
				prev = s.find(".swiper-button-prev"),
				bar = s.find(".swiper-scrollbar"),
				swiperSlide = s.find(".swiper-slide"),
				autoplay = false;

			for (var j = 0; j < swiperSlide.length; j++) {
				var $this = $(swiperSlide[j]),
					url;

				if (url = $this.attr("data-slide-bg")) {
					$this.css({
						"background-image": "url(" + url + ")",
						"background-size": "cover"
					})
				}
			}

			swiperSlide.end()
				.find("[data-caption-animate]")
				.addClass("not-animated")
				.end();

			var swiperOptions = {
				autoplay: !isNoviBuilder && $.isNumeric(s.attr('data-autoplay')) ? s.attr('data-autoplay') : false,
				direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
				effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
				speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
				keyboardControl: s.attr('data-keyboard') === "true",
				mousewheelControl: s.attr('data-mousewheel') === "true",
				mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
				nextButton: next.length ? next.get(0) : null,
				prevButton: prev.length ? prev.get(0) : null,
				pagination: pag.length ? pag.get(0) : null,
				paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
				paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (swiper, index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				} : null : null,
				scrollbar: bar.length ? bar.get(0) : null,
				scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
				scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
				loop: isNoviBuilder ? false : s.attr('data-loop') !== "false",
				simulateTouch: s.attr('data-simulate-touch') && !isNoviBuilder ? s.attr('data-simulate-touch') === "true" : false,
				onTransitionStart: function (swiper) {
					toggleSwiperInnerVideos(swiper);
				},
				onTransitionEnd: function (swiper) {
					toggleSwiperCaptionAnimation(swiper);
				},
				onInit: function (swiper) {
					toggleSwiperInnerVideos(swiper);
					toggleSwiperCaptionAnimation(swiper);
					initSwiperButtonsNina(swiper);
					initSwiperWaypoints(swiper);

					var slideButtons = swiper.slides.find('.button');

					slideButtons.hover(function () {
						swiper.stopAutoplay();
					}, function () {
						swiper.startAutoplay();
					});

					var swiperParalax = s.find(".swiper-parallax");

					for (var k = 0; k < swiperParalax.length; k++) {
						var $this = $(swiperParalax[k]),
							speed;

						if (parallax && !isIE && !isMobile) {
							if (speed = $this.attr("data-speed")) {
								makeParallax($this, speed, s, false);
							}
						}
					}
					$(window).on('resize', function () {
						swiper.update(true);
					})
				}
			};

			plugins.swiper[i] = s.swiper(swiperOptions);

			$window.on("resize", (function (s) {
				return function () {
					var mh = getSwiperHeight(s, "min-height"),
						h = getSwiperHeight(s, "height");
					if (h) {
						s.css("height", mh ? mh > h ? mh : h : h);
					}
				}
			})(s)).trigger("resize");
		}
	}

	/**
	 * Owl carousel
	 * @description Enables Owl carousel plugin
	 */
	if (plugins.owl.length) {
		for (var i = 0; i < plugins.owl.length; i++) {
			var c = $(plugins.owl[i]);
			plugins.owl[i].owl = c;

			initOwlCarousel(c);
		}
	}



	/**
	 * RD Input Label
	 * @description Enables RD Input Label Plugin
	 */
	if (plugins.rdInputLabel.length) {
		plugins.rdInputLabel.RDInputLabel();
	}

	/**
	 * Regula
	 * @description Enables Regula plugin
	 */
	if (plugins.regula.length) {
		attachFormValidator(plugins.regula);
	}

	/**
	 * RD Mailform
	 * @version      3.2.0
	 */
	if (plugins.rdMailForm.length) {
		var i, j, k,
			msg = {
				'MF000': 'Successfully sent!',
				'MF001': 'Recipients are not set!',
				'MF002': 'Form will not work locally!',
				'MF003': 'Please, define email field in your form!',
				'MF004': 'Please, define type of your form!',
				'MF254': 'Something went wrong with PHPMailer!',
				'MF255': 'Aw, snap! Something went wrong.'
			};

		for (i = 0; i < plugins.rdMailForm.length; i++) {
			var $form = $(plugins.rdMailForm[i]),
				formHasCaptcha = false;

			$form.attr('novalidate', 'novalidate').ajaxForm({
				data: {
					"form-type": $form.attr("data-form-type") || "contact",
					"counter": i
				},
				beforeSubmit: function (arr, $form, options) {
					if (isNoviBuilder)
						return;

					var form = $(plugins.rdMailForm[this.extraData.counter]),
						inputs = form.find("[data-constraints]"),
						output = $("#" + form.attr("data-form-output")),
						captcha = form.find('.recaptcha'),
						captchaFlag = true;

					output.removeClass("active error success");

					if (isValidated(inputs, captcha)) {

						// veify reCaptcha
						if (captcha.length) {
							var captchaToken = captcha.find('.g-recaptcha-response').val(),
								captchaMsg = {
									'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
									'CPT002': 'Something wrong with google reCaptcha'
								};

							formHasCaptcha = true;

							$.ajax({
								method: "POST",
								url: "bat/reCaptcha.php",
								data: {'g-recaptcha-response': captchaToken},
								async: false
							})
								.done(function (responceCode) {
									if (responceCode !== 'CPT000') {
										if (output.hasClass("snackbars")) {
											output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + captchaMsg[responceCode] + '</span></p>')

											setTimeout(function () {
												output.removeClass("active");
											}, 3500);

											captchaFlag = false;
										} else {
											output.html(captchaMsg[responceCode]);
										}

										output.addClass("active");
									}
								});
						}

						if (!captchaFlag) {
							return false;
						}

						form.addClass('form-in-process');

						if (output.hasClass("snackbars")) {
							output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
							output.addClass("active");
						}
					} else {
						return false;
					}
				},
				error: function (result) {
					if (isNoviBuilder)
						return;

					var output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output")),
						form = $(plugins.rdMailForm[this.extraData.counter]);

					output.text(msg[result]);
					form.removeClass('form-in-process');

					if (formHasCaptcha) {
						grecaptcha.reset();
					}
				},
				success: function (result) {
					if (isNoviBuilder)
						return;

					var form = $(plugins.rdMailForm[this.extraData.counter]),
						output = $("#" + form.attr("data-form-output")),
						select = form.find('select');

					form
						.addClass('success')
						.removeClass('form-in-process');

					if (formHasCaptcha) {
						grecaptcha.reset();
					}

					result = result.length === 5 ? result : 'MF255';
					output.text(msg[result]);

					if (result === "MF000") {
						if (output.hasClass("snackbars")) {
							output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
						} else {
							output.addClass("active success");
						}
					} else {
						if (output.hasClass("snackbars")) {
							output.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + msg[result] + '</span></p>');
						} else {
							output.addClass("active error");
						}
					}

					form.clearForm();

					if (select.length) {
						select.select2("val", "");
					}

					form.find('input, textarea').trigger('blur');

					setTimeout(function () {
						output.removeClass("active error success");
						form.removeClass('success');
					}, 3500);
				}
			});
		}
	}

	/**
	 * Custom Toggles
	 */
	if (plugins.customToggle.length) {
		for (i = 0; i < plugins.customToggle.length; i++) {
			var $this = $(plugins.customToggle[i]);

			$this.on('click', $.proxy(function (event) {
				event.preventDefault();
				var $ctx = $(this);
				$($ctx.attr('data-custom-toggle')).add(this).toggleClass('active');
			}, $this));

			if ($this.attr("data-custom-toggle-disable-on-blur") === "true") {
				$("body").on("click", $this, function (e) {
					if (e.target !== e.data[0]
						&& $(e.data.attr('data-custom-toggle')).find($(e.target)).length
						&& e.data.find($(e.target)).length == 0) {
						$(e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
					}
				})
			}
		}
	}

	/**
	 * Enable parallax by mouse
	 */
	var parallaxJs = document.getElementsByClassName('parallax-scene-js');
	if (parallaxJs && !isNoviBuilder) {
		for (var i = 0; i < parallaxJs.length; i++) {
			var scene = parallaxJs[i];
			new Parallax(scene);
		}
	}


	/**
	 * Select2
	 * @description Enables select2 plugin
	 */
	if (plugins.selectFilter.length) {
		var i;
		for (i = 0; i < plugins.selectFilter.length; i++) {
			var select = $(plugins.selectFilter[i]);

			select.select2({
				theme: "bootstrap",
				val: null
			}).next().addClass(select.attr("class").match(/(input-sm)|(input-lg)|($)/i).toString().replace(new RegExp(",", 'g'), " "));
		}
	}

	/**
	 * Button Nina
	 * @description Handle button Nina animation effect
	 */
	// if (plugins.buttonNina.length && !isNoviBuilder) {
	// 	initNinaButtons(plugins.buttonNina);
	// }

	/**
	 * Bootstrap Date time picker
	 */
	if (plugins.bootstrapDateTimePicker.length) {
		var i;
		for (i = 0; i < plugins.bootstrapDateTimePicker.length; i++) {
			var $dateTimePicker = $(plugins.bootstrapDateTimePicker[i]);
			var options = {};

			options['format'] = 'dddd DD MMMM YYYY - HH:mm';
			if ($dateTimePicker.attr("data-time-picker") == "date") {
				options['format'] = 'MM-DD-YYYY';
				options['minDate'] = new Date();
			} else if ($dateTimePicker.attr("data-time-picker") == "time") {
				options['format'] = 'HH:mm';
			}

			options["time"] = ($dateTimePicker.attr("data-time-picker") != "date");
			options["date"] = ($dateTimePicker.attr("data-time-picker") != "time");
			options["shortTime"] = true;

			$dateTimePicker.bootstrapMaterialDatePicker(options);
		}
	}

	/**
	 * Stepper
	 * @description Enables Stepper Plugin
	 */
	if (plugins.stepper.length) {
		plugins.stepper.stepper({
			labels: {
				up: "",
				down: ""
			}
		});
	}

	/**
	 *  Autoshow modal
	 * */
	if (plugins.bootstrapModalDialog.length) {
		plugins.bootstrapModalDialog.each(function (index) {
			var $this = $(plugins.bootstrapModalDialog[index]);
			if ($this.attr('data-autoshow') === 'true') $this.modal('show');
		});
	}

	/**
	 *  Notification modal
	 * */
	if (plugins.bootstrapModalNotification.length) {
		$('body').css('overflow', 'visible');
		plugins.bootstrapModalNotification.on('shown.bs.modal', function () {
			$(this).addClass('notification-open');
		});
	}

	/**
	 * Parallax text
	 * */
	if (plugins.parallaxText.length && !isNoviBuilder) {
		var scrollTop = $window.scrollTop();

		plugins.parallaxText.each(function () {
			$(this).data('orig-offset', $(this).offset().top);
			scrollText($(this));
		});

		$window.scroll(function () {
			scrollTop = $window.scrollTop();
			plugins.parallaxText.each(function () {
				scrollText($(this));
			});
		});

		$window.on('resize', function () {
			scrollTop = $window.scrollTop();
			plugins.parallaxText.each(function () {
				$(this).data('orig-offset', $(this).offset().top);
				scrollText($(this));
			});
		});
	}

	/**
	 * WOW
	 * @description Enables Wow animation plugin
	 */
	if (isDesktop && !isNoviBuilder && $html.hasClass("wow-animation") && $(".wow").length) {
		new WOW().init();
	}

});







// document.addEventListener('DOMContentLoaded', function () {
//     const flagButtons = document.querySelectorAll('.flag-button');

//     const translations = {
//         en: {
// 			nav1:'Home',
// 			nav2: 'About Us',
// 			nav3: 'Contacts',
// 			nav4: 'Travel packages',
//             title: 'Hundreds of fantastic travel destinations',
//             title1: 'We offer a variety of destinations ranging from the exotic to the extremely extreme. These include very popular countries and cities such as Paris, Rio de Janeiro, Cairo and many others.',
// 			title2: 'The trip of your dreams',
// 			title3: 'Our travel agency is ready to offer you an exciting vacation tailored to your needs and desires. Whether it is an exotic cruise or a trip to your favorite resort, you are sure to have the best experience',
// 			title4: 'unique travel insights',
// 			title5: 'Our team is ready to provide you with unique travel insights every week, including photos, videos and articles about uncharted tourist trails. We know everything about the places youve never been!',
// 			title6: 'our services',
// 			title7: 'Airline tickets',
// 			title8: 'In our travel agency you can book flight tickets to any destination worldwide. We also offer online ticket booking through our website in just a few steps.',
// 			title9: 'Travel and cruises',
// 			title10: 'In addition to regular tours and excursions, we also offer a variety of cruises and sea voyages for various customers who are looking for great experiences.',
// 			title11: 'Hotel bookings',
// 			title12: 'We offer a wide range of hotels, from 5-star hotels to small hotels around the world, so you can book a hotel that you like.',
// 			title13: 'Tailor-made summer tours',
// 			title14: 'Our agency offers varied tours, including tailor-made summer tours for clients looking for an exclusive and unforgettable vacation.',
// 			title15: 'Latest news',
// 			title16: 'Hotels',
// 			title17: 'Uzbekistan',
// 			title18: 'Tips',
// 			title19: 'Uzbekistan',
// 			title20: 'Travel',
// 			title21: 'Turkmenistan',
// 			title22: 'Testimonials',
// 			title23: 'Domestic tourism is developing well. Its nice to rest in the mountains. The Chimgan and Zaamin regions are particularly beautiful. I love walking along the water and visiting the countrys historical places.',
// 			title24: 'Emily Johnson',
// 			title25: 'Traveling within Uzbekistan is exciting! Visiting Samarkand and Khiva and seeing the ancient monuments of Bukhara and Shahrisabz is a special pleasure! I like discovering places where nature and history come together',
// 			title26: 'Felix Schneider',
// 			title27: 'Traveling in Uzbekistan is great! The historical places of Samarkand and Bukhara, the nature of Fergana and the Savitsky Museum in Nukus are all amazing. I always enjoy discovering a new corner!',
// 			title28: 'Sofia Wagner',
// 			title29: 'Find your tour',
// 			title30: 'From',
// 			title31: 'Tashkent',
// 			title32: 'Return journey',
// 			title33: 'Bukhara',
// 			title34: 'To',
// 			title35: 'Khiva',
// 			title36: 'Urgentsch',
// 			title37: 'Samarkand',
// 			title38: 'Departure date',
// 			title39: 'Choose the date',
// 			title40: 'Length of time',
// 			title41: 'Any length',
// 			title42: '2 days',
// 			title43: '3 days',
// 			title44: '4 days',
// 			title45: 'Adult',
// 			title46: 'Children',
// 			title47: 'Search flight',
// 			title48: 'All rights reserved. design SMK WEB',
// 			title49: 'Home',
// 			title50: 'Home',
//         },
//         de: {
// 			nav1:'Heim',
// 			nav2: 'Über uns',
// 			nav3: 'Kontaktez',
// 			nav4: 'Reisepakete',
//             title: 'Hunderte fantastische Reiseziele',
//             title1: 'Wir bieten eine Vielzahl von Reisezielen an, die von exotisch bis extrem extrem reichen. Dazu gehören sehr beliebte Länder und Städte wie Paris, Rio de Janeiro, Kairo und viele andere.',
// 			title2: 'Die Reise Ihrer Träume',
// 			title3: 'Unser Reisebüro ist bereit, Ihnen einen aufregenden Urlaub zu bieten, der ganz auf Ihre Bedürfnisse und Wünsche zugeschnitten ist. Ob es sich um eine exotische Kreuzfahrt oder einen Ausflug zu Ihrem Lieblingsresort handelt, Sie werden mit Sicherheit das beste Erlebnis haben',
// 			title4: 'einzigartige Reiseeinblicke',
// 			title5: 'Unser Team ist bereit, Ihnen wöchentlich einzigartige Reiseeinblicke zu liefern, darunter Fotos, Videos und Artikel über unbekannte Touristenpfade. Wir wissen alles über die Orte, an denen Sie noch nie waren!',
// 			title6: 'unsere Leistungen',
// 			title7: 'Flugtickets',
// 			title8: 'In unserem Reisebüro können Sie Flugtickets zu jedem Ziel weltweit buchen. Wir bieten auch eine Online-Ticketbuchung über unsere Website in nur wenigen Schritten an.',
// 			title9: 'Reisen und Kreuzfahrten',
// 			title10: 'Neben regulären Touren und Ausflügen bieten wir auch eine Vielzahl von Kreuzfahrten und Seereisen für verschiedene Kunden an, die auf der Suche nach tollen Erlebnissen sind.',
// 			title11: 'Hotelbuchungen',
// 			title12: 'Wir bieten eine große Auswahl an Hotels, von 5-Sterne-Hotels bis hin zu kleinen Hotels auf der ganzen Welt, sodass Sie ein Hotel buchen können, das Ihnen gefällt.',
// 			title13: 'Maßgeschneiderte Sommertouren',
// 			title14: 'Unsere Agentur bietet abwechslungsreiche Touren, einschließlich maßgeschneiderter Sommertouren für Kunden, die einen exklusiven und unvergesslichen Urlaub suchen.',
// 			title15: 'Neueste Nachrichten',
// 			title16: 'Hotels',
// 			title17: 'Usbekistan',
// 			title18: 'Tips',
// 			title19: 'Usbekistan',
// 			title20: 'Reisen',
// 			title21: 'Turkmenistan',
// 			title22: 'Erfahrungsberichte',
// 			title23: 'Der Inlandstourismus entwickelt sich gut. Es ist schön, sich in den Bergen auszuruhen. Besonders schön sind die Regionen Chimgan und Zaamin. Ich spaziere sehr gerne am Wasser entlang und besuche die historischen Orte des Landes.',
// 			title24: 'Emily Johnson',
// 			title25: 'Das Reisen innerhalb Usbekistans ist aufregend! Ein Besuch in Samarkand und Chiwa und die Besichtigung der antiken Denkmäler von Buchara und Schahrisabz ist ein besonderes Vergnügen! Ich entdecke gerne Orte, an denen Natur und Geschichte zusammenkommen',
// 			title26: 'Felix Schneider',
// 			title27: 'Reisen in Usbekistan ist großartig! Die historischen Orte von Samarkand und Buchara, die Natur von Fergana und das Savitsky-Museum in Nukus sind alle erstaunlich. Es macht mir immer Spaß, eine neue Ecke zu entdecken!',
// 			title28: 'Sofia Wagner',
// 			title29: 'Finden Sie Ihre Tour',
// 			title30: 'Von',
// 			title31: 'Taschkent',
// 			title32: 'Rückreise',
// 			title33: 'Buchara',
// 			title34: 'To',
// 			title35: 'Chiwa',
// 			title36: 'Urgentsch',
// 			title37: 'Samarkand',
// 			title38: 'Abreisedatum',
// 			title39: 'Wählen Sie das Datum',
// 			title40: 'Dauer',
// 			title41: 'Beliebige Länge',
// 			title42: '2 Tage',
// 			title43: '3 Tage',
// 			title44: '4 Tage',
// 			title45: 'Erwachsene',
// 			title46: 'Kinder',
// 			title47: 'Suchflug',
// 			title48: 'Alle Rechte vorbehalten. Design SMK WEB',
// 			title49: 'Heim',
// 			title50: 'Heim',
//         }
//     };

//     flagButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const selectedLanguage = button.getAttribute('data-language');
//             const translation = translations[selectedLanguage];

// 			document.getElementById('nav1').textContent = translation.nav1;
// 			document.getElementById('nav2').textContent = translation.nav2;
// 			document.getElementById('nav3').textContent = translation.nav3;
// 			document.getElementById('nav4').textContent = translation.nav4;
//             document.getElementById('title').textContent = translation.title;
// 			document.getElementById('title1').textContent = translation.title1;
// 			document.getElementById('title2').textContent = translation.title2;
// 			document.getElementById('title3').textContent = translation.title3;
// 			document.getElementById('title4').textContent = translation.title4;
// 			document.getElementById('title5').textContent = translation.title5;
// 			document.getElementById('title6').textContent = translation.title6;
// 			document.getElementById('title7').textContent = translation.title7;
// 			document.getElementById('title8').textContent = translation.title8;
// 			document.getElementById('title9').textContent = translation.title9;
// 			document.getElementById('title10').textContent = translation.title10;
// 			document.getElementById('title11').textContent = translation.title11;
// 			document.getElementById('title12').textContent = translation.title12;
// 			document.getElementById('title13').textContent = translation.title13;
// 			document.getElementById('title14').textContent = translation.title14;
// 			document.getElementById('title15').textContent = translation.title15;
// 			document.getElementById('title16').textContent = translation.title16;
// 			document.getElementById('title17').textContent = translation.title17;
// 			document.getElementById('title18').textContent = translation.title18;
// 			document.getElementById('title19').textContent = translation.title19;
// 			document.getElementById('title20').textContent = translation.title20;
// 			document.getElementById('title21').textContent = translation.title21;
// 			document.getElementById('title22').textContent = translation.title22;
// 			document.getElementById('title23').textContent = translation.title23;
// 			document.getElementById('title24').textContent = translation.title24;
// 			document.getElementById('title25').textContent = translation.title25;
// 			document.getElementById('title26').textContent = translation.title26;
// 			document.getElementById('title27').textContent = translation.title27;
// 			document.getElementById('title28').textContent = translation.title28;
// 			document.getElementById('title29').textContent = translation.title29;
// 			document.getElementById('title30').textContent = translation.title30;
// 			document.getElementById('title31').textContent = translation.title31;
// 			document.getElementById('title32').textContent = translation.title32;
// 			document.getElementById('title33').textContent = translation.title33;
// 			document.getElementById('title34').textContent = translation.title34;
// 			document.getElementById('title35').textContent = translation.title35;
// 			document.getElementById('title36').textContent = translation.title36;
// 			document.getElementById('title37').textContent = translation.title37;
// 			document.getElementById('title38').textContent = translation.title38;
// 			document.getElementById('title39').textContent = translation.title39;
// 			document.getElementById('title40').textContent = translation.title40;
// 			document.getElementById('title41').textContent = translation.title41;
// 			document.getElementById('title42').textContent = translation.title42;
// 			document.getElementById('title43').textContent = translation.title43;
// 			document.getElementById('title44').textContent = translation.title44;
// 			document.getElementById('title45').textContent = translation.title45;
// 			document.getElementById('title46').textContent = translation.title46;
// 			document.getElementById('title47').textContent = translation.title47;
// 			document.getElementById('title48').textContent = translation.title48;
// 			document.getElementById('title49').textContent = translation.title49;
// 			document.getElementById('title50').textContent = translation.title50;
//             // document.getElementById('description').textContent = translation.description;
//         });
//     });



// });








document.addEventListener('DOMContentLoaded', function () {
    const flagButtons = document.querySelectorAll('.flag-button');

    // Store translations
    const translations = {
        en: {


			pag1: 'Home',
			pag2: 'About',
			pag3: 'Contact',
			pag4: 'Uzbekistan - Moscheen, und Minaretten, das Land der',
			pag5: 'Routing: Tashkent-Samarkand-Bukhara-Khiva-Tashkent Duration: 9 days – 8 nights',
			pag6: 'Day 1 - Tashkent',
			pag7: 'Flight to Tashkent, arrival. Transfer to the hotel.',
			pag8: '06:00-07:00 - Breakfast at the hotel. 07:30 Take the express train to Samarkand.',
			pag9: '10:30-17:00 Arrival. City tour in Samarkand: Gur Amir Mausoleum (14th-15th centuries); The famous Registan Square (15-17 centuries); 19:00-20:00 - Dinner at the hotel or local restaurant. Overnight stay at the hotel.',
			pag10: 'Day 2 - Tashkent-Samarkand',
			pag11: '06:00-07:00 - Breakfast at the hotel',
			pag12: '07:30 Travel by express train to Samarkand. 10:30-17:00 Arrival. City tour in Samarkand: Gur Amir Mausoleum (14th-15th centuries); The famous Registan Square (15-17th century); 7:00 p.m. - 8:00 p.m. - Dinner at the hotel or in the local restaurant. Overnight stay at the hotel.',
			pag13: 'INCLUDED IN THE TRAVEL PRICE:',
			pag14: '⦁ Accommodation in the specified hotels in a double room with shower/WC or bath/WC; ⦁ All transfers and excursions in the usual car, coach with A/C according to the program;',
			pag15: '⦁ Professional German-speaking tour guides during the program; ⦁ Entrance fees for all places visited; ⦁ Folklore and fashion show in the madrassa “Nodir Devon Begi” (Bukhara); ⦁ 1 liter bottle of water per person per day;',
			pag16: '⦁ Wine tasting at the "Samarkand Wine Factory". ⦁ Theater performance of "El-Merosi". ⦁ half board; ⦁ Presentation of the national dish “Pilaf” to an Uzbek family; ⦁ Train tickets Tashkent-Samarkand (fast train).',
			pag17: 'Type packages',
			pag18: 'Day 3 - Samarkand',
			pag19: '08:00-09:00 - Breakfast at the hotel. Sightseeing in Samarkand: Bibi Khanum Mosque (14th century); The Oriental Bazaar; Ulugbek Observatory (15th century); Afrosiab Museum; the ancient paper factory (8th century); Shahi Sinda necropolis (11th century - 15th century); Wine tasting at the "Samarkand Wine Factory"; Theater performance of "El-Merosi". 19:00-20:00 - Dinner at the hotel or local restaurant. Overnight stay at the hotel.',
			pag20: 'Day 4 - Samarkand-Bukhara',
			pag21: '07:00-08:00 - Breakfast at the hotel. Trip to Bukhara. On the way visit to the caravanserai – Rabat-e Malik; Ceramic workshop in Gishduvan. 3:00 p.m. - Arrival. Transfer to the hotel. Check in. Sightseeing in Bukhara: the Ark Citadel (16th century); Bolo Chaus Mosque (1712); <br>18:30-20:00 – Dinner with an Uzbek family. Overnight stay at the hotel.',
			pag22: 'Day 5 - Bukhara',
			pag23: '08:00-09:00 - Breakfast at the hotel. Further detailed city tour in Bukhara: the Samanid Mausoleum (9-10 centuries); Chashma Ayub Mausoleum (12th century); Poi Kalan complex: “Kalan Mosque”, “Miri Arab Madrasa”, “Kalan Minaret” (12th - 16th centuries); Market dome buildings (16th century); Lyabi Chaus complex (16-17 centuries); Choir-minor madrasa (19th century). 6:00 p.m. - 7:00 p.m. - Folklore in the Madrasah “Nodir Devon Begi”',
			pag24: 'Day 6 - Bukhara-Khiva',
			pag25: '08:00-09:00 - Breakfast at the hotel. Drive on the ancient trade route through the Kisilkum desert past oases and red sand dunes to Khiva, whose beauty was praised by traders and travelers of the Middle Ages. (430km – approx. 7-8 hours)',
			pag26: 'Type packages',
			pag27: 'Type packages',
			pag28: 'NOT INCLUDED IN THE TRAVEL PRICE:',
			pag29: 'Day 7 - Khiva',
			pag30: 'Day 7 - Khiva 08:00-09:00 - Breakfast at the hotel. City tour in Khiva: Kalta Minar and Muhammad Amin Chan Madrasah (19th century); Juma Mosque – Friday Mosque (1788-1789); Kunya Ark Citadel (17th – 19th centuries); Tash Hauli Palace (19th century), Islam Chodja minaret and madrasa (20th century); Pachlawan Machmud Complex (1247-1325). 19:00-20:00 - Dinner at a local restaurant. Overnight stay at the hotel.',
			pag31: 'Early breakfast at the hotel. Transfer to the airport. Flight to Tashkent with HY-1060 at 06:05-07:35 08:00 - Arrival. Transfer to the hotel. Check in. Tashkent city tour: Museum of Applied Arts, Hasrat Imam Complex, Chorsu Bazaar, Kukeldash Madrasah, Barakchan Madrasah (16th century). 13:00-14:00 Lunch at a local restaurant Independence Square, Amir Temur Park and Alisher Navoi Opera and Ballet Theater; Tashkent metro. 6:00 p.m. - 8:00 p.m. - Farewell dinner with folklore show in the “Piligrim” restaurant. Overnight stay at the hotel.',
			pag32: 'Day 8 - Khiva-Urgench-Tashkent:',
			pag33: 'Day 9 – Tashkent Breakfast. Transfer to the airport. Flight home.',
			pag34: '⦁ Alcoholic beverages (vodka, beer, etc.);',
			pag35: '⦁ Photo and camera fees;',
			pag36: '⦁ Uzbek visa;',
			pag37: '⦁ Tips for tour guides and drivers;',
			pag38: '⦁ International airline tickets;',
			pag39: 'Urgench-Tashkent domestic flight ($55)',
			pag40: 'Our travel package prices',
			pag41: 'Input',
			pag42: 'TRIP PRICE IN USD:',
			pag43: '2 people - $927 ----- 3 people - $876 4 people - $798 ----- 5 people - $747 6 people - $729 ----- 7 people - $704 8 people - $689 ----- 9 people - $673',
			pag44: 'plurality',
			pag45: '10-15 Pax - $655 16-20 Pax - $623 21-25 Pax - $606 26-30 Pax - $588',
			pag46: 'Pleasant day hikes or leisurely trekking tours in combination with overwhelming mountain scenery and cultural highlights of a country can have a better effect and leave unforgettable impressions.',
			pag47: 'Headboard',
			pag48: 'Home',
			pag49: 'About Us',
			pag50: 'Contact',
			pag51: 'Home',
			pag52: 'About Us',
			pag53: 'Contact',
			pag54: 'Highlights of Uzbekistan',
			pag55: 'Routing: Tashkent-Samarkand-Shahrisabs-Bukhara-Khiva-Urgench-Tashkent Travel duration: 10 days – 9 nights',
			pag56: 'Day 1 - Tashkent',
			pag57: 'Flight to Tashkent, arrival. Transfer to the hotel.',
			pag58: 'Day 2 - Tashkent-Samarkand',
			pag59: '06:00-07:00 - Breakfast at the hotel 08:10 - Transfer to the train station. Take the express train to Samarkand.',
			pag60: '09:00-16:00 - City tour of Samarkand: Gur Amir Mausoleum (14th-15th centuries); The famous Registan Square (15-17 centuries); Bibi Khanum Mosque (14th century); Shahi Sinda necropolis (11th century - 15th century); 19:00-20:00 - Dinner at the hotel or local restaurant. Overnight stay at the hotel. 6:30-8:00 p.m. - Dinner with an Uzbek family.',
			pag61: 'Day 3 - Samarkand',
			pag62: '08:00-09:00 - Breakfast at the hotel. Other sightseeing in Samarkand: Ulugbek Observatory. (15th century); Afrosiab Museum with the murals; The Oriental Bazaar; Wine tasting at the "Samarkand Wine Factory"; Theater performance of "El-Merosi".',
			pag63: 'LEISURE IN SAMARKAND',
			pag64: '19:00-20:00 - Dinner at the hotel or local restaurant. Overnight stay at the hotel.',
			pag65: 'INCLUDED IN THE TRAVEL PRICE:',
			pag66: '⦁ Accommodation in the specified hotels in a double room with shower/WC or bath/WC; ⦁ All transfers and excursions in the usual car, coach with A/C according to the program;',
			pag67: '⦁ Professional German-speaking tour guides during the program; ⦁ Entrance fees for all places visited; ⦁ Folklore and fashion show in the madrassa “Nodir Devon Begi” (Bukhara); ⦁ 1 liter bottle of water per person per day;',
			pag68: '⦁ Wine tasting at the "Samarkand Wine Factory". ⦁ Theater performance of "El-Merosi". ⦁ half board; ⦁ Presentation of the national dish “Pilaf” to an Uzbek family; ⦁ Train tickets Tashkent-Samarkand (fast train).',
			pag69: 'Type packages',
			pag70: 'Day 4 - Samarkand-Shahrisabs-Bukhara',
			pag71: '08:00-09:00 - Breakfast at the hotel. Drive to Shahrisabs. City tour: Ok Saroy Palace (14th century), Kök Gumbas Mosque (15th century); Mausoleum Dorus Saodat (14th century). We continue to Bukhara. 6:00 p.m. – Arrival and check-in at the hotel. 19:00-20:00 - Dinner at the hotel. Overnight stay at the hotel.',
			pag72: 'Day 5 - Bukhara',
			pag73: 'Day 5 - Bukhara 08:00-09:00 - Breakfast at the hotel. City tour in Bukhara: the Ark Citadel (16th century); Bolo Chaus Mosque (1712); Samanid Mausoleum (897-907); Chashma Ayub Mausoleum (12th century); PoiKalan complex: “Kalan Mosque”, “Miri Arab Madrasa”, “Kalan Minaret” (12th - 16th centuries); Ulugbek and Abdulaziz Khan madrassas (15th-17th centuries); Market dome buildings: (16th century); Lyabi Chaus complex (16-17 centuries); Choir-minor madrasa (19th century).',
			pag74: 'Day 6 - Bukhara',
			pag75: '08:00-09:00 - Breakfast at the hotel. Further detailed city tour in Bukhara: the Samanid Mausoleum (9-10 centuries); Chashma Ayub Mausoleum (12th century); Poi Kalan complex: “Kalan Mosque”, “Miri Arab Madrasa”, “Kalan Minaret” (12th - 16th centuries); Market dome buildings (16th century); Lyabi Chaus complex (16-17 centuries); Choir-minor madrasa (19th century).',
			pag76: 'Day 7 - Bukhara-Khiva',
			pag77: '08:00-09:00 - Breakfast at the hotel. Drive on the ancient trade route through the Kisilkum desert past oases and red sand dunes to Khiva, whose beauty was praised by traders and travelers of the Middle Ages. (430km – approx. 7-8 hours)',
			pag78: 'Type packages',
			pag79: 'Type packages',
			pag80: 'NOT INCLUDED IN THE TRAVEL PRICE:',
			pag81: 'Day 8 - Khiva',
			pag82: '08:00-09:00 - Breakfast at the hotel. City tour in Khiva: Kalta Minar and Muhammad Amin Chan Madrasa, Juma Mosque - Friday Mosque (1788-1789); Kunya Ark Citadel (17th – 19th centuries); Tash Hauli Palace (19th century), Islam Chodja minaret and madrasah (20th century), Pachlawan Machmud complex (16-19th century). 19:00-20:00 - Dinner at a local restaurant. Overnight stay at the hotel.',
			pag84: 'Day 9 - Khiva-Urgench-Tashkent Early breakfast at the hotel. Transfer to the airport. 07:20 - Flight to Tashkent with HY-1060 08:35 - Arrival.  City tour in Tashkent: the Museum of Applied Arts, Hasrat Imam Complex, Chorsu Bazaar, Kukeldash Madrasah, Barakchan Madrasah (16th century - 19th century). Independence Square, Amir Temur Park and Alisher Navoy Opera and Ballet Theater; Tashkent metro (1972).18:00-20:00 - Farewell dinner with folklore show in the restaurant “Piligrim”.  Overnight stay at the hotel.',
			pag85: 'Day 10 - Tashkent Breakfast. Transfer to the airport. Flight home',
			pag86: '⦁ alcoholic beverages (vodka, beer, etc.);',
			pag87: '⦁ Photo and camera fees;',
			pag88: '⦁ Uzbek visa',
			pag89: '⦁ Drinking money for tour guides and drivers',
			pag90: '⦁ International airline tickets;',
			pag91: '⦁ Urgench-Tashkent domestic flight ($55)',
			pag92: 'Our travel package prices',
			pag93: 'Input',
			pag94: 'TRIP PRICE IN USD:',
			pag95: '2 Pax - $927 ----- 3 Pax - $876 4 Pax - $798 ----- 5 Pax - $747 6 Pax - $729 ----- 7 Pax - $704 8 Pax - $689 -----9 Pax - $673',
			pag96: 'plurality',
			pag97: '10-15 pax - $655 16-20 pax - $623 21-25 pax - $606 26-30 pax - $588',
			pag98: 'Pleasant day hikes or leisurely trekking tours in combination with overwhelming mountain scenery and cultural highlights of a country can have a better effect and leave unforgettable impressions.',
			pag99: 'Headboard',
			pag100: 'Home',
			pag101: 'About Us',
			pag102: 'Contact',
			pag103: 'Travel packages',
			pag104: 'Travel packages-2',


			sos1: 'Home',
			sos2: 'About Us',
			sos3: 'Contact',
			sos4: 'Uzbekistan - the heart of Central Asia',
			sos5: '«Uzbekistan - the heart of Central Asia» Routing: Tashkent-Fergana Valley-Tashkent-Samarkand-Shahrisabs-Bukhara-Khiva-Urgench-Tashkent Travel duration: 11 days – 10 nights',
			sos6: 'Day 1 - Tashkent',
			sos7: 'Flight to Tashkent, arrival. Transfer to the hotel.',
			sos8: 'Day 2 - Tashkent-Kokand-Rishtan-Fergana',
			sos9: 'Day 2 - Tashkent-Kokand-Rishtan-Fergana 08:00-09:00 – Breakfast at the hotel. 09:30 – Drive to Kokand over the mountain pass.',
			sos10: 'Sightseeing in Kokand: Palace of Chudayar (1871); Khane cemetery and Dachmai-Schokhon mausoleum (19th century). Continue to Rishtan. Visit to the ceramics workshop. 16:30 - Then drive to Fergana. 5:30 p.m. - Arrival. Transfer to the hotel, check-in. 7:00 p.m. - 8:00 p.m. – Dinner at the hotel. Overnight stay at the hotel.',
			sos11: 'Day 3 - Fergana-Margilan-Tashkent 08:00-09:00 – Breakfast at the hotel. 09:30 – Drive to Margilan.',
			sos12: 'Further visit in Margilan: silk workshop. Return to Tashkent over the mountain pass.',
			sos13: 'Arrival in Tashkent. Transfer to the hotel. Check in. 9:00-20:00 – Dinner in a restaurant or hotel. Overnight stay at the hotel.',
			sos14: 'INCLUDED IN THE TRAVEL PRICE:',
			sos15: '⦁ Accommodation in the specified hotels in a double room with shower/WC or bath/WC; ⦁ All transfers and excursions in the usual car, coach with A/C according to the program;',
			sos16: '⦁ Professional German-speaking tour guides during the program; ⦁ Entrance fees for all places visited; ⦁ Folklore and fashion show in the madrassa “Nodir Devon Begi” (Bukhara); ⦁1 liter bottle of water per person per day;',
			sos17: '⦁ Wine tasting at the "Samarkand Wine Factory". ⦁ Theater performance of "El-Merosi". ⦁ half board; ⦁ Presentation of the national dish “Pilaf” to an Uzbek family; ⦁ Train tickets Tashkent-Samarkand (fast train).',
			sos18: 'Type packages',
			sos19: 'Day 4 - Tashkent-Samarkand',
			sos20: '06:00-07:00 - Breakfast at the hotel 08:10 - After breakfast transfer to the train station. Take the express train to Samarkand. 10:30-17:00 - Arrival. City tour in Samarkand: Gur Amir Mausoleum (14th-15th centuries); The famous Registan Square (15-17 centuries). 6:30-8:00 p.m. – Dinner with an Uzbek family. Overnight stay at the hotel.',
			sos21: 'Day 5 - Samarkand',
			sos22: '08:00-09:00 - Breakfast at the hotel. 09:00 Sightseeing in Samarkand: Bibi Khanum Mosque (14th century); The Oriental Bazaar; Ulugbek Observatory. (15th century); Shahi Sinda necropolis (11th century - 15th century); Wine tasting at the "Samarkand Wine Factory"; Theater performance of "El-Merosi". 19:00-20:00 - Dinner at the hotel or local restaurant. Overnight stay at the hotel.',
			sos23: 'Day 6 - Samarkand-Shahrisabs-Bukhara',
			sos24: '08:00-09:00 - Breakfast at the hotel. 09:30 - Drive to Shahrisabs. City tour: Ok Saroy Palace (14th century) “White Castle”. Kök Gumbas Mosque (15th century), Mausoleum Dorus Saodat (14th century) We continue to Bukhara. 6:00 p.m. – Arrival and check-in at the hotel. 19:00-20:00 - Dinner at local restaurant.',
			sos25: 'Day 7 - Bukhara',
			sos26: '08:00-09:00 - Breakfast at the hotel. City tour in Bukhara: The Ark Citadel (7th century); Bolo Chaus Mosque (1712); Samanid Mausoleum (897-907); Poi Kalan complex: “Kalan Mosque and Minaret”, “Miri Arab Madrasa” (12th - 16th centuries);',
			sos27: 'Type packages',
			sos28: 'Type packages',
			sos29: 'NOT INCLUDED IN THE TRAVEL PRICE:',
			sos30: 'Day 8 - Bukhara-Khiva',
			sos31: '08:00-09:00 - Breakfast at the hotel. 09:30 - Drive on the ancient trade route through the Kisilkum desert past oases and red sand dunes to Khiva, whose beauty was praised by the traders and travelers of the Middle Ages. (430km – approx. 7-8 hours) You arrive in the city of Khiva in the late afternoon. 7:00 p.m. - 8:00 p.m. Dinner at the hotel. Overnight stay at the hotel.',
			sos32: 'Day 11 – Tashkent',
			sos33: 'Breakfast. Transfer to the airport. Flight home.',
			sos34: 'Day 9 - Khiva 08:00-09:00 - Breakfast at the hotel. City tour in Khiva: Kalta Minar and Muhammad Amin Chan Madrasah, Juma Mosque - Friday Mosque (1788-1789) - built in the 10th century, Kunya Ark Citadel - 17th - 19th centuries; Tash Hauli Palace (19th century), Islam Chodja Minaret and Madrasa (20th century), Pachlawan Machmud Complex – Pachlawan Machmud (1247-1325); 19:00-20:00 - Dinner at a local restaurant. Overnight stay at the hotel.',
			sos35: 'Day 10 - Khiva-Urgench-Tashkent Early breakfast at the hotel. Transfer from Khiva to Urgench airport. 07:20 - Flight to Tashkent with HY-1060. 6:00 p.m. - 8:00 p.m. - Farewell dinner with folklore show in the “Piligrim” restaurant. The overnight stay in the hotel.',
			sos36: '⦁ Alcoholic beverages (vodka, beer, etc.);',
			sos37: '⦁ Photo and camera fees;',
			sos38: '⦁ Uzbek visa;',
			sos39: '⦁ Tips for tour guides and drivers;',
			sos40: '⦁ International airline tickets;',
			sos41: '⦁ Urgench-Tashkent domestic flight ($55)',
			sos42: 'Our travel package prices',
			sos43: 'Input',
			sos44: 'TRIP PRICE IN USD:',
			sos45: '2 Pax - $1046 ----- 3 Pax - $966 4 Pax - $894 ----- 5 Pax - $828 6 Pax - $821 ----- 7 Pax - $783 8 Pax - $768 ----- 9 Pax - $762',
			sos46: 'plurality',
			sos47: '0-15 pax - $746 16-20 pax - $710 21-25 pax - $679 26-30 pax - $674',
			sos48: 'Pleasant day hikes or leisurely trekking tours in combination with overwhelming mountain scenery and cultural highlights of a country can have a better effect and leave unforgettable impressions.',
			sos49: 'Headboard',
			sos50: 'Home',
			sos51: 'About Us',
			sos52: 'Contact',
			sos53: 'Travel packages',
			sos54: 'Travel packages-2',


			you1: 'Home',
			you2: 'About Us',
			you3: 'Contact',
			you4: 'Uzbekistan - the magical Orient',
			you5: '«Uzbekistan - the heart of Central Asia» Routing: Tashkent-Nukus-Khiva-Bukhara-Nurata-Yangigazgan-Samarkand-Shahrisabs-Samarkand-Tashkent Travel duration: 14 days – 13 nights',
			you6: 'Day 1 - Tashkent',
			you7: '06:15 – Arrive in Tashkent with TK-368. Transfer to the hotel. (Turkish Airlines) Quiet time until 1:00 p.m.',
			you8: '1:00 p.m. - 5:30 p.m. - City tour of Tashkent: Hasrat Imam Complex (16-19 centuries), Chorsu Bazaar, the Kukeldash Madrasa (16 century) and Barakchan Madrasa (16 century); Independence Square; Amir Temur Park; Tashkent metro (1972).',
			you9: '19:00-20:00 - Dinner at local restaurant. Overnight stay at the hotel. 05:00-05:30 - Early breakfast. Check-out and transfer to the airport. 07:10 - Flight from Tashkent to Nukus with HY 11. 09:00 - Arrival. Excursion to Muynak – the place where you can see the drying out of the Aral Sea. Drive to Chojayli (20 km). Visit to the huge burial city of Misdachan (3-8 centuries). 7:00 p.m. - 8:00 p.m. - Dinner and overnight at the hotel.',
			you10: 'Day 2 - Tashkent Nukus',
			you11: 'Day 3 - Nukus-Khiva',
			you12: '08:00-09:00 – Breakfast at the hotel. 09-00-10:00 After breakfast visit the Sawitsky Museum in Nukus. This museum has a collection of paintings that is unique in the world and was put together by the Russian art lover Igor Savitzky at the risk of his life. 10:00 - Drive through the Kyzyl-Kum desert to Khiva. (Travel time approx. 3 hours, 190 km) 1:00 p.m. – Arrival and check-in at the hotel. Free time in Khiva 7:00 p.m. - 8:00 p.m. - Dinner at the hotel. Overnight stay at the hotel.',
			you13: 'Further visit in Margilan: silk workshop. Return to Tashkent over the mountain pass.',
			you14: 'Arrival in Tashkent. Transfer to the hotel. Check in. 9:00-20:00 – Dinner in a restaurant or hotel. Overnight stay at the hotel.',
			you15: 'INCLUDED IN THE TRAVEL PRICE:',
			you16: '⦁ Accommodation in the specified hotels in a double room with shower/WC or bath/WC; ⦁ All transfers and excursions in the usual car, coach with A/C according to the program;',
			you17: '⦁ Professional German-speaking tour guides during the program; ⦁ Entrance fees for all places visited; ⦁ Folklore and fashion show in the madrassa “Nodir Devon Begi” (Bukhara); ⦁ 1 liter bottle of water per person per day;',
			you18: '⦁ Wine tasting at the "Samarkand Wine Factory". ⦁ Theater performance of "El-Merosi". ⦁ half board; ⦁ Presentation of the national dish “Pilaf” to an Uzbek family; ⦁ Train tickets Tashkent-Samarkand (fast train).',
			you19: 'Type packages',
			you20: 'Day 4 - Khiva',
			you21: '08:00-09:00 - Breakfast at the hotel. City tour in Khiva: You take a city tour of the once important caravan city - Khiva. The tour takes you to impressive palaces, mosques, mausoleums and madrassas such as: Kalta Minar and Muhammad Amin Chan Madrasah, Juma Mosque - Friday Mosque (1788-1789) - built in the 10th century and restored at the end of the 18th century. The wooden beam ceiling of the hall is supported by 213 columns, which are up to 1000 years old and have artistic carvings;',
			you22: 'Day 5 - Khiva-Bukhara',
			you23: '08:00-09:00 - Breakfast at the hotel. 09:30 - Drive on the ancient trade route through the Kisilkum desert past oases and red sand dunes to Khiva, whose beauty was praised by the traders and travelers of the Middle Ages. (Distance – 455 km, travel time – 8 hours) In the late afternoon you arrive in the city of Bukhara.',
			you24: 'Day 6 - Bukhara',
			you25: '08:00-09:00 - Breakfast at the hotel. City tour in Bukhara: After having a leisurely breakfast, start sightseeing in the fairytale city of Bukhara: Ark Fortress. This fortress was probably built at the beginning of the first century AD. The citadel was destroyed several times.',
			you26: 'Day 7 - Bukhara',
			you27: '08:00-09:00 - Breakfast at the hotel. 10:00-14:00 – City tour around the city of Bukhara. There is the opportunity to visit the following monuments: Chor-Minor Madrasa was built in the Indian style.',
			you28: 'Type packages',
			you29: 'Type packages',
			you30: 'NOT INCLUDED IN THE TRAVEL PRICE',
			you31: 'Day 8 - Bukhara-Nurata-Yangigazgan',
			you32: '07:00-08:00 – Breakfast at the hotel. After breakfast you leave the now beloved oasis city of Bukhara and drive to the small pilgrimage town of Nurata (distance approx. 3 hours, approx. 175 km). 11:00-13:00 After arrival, sightseeing in Nurata takes place. Here we visit a mosque from the 17th century and the remains of a fortress from the time of Alexander the Great. 6:00-8:00 p.m. - Dinner in the yurt camp. Overnight stay in yurts.',
			you33: 'Day 9 – Nurata – Samarkand',
			you34: '08:00-09:00 – Breakfast at the hotel. 09:00-10:00 After breakfast you have the opportunity to test your skills',
			you35: 'Day 11 - Samarkand 08:00-09:00 - Breakfast at the hotel. 09:00 - Drive to Schahrisabs over the mountain pass by car. (Distance – 85 km, travel time – 2 hours) 11:00 arrival. City tour. Mausoleum Dorus Saodat (14th century) is a 70 x 90m complex. Through a small door you enter a wide courtyard shaded by old plane trees and surrounded by several buildings.',
			you36: 'Day 12 – Tashkent – ​​Kokand – Margilan – Fergana Early breakfast at the hotel. Transfer from Khiva to Urgench airport. 06:00-07:00 - Breakfast at the hotel. Transfer to the train station. 08:05 Travel from Tashkent to Kokand by train “Sabsan”.',
			you37: '⦁ Alcoholic beverages (vodka, beer, etc.);',
			you38: '⦁ Photo and camera fees;',
			you39: '⦁ Uzbek visa;',
			you40: '⦁ Tips for tour guides and drivers;',
			you41: '⦁ International airline tickets;',
			you42: '⦁ Urgench-Tashkent domestic flight ($55)',
			you43: 'Our travel package prices',
			you44: 'Input',
			you45: 'TRIP PRICE IN USD:',
			you46: '2 Pax - $864 ----- 3 Pax - $813 4 Pax - $737 ----- 5 Pax - $689 6 Pax - $672 ----- 7 Pax - $649 8 Pax - $634 ----- 9 Pax - $619',
			you47: 'plurality',
			you48: '10-15 pax - $604 16-20 pax - $571 21-25 pax - $555 26-30 pax - $538',
			you49: 'Pleasant day hikes or leisurely trekking tours in combination with overwhelming mountain scenery and cultural highlights of a country can have a better effect and leave unforgettable impressions.',
			you50: 'Headboard',
			you51: 'Home',
			you52: 'About Us',
			you53: 'Contact',
			you54: 'Travel packages',
			you55: 'Travel packages-2',


			me1: 'Home',
			me2: 'About Us',
			me3: 'Contact',
			me4: 'ON THE TRACK OF THE LEGENDARY CARAVAN',
			me5: 'Routing: Tashkent-Urgench-Khiva-Bukhara-Kizilkum Desert - Sarmish Gorge-Audarkul Lake-Sentjab-Samarkand-Tashkent Duration: 13 days - 12 nights Meals: B=Breakfast & D=Dinner',
			me6: 'Day 1: Arrival',
			me7: 'Around midday, scheduled flight with Uzbekistan Airways from Frankfurt non-stop to Tashkent. Arrival in the evening and reception by your local, German-speaking Uzbek tour guide. Transfer to the city hotel.',
			me8: 'Day 2: Tashkent - Urgench - Khiva In the morning we take a tour of the metropolis of Tashkent, which stood in the shadow of Bukhara and Samarkand during the time of Timur, but is now the capital of Uzbekistan. The plan includes a walk through the Navoij amusement park to the Parliament and Palace of International Understanding, a ride on the metro, built in 1972, the only subway in Central Asia with some originally designed stations, and a stroll through the lively pedestrian zone to the Amir Timur monument (selection and order will be suggested by your local tour guide).',
			me9: 'Day 3: Khiva',
			me10: 'In the morning and afternoon we will visit numerous monuments of Khiva - today a unique "open-air museum". Khiva is described as a dream from the Thousand and One Nights turned to stone. A wall protected the city with its magnificent buildings and houses made of unfired bricks. With the help of UNESCO, the old town of Itschan Kale was restored and is now a listed building. Magnificently furnished buildings such as monumental gates, mosques, minarets, madrassas and mausoleums can be seen here.',
			me11: 'In the late afternoon we have time to stroll through the alleys of the old town again and climb a high minaret. You can get an impression of the traditional cityscape of an Islamic-influenced Central Asian oasis city. Hotel; (FA)',
			me12: 'Day 4: Khiva - Bukhara',
			me13: 'On the journey to Bukhara we cross part of the vast, steppe-like Kizilkum Desert (its name means "red sand"), which stretches between the Amu Darja rivers in the south and Syr Darja in the north. The soil is actually fertile, but can hardly be cultivated due to a lack of water. For this purpose, mineral resources are mined here. After a photo stop at Amu Darja, we have a picnic lunch. Late in the afternoon, after about 440 km, we arrive in the Sarafshan valley and in the densely populated oasis of Bukhara, which is nicknamed "the noble one".',
			me14: 'We stayed for three nights in a private hotel on the edge of the old town. In the evening we take a short tour of the historic city center. Distance approx. 440 km;',
			me15: 'Day 5: Bukhara',
			me16: 'In the afternoon there is time for self-guided walks. At around 6 p.m. we meet in the courtyard of the Nadir Diwan-Begi Madrasah. Here we watch a professional folklore event with a fashion show worth seeing. 19:00-20:30 - Today you are also invited to an Uzbek family for dinner. You then have a good opportunity to get to know a typical Uzbek family with their traditions. Participation in plow cooking. You will take a very active part in the process of cooking our national dish. The taste of the dish is incredibly delicious.',
			me17: 'INCLUDED IN THE TRAVEL PRICE:',
			me18: '⦁ Accommodation in the specified hotels in a double room with shower/WC or bath/WC; ⦁ All transfers and excursions in the usual car, coach with A/C according to the program;',
			me19: '⦁ Professional German-speaking tour guides during the program; ⦁ Entrance fees for all places visited; ⦁ Folklore and fashion show in the madrassa “Nodir Devon Begi” (Bukhara); ⦁ 1 liter bottle of water per person per day;',
			me20: '⦁ Wine tasting at the "Samarkand Wine Factory". ⦁ Theater performance of "El-Merosi". ⦁ half board; ⦁ Presentation of the national dish “Pilaf” to an Uzbek family; ⦁ Train tickets Tashkent-Samarkand (fast train).',
			me21: 'Type packages',
			me22: 'Day 6: Bukhara',
			me23: 'This morning we are traveling by bus. First we drive to the Sitorei summer palace outside and marvel at the rich furnishings in the rooms. Then we visit the Mausoleum of the Samanids, probably the oldest surviving Islamic building in Central Asia (built around the year 900), and look at other monuments in the park landscape. The Minor Chor Mosque is also worth a detour.',
			me24: 'Day 7: Kizilkum Desert - Sarmisch Gorge',
			me25: 'We drive via Nawoi to Nurata and take a detour into the picturesque gorge of Sarmisch. According to archaeologists, there are over 4,000 rock carvings from the Stone and Bronze Ages in the local open-air museum. On the dark brown slate rocks there are numerous hunting scenes with wild animals that lived here in the distant past.',
			me26: 'Day 8: Camel safari to Aydarkul Lake',
			me27: 'In the morning the camel drivers arrive with their camels. There is a camel and driver available for every two fellow travelers, so you can take turns riding and hiking. Hours in the morning and afternoon, interrupted by breaks and a lunch break with a picnic.',
			me28: 'Day 9: Hike in the green village of Sentjab',
			me29: 'We drive to the green mountain village of Sentjab, where we stay in a simple guesthouse with 3-4 beds.',
			me30: 'Type packages',
			me31: 'Type packages',
			me32: 'NOT INCLUDED IN THE TRAVEL PRICE:',
			me33: 'Day 10: Continuation of the hike',
			me34: 'We want to hike again today. Our route takes us through the valley of the mountain river Kadvansai, we enjoy the landscape and visit rock carvings and a waterfall along the way. Walking time approx. 6 hours; ascent 400m; Descent 400m; simple guest house; (FA)- Picnic in the mountains.',
			me35: 'Day 11: Samarkand',
			me36: 'After breakfast we can start our tour of the city, e.g. For example, you can visit the Ulughbek Observatory or soak up the atmosphere of the illuminated Registan Square and the Gur Emir Mausoleum in the evening.',
			me37: 'Day 12: Tashkent In the morning we cover the 290 km route to Tashkent. In the afternoon we can do a little sightseeing in Tashkent before enjoying our farewell dinner in a typical restaurant.',
			me38: 'Day 13: Return journey Early in the morning transfer to the airport and farewell to the Uzbek companion; Return flight with Uzbekistan Airways from Tashkent to Frankfurt. Arrival in the morning.',
			me39: '⦁ alcoholic beverages (vodka, beer, etc.);',
			me40: '⦁ Photo and camera fees;',
			me41: '⦁ Uzbek visa;',
			me42: '⦁ Tips for tour guides and drivers;',
			me43: '⦁ International airline tickets;',
			me44: '⦁ Urgench-Tashkent domestic flight ($55)',
			me45: 'Our travel package prices',
			me46: 'Input',
			me47: 'TRAVEL PRICE IN USD:',
			me48: '2 Pax - $1034 ----- 3 Pax - $1007 4 Pax - $892 ----- 5 Pax - $820 6 Pax - $793 ----- 7 Pax - $755 8 Pax - $732 ----- 9 Pax - $725',
			me49: 'plurality',
			me50: '10-15 pax - $698 16-20 pax - $637 21-25 pax - $618 26-30 pax - $611',
			me51: 'Pleasant day hikes or leisurely trekking tours in combination with overwhelming mountain scenery and cultural highlights of a country can have a better effect and leave unforgettable impressions',
			me52: 'Headboard',
			me53: 'Home',
			me54: 'About Us',
			me55: 'Contact',
			me56: 'Travel packages',
			me57: 'Travel packages-2',


			we1: 'Home',
			we2: 'About Us',
			we3: 'Contact',
			we4: 'Combined trip in Central Asia:',
			we5: 'Destinations: Turkmenistan & Uzbekistan & Kazakhstan Duration: 12 days/11 nights Route: Farab/Alat-Bukhara-Samarkand-Tashkent-Almaty-Home',
			we6: 'DAY 1. ARRIVAL TO ASHGABAT',
			we7: 'Arrival in Ashgabat (by flight) 07:00-09:00 Breakfast at the hotel. 10:00 a.m. - 1:00 p.m. City tour in Ashgabat: visit to the Neutrality Monument (new monument, the old one was destroyed), Independence Square and Presidential Palace, Majlis (the National Parliament) and National Museum. 1:00 p.m. - 3:00 p.m. Lunch in the local restaurant 3:00 p.m. Continuation of the city tour in Ashgabat: Carpet Museum, by cable car to Kopet-Dag (Turkmenbashi cable car) and Tolkuchka Bazaar.  8:00 p.m. - 10:00 p.m. Dinner at the local restaurant. Overnight stay at the hotel.',
			we8: 'DAY 2. ASHGABAT-DASHOGUZ-KUNYA URGENTCH-DASHOGUZ',
			we9: '(190 km) 07.00-09.00 Breakfast at the hotel Departure from Ashgabat to Dashoguz Continue to Kunya-Urgench: Nejameddin Kubra Mausoleum and Sultan Ali Mausoleum 13:00-15:00 Lunch in the local restaurant',
			we10: '15:00 Continuation of the sightseeing in Kunya-Urgench: Visit to the Turabeg Hanum complex, Sayid Akhmed mausoleum, Gutlug Timur minarets, Sultan Tekesh mausoleums, II-Arslan mausoleum, Mamun II minarets. Return to Dashoguz. Check in at the hotel. 8:00 p.m. - 10:00 p.m. Dinner in the local restaurant. Overnight stay.',
			we11: 'DAY 3. DASHOGUZ – DARVAZA-ERBENT-ASHGABAT (560 KM)',
			we12: '07:00-09:00 Breakfast at the hotel Drive through Karakum desert, visit the Darvaza gas crater (all three craters). The town of Erbent with an oasis town and camels, tea break in a nomad yurt. 1:00 p.m. - 3:00 p.m. Lunch',
			we13: 'Arrival in Ashgabat and check-in at the hotel 8:00 p.m.-10:00 p.m. Dinner at the local restaurant. Overnight stay at the hotel.',
			we14: 'INCLUDED IN THE TRAVEL PRICE:',
			we15: '⦁ Accommodation in the specified hotels in a double room with shower/WC or bath/WC; ⦁ All transfers and excursions in the usual car, coach with A/C according to the program;',
			we16: '⦁ Professional German-speaking tour guides during the program; ⦁ Entrance fees for all places visited; ⦁ Folklore and fashion show in the madrassa “Nodir Devon Begi” (Bukhara); ⦁ 1 liter bottle of water per person per day;',
			we17: '⦁ Wine tasting at the "Samarkand Wine Factory". ⦁ Theater performance of "El-Merosi". ⦁ half board; ⦁ Presentation of the national dish “Pilaf” to an Uzbek family; ⦁ Train tickets Tashkent-Samarkand (fast train).',
			we18: 'Type packages',
			we19: 'DAY 4. ASHGABAT – MARY (350 km total 410 km with Merv)',
			we20: 'Heute Vormittag sind wir per Bus unterwegs. Zuerst fahren wir zum auswärts gelegenen Sommerpalast Sitorei und bestaunen die reiche Ausstattung der Zimmer. Dann besuchen wir das Mausoleum der Samaniden, das wohl älteste erhaltene islamische Bauwerk in Zentralasien (entstanden um das Jahr 900), und schauen uns weitere Monumente in der Parklandschaft an. Auch die Moschee Minor Chor ist einen Abstecher wert.',
			we21: 'DAY 5. MARY-FARAB-BUCHARA (270 KM)',
			we22: 'We drive via Nawoi to Nurata and take a detour into the picturesque gorge of Sarmisch. According to archaeologists, there are over 4,000 rock carvings from the Stone and Bronze Ages in the local open-air museum. On the dark brown slate rocks there are numerous hunting scenes with wild animals that lived here in the distant past.',
			we23: 'DAY 6. BUKHARA',
			we24: '07:00-09:00 Breakfast at the hotel 09:00-13:00 City tour of Bukhara: Visit to the Samanid Mausoleum, Chashma Ayub Mausoleum, the Bolo House Mosque, the Ark Citadel. 13:00-15:00 Lunch at local restaurant',
			we25: 'DAY 7. BUKHARA-SAMARKAND',
			we26: 'We drive to the green mountain village of Sentjab, where we stay in a simple guesthouse with 3-4 beds.',
			we27: 'Type packages',
			we28: 'Type packages',
			we29: 'NOT INCLUDED IN THE TRAVEL PRICE:',
			we30: 'Day 8. SAMARKAND',
			we31: '07:00-09:00 Breakfast at the hotel 09:00-13:00 City tour of Samarkand: Visit to the Ulugbek Observatory, the necropolis of Shahi Sinda, the Museum of the History of the Origin of Samarkand “Afrosiab” and the Bibi Hanum Mosque. 13:00-14:00 Lunch at local restaurant',
			we32: 'Day 9. SAMARKAND – TASHKENT (282 km)',
			we33: 'In the morning we cover the 290 km route to Tashkent. In the afternoon we can do a little sightseeing in Tashkent before enjoying our farewell dinner in a typical restaurant.',
			we34: 'Day 10. TASHKENT - ALMATY 08:00-09:00 Breakfast at the hotel 10:00 Transfer to Tashkent Central Station. 10:15 -11-00 Arrival at the station and registration of passengers. 12:05 Departure by train from Tashkent to Almaty',
			we35: 'Day 11. ALMATYEarly morning transfer to the airport and farewell to the Uzbek companion; Return flight with Uzbekistan Airways from Tashkent to Frankfurt. Arrival in the morning. Overnight stay at the hotel',
			we36: '⦁ Alcoholic beverages (vodka, beer, etc.);',
			we37: '⦁ Photo and camera fees;',
			we38: '⦁ Uzbek visa;',
			we39: '⦁ Tips for tour guides and drivers;',
			we40: '⦁ International airline tickets;',
			we41: '⦁ Urgench-Tashkent domestic flight ($55)',
			we42: 'Our travel package prices',
			we43: 'Input',
			we44: 'plurality',
			we45: 'Lacetti CHEVROLET - For 2 pax Istana SONG YONG - For 5-7 pax YUTONG BUS - For 8-15 pax YUTONG BUS - For 16-40 pax',
			we46: 'Pleasant day hikes or leisurely trekking tours in combination with overwhelming mountain scenery and cultural highlights of a country can have a better effect and leave unforgettable impressions.',
			we47: 'Headboard',
			we48: 'Home',
			we49: 'About Us',
			we50: 'Contact',
			we51: 'Travel packages',
			we52: 'Travel packages-2',


			// nolon1: 'Home',
			// nolon2: 'About Us',
			// nolon3: 'Contact',
			// nolon0: 'Travel packages',
			// nolon4: 'Our best tours',
			// nolon5: 'Pleasure',
			// nolon6: 'Detailed',
			// nolon7: 'Khiva-Urgench-Tashkent',
			// nolon8: 'group',
			// nolon9: 'Detailed',
			// nolon10: 'Ashgabat-Almay',
			// nolon11: 'group',
			// nolon12: 'All rights reserved. Design SMK WEB',


			// page11: 'INCLUDED IN THE TRAVEL PRICE:',
			// page12: '⦁ Accommodation in the specified hotels in a double room with shower/WC or bath/WC; ⦁ All transfers and excursions in the usual car, coach with A/C according to the program; ⦁ Professional German-speaking tour guides during the program;',
			// page13: '⦁ Entrance fees for all places visited; ⦁ Folklore and fashion show in the madrassa “Nodir Devon Begi” (Bukhara); ⦁ Wine tasting at the "Samarkand Wine Factory". ⦁ Theater performance of "El-Merosi". ⦁ half board; ⦁ Presentation of the national dish “pilaf” at an Uzbek event;',
			// page14: 'NOT INCLUDED IN THE TRAVEL PRICE:',
			// page15: '⦁ Alkoholgetränke (Wodka, Bier, usw.); ⦁ Foto und Kamera-Gebühren; ⦁ Usbekisches Visum;',
			// page16: '⦁ Tips for tour guides and drivers; ⦁ International airline tickets; ⦁ Urgench-Tashkent domestic flight ($55)',
			


			// den1: 'Discover Uzbekistan with SAHRO TRAVEL!',
			// den2: 'SAHRO TRAVEL is a multi-year tour operator specializing in unforgettable trips through Uzbekistan and Central Asia. Whether youre drawn to the rich history of the Great Silk Road or the regions stunning natural landscapes, were here to create the perfect adventure for you.',
			// den3: 'We offer comprehensive cultural tours to legendary cities such as Samarkand, Bukhara, Khiva, Tashkent, Nukus and Kokand - each with a unique history that has shaped the region for centuries. Adventure travelers can explore the breathtaking landscapes of mountains, deserts, steppes and valleys with our active and eco-tours, including hikes through untouched nature.',
			// den4: 'For anyone interested in history and environmental change, we organize exclusive trips to the Aral Sea, where you can witness first-hand the dramatic transformation of what was once the second largest inland sea in the world.',
			// den5: 'Our team has years of experience in organizing individual and group trips to Uzbekistan and other countries in the Central Asian region. We also offer combined trips with neighboring countries to explore this fascinating part of the world more fully.',
			// den6: 'At SAHRO TRAVEL we pride ourselves on creating tailor-made itineraries that suit your interests, preferences and budget. With our commitment to providing quality service at the best prices, we ensure your trip is smooth, enjoyable and truly memorable.',









        },
        de: {


			pag1: 'Heim',
			pag2: 'Über uns',
			pag3: 'Kontaktez',
			pag4: 'Usbekistan - Moscheen, und Minaretten, das Land der ',
			pag5: 'Routing: Taschkent-Samarkand-Buchara-Chiwa-Taschkent Reisedauer: 9 Tage – 8 Nächte',
			pag6: 'Tag 1 - Taschkent',
			pag7: 'Flug nach Taschkent, Ankunft. Transfer zum Hotel.',
			pag8: '06:00-07:00 - Frühstück im Hotel. 07:30 Fahrt mit dem Schnellzug nach Samarkand.',
			pag9: '10:30-17:00 Ankunft. Stadtrundfahrt in Samarkand: Gur Amir Mausoleum (14.-15. Jh.); Den berühmten Registanplatz (15-17Jh.); 19:00-20:00 - Abendessen im Hotel oder im lokalen Restaurant. Übernachtung im Hotel..',
			pag10: 'Tag 2 - Taschkent-Samarkand',
			pag11: '06:00-07:00 - Frühstück im Hotel',
			pag12: '07:30 Fahrt mit dem Schnellzug nach Samarkand.10:30-17:00 Ankunft. Stadtrundfahrt in Samarkand: Gur Amir Mausoleum (14.-15. Jh.); Den berühmten Registanplatz (15-17Jh.);19:00-20:00 - Abendessen im Hotel oder im lokalen Restaurant. Übernachtung im Hotel.',
			pag13: 'IM REISEPREIS INKLUDIERT:',
			pag14: '⦁ Unterkunft in den angegebenen Hotels im DZ mit Du/WC oder Bad/WC; ⦁ Alle Transfers und Ausflüge im landesüblichen PKW, Reisebus mit A/C lt. Programm;',
			pag15: '⦁ Professionelle deutschsprachige Reiseleiter während des Programms; ⦁ Eintrittsgebühre für alle Besuchsorte; ⦁ Folklore und Modeschau in der Medresse „Nodir Devon Begi“ (Bukhara); ⦁ 1-Liter-Flasche Wasser pro Person pro Tag;',
			pag16: '⦁ Weinprobe bei der "Samarkand Weinfabrik". ⦁ Theater Aufführung von "El-Merosi". ⦁ Halbpension; ⦁ Präsentation des Nationalgerichtes "Pilaw" bei einer usbekischen Familie; ⦁ Zugtickets Taschkent-Samarkand (Schnellzug).',
			pag17: 'Typpakete',
			pag18: 'Tag 3 - Samarkand',
			pag19: '08:00-09:00 - Frühstück im Hotel. Besichtigungen in Samarkand: Bibi Chanum Moschee (14. Jh.).; Den orientalischen Bazar; Ulugbek Observatorium (15. Jh.); Museums Afrosiab; die antike Papierfabrik (8 Jh.); Schahi Sinda Nekropole (11. Jh, - 15. Jh.); Weinprobe bei der "Samarkand Weinfabrik"; Theater Aufführung von "El-Merosi". 19:00-20:00 - Abendessen im Hotel oder im lokalen Restaurant. Übernachtung im Hotel.',
			pag20: 'Tag 4 - Samarkand-Buchara',
			pag21: '07:00-08:00 - Frühstück im Hotel. Fahrt nach Buchara. Unterwegs Besuch zum Karawanserei – Rabat-e Malik; Keramische Werkstatt in Gischduwan. 15:00 - Ankunft. Transfer zum Hotel. Check-in. Besichtigungen in Buchara: die Zitadelle Ark (16 jh.); Bolo Chaus Moschee (1712); <br>18:30-20:00 – Abendessen bei einer usbekischen Familie. Übernachtung im Hotel.',
			pag22: 'Tag 5 - Buchara',
			pag23: '08:00-09:00 - Frühstück im Hotel. Weitere ausführliche Stadtbesichtigung in Buchara: das Samaniden Mausoleum (9-10 Jh); Tschaschma Ayub Mausoleum (12. Jh.); Komplex Poi Kalan: „Kalan Moschee“, „Miri Arab Medrese“, „Kalan Minarett“ (12. – 16. Jh.); Marktkuppelbauten (16 Jh.); Lyabi Chaus Komplex (16-17 Jh.); Chor-Minor Medrese (19 jh.). 18:00-19:00 - Folklore in der Medrese „Nodir Devon Begi“',
			pag24: 'Tag 6 - Buchara-Chiwa',
			pag25: '08:00-09:00 - Frühstück im Hotel. Fahrt auf dem uralten Handelsweg durch die Wüste Kisilkum vorbei an Oasen und roten Sanddünen nach Chiwa, dessen Schönheit von den Händlern und Reisenden des Mittelalters gepriesen wurde. (430km – ca. 7-8 Std.)',
			pag26: 'Typpakete',
			pag27: 'Typpakete',
			pag28: 'IM REISEPREIS NICHT INKLUDIERT:',
			pag29: 'Tag 7 - Chiwa',
			pag30: 'Tag 7 - Chiwa 08:00-09:00 - Frühstück im Hotel. Stadtrundfahrt in Chiwa: Kalta Minar und Muhammad Amin Chan Medrese (19 Jh.); Juma Moschee – Freitagsmoschee (1788-1789); Kunya Ark Zitadelle (17. – 19. Jh.); Tasch Hauli Palast (19 Jh.), Islam Chodja Minarett und Medrese (20 Jh.); Pachlawan Machmud Komplex (1247-1325). 19:00-20:00 - Abendessen in einem lokalen Restaurant. Übernachtung im Hotel.',
			pag31: 'Tag 8 - Chiwa-Urgentsch-Taschkent:</strong> Frühes Frühstück im Hotel. Transfer zum Flughafen. Flug nach Taschkent mit HY-1060 um 06:05-07:35 08:00 - Ankunft. Transfer zum Hotel. Check-in. Stadtrundfahrt Taschkent: Museum für Angewandte Kunst, Hasrat Imam Komplex, Tschorsu Basar, Kukeldasch Medrese, Barakchan Madrese (16 Jh.). 13:00-14:00 Mittagessen in einem lokalen Restaurant Platz der Unabhängigkeit, Amir Temur Parkanlage und Opern- und Balletttheater von Alischer Nawoi; Taschkenter U-Bahn. 18:00-20:00 - Abschiedsabendessen mit Folkloreschau im Restaurant „Piligrim“. Übernachtung im Hotel.',
			pag32: 'Tag 8 - Chiwa-Urgentsch-Taschkent:',
			pag33: 'Tag 9 – Taschkent Frühstück. Transfer zum Flughafen. Heimflug.',
			pag34: '⦁ Alkoholgetränke (Wodka, Bier, usw.);',
			pag35: '⦁ Foto und Kamera-Gebühren;',
			pag36: '⦁ Usbekisches Visum;',
			pag37: '⦁ Trinkgeld für Reiseleiter und Fahrer;',
			pag38: '⦁ Internationale Flugtickets;',
			pag39: '⦁ Urgentsch-Taschkent Inlandsflug ($55)',
			pag40: 'Unsere Reisepaketpreise',
			pag41: 'Eingeben',
			pag42: 'REISEPREIS IN USD:',
			pag43: '2 Pax - $927 ----- 3 Pax - $876 4 Pax - $798 ----- 5 Pax - $747 6 Pax - $729 ----- 7 Pax - $704 8 Pax - $689 ----- 9 Pax - $673',
			pag44: 'Pluralität',
			pag45: '10-15 Pax - $655 16-20 Pax - $623 21-25 Pax - $606 26-30 Pax - $588 <br>',
			pag46: 'Angenehme Tageswanderungen bzw. gemütliche Trekkingtouren in Kombination mit überwältigenden Gebirgskulissen sowie kulturellen Highlights eines Landes können besser wirken und unvergessliche Eindrücke hinterlassen.',
			pag47: 'Kopfteil',
			pag48: 'Heim',
			pag49: 'Über uns',
			pag50: 'Kontaktez',
			pag51: 'Heim',
			pag52: 'Über uns',
			pag53: 'Kontaktez',
			pag54: 'Höhepunkte Usbekistans',
			pag55: 'Routing: Taschkent-Samarkand-Schahrisabs-Buchara-Chiwa-Urgentsch-Taschkent Reisedauer: 10 Tage – 9 Nächte',
			pag56: 'Tag 1 - Taschkent',
			pag57: 'Flug nach Taschkent, Ankunft. Transfer zum Hotel.',
			pag58: 'Tag 2 - Taschkent-Samarkand',
			pag59: '06:00-07:00 - Frühstück im Hotel 08:10 - Transfer zum Bahnhof. Fahrt mit dem Schnellzug nach Samarkand.',
			pag60: '09:00-16:00 - Stadtrundfahrt in Samarkand: Gur Amir Mausoleum (14.-15. Jh.); Der berühmte Registanplatz (15-17 Jh.); Bibi Chanum Moschee (14. Jh.); Schahi Sinda Nekropole (11. Jh, - 15. Jh.); 19:00-20:00 - Abendessen im Hotel oder im lokalen Restaurant. Übernachtung im Hotel. 18:30-20:00 - Abendessen bei einer usbekischen Familie.',
			pag61: 'Tag 3 - Samarkand',
			pag62: '08:00-09:00 - Frühstück im Hotel. Weitere Besichtigungen in Samarkand: Ulugbek Observatorium. (15. Jh.); Afrosiab Museum mit den Wandgemälden; Der orientalische Bazar; Weinprobe bei der "Samarkand Weinfabrik"; Theateraufführung von "El-Merosi".',
			pag63: 'FREIZEIT IN SAMARKAND',
			pag64: '19:00-20:00 - Abendessen im Hotel oder im lokalen Restaurant. Übernachtung im Hotel.',
			pag65: 'IM REISEPREIS INKLUDIERT:',
			pag66: '⦁ Unterkunft in den angegebenen Hotels im DZ mit Du/WC oder Bad/WC; ⦁ Alle Transfers und Ausflüge im landesüblichen PKW, Reisebus mit A/C lt. Programm;',
			pag67: '⦁ Professionelle deutschsprachige Reiseleiter während des Programms; ⦁ Eintrittsgebühre für alle Besuchsorte; ⦁ Folklore und Modeschau in der Medresse „Nodir Devon Begi“ (Bukhara); ⦁ 1-Liter-Flasche Wasser pro Person pro Tag;',
			pag68: '⦁ Weinprobe bei der "Samarkand Weinfabrik". ⦁ Theater Aufführung von "El-Merosi". ⦁ Halbpension; ⦁ Präsentation des Nationalgerichtes "Pilaw" bei einer usbekischen Familie; ⦁ Zugtickets Taschkent-Samarkand (Schnellzug).',
			pag69: 'Typpakete',
			pag70: 'Tag 4 - Samarkand-Schahrisabs-Buchara',
			pag71: '08:00-09:00 - Frühstück im Hotel. Fahrt nach Schahrisabs. Stadtbesichtigung: Ok Saroy Palast (14. Jh.), Moschee Kök Gumbas (15. Jh.); Mausoleum Dorus Saodat (14. Jh.). Weiter geht’s nach Buchara. 18:00 – Ankunft und Check-in im Hotel. 19:00-20:00 - Abendessen im Hotel. Übernachtung im Hotel.',
			pag72: 'Tag 5 - Buchara',
			pag73: 'Tag 5 - Buchara 08:00-09:00 - Frühstück im Hotel. Stadtbesichtigung in Buchara: die Zitadelle Ark (16 Jh.); Bolo Chaus Moschee (1712); Samaniden Mausoleum (897-907); Tschaschma Ayub Mausoleum (12. Jh.); Komplex PoiKalan: „Kalan Moschee“, „Miri Arab Medrese“, „Kalan Minarett“ (12. – 16. Jh.); Ulugbek und Abdulaziz Chan Medresen (15.-17 Jh.); Marktkuppelbauten: (16 Jh.); Lyabi Chaus Komplex (16-17 Jh.); Chor-Minor Medrese (19 Jh.).',
			pag74: 'Tag 6 - Buchara',
			pag75: '08:00-09:00 - Frühstück im Hotel. Weitere ausführliche Stadtbesichtigung in Buchara: das Samaniden Mausoleum (9-10 Jh); Tschaschma Ayub Mausoleum (12. Jh.); Komplex Poi Kalan: „Kalan Moschee“, „Miri Arab Medrese“, „Kalan Minarett“ (12. – 16. Jh.); Marktkuppelbauten (16 Jh.); Lyabi Chaus Komplex (16-17 Jh.); Chor-Minor Medrese (19 jh.).',
			pag76: 'Tag 7 - Buchara-Chiwa',
			pag77: '08:00-09:00 - Frühstück im Hotel. Fahrt auf dem uralten Handelsweg durch die Wüste Kisilkum vorbei an Oasen und roten Sanddünen nach Chiwa, dessen Schönheit von den Händlern und Reisenden des Mittelalters gepriesen wurde. (430km – ca. 7-8 Std.)',
			pag78: 'Typpakete',
			pag79: 'Typpakete',
			pag80: 'IM REISEPREIS NICHT INKLUDIERT:',
			pag81: 'Tag 8 - Chiwa',
			pag82: '08:00-09:00 - Frühstück im Hotel. Stadtrundfahrt in Chiwa: Kalta Minar und Muhammad Amin Chan Medrese, Juma Moschee – Freitagsmoschee (1788-1789); Kunya Ark Zitadelle (17. – 19. Jh.); Tasch Hauli Palast (19 Jh.), Islam Chodja Minarett und Medrese (20 Jh.), Pachlawan Machmud Komplex (16-19 Jh.). 19:00-20:00 - Abendessen in einem lokalen Restaurant. Übernachtung im Hotel.',
			pag84: 'Tag 9 - Chiwa-Urgentsch-Taschkent Frühes Frühstück im Hotel. Transfer zum Flughafen. 07:20 - Flug nach Taschkent mit HY-1060 08:35 - Ankunft.  Stadtrundfahrt in Taschkent: das Museum für Angewandte Kunst, Hasrat Imam Komplex, Tschorsu Basar, Kukeldasch Medrese, Barakchan Madrese (16 Jh – 19 Jh.). Platz der Unabhängigkeit, Amir Temur Parkanlage und Opern- und Balletttheater von Alischer Nawoi; Taschkenter U-Bahn (1972).18:00-20:00 - Abschiedsabendessen mit Folkloreschau im Restaurant „Piligrim“.  Übernachtung im Hotel.',
			pag85: 'Tag 10 - Taschkent Frühstück. Transfer zum Flughafen. Heimflug',
			pag86: '⦁ Alkoholgetränke (Wodka, Bier, usw.);',
			pag87: '⦁ Foto und Kamera-Gebühren;',
			pag88: '⦁ Usbekisches Visum',
			pag89: '⦁ Trinkgel für Reiseleiter und Fahrer',
			pag90: '⦁ Internationale Flugtickets;',
			pag91: '⦁ Urgentsch-Taschkent Inlandsflug ($55)',
			pag92: 'Unsere Reisepaketpreise',
			pag93: 'Eingeben',
			pag94: 'REISEPREIS IN USD:',
			pag95: '2 Pax - $927 ----- 3 Pax - $876 4 Pax - $798 ----- 5 Pax - $747 6 Pax - $729 ----- 7 Pax - $704 8 Pax - $689 -----9 Pax - $673',
			pag96: 'Pluralität',
			pag97: '10-15 Pax - $655 16-20 Pax - $623 21-25 Pax - $606 26-30 Pax - $588 ',
			pag98: 'Angenehme Tageswanderungen bzw. gemütliche Trekkingtouren in Kombination mit überwältigenden Gebirgskulissen sowie kulturellen Highlights eines Landes können besser wirken und unvergessliche Eindrücke hinterlassen.',
			pag99: 'Kopfteil',
			pag100: 'Heim',
			pag101: 'Über uns',
			pag102: 'Kontaktez',
			pag103: 'Reisepakete',
			pag104: 'Reisepakete-2',

			sos1: 'Heim',
			sos2: 'Über uns',
			sos3: 'Kontaktez',
			sos4: 'Usbekistan - das Herz Zentralasiens',
			sos5: '«Usbekistan - das Herz Zentralasiens» Routing: Taschkent-Fergana Tal-Taschkent-Samarkand-Schahrisabs-Buchara-Chiwa-Urgentsch-Taschkent Reisedauer: 11 Tage – 10 Nächte',
			sos6: 'Tag 1 - Taschkent',
			sos7: 'Flug nach Taschkent, Ankunft. Transfer zum Hotel.',
			sos8: 'Tag 2 - Taschkent-Kokand-Rischtan-Fergana',
			sos9: 'Tag 2 - Taschkent-Kokand-Rischtan-Fergana 08:00-09:00 – Frühstück im Hotel. 09:30 – Fahrt nach Kokand über dem Bergpass.',
			sos10: 'Besichtigungen in Kokand: Palast des Chudayar (1871); Friedhof der Chane und Dachmai-Schochon Mausoleum (19 Jh.). Weiterfahrt nach Rischtan. Besuch der Keramikwerkstatt. 16:30 - Anschließend Fahrt nach Fergana. 17:30 - Ankunft. Transfer zum Hotel, Check-in.19:00-20:00 – Abendessen im Hotel. Übernachtung im Hotel.',
			sos11: 'Tag 3 - Fergana-Margilan-Taschkent 08:00-09:00 – Frühstück im Hotel. 09:30 – Fahrt nach Margilan.',
			sos12: 'Weitere Besichtigung in Margilan: Seidenwerkstatt. Rückfahrt nach Taschkent über dem Bergpass.',
			sos13: 'Ankunft in Taschkent. Transfer zum Hotel. Check-in. 9:00-20:00 – Abendessen in einem Restaurant oder im Hotel. Übernachtung im Hotel.',
			sos14: 'IM REISEPREIS INKLUDIERT:',
			sos15: '⦁ Unterkunft in den angegebenen Hotels im DZ mit Du/WC oder Bad/WC; ⦁ Alle Transfers und Ausflüge im landesüblichen PKW, Reisebus mit A/C lt. Programm;',
			sos16: '⦁ Professionelle deutschsprachige Reiseleiter während des Programms; ⦁ Eintrittsgebühre für alle Besuchsorte; ⦁ Folklore und Modeschau in der Medresse „Nodir Devon Begi“ (Bukhara); ⦁1-Liter-Flasche Wasser pro Person pro Tag;',
			sos17: '⦁ Weinprobe bei der "Samarkand Weinfabrik". ⦁ Theater Aufführung von "El-Merosi". ⦁ Halbpension; ⦁ Präsentation des Nationalgerichtes "Pilaw" bei einer usbekischen Familie; ⦁ Zugtickets Taschkent-Samarkand (Schnellzug).',
			sos18: 'Typpakete',
			sos19: 'Tag 4 - Taschkent-Samarkand',
			sos20: '06:00-07:00 - Frühstück im Hotel 08:10 - Nach dem Frühstück Transfer zum Bahnhof. Fahrt mit dem Schnellzug nach Samarkand. 10:30-17:00 - Ankunft. Stadtrundfahrt in Samarkand: Gur Amir Mausoleum (14.-15. Jh.); Der berühmte Registanplatz (15-17 Jh.). 18:30-20:00 – Abendessen bei einer usbekischen Familie. Übernachtung im Hotel.',
			sos21: 'Tag 5 - Samarkand',
			sos22: '08:00-09:00 - Frühstück im Hotel. 09:00 Besichtigungen in Samarkand: Bibi Chanum Moschee (14. Jh.).; Der orientalische Bazar; Ulugbek Observatorium. (15. Jh.); Schahi Sinda Nekropole (11. Jh, - 15. Jh.); Weinprobe bei der "Samarkand Weinfabrik"; Theateraufführung von "El-Merosi". 19:00-20:00 - Abendessen im Hotel oder im lokalen Restaurant. Übernachtung im Hotel.',
			sos23: 'Tag 6 - Samarkand-Schahrisabs-Buchara',
			sos24: '08:00-09:00 - Frühstück im Hotel. 09:30 - Fahrt nach Schahrisabs. Stadtbesichtigung: Ok Saroy Palast (14. Jh.) „Weißes Schloss“. Moschee Kök Gumbas (15. Jh.)., Mausoleum Dorus Saodat (14. Jh.) Weiter geht’s nach Buchara. 18:00 – Ankunft und Check-in im Hotel. 19:00-20:00 - Abendessen im lokalen Restaurant.',
			sos25: 'Tag 7 - Buchara',
			sos26: '08:00-09:00 - Frühstück im Hotel. Stadtbesichtigung in Buchara: Die Zitadelle Ark (7. Jh).; Bolo Chaus Moschee (1712); Samaniden Mausoleum (897-907); Komplex Poi Kalan: „Kalan Moschee und Minarett“, „Miri Arab Medrese“ (12. – 16. Jh.).;',
			sos27: 'Typpakete',
			sos28: 'Typpakete',
			sos29: 'IM REISEPREIS NICHT INKLUDIERT:',
			sos30: 'Tag 8 - Buchara-Chiwa',
			sos31: '08:00-09:00 - Frühstück im Hotel. 09:30 - Fahrt auf dem uralten Handelsweg durch die Wüste Kisilkum vorbei an Oasen und roten Sanddünen nach Chiwa, dessen Schönheit von den Händlern und Reisenden des Mittelalters gepriesen wurde. (430km – ca. 7-8 Std.) Am späten Nachmittag kommen Sie in die Stadt Chiwa an. 19:00-20:00  Abendessen im Hotel. Übernachtung im Hotel.',
			sos32: 'Tag 11 – Taschkent',
			sos33: 'Frühstück. Transfer zum Flughafen. Heimflug.',
			sos34: 'Tag 9 - Chiwa 08:00-09:00 - Frühstück im Hotel. Stadtrundfahrt in Chiwa: Kalta Minar und Muhammad Amin Chan Medrese, Juma Moschee – Freitagsmoschee (1788-1789) – erbaut im 10. Jh., Kunya Ark Zitadelle – 17. – 19. Jh.; Tasch Hauli Palast (19 Jh.), Islam Chodja Minarett und Medrese (20 Jh.), Pachlawan Machmud Komplex – Pachlawan Machmud (1247-1325); 19:00-20:00 - Abendessen in einem lokalen Restaurant. Übernachtung im Hotel.',
			sos35: 'Tag 10 - Chiwa-Urgentsch-Taschkent Frühes Frühstück im Hotel. Transfer von Chiwa zum Flughafen der Stadt Urgentsch. 07:20 - Flug nach Taschkent mit HY-1060. 18:00-20:00 - Abschiedsabendessen mit Folkloreschau im Restaurant „Piligrim“. Die Übernachtung im Hotel.',
			sos36: '⦁ Alkoholgetränke (Wodka, Bier, usw.);',
			sos37: '⦁ Foto und Kamera-Gebühren;',
			sos38: '⦁ Usbekisches Visum;',
			sos39: '⦁ Trinkgeld für Reiseleiter und Fahrer;',
			sos40: '⦁ Internationale Flugtickets;',
			sos41: '⦁ Urgentsch-Taschkent Inlandsflug ($55)',
			sos42: 'Unsere Reisepaketpreise',
			sos43: 'Eingeben',
			sos44: 'REISEPREIS IN USD:',
			sos45: '2 Pax - $1046 ----- 3 Pax - $966 4 Pax - $894 ----- 5 Pax - $828 6 Pax - $821 ----- 7 Pax - $783 8 Pax - $768 ----- 9 Pax - $762',
			sos46: 'Pluralität',
			sos47: '10-15 Pax - $746 16-20 Pax - $710 21-25 Pax - $679 26-30 Pax - $674',
			sos48: 'Angenehme Tageswanderungen bzw. gemütliche Trekkingtouren in Kombination mit überwältigenden Gebirgskulissen sowie kulturellen Highlights eines Landes können besser wirken und unvergessliche Eindrücke hinterlassen.',
			sos49: 'Kopfteil',
			sos50: 'Heim',
			sos51: 'Über uns',
			sos52: 'Kontaktez',
			sos53: 'Reisepakete',
			sos54: 'Reisepakete-2',

			you1: 'Heim',
			you2: 'Über uns',
			you3: 'Kontaktez',
			you4: 'Usbekistan - der magische Orient',
			you5: '«Usbekistan - das Herz Zentralasiens» Routing: Taschkent-Nukus-Chiwa-Buchara-Nurata-Jangigazgan-Samarkand-Schahrisabs-Samarkand-Taschkent Reisedauer: 14 Tage – 13 Nächte',
			you6: 'Tag 1 - Taschkent',
			you7: '06:15 – Ankunft in Taschkent mit TK-368. Transfer zum Hotel. (Turkish Airlines) Ruhezeit bis zum 13:00 Uhr.',
			you8: '13:00-17:30 - Stadtrundfahrt in Taschkent: Hasrat Imam Komplex (16-19 Jh.), Tschorsu Basar, die Kukeldasch Medrese (16 Jh.) sowie Barakchan Madrese (16 Jh.); Platz der Unabhängigkeit; Amir Temur Parkanlage; Taschkenter U-Bahn (1972).',
			you9: '19:00-20:00 - Abendessen im lokalen Restaurant. Übernachtung im Hotel. 05:00-05:30 - Frühes Frühstück. Check-out und Transfer nach Flughafen. 07:10 - Flug von Taschkent nach Nukus mit HY 11. 09:00 – Ankunft. Ausflug nach Muynak – der Ort, wo man die Austrocknung des Aralsees sehen kann. Fahrt nach Chojayli (20 km). Besuch der riesigen Gräberstadt Misdachan (3-8 Jh.). 19:00-20:00 - Abendessen uÜbernachtung im Hotel.',
			you10: 'Tag 2 - Taschkent-Nukus',
			you11: 'Tag 3 - Nukus-Chiwa',
			you12: '08:00-09:00 – Frühstück im Hotel. 09-00-10:00 Nach dem Sie gefrühstückt haben besuchen Sie das Sawizky-Museum in Nukus. Dieses Museum hat eine in der Welt einzigartige Bildersammlung, die der russische Kunstliebhaber Igor Sawitzky unter Lebensgefahr zusammentrug. 10:00 - Fahrt durch die Wüste Kysyl-Kum nach Chiwa. (Fahrzeit ca. 3 Std., 190 km) 13:00 – Ankunft und Check-in im Hotel. Zeit zur freien Verfuegung in Chiwa 19:00-20:00 - Abendessen im Hotel. Übernachtung im Hotel.',
			you13: 'Weitere Besichtigung in Margilan: Seidenwerkstatt. Rückfahrt nach Taschkent über dem Bergpass.',
			you14: 'Ankunft in Taschkent. Transfer zum Hotel. Check-in. 9:00-20:00 – Abendessen in einem Restaurant oder im Hotel. Übernachtung im Hotel.',
			you15: 'IM REISEPREIS INKLUDIERT:',
			you16: '⦁ Unterkunft in den angegebenen Hotels im DZ mit Du/WC oder Bad/WC; ⦁ Alle Transfers und Ausflüge im landesüblichen PKW, Reisebus mit A/C lt. Programm;',
			you17: '⦁ Professionelle deutschsprachige Reiseleiter während des Programms; ⦁ Eintrittsgebühre für alle Besuchsorte; ⦁ Folklore und Modeschau in der Medresse „Nodir Devon Begi“ (Bukhara); ⦁ 1-Liter-Flasche Wasser pro Person pro Tag;',
			you18: '⦁ Weinprobe bei der "Samarkand Weinfabrik". ⦁ Theater Aufführung von "El-Merosi". ⦁ Halbpension; ⦁ Präsentation des Nationalgerichtes "Pilaw" bei einer usbekischen Familie; ⦁ Zugtickets Taschkent-Samarkand (Schnellzug).',
			you19: 'Typpakete',
			you20: 'Tag 4 - Chiwa',
			you21: '08:00-09:00 - Frühstück im Hotel. Stadtbesichtigung in Chiwa: Sie unternehmen eine Stadtbesichtigung durch die einst so wichtige Karawanenstadt - Chiwa. Der Rundgang führt Sie zu beeindruckenden Palästen, Moscheen, Mausoleen und Medresen wie: Kalta Minar und Muhammad Amin Chan Medrese, Juma Moschee – Freitagsmoschee (1788-1789) – erbaut im 10. Jh. restauriert Ende 18. Jh. Die Holzbalkendecke der Halle wird von 213 Säulen getragen, die z.B. bis 1000 Jahre alt und mit kunstvollen Schnitzereien sind; ',
			you22: 'Tag 5 - Chiwa-Buchara',
			you23: '08:00-09:00 - Frühstück im Hotel. 09:30 - Fahrt auf dem uralten Handelsweg durch die Wüste Kisilkum vorbei an Oasen und roten Sanddünen nach Chiwa, dessen Schönheit von den Händlern und Reisenden des Mittelalters gepriesen wurde. (Fahrstrecke – 455 Km, Fahrzeit – 8 St.) Am späten Nachmittag kommen Sie in die Stadt Buchara an.',
			you24: 'Tag 6 - Buchara',
			you25: '08:00-09:00 - Frühstück im Hotel. Stadtbesichtigung in Buchara: Nachdem Sie gemütlich gefrühstückt haben, fangen Sie mit Besichtigungen in der märchenhaften Stadt Buchara an: Ark Festung. Diese Festung ist vermutlich zu Beginn des ersten Jahrhunderts nach Christus entstanden. Die Zitadelle wurde mehrfach zerstört.',
			you26: 'Tag 7 - Buchara',
			you27: '08:00-09:00 - Frühstück im Hotel. 10:00-14:00 – Stadtbesichtigung um die Stadt Buchara. Es besteht die Gelegenheit folgende Baudenkmäler zu besuchen: Chor-Minor Medrese wurde im indischen Stil gebaut.',
			you28: 'Typpakete',
			you29: 'Typpakete',
			you30: 'IM REISEPREIS NICHT INKLUDIERT:',
			you31: 'Tag 8 - Buchara-Nurata-Jangigazgan',
			you32: '07:00-08:00 – Frühstück im Hotel. Nach dem Frühstück verlassen Sie die mittlerweile lieb gewonnene Oasenstadt Buchara und fahren in den kleinen Pilgerort Nurata (Fahrstrecke ca. 3 Std, ca. 175 km). 11:00-13:00 Nach der Ankunft erfolgt die Besichtigungen in Nurata. Hier besuchen wir eine Moschee aus dem 17. Jh. und Reste einer Festung aus der Zeit Alexanders des Großen. 18:00-20:00 - Abendessen im Jurtenlager. Übernachtung in Jurten.',
			you33: 'Tag 9 – Nurata – Samarkand',
			you34: '08:00-09:00 – Frühstück im Hotel. 09:00-10:00 Nach dem Frühstück haben Sie die Möglichkeit Ihre Fähigkeiten beim',
			you35: 'Tag 11 - Samarkand 08:00-09:00 - Frühstück im Hotel. 09:00 - Fahrt nach Schahrisabs über dem Bergpass mit PKW-Autos. (Fahrstrecke – 85 Km, Fahrzeit – 2 St.) 11:00 Ankunft. Stadtbesichtigung. Mausoleum Dorus Saodat (14. Jh.) ist eine 70 x 90m große Anlage. Durch eine kleine Tür gelangt man in einen weiten, von alten Platane überschatteten Hof, der von mehreren Gebäuden umgrenzt wird.',
			you36: 'Tag 12 – Taschkent – Kokand – Margilan – Fergana Frühes Frühstück im Hotel. Transfer von Chiwa zum Flughafen der Stadt Urgentsch. 06:00-07:00 - Frühstück im Hotel. Transfer zum Bahnhof. 08:05 Fahrt von Taschkent nach Kokand mit dem Zug „Sabsan“.',
			you37: '⦁ Alkoholgetränke (Wodka, Bier, usw.);',
			you38: '⦁ Foto und Kamera-Gebühren;',
			you39: '⦁ Usbekisches Visum;',
			you40: '⦁ Trinkgeld für Reiseleiter und Fahrer;',
			you41: '⦁ Internationale Flugtickets;',
			you42: '⦁ Urgentsch-Taschkent Inlandsflug ($55)',
			you43: 'Unsere Reisepaketpreise',
			you44: 'Eingeben',
			you45: 'REISEPREIS IN USD:',
			you46: '2 Pax - $864 ----- 3 Pax - $813 4 Pax - $737 ----- 5 Pax - $689 6 Pax - $672 ----- 7 Pax - $649 8 Pax - $634 ----- 9 Pax - $619',
			you47: 'Pluralität',
			you48: '10-15 Pax - $604 16-20 Pax - $571 21-25 Pax - $555  26-30 Pax - $538',
			you49: 'Angenehme Tageswanderungen bzw. gemütliche Trekkingtouren in Kombination mit überwältigenden Gebirgskulissen sowie kulturellen Highlights eines Landes können besser wirken und unvergessliche Eindrücke hinterlassen.',
			you50: 'Kopfteil',
			you51: 'Heim',
			you52: 'Über uns',
			you53: 'Kontaktez',
			you54: 'Reisepakete',
			you55: 'Reisepakete-2',

			me1: 'Heim',
			me2: 'Über uns',
			me3: 'Kontaktez',
			me4: 'AUF SPUREN DER LEGENDÄREN KARAWANE',
			me5: 'Routing: Taschkent-Urgentsch-Chiwa-Buchara- Wüste Kizilkum - Sarmisch-Schlucht-Audarkul See-Sentjab-Samarkand-Taschkent Reisedauer: 13 Tage - 12 Nächte Verpflegung:  F=Frühstück & A=Abendessen',
			me6: 'Tag 1: Anreise',
			me7: 'Gegen Mittag Linienflug mit Uzbekistan Airways von Frankfurt nonstop nach Taschkent. Abends Ankunft und  Empfang durch Ihre örtliche, Deutsch sprechende usbekische Reiseleitung. Transfer zum Stadthotel.',
			me8: 'Tag 2: Taschkent - Urgentsch – Chiwa Vormittags unternehmen wir eine Rundfahrt in der Metropole Taschkent, die während der Zeit Timurs im Schatten von Buchara und Samarkand stand, heute jedoch Hauptstadt Usbekistans ist. Vorgesehen ist ein Spaziergang durch den Navoij-Freizeitpark zum Parlament und Palast der Völkerverständigung, eine Fahrt mit der ab 1972 erbauten Metro, der einzigen U-Bahn Mittelasiens mit einigen originell gestalteten Stationen, und ein Bummel durch die belebte Fußgängerzone zum Amir Timur-Denkmal (Auswahl und Reihenfolge schlägt Ihre Reiseleitung vor Ort vor).',
			me9: 'Tag 3: Chiwa',
			me10: 'Wir werden vor- und nachmittags zahlreiche Monumente von Chiwa - heute ein einzigartiges "Freilichtmuseum" - besichtigen. Bezeichnet wird Chiwa als ein zu Stein gewordener Traum aus Tausend-und-einer-Nacht. Eine Mauer schützte die Stadt mit ihren prunkvollen Gebäuden und aus ungebrannten Ziegeln gebauten Wohnhäusern. Mit Hilfe der UNESCO wurde die Altstadt Itschan Kale restauriert und steht heute unter Denkmalschutz. Prächtig ausgestattete Bauwerke wie Monumentaltore, Moscheen, Minarette, Medresen und Mausoleen sind hier zu sehen.',
			me11: 'Spätnachmittags haben wir Zeit, nochmal in Ruhe durch die Gassen der Altstadt zu schlendern und auf ein hohes Minarett zu steigen. Dabei lässt sich ein Eindruck gewinnen vom traditionellen Stadtbild einer islamisch geprägten mittelasiatischen Oasenstadt. Hotel; (FA)',
			me12: 'Tag 4: Chiwa - Buchara',
			me13: 'Auf der Fahrt nach Buchara durchqueren wir einen Teil der riesigen, steppenhaften Kizilkum-Wüste (ihr Name bedeutet "roter Sand"), die sich zwischen den Flüssen Amu Darja im Süden und Syr Darja im Norden erstreckt. Der Boden ist eigentlich fruchtbar, kann aber mangels Wasser kaum bestellt werden. Dafür werden hier Bodenschätze abgebaut. Nach einem Fotostopp am Amu Darja legen wir mittags ein Picknick ein. Spätnachmittags treffen wir nach ca. 440 km im Tal des Sarafschan und in der dicht besiedelten Oase Buchara ein, die den Beinamen "die Edle" trägt.',
			me14: 'Untergebracht sind wir für drei Nächte in einem Privathotel am Rande der Altstadt. Abends schnuppern wir bereits auf einem kleinen Rundgang in den historischen Stadtkern. Fahrstrecke ca. 440 km;',
			me15: 'Tag 5: Buchara',
			me16: 'Am Nachmittag bleibt Zeit für Spaziergänge in Eigenregie. Gegen 18 Uhr treffen wir uns im Innenhof der Medrese Nadir Diwan-Begi. Hier schauen wir uns eine professionelle Folklore-Veranstaltung mit sehenswerter Modenschau an. 19:00-20:30 - Außerdem sind Sie heute zu einer usbekischen Familie zum Abendessen eingeladen. Sie haben dann eine gute Gelegenheit, eine ganz typische usbekische Familie mit ihrer Traditionen kennen zu lernen. Teilnahme beim Plowkochen. Sie werden beim Prozess des Kochens von unserem Nationalgericht sehr aktiv beteiligen. Der Geschmack des Gerichtes ist unglaublich lecker. ',
			me17: 'IM REISEPREIS INKLUDIERT:',
			me18: '⦁ Unterkunft in den angegebenen Hotels im DZ mit Du/WC oder Bad/WC; ⦁ Alle Transfers und Ausflüge im landesüblichen PKW, Reisebus mit A/C lt. Programm;',
			me19: '⦁ Professionelle deutschsprachige Reiseleiter während des Programms; ⦁ Eintrittsgebühre für alle Besuchsorte; ⦁ Folklore und Modeschau in der Medresse „Nodir Devon Begi“ (Bukhara); ⦁ 1-Liter-Flasche Wasser pro Person pro Tag;',
			me20: '⦁ Weinprobe bei der "Samarkand Weinfabrik". ⦁ Theater Aufführung von "El-Merosi". ⦁ Halbpension; ⦁ Präsentation des Nationalgerichtes "Pilaw" bei einer usbekischen Familie; ⦁ Zugtickets Taschkent-Samarkand (Schnellzug).',
			me21: 'Typpakete',
			me22: 'Tag 6: Buchara',
			me23: 'Heute Vormittag sind wir per Bus unterwegs. Zuerst fahren wir zum auswärts gelegenen Sommerpalast Sitorei und bestaunen die reiche Ausstattung der Zimmer. Dann besuchen wir das Mausoleum der Samaniden, das wohl älteste erhaltene islamische Bauwerk in Zentralasien (entstanden um das Jahr 900), und schauen uns weitere Monumente in der Parklandschaft an. Auch die Moschee Minor Chor ist einen Abstecher wert.',
			me24: 'Tag 7: Wüste Kizilkum - Sarmisch-Schlucht',
			me25: 'Über Nawoi fahren wir nach Nurata und machen einen Abstecher in die malerische Schlucht von Sarmisch. Im hiesigen Freilichtmueseum gibt es nach Schätzung der Archäologen über 4000 Felsritzungen aus der Stein- und Bronzezeit. Auf den dunkelbraunen Felsen aus Schiefer finden sich zahlreiche Jagdszenen mit Wildtieren, die in ferner Vergangenheit hier gelebt haben.',
			me26: 'Tag 8: Kamel-Safari zum Aydarkul See',
			me27: 'Morgens treffen die Kameltreiber mit ihren Kamelen ein. Für je zwei Mitreisende steht ein Kamel mit Treiber zur Verfügung, so dass Sie abwechselnd reiten und wandern können. Stunden vor- und nachmittags, unterbrochen von Pausen und einer Mittagsrast mit Picknick.',
			me28: 'Tag 9: Wanderung im grünen Dorf Sentjab',
			me29: 'Wir fahren ins grüne Bergdorf Sentjab, wo wir in einem einfachen Gästehaus in 3-4 Bettzimmern untergebracht sind.',
			me30: 'Typpakete',
			me31: 'Typpakete',
			me32: 'IM REISEPREIS NICHT INKLUDIERT:',
			me33: 'Tag 10: Fortsetzung der Wanderung',
			me34: 'Auch heute wollen wir wieder Wandern. Unser Weg führt uns durch das Tal des Gebirgsflüsschens Kadvansai, wir genießen die Landschaft und besuchen unterwegs Felsritzungen und einen Wasserfall. Gehzeit ca. 6 Std.; Aufstieg 400m; Abstieg 400m; einfaches Gästehaus; (FA)- Picknick in den Bergen.',
			me35: 'Tag 11: Samarkand',
			me36: 'Nach dem Frühstück können wir bereits mit der Stadtbesichtigung beginnen und z. B. das Observatorium von Ulughbek besuchen oder  abends die Atmosphäre des beleuchteten Registan-Platzes und des Gur Emir-Mausoleums auf uns wirken lassen.',
			me37: 'Tag 12: Taschkent Vormittags legen wir die 290 km lange Fahrstrecke nach Taschkent zurück. Am Nachmittag können wir noch eine kleine Besichtigung in Taschkent unternehmen, bevor wir uns unser Abschiedsabendessen in einem typischen Lokal genießen.',
			me38: 'Tag 13: Rückreise Frühmorgens Transfer zum Flughafen und Abschied vom usbekischen Begleiter; Rückflug mit Uzbekistan Airways von Taschkent nach Frankfurt. Ankunft vormittags.',
			me39: '⦁ Alkoholgetränke (Wodka, Bier, usw.);',
			me40: '⦁ Foto und Kamera-Gebühren;',
			me41: '⦁ Usbekisches Visum;',
			me42: '⦁ Trinkgeld für Reiseleiter und Fahrer;',
			me43: '⦁ Internationale Flugtickets;',
			me44: '⦁ Urgentsch-Taschkent Inlandsflug ($55)',
			me45: 'Unsere Reisepaketpreise',
			me46: 'Eingeben',
			me47: 'REISEPREIS IN USD:',
			me48: '2 Pax - $1034 ----- 3 Pax - $1007 4 Pax - $892 ----- 5 Pax - $820 6 Pax - $793 ----- 7 Pax - $755 8 Pax - $732 ----- 9 Pax - $725',
			me49: 'Pluralität',
			me50: '10-15 Pax - $698 16-20 Pax - $637 21-25 Pax - $618 26-30 Pax - $611 ',
			me51: 'Angenehme Tageswanderungen bzw. gemütliche Trekkingtouren in Kombination mit überwältigenden Gebirgskulissen sowie kulturellen Highlights eines Landes können besser wirken und unvergessliche Eindrücke hinterlassen.',
			me52: 'Kopfteil',
			me53: 'Heim',
			me54: 'Über uns',
			me55: 'Kontaktez',
			me56: 'Reisepakete',
			me57: 'Reisepakete-2',


			we1: 'Heim',
			we2: 'Über uns',
			we3: 'Kontaktez',
			we4: 'Kombinierte Reise in Zentralasien:',
			we5: 'Destinationsziele: Turkmenistan & Usbekistan & Kasachstan Dauer: 12 Tage/11 Nächte Strecke: Farab/Alat-Buchara-Samarkand-Taschkent-Almaty-Heim',
			we6: 'TAG 1. ANREISE NACH ASCHGABAT',
			we7: 'Ankunft in Aschgabat (per Flug) 07:00-09.00 Frühstück im Hotel. 10.00-13.00 Stadtrundfahrt in Aschgabat: Besichtigung des Neutralitätsdenkmals (neues Monument, das alte wurde zerstört), Unabhängigkeitsplatzes und Präsidentenpalastes, von Madschlis (das Nationalparlament) und Nationalmuseums. 13.00-15.00 Mittagessen im lokalen Restaurant 15:00 Fortsetzung der Stadtrundfahrt in Ashgabat: Teppichmuseum, mit der Seilbahn nach Kopet-Dag (Turkmenbaschi Seilbahn) und Tolkuchka Basar.  20.00-22.00 Abendessen im lokalen Restaurant. Übernachtung im Hotel.',
			we8: 'TAG 2. ASCHGABAT-DASCHOGUZ-KUNYA URGENTSCH- DASCHOGUZ',
			we9: '(190 km) 07.00-09.00 Frühstück im Hotel  Abfahrt aus Aschgabat nach Daschoguz  Weiterfahrt nach Kunya-Urgench: Nejameddin Kubra Mausoleum und Sultan Ali Mausoleum 13:00-15:00 Mittagessen im lokalen Restaurant ',
			we10: '15:00 Die Fortsetzung der Besichtigungen in Kunya-Urgentsch: Besuch des Turabeg Hanum Komplexes, Sayid Achmed Mausoleums, Gutlug Timur Minarettes, Sultan Tekesch Mausoleums, II-Arslan Mausoleums, Mamun II Minarettes. Rückkehr nach Dashoguz. Check-in im Hotel. 20.00-22.00 Abendessen im Lokalrestaurant. Übernachtung.',
			we11: 'TAG 3. DASCHOGUZ –DARVAZA-ERBENT-ASCHGABAT (560 KM)',
			we12: '07:00-09:00 Frühstück im Hotel Fahrt durch Karakum Wüste, Besuch des Darvaza Gaskrater (alle drei Krater). Die Ortschaft Erbent mit einer Oasestadt und mit Kamelen, Teepause in einer Jurte der Nomaden. 13:00-15:00 Mittagessen ',
			we13: 'Ankunft in Aschgabat und Einchecken im Hotel 20.00-22.00 Abendessen im lokalen Restaurant. Übernachtung im Hotel.',
			we14: 'IM REISEPREIS INKLUDIERT:',
			we15: '⦁ Unterkunft in den angegebenen Hotels im DZ mit Du/WC oder Bad/WC; ⦁ Alle Transfers und Ausflüge im landesüblichen PKW, Reisebus mit A/C lt. Programm;',
			we16: '⦁ Professionelle deutschsprachige Reiseleiter während des Programms; ⦁ Eintrittsgebühre für alle Besuchsorte; ⦁ Folklore und Modeschau in der Medresse „Nodir Devon Begi“ (Bukhara); ⦁ 1-Liter-Flasche Wasser pro Person pro Tag;',
			we17: '⦁ Weinprobe bei der "Samarkand Weinfabrik". ⦁ Theater Aufführung von "El-Merosi". ⦁ Halbpension; ⦁ Präsentation des Nationalgerichtes "Pilaw" bei einer usbekischen Familie; ⦁ Zugtickets Taschkent-Samarkand (Schnellzug).',
			we18: 'Typpakete',
			we19: 'TAG 4. ASCHGABAT –MARY (350 km gesamt 410 km mit Merv)',
			we20: 'Heute Vormittag sind wir per Bus unterwegs. Zuerst fahren wir zum auswärts gelegenen Sommerpalast Sitorei und bestaunen die reiche Ausstattung der Zimmer. Dann besuchen wir das Mausoleum der Samaniden, das wohl älteste erhaltene islamische Bauwerk in Zentralasien (entstanden um das Jahr 900), und schauen uns weitere Monumente in der Parklandschaft an. Auch die Moschee Minor Chor ist einen Abstecher wert.',
			we21: 'TAG 5. MARY-FARAB-BUCHARA (270 KM)',
			we22: 'Über Nawoi fahren wir nach Nurata und machen einen Abstecher in die malerische Schlucht von Sarmisch. Im hiesigen Freilichtmueseum gibt es nach Schätzung der Archäologen über 4000 Felsritzungen aus der Stein- und Bronzezeit. Auf den dunkelbraunen Felsen aus Schiefer finden sich zahlreiche Jagdszenen mit Wildtieren, die in ferner Vergangenheit hier gelebt haben.',
			we23: 'TAG 6. BUCHARA',
			we24: '07:00-09:00 Frühstück im Hotel 09:00-13:00 Stadtbesichtigung von Buchara: Besuch des Samanidenmausoleums, Tschaschma Ayub Mausoleums, der Moschee Bolo-Haus, der Zitadelle Ark. 13:00-15:00 Mittagessen im lokalen Restaurant',
			we25: 'TAG 7. BUCHARA-SAMARKAND',
			we26: 'Wir fahren ins grüne Bergdorf Sentjab, wo wir in einem einfachen Gästehaus in 3-4 Bettzimmern untergebracht sind.',
			we27: 'Typpakete',
			we28: 'Typpakete',
			we29: 'IM REISEPREIS NICHT INKLUDIERT:',
			we30: 'Tag 8. SAMARKAND',
			we31: '07:00-09:00 Frühstück im Hotel 09:00-13:00 Stadtbesichtigung von Samarkand: Besuch der Sternwarte von Ulugbek, der Nekropole von Schahi Sinda, das Museum für die Entstehungsgeschichte von Samarkand „Afrosiab“ und die Bibi Hanum Moschee. 13:00-14:00 Mittagessen im lokalen Restaurant',
			we32: 'Tag 9. SAMARKAND – TASCHKENT (282 km)',
			we33: 'Vormittags legen wir die 290 km lange Fahrstrecke nach Taschkent zurück. Am Nachmittag können wir noch eine kleine Besichtigung in Taschkent unternehmen, bevor wir uns unser Abschiedsabendessen in einem typischen Lokal genießen.',
			we34: 'Tag 10. TASCHKENT - ALMATY 08:00-09:00 Frühstück im Hotel 10:00 Transfer zum Hauptbahnhof von Taschkent. 10:15 -11-00 Ankunft im Bahnhof und Registrierung der Fahrgäste. 12:05 Abfahrt mit dem Zug von Taschkent nach Almaty',
			we35: 'Tag 11. ALMATYFrühmorgens Transfer zum Flughafen und Abschied vom usbekischen Begleiter; Rückflug mit Uzbekistan Airways von Taschkent nach Frankfurt. Ankunft vormittags. Übernachtung im Hotel',
			we36: '⦁ Alkoholgetränke (Wodka, Bier, usw.);',
			we37: '⦁ Foto und Kamera-Gebühren;',
			we38: '⦁ Usbekisches Visum;',
			we39: '⦁ Trinkgeld für Reiseleiter und Fahrer;',
			we40: '⦁ Internationale Flugtickets;',
			we41: '⦁ Urgentsch-Taschkent Inlandsflug ($55)',
			we42: 'Unsere Reisepaketpreise',
			we43: 'Eingeben',
			we44: 'Pluralität',
			we45: 'Lacetti CHEVROLET - For 2 pax Istana SONG YONG  - For 5-7 pax YUTONG BUS - For 8-15 pax  YUTONG BUS - For 16-40 pax',
			we46: 'Angenehme Tageswanderungen bzw. gemütliche Trekkingtouren in Kombination mit überwältigenden Gebirgskulissen sowie kulturellen Highlights eines Landes können besser wirken und unvergessliche Eindrücke hinterlassen.',
			we47: 'Kopfteil',
			we48: 'Heim',
			we49: 'Über uns',
			we50: 'Kontaktez',
			we51: 'Reisepakete',
			we52: 'Reisepakete-2',


			// nolon1: 'Heim',
			// nolon2: 'Über uns',
			// nolon3: 'Kontaktez',
			// nolon0: 'Reisepakete',
			// nolon4: 'Unsere besten Touren',
			// nolon5: 'Vergnügungs',
			// nolon6: 'Ausführlich',
			// nolon7: 'Chiwa-Urgentsch-Taschkent',
			// nolon8: 'Gruppe',
			// nolon9: 'Ausführlich',
			// nolon10: 'Aschgabat-Almay',
			// nolon11: 'Gruppe',
			// nolon12: 'Alle Rechte vorbehalten. Design SMK WEB', 
			
			// page11: 'IM REISEPREIS INKLUDIERT:',
			// page12: '⦁ Unterkunft in den angegebenen Hotels im DZ mit Du/WC oder Bad/WC; ⦁ Alle Transfers und Ausflüge im landesüblichen PKW, Reisebus mit A/C lt. Programm; ⦁ Professionelle deutschsprachige Reiseleiter während des Programms;',
			// page13: '⦁ Eintrittsgebühre für alle Besuchsorte; ⦁ Folklore und Modeschau in der Medresse „Nodir Devon Begi“ (Bukhara); ⦁ Weinprobe bei der "Samarkand Weinfabrik". ⦁ Theater Aufführung von "El-Merosi". ⦁ Halbpension; ⦁ Präsentation des Nationalgerichtes "Pilaw" bei einer usbekischen;',
			// page14: 'IM REISEPREIS NICHT INKLUDIERT:',
			// page15: '⦁ Alkoholgetränke (Wodka, Bier, usw.); ⦁ Foto und Kamera-Gebühren; ⦁ Usbekisches Visum;',
			// page16: '⦁ Trinkgeld für Reiseleiter und Fahrer; ⦁ Internationale Flugtickets; ⦁ Urgentsch-Taschkent Inlandsflug ($55)',



			// den1: 'Entdecken Sie Usbekistan mit SAHRO TRAVEL!',
			// den2: 'SAHRO TRAVEL ist ein mehrjahriger Reiseveranstalter, der sich auf unvergessliche Reisen durch Usbekistan und Zentralasien spezialisiert. Ob Sie sich von der reichen Geschichte der Großen Seidenstraße oder den atemberaubenden Naturlandschaften der Region angezogen fühlen, wir sind hier, um das perfekte Abenteuer für Sie zu gestalten.',
			// den3: 'Wir bieten umfassende Kulturreisen in legendäre Städte wie Samarkand, Buchara, Chiwa, Taschkent, Nukus und Kokand an – jede mit einer einzigartigen Geschichte, die die Region seit Jahrhunderten geprägt hat. Abenteuerreisende können die atemberaubenden Landschaften der Berge, Wüsten, Steppen und Täler mit unseren Aktiv- und Ökoreisen erkunden, darunter Wanderungen durch unberührte Natur.',
			// den4: 'Für alle, die sich für Geschichte und Umweltveränderungen interessieren, organisieren wir exklusive Reisen zum Aralsee, bei denen Sie die dramatische Transformation des einst zweitgrößten Binnenmeeres der Welt aus erster Hand miterleben können.',
			// den5: 'Unser Team verfügt über jahrelange Erfahrung in der Organisation von Individuell- und Gruppenreisen nach Usbekistan und in die weitere Laender der zentralasiatischen Region. Wir bieten auch kombinierte Reisen mit Nachbarländern an, um diesen faszinierenden Teil der Welt umfassender zu erkunden.',
			// den6: 'Bei SAHRO TRAVEL sind wir stolz darauf, maßgeschneiderte Reiserouten zu erstellen, die Ihren Interessen, Vorlieben und Ihrem Budget entsprechen. Mit unserem Engagement für qualitativ hochwertigen Service zu den besten Preisen sorgen wir dafür, dass Ihre Reise reibungslos, angenehm und wirklich unvergesslich wird.',







        }
    };

    // Function to apply translation
    function applyTranslation(language) {
        const translation = translations[language];

        if (!translation) return;

        Object.keys(translation).forEach(key => {
            let element = document.getElementById(key);
            if (element) {
                element.textContent = translation[key];
            }
        });
    }

    // Check saved language or default to English
    let selectedLanguage = localStorage.getItem('language') || 'en';
    applyTranslation(selectedLanguage);

    // Update language when button is clicked
    flagButtons.forEach(button => {
        button.addEventListener('click', function () {
            let newLanguage = this.getAttribute('data-language');
            localStorage.setItem('language', newLanguage);
            applyTranslation(newLanguage);
        });
    });
});







