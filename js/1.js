(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

var camel2hyphen = __webpack_require__(425);

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and '
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', '
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

module.exports = json2mq;

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

module.exports = camel2hyphen;

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = clamp;
exports.canUseDOM = exports.slidesOnLeft = exports.slidesOnRight = exports.siblingDirection = exports.getTotalSlides = exports.getPostClones = exports.getPreClones = exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = exports.checkSpecKeys = exports.getSlideCount = exports.checkNavigable = exports.getNavigableIndexes = exports.swipeEnd = exports.swipeMove = exports.swipeStart = exports.keyHandler = exports.changeSlide = exports.slideHandler = exports.initializedState = exports.extractObject = exports.canGoNext = exports.getSwipeDirection = exports.getHeight = exports.getWidth = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.lazyStartIndex = exports.getRequiredLazySlides = exports.getOnDemandLazySlides = exports.safePreventDefault = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function clamp(number, lowerBound, upperBound) {
  return Math.max(lowerBound, Math.min(number, upperBound));
}

var safePreventDefault = function safePreventDefault(event) {
  var passiveEvents = ["onTouchStart", "onTouchMove", "onWheel"];

  if (!passiveEvents.includes(event._reactName)) {
    event.preventDefault();
  }
};

exports.safePreventDefault = safePreventDefault;

var getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }

  return onDemandSlides;
}; // return list of slides that need to be present


exports.getOnDemandLazySlides = getOnDemandLazySlides;

var getRequiredLazySlides = function getRequiredLazySlides(spec) {
  var requiredSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex);
  }

  return requiredSlides;
}; // startIndex that needs to be present


exports.getRequiredLazySlides = getRequiredLazySlides;

var lazyStartIndex = function lazyStartIndex(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};

exports.lazyStartIndex = lazyStartIndex;

var lazyEndIndex = function lazyEndIndex(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};

exports.lazyEndIndex = lazyEndIndex;

var lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};

exports.lazySlidesOnLeft = lazySlidesOnLeft;

var lazySlidesOnRight = function lazySlidesOnRight(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
}; // get width of an element


exports.lazySlidesOnRight = lazySlidesOnRight;

var getWidth = function getWidth(elem) {
  return elem && elem.offsetWidth || 0;
};

exports.getWidth = getWidth;

var getHeight = function getHeight(elem) {
  return elem && elem.offsetHeight || 0;
};

exports.getHeight = getHeight;

var getSwipeDirection = function getSwipeDirection(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }

  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }

  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }

  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }

  return "vertical";
}; // whether or not we can go next


exports.getSwipeDirection = getSwipeDirection;

var canGoNext = function canGoNext(spec) {
  var canGo = true;

  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }

  return canGo;
}; // given an object and a list of keys, return new object with given keys


exports.canGoNext = canGoNext;

var extractObject = function extractObject(spec, keys) {
  var newObject = {};
  keys.forEach(function (key) {
    return newObject[key] = spec[key];
  });
  return newObject;
}; // get initialized state


exports.extractObject = extractObject;

var initializedState = function initializedState(spec) {
  // spec also contains listRef, trackRef
  var slideCount = _react["default"].Children.count(spec.children);

  var listNode = spec.listRef;
  var listWidth = Math.ceil(getWidth(listNode));
  var trackNode = spec.trackRef && spec.trackRef.node;
  var trackWidth = Math.ceil(getWidth(trackNode));
  var slideWidth;

  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;

    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }

    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }

  var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;

  if (spec.rtl && spec.currentSlide === undefined) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }

  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
    currentSlide: currentSlide,
    lazyLoadedList: lazyLoadedList
  }));
  lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount: slideCount,
    slideWidth: slideWidth,
    listWidth: listWidth,
    trackWidth: trackWidth,
    currentSlide: currentSlide,
    slideHeight: slideHeight,
    listHeight: listHeight,
    lazyLoadedList: lazyLoadedList
  };

  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }

  return state;
};

exports.initializedState = initializedState;

var slideHandler = function slideHandler(spec) {
  var waitForAnimate = spec.waitForAnimate,
      animating = spec.animating,
      fade = spec.fade,
      infinite = spec.infinite,
      index = spec.index,
      slideCount = spec.slideCount,
      lazyLoad = spec.lazyLoad,
      currentSlide = spec.currentSlide,
      centerMode = spec.centerMode,
      slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      useCSS = spec.useCSS;
  var lazyLoadedList = spec.lazyLoadedList;
  if (waitForAnimate && animating) return {};
  var animationSlide = index,
      finalSlide,
      animationLeft,
      finalLeft;
  var state = {},
      nextState = {};
  var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);

  if (fade) {
    if (!infinite && (index < 0 || index >= slideCount)) return {};

    if (index < 0) {
      animationSlide = index + slideCount;
    } else if (index >= slideCount) {
      animationSlide = index - slideCount;
    }

    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList = lazyLoadedList.concat(animationSlide);
    }

    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList: lazyLoadedList,
      targetSlide: animationSlide
    };
    nextState = {
      animating: false,
      targetSlide: animationSlide
    };
  } else {
    finalSlide = animationSlide;

    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }

    if (!infinite && animationSlide + slidesToShow >= slideCount) {
      finalSlide = slideCount - slidesToShow;
    }

    animationLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
      slideIndex: finalSlide
    }));

    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }

    if (lazyLoad) {
      lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
        currentSlide: animationSlide
      })));
    }

    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: finalLeft
        })),
        lazyLoadedList: lazyLoadedList,
        targetSlide: targetSlide
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: animationLeft
        })),
        lazyLoadedList: lazyLoadedList,
        targetSlide: targetSlide
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: finalLeft
        })),
        swipeLeft: null,
        targetSlide: targetSlide
      };
    }
  }

  return {
    state: state,
    nextState: nextState
  };
};

exports.slideHandler = slideHandler;

var changeSlide = function changeSlide(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      slideCount = spec.slideCount,
      currentSlide = spec.currentSlide,
      previousTargetSlide = spec.targetSlide,
      lazyLoad = spec.lazyLoad,
      infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;

    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }

    if (!infinite) {
      targetSlide = previousTargetSlide - slidesToScroll;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;

    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }

    if (!infinite) {
      targetSlide = previousTargetSlide + slidesToScroll;
    }
  } else if (options.message === "dots") {
    // Click on dots
    targetSlide = options.index * options.slidesToScroll;
  } else if (options.message === "children") {
    // Click on the slides
    targetSlide = options.index;

    if (infinite) {
      var direction = siblingDirection(_objectSpread(_objectSpread({}, spec), {}, {
        targetSlide: targetSlide
      }));

      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);
  }

  return targetSlide;
};

exports.changeSlide = changeSlide;

var keyHandler = function keyHandler(e, accessibility, rtl) {
  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
  if (e.keyCode === 37) return rtl ? "next" : "previous";
  if (e.keyCode === 39) return rtl ? "previous" : "next";
  return "";
};

exports.keyHandler = keyHandler;

var swipeStart = function swipeStart(e, swipe, draggable) {
  e.target.tagName === "IMG" && safePreventDefault(e);
  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};

exports.swipeStart = swipeStart;

var swipeMove = function swipeMove(e, spec) {
  // spec also contains, trackRef and slideIndex
  var scrolling = spec.scrolling,
      animating = spec.animating,
      vertical = spec.vertical,
      swipeToSlide = spec.swipeToSlide,
      verticalSwiping = spec.verticalSwiping,
      rtl = spec.rtl,
      currentSlide = spec.currentSlide,
      edgeFriction = spec.edgeFriction,
      edgeDragged = spec.edgeDragged,
      onEdge = spec.onEdge,
      swiped = spec.swiped,
      swiping = spec.swiping,
      slideCount = spec.slideCount,
      slidesToScroll = spec.slidesToScroll,
      infinite = spec.infinite,
      touchObject = spec.touchObject,
      swipeEvent = spec.swipeEvent,
      listHeight = spec.listHeight,
      listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return safePreventDefault(e);
  if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e);
  var swipeLeft,
      state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }

  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;

  if (!infinite) {
    if (currentSlide === 0 && swipeDirection === "right" || currentSlide + 1 >= dotCount && swipeDirection === "left" || !canGoNext(spec) && swipeDirection === "left") {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;

      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }

  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }

  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }

  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }

  state = _objectSpread(_objectSpread({}, state), {}, {
    touchObject: touchObject,
    swipeLeft: swipeLeft,
    trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
      left: swipeLeft
    }))
  });

  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }

  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    safePreventDefault(e);
  }

  return state;
};

exports.swipeMove = swipeMove;

var swipeEnd = function swipeEnd(e, spec) {
  var dragging = spec.dragging,
      swipe = spec.swipe,
      touchObject = spec.touchObject,
      listWidth = spec.listWidth,
      touchThreshold = spec.touchThreshold,
      verticalSwiping = spec.verticalSwiping,
      listHeight = spec.listHeight,
      swipeToSlide = spec.swipeToSlide,
      scrolling = spec.scrolling,
      onSwipe = spec.onSwipe,
      targetSlide = spec.targetSlide,
      currentSlide = spec.currentSlide,
      infinite = spec.infinite;

  if (!dragging) {
    if (swipe) safePreventDefault(e);
    return {};
  }

  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping); // reset the state of touch related state variables.

  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };

  if (scrolling) {
    return state;
  }

  if (!touchObject.swipeLength) {
    return state;
  }

  if (touchObject.swipeLength > minSwipe) {
    safePreventDefault(e);

    if (onSwipe) {
      onSwipe(swipeDirection);
    }

    var slideCount, newSlide;
    var activeSlide = infinite ? currentSlide : targetSlide;

    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = activeSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;

      case "right":
      case "down":
        newSlide = activeSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;

      default:
        slideCount = activeSlide;
    }

    state["triggerSlideHandler"] = slideCount;
  } else {
    // Adjust the track back to it's original position.
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
      left: currentLeft
    }));
  }

  return state;
};

exports.swipeEnd = swipeEnd;

var getNavigableIndexes = function getNavigableIndexes(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];

  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }

  return indexes;
};

exports.getNavigableIndexes = getNavigableIndexes;

var checkNavigable = function checkNavigable(spec, index) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;

  if (index > navigables[navigables.length - 1]) {
    index = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index < navigables[n]) {
        index = prevNavigable;
        break;
      }

      prevNavigable = navigables[n];
    }
  }

  return index;
};

exports.checkNavigable = checkNavigable;

var getSlideCount = function getSlideCount(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;

  if (spec.swipeToSlide) {
    var swipedSlide;
    var slickList = spec.listRef;
    var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
    Array.from(slides).every(function (slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }

      return true;
    });

    if (!swipedSlide) {
      return 0;
    }

    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};

exports.getSlideCount = getSlideCount;

var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing:", spec);
};

exports.checkSpecKeys = checkSpecKeys;

var getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }

  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };

  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _objectSpread(_objectSpread({}, style), {}, {
      WebkitTransform: WebkitTransform,
      transform: transform,
      msTransform: msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }

  if (spec.fade) style = {
    opacity: 1
  };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight; // Fallback for IE8

  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }

  return style;
};

exports.getTrackCSS = getTrackCSS;

var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec); // useCSS is true by default so it can be undefined

  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }

  return style;
};

exports.getTrackAnimateCSS = getTrackAnimateCSS;

var getTrackLeft = function getTrackLeft(spec) {
  if (spec.unslick) {
    return 0;
  }

  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex,
      trackRef = spec.trackRef,
      infinite = spec.infinite,
      centerMode = spec.centerMode,
      slideCount = spec.slideCount,
      slidesToShow = spec.slidesToShow,
      slidesToScroll = spec.slidesToScroll,
      slideWidth = spec.slideWidth,
      listWidth = spec.listWidth,
      variableWidth = spec.variableWidth,
      slideHeight = spec.slideHeight,
      fade = spec.fade,
      vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;

  if (fade || spec.slideCount === 1) {
    return 0;
  }

  var slidesToOffset = 0;

  if (infinite) {
    slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children

    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    } // shift current slide to center of the frame


    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }

    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }

  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;

  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }

  if (variableWidth === true) {
    var targetSlideIndex;
    var trackElem = trackRef && trackRef.node;
    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;

    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;

      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }

      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }

  return targetLeft;
};

exports.getTrackLeft = getTrackLeft;

var getPreClones = function getPreClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  if (spec.variableWidth) {
    return spec.slideCount;
  }

  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};

exports.getPreClones = getPreClones;

var getPostClones = function getPostClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  return spec.slideCount;
};

exports.getPostClones = getPostClones;

var getTotalSlides = function getTotalSlides(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};

exports.getTotalSlides = getTotalSlides;

var siblingDirection = function siblingDirection(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }

    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }

    return "left";
  }
};

exports.siblingDirection = siblingDirection;

var slidesOnRight = function slidesOnRight(_ref) {
  var slidesToShow = _ref.slidesToShow,
      centerMode = _ref.centerMode,
      rtl = _ref.rtl,
      centerPadding = _ref.centerPadding;

  // returns no of slides on the right of active slide
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }

  if (rtl) {
    return 0;
  }

  return slidesToShow - 1;
};

exports.slidesOnRight = slidesOnRight;

var slidesOnLeft = function slidesOnLeft(_ref2) {
  var slidesToShow = _ref2.slidesToShow,
      centerMode = _ref2.centerMode,
      rtl = _ref2.rtl,
      centerPadding = _ref2.centerPadding;

  // returns no of slides on the left of active slide
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }

  if (rtl) {
    return slidesToShow - 1;
  }

  return 0;
};

exports.slidesOnLeft = slidesOnLeft;

var canUseDOM = function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};

exports.canUseDOM = canUseDOM;

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var Tablelvl2Context = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]();

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (Tablelvl2Context);

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMediaQuery; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(378);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(417);



function useMediaQuery(queryInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
  var props = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
    theme: theme,
    name: 'MuiUseMediaQuery',
    props: {}
  });

  if (false) {}

  var query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, ''); // Wait for jsdom to support the match media feature.
  // All the browsers Material-UI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.

  var supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  var _props$options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, options),
      _props$options$defaul = _props$options.defaultMatches,
      defaultMatches = _props$options$defaul === void 0 ? false : _props$options$defaul,
      _props$options$matchM = _props$options.matchMedia,
      matchMedia = _props$options$matchM === void 0 ? supportMatchMedia ? window.matchMedia : null : _props$options$matchM,
      _props$options$noSsr = _props$options.noSsr,
      noSsr = _props$options$noSsr === void 0 ? false : _props$options$noSsr,
      _props$options$ssrMat = _props$options.ssrMatchMedia,
      ssrMatchMedia = _props$options$ssrMat === void 0 ? null : _props$options$ssrMat;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](function () {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }

    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    } // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.


    return defaultMatches;
  }),
      match = _React$useState[0],
      setMatch = _React$useState[1];

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    var active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    var queryList = matchMedia(query);

    var updateMatch = function updateMatch() {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();
    queryList.addListener(updateMatch);
    return function () {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);

  if (false) {}

  return match;
}

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slider = _interopRequireDefault(__webpack_require__(446));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _slider["default"];
exports["default"] = _default;

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var TableContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]();

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (TableContext);

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _innerSlider = __webpack_require__(447);

var _json2mq = _interopRequireDefault(__webpack_require__(424));

var _defaultProps = _interopRequireDefault(__webpack_require__(453));

var _innerSliderUtils = __webpack_require__(426);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var enquire = (0, _innerSliderUtils.canUseDOM)() && __webpack_require__(454);

var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function (ref) {
      return _this.innerSlider = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      return _this.innerSlider.slickPrev();
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      return _this.innerSlider.slickNext();
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _this.innerSlider.slickGoTo(slide, dontAnimate);
    });

    _defineProperty(_assertThisInitialized(_this), "slickPause", function () {
      return _this.innerSlider.pause("paused");
    });

    _defineProperty(_assertThisInitialized(_this), "slickPlay", function () {
      return _this.innerSlider.autoPlay("play");
    });

    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    return _this;
  }

  _createClass(Slider, [{
    key: "media",
    value: function media(query, handler) {
      // javascript handler for  css media query
      enquire.register(query, handler);

      this._responsiveMediaHandlers.push({
        query: query,
        handler: handler
      });
    } // handles responsive breakpoints

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // performance monitoring
      //if (process.env.NODE_ENV !== 'production') {
      //const { whyDidYouUpdate } = require('why-did-you-update')
      //whyDidYouUpdate(React)
      //}
      if (this.props.responsive) {
        var breakpoints = this.props.responsive.map(function (breakpt) {
          return breakpt.breakpoint;
        }); // sort them in increasing order of their numerical value

        breakpoints.sort(function (x, y) {
          return x - y;
        });
        breakpoints.forEach(function (breakpoint, index) {
          // media query for each breakpoint
          var bQuery;

          if (index === 0) {
            bQuery = (0, _json2mq["default"])({
              minWidth: 0,
              maxWidth: breakpoint
            });
          } else {
            bQuery = (0, _json2mq["default"])({
              minWidth: breakpoints[index - 1] + 1,
              maxWidth: breakpoint
            });
          } // when not using server side rendering


          (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function () {
            _this2.setState({
              breakpoint: breakpoint
            });
          });
        }); // Register media query for full screen. Need to support resize from small to large
        // convert javascript object to media query string

        var query = (0, _json2mq["default"])({
          minWidth: breakpoints.slice(-1)[0]
        });
        (0, _innerSliderUtils.canUseDOM)() && this.media(query, function () {
          _this2.setState({
            breakpoint: null
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._responsiveMediaHandlers.forEach(function (obj) {
        enquire.unregister(obj.query, obj.handler);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var settings;
      var newProps;

      if (this.state.breakpoint) {
        newProps = this.props.responsive.filter(function (resp) {
          return resp.breakpoint === _this3.state.breakpoint;
        });
        settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread(_objectSpread(_objectSpread({}, _defaultProps["default"]), this.props), newProps[0].settings);
      } else {
        settings = _objectSpread(_objectSpread({}, _defaultProps["default"]), this.props);
      } // force scrolling by one if centerMode is on


      if (settings.centerMode) {
        if (settings.slidesToScroll > 1 && "production" !== "production") {
          console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
        }

        settings.slidesToScroll = 1;
      } // force showing one slide and scrolling by one if the fade mode is on


      if (settings.fade) {
        if (settings.slidesToShow > 1 && "production" !== "production") {
          console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
        }

        if (settings.slidesToScroll > 1 && "production" !== "production") {
          console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
        }

        settings.slidesToShow = 1;
        settings.slidesToScroll = 1;
      } // makes sure that children is an array, even when there is only 1 child


      var children = _react["default"].Children.toArray(this.props.children); // Children may contain false or null, so we should filter them
      // children may also contain string filled with spaces (in certain cases where we use jsx strings)


      children = children.filter(function (child) {
        if (typeof child === "string") {
          return !!child.trim();
        }

        return !!child;
      }); // rows and slidesPerRow logic is handled here

      if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
        console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
        settings.variableWidth = false;
      }

      var newChildren = [];
      var currentWidth = null;

      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
        var newSlide = [];

        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
          var row = [];

          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
            if (settings.variableWidth && children[k].props.style) {
              currentWidth = children[k].props.style.width;
            }

            if (k >= children.length) break;
            row.push( /*#__PURE__*/_react["default"].cloneElement(children[k], {
              key: 100 * i + 10 * j + k,
              tabIndex: -1,
              style: {
                width: "".concat(100 / settings.slidesPerRow, "%"),
                display: "inline-block"
              }
            }));
          }

          newSlide.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: 10 * i + j
          }, row));
        }

        if (settings.variableWidth) {
          newChildren.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: i,
            style: {
              width: currentWidth
            }
          }, newSlide));
        } else {
          newChildren.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: i
          }, newSlide));
        }
      }

      if (settings === "unslick") {
        var className = "regular slider " + (this.props.className || "");
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, children);
      } else if (newChildren.length <= settings.slidesToShow) {
        settings.unslick = true;
      }

      return /*#__PURE__*/_react["default"].createElement(_innerSlider.InnerSlider, _extends({
        style: this.props.style,
        ref: this.innerSliderRefHandler
      }, settings), newChildren);
    }
  }]);

  return Slider;
}(_react["default"].Component);

exports["default"] = Slider;

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerSlider = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _initialState = _interopRequireDefault(__webpack_require__(448));

var _lodash = _interopRequireDefault(__webpack_require__(190));

var _classnames = _interopRequireDefault(__webpack_require__(429));

var _innerSliderUtils = __webpack_require__(426);

var _track = __webpack_require__(449);

var _dots = __webpack_require__(450);

var _arrows = __webpack_require__(451);

var _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__(452));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InnerSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(InnerSlider, _React$Component);

  var _super = _createSuper(InnerSlider);

  function InnerSlider(props) {
    var _this;

    _classCallCheck(this, InnerSlider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "listRefHandler", function (ref) {
      return _this.list = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function (ref) {
      return _this.track = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function () {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));

        _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.props.onInit && _this.props.onInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }

      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props);

      _this.updateState(spec, true, function () {
        _this.adaptHeight();

        _this.props.autoplay && _this.autoPlay("update");
      });

      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
      }

      _this.ro = new _resizeObserverPolyfill["default"](function () {
        if (_this.state.animating) {
          _this.onWindowResized(false); // don't set trackStyle hence don't break animation


          _this.callbackTimers.push(setTimeout(function () {
            return _this.onWindowResized();
          }, _this.props.speed));
        } else {
          _this.onWindowResized();
        }
      });

      _this.ro.observe(_this.list);

      document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function (slide) {
        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
      });

      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }

      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }

      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function (timer) {
          return clearTimeout(timer);
        });

        _this.callbackTimers = [];
      }

      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }

      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }

      _this.ro.disconnect();
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      _this.checkImagesLoad();

      _this.props.onReInit && _this.props.onReInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      } // if (this.props.onLazyLoad) {
      //   this.props.onLazyLoad([leftMostSlide])
      // }


      _this.adaptHeight();

      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);

      var setTrackStyle = _this.didPropsChange(prevProps);

      setTrackStyle && _this.updateState(spec, setTrackStyle, function () {
        if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) {
          _this.changeSlide({
            message: "index",
            index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }

        if (_this.props.autoplay) {
          _this.autoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowResized", function (setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = (0, _lodash["default"])(function () {
        return _this.resizeWindow(setTrackStyle);
      }, 50);

      _this.debouncedResize();
    });

    _defineProperty(_assertThisInitialized(_this), "resizeWindow", function () {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var isTrackMounted = Boolean(_this.track && _this.track.node); // prevent warning: setting state on unmounted component (server side rendering)

      if (!isTrackMounted) return;

      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);

      _this.updateState(spec, setTrackStyle, function () {
        if (_this.props.autoplay) _this.autoPlay("update");else _this.pause("paused");
      }); // animating state should be cleared while resizing, otherwise autoplay stops working


      _this.setState({
        animating: false
      });

      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (spec, setTrackStyle, callback) {
      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
      spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
      spec = _objectSpread(_objectSpread({}, spec), {}, {
        left: targetLeft
      });
      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);

      if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
        updatedState["trackStyle"] = trackStyle;
      }

      _this.setState(updatedState, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "ssrInit", function () {
      if (_this.props.variableWidth) {
        var _trackWidth = 0,
            _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));

        _this.props.children.forEach(function (child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });

        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }

        for (var _i = 0; _i < postClones; _i++) {
          _trackWidth += childrenWidths[_i];
        }

        for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) {
          _trackLeft += childrenWidths[_i2];
        }

        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };

        if (_this.props.centerMode) {
          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }

        return {
          trackStyle: _trackStyle
        };
      }

      var childrenCount = _react["default"].Children.count(_this.props.children);

      var spec = _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        slideCount: childrenCount
      });

      var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;

      if (_this.props.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }

      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };
      return {
        slideWidth: slideWidth + "%",
        trackStyle: trackStyle
      };
    });

    _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function () {
      var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
      var imagesCount = images.length,
          loadedCount = 0;
      Array.prototype.forEach.call(images, function (image) {
        var handler = function handler() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };

        if (!image.onclick) {
          image.onclick = function () {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;

          image.onclick = function () {
            prevClickHandler();
            image.parentNode.focus();
          };
        }

        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function () {
              _this.adaptHeight();

              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;

            image.onerror = function () {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function () {
      var slidesToLoad = [];

      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);

      for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) {
        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }

      for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }

      if (slidesToLoad.length > 0) {
        _this.setState(function (state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });

        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slideHandler", function (index) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props = _this.props,
          asNavFor = _this$props.asNavFor,
          beforeChange = _this$props.beforeChange,
          onLazyLoad = _this$props.onLazyLoad,
          speed = _this$props.speed,
          afterChange = _this$props.afterChange; // capture currentslide before state is updated

      var currentSlide = _this.state.currentSlide;

      var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread(_objectSpread(_objectSpread({
        index: index
      }, _this.props), _this.state), {}, {
        trackRef: _this.track,
        useCSS: _this.props.useCSS && !dontAnimate
      })),
          state = _slideHandler.state,
          nextState = _slideHandler.nextState;

      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function (value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);

      if (!_this.props.waitForAnimate && _this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
        afterChange && afterChange(currentSlide);
        delete _this.animationEndCallback;
      }

      _this.setState(state, function () {
        // asNavForIndex check is to avoid recursive calls of slideHandler in waitForAnimate=false mode
        if (asNavFor && _this.asNavForIndex !== index) {
          _this.asNavForIndex = index;
          asNavFor.innerSlider.slideHandler(index);
        }

        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function () {
          var animating = nextState.animating,
              firstBatch = _objectWithoutProperties(nextState, ["animating"]);

          _this.setState(firstBatch, function () {
            _this.callbackTimers.push(setTimeout(function () {
              return _this.setState({
                animating: animating
              });
            }, 10));

            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeSlide", function (options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);

      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;

      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }

      _this.props.autoplay && _this.autoPlay("update");

      if (_this.props.focusOnSelect) {
        var nodes = _this.list.querySelectorAll(".slick-current");

        nodes[0] && nodes[0].focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clickHandler", function (e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }

      _this.clickable = true;
    });

    _defineProperty(_assertThisInitialized(_this), "keyHandler", function (e) {
      var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
      dir !== "" && _this.changeSlide({
        message: dir
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectHandler", function (options) {
      _this.changeSlide(options);
    });

    _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function () {
      var preventDefault = function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };

      window.ontouchmove = preventDefault;
    });

    _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function () {
      window.ontouchmove = null;
    });

    _defineProperty(_assertThisInitialized(_this), "swipeStart", function (e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }

      var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
      state !== "" && _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeMove", function (e) {
      var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;

      if (state["swiping"]) {
        _this.clickable = false;
      }

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeEnd", function (e) {
      var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];

      _this.setState(state);

      if (triggerSlideHandler === undefined) return;

      _this.slideHandler(triggerSlideHandler);

      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "touchEnd", function (e) {
      _this.swipeEnd(e);

      _this.clickable = true;
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      // this and fellow methods are wrapped in setTimeout
      // to make sure initialize setState has happened before
      // any of such methods are called
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "previous"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "next"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return "";

      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this.state.currentSlide
        }, dontAnimate);
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      var nextIndex;

      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if ((0, _innerSliderUtils.canGoNext)(_objectSpread(_objectSpread({}, _this.props), _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }

      _this.slideHandler(nextIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function (playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }

      var autoplaying = _this.state.autoplaying;

      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }

      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);

      _this.setState({
        autoplaying: "playing"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pause", function (pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }

      var autoplaying = _this.state.autoplaying;

      if (pauseType === "paused") {
        _this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        // pauseType  is 'hovered'
        if (autoplaying === "playing") {
          _this.setState({
            autoplaying: "hovered"
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDotsOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_this), "onTrackOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function () {
      return _this.props.autoplay && _this.pause("focused");
    });

    _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function () {
      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
        "slick-vertical": _this.props.vertical,
        "slick-initialized": true
      });

      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);

      var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
      });
      var dots;

      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots = /*#__PURE__*/_react["default"].createElement(_dots.Dots, dotProps);
      }

      var prevArrow, nextArrow;
      var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      arrowProps.clickHandler = _this.changeSlide;

      if (_this.props.arrows) {
        prevArrow = /*#__PURE__*/_react["default"].createElement(_arrows.PrevArrow, arrowProps);
        nextArrow = /*#__PURE__*/_react["default"].createElement(_arrows.NextArrow, arrowProps);
      }

      var verticalHeightStyle = null;

      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }

      var centerPaddingStyle = null;

      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }

      var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);

      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.touchEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className: className,
        dir: "ltr",
        style: _this.props.style
      };

      if (_this.props.unslick) {
        listProps = {
          className: "slick-list"
        };
        innerSliderProps = {
          className: className
        };
      }

      return /*#__PURE__*/_react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: _this.listRefHandler
      }, listProps), /*#__PURE__*/_react["default"].createElement(_track.Track, _extends({
        ref: _this.trackRefHandler
      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
    });

    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread(_objectSpread({}, _initialState["default"]), {}, {
      currentSlide: _this.props.initialSlide,
      slideCount: _react["default"].Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;

    var ssrState = _this.ssrInit();

    _this.state = _objectSpread(_objectSpread({}, _this.state), ssrState);
    return _this;
  }

  _createClass(InnerSlider, [{
    key: "didPropsChange",
    value: function didPropsChange(prevProps) {
      var setTrackStyle = false;

      for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
        var key = _Object$keys[_i3];

        if (!prevProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }

        if (_typeof(prevProps[key]) === "object" || typeof prevProps[key] === "function") {
          continue;
        }

        if (prevProps[key] !== this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }

      return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
    }
  }]);

  return InnerSlider;
}(_react["default"].Component);

exports.InnerSlider = InnerSlider;

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  animating: false,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: false,
  edgeDragged: false,
  initialized: false,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: false,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: false,
  // used by swipeEvent. differentites between touch and swipe.
  swiping: false,
  touchObject: {
    startX: 0,
    startY: 0,
    curX: 0,
    curY: 0
  },
  trackStyle: {},
  trackWidth: 0,
  targetSlide: 0
};
var _default = initialState;
exports["default"] = _default;

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(429));

var _innerSliderUtils = __webpack_require__(426);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }

  slickCloned = index < 0 || index >= spec.slideCount;

  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;

    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }

  var focusedSlide;

  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }

  var slickCurrent = index === focusedSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent // dubious in case of RTL

  };
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = "relative";

    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }

    style.opacity = spec.currentSlide === spec.index ? 1 : 0;

    if (spec.useCSS) {
      style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
    }
  }

  return style;
};

var getKey = function getKey(child, fallbackKey) {
  return child.key || fallbackKey;
};

var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];

  var childrenCount = _react["default"].Children.count(spec.children);

  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);

  _react["default"].Children.forEach(spec.children, function (elem, index) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    }; // in case of lazyLoad, whether or not we want to fetch the slide

    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
      child = elem;
    } else {
      child = /*#__PURE__*/_react["default"].createElement("div", null);
    }

    var childStyle = getSlideStyle(_objectSpread(_objectSpread({}, spec), {}, {
      index: index
    }));
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
      index: index
    })); // push a cloned element of the desired slide

    slides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
      key: "original" + getKey(child, index),
      "data-index": index,
      className: (0, _classnames["default"])(slideClasses, slideClass),
      tabIndex: "-1",
      "aria-hidden": !slideClasses["slick-active"],
      style: _objectSpread(_objectSpread({
        outline: "none"
      }, child.props.style || {}), childStyle),
      onClick: function onClick(e) {
        child.props && child.props.onClick && child.props.onClick(e);

        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    })); // if slide needs to be precloned or postcloned

    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;

      if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;

        if (key >= startIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: key
        }));
        preCloneSlides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }

      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;

        if (key < endIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: key
        }));
        postCloneSlides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
          key: "postcloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

var Track = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Track, _React$PureComponent);

  var _super = _createSuper(Track);

  function Track() {
    var _this;

    _classCallCheck(this, Track);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "node", null);

    _defineProperty(_assertThisInitialized(_this), "handleRef", function (ref) {
      _this.node = ref;
    });

    return _this;
  }

  _createClass(Track, [{
    key: "render",
    value: function render() {
      var slides = renderSlides(this.props);
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: this.handleRef,
        className: "slick-track",
        style: this.props.trackStyle
      }, mouseEvents), slides);
    }
  }]);

  return Track;
}(_react["default"].PureComponent);

exports.Track = Track;

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dots = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(429));

var _innerSliderUtils = __webpack_require__(426);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var getDotCount = function getDotCount(spec) {
  var dots;

  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }

  return dots;
};

var Dots = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Dots, _React$PureComponent);

  var _super = _createSuper(Dots);

  function Dots() {
    _classCallCheck(this, Dots);

    return _super.apply(this, arguments);
  }

  _createClass(Dots, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      // In Autoplay the focus stays on clicked button even after transition
      // to next slide. That only goes away by click somewhere outside
      e.preventDefault();
      this.props.clickHandler(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave,
          infinite = _this$props.infinite,
          slidesToScroll = _this$props.slidesToScroll,
          slidesToShow = _this$props.slidesToShow,
          slideCount = _this$props.slideCount,
          currentSlide = _this$props.currentSlide;
      var dotCount = getDotCount({
        slideCount: slideCount,
        slidesToScroll: slidesToScroll,
        slidesToShow: slidesToShow,
        infinite: infinite
      });
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      var dots = [];

      for (var i = 0; i < dotCount; i++) {
        var _rightBound = (i + 1) * slidesToScroll - 1;

        var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);

        var _leftBound = rightBound - (slidesToScroll - 1);

        var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
        var className = (0, _classnames["default"])({
          "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
        });
        var dotOptions = {
          message: "dots",
          index: i,
          slidesToScroll: slidesToScroll,
          currentSlide: currentSlide
        };
        var onClick = this.clickHandler.bind(this, dotOptions);
        dots = dots.concat( /*#__PURE__*/_react["default"].createElement("li", {
          key: i,
          className: className
        }, /*#__PURE__*/_react["default"].cloneElement(this.props.customPaging(i), {
          onClick: onClick
        })));
      }

      return /*#__PURE__*/_react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({
        className: this.props.dotsClass
      }, mouseEvents));
    }
  }]);

  return Dots;
}(_react["default"].PureComponent);

exports.Dots = Dots;

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextArrow = exports.PrevArrow = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(429));

var _innerSliderUtils = __webpack_require__(426);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PrevArrow = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PrevArrow, _React$PureComponent);

  var _super = _createSuper(PrevArrow);

  function PrevArrow() {
    _classCallCheck(this, PrevArrow);

    return _super.apply(this, arguments);
  }

  _createClass(PrevArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var prevClasses = {
        "slick-arrow": true,
        "slick-prev": true
      };
      var prevHandler = this.clickHandler.bind(this, {
        message: "previous"
      });

      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
        prevClasses["slick-disabled"] = true;
        prevHandler = null;
      }

      var prevArrowProps = {
        key: "0",
        "data-role": "none",
        className: (0, _classnames["default"])(prevClasses),
        style: {
          display: "block"
        },
        onClick: prevHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var prevArrow;

      if (this.props.prevArrow) {
        prevArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.prevArrow, _objectSpread(_objectSpread({}, prevArrowProps), customProps));
      } else {
        prevArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: "0",
          type: "button"
        }, prevArrowProps), " ", "Previous");
      }

      return prevArrow;
    }
  }]);

  return PrevArrow;
}(_react["default"].PureComponent);

exports.PrevArrow = PrevArrow;

var NextArrow = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(NextArrow, _React$PureComponent2);

  var _super2 = _createSuper(NextArrow);

  function NextArrow() {
    _classCallCheck(this, NextArrow);

    return _super2.apply(this, arguments);
  }

  _createClass(NextArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var nextClasses = {
        "slick-arrow": true,
        "slick-next": true
      };
      var nextHandler = this.clickHandler.bind(this, {
        message: "next"
      });

      if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
        nextClasses["slick-disabled"] = true;
        nextHandler = null;
      }

      var nextArrowProps = {
        key: "1",
        "data-role": "none",
        className: (0, _classnames["default"])(nextClasses),
        style: {
          display: "block"
        },
        onClick: nextHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var nextArrow;

      if (this.props.nextArrow) {
        nextArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.nextArrow, _objectSpread(_objectSpread({}, nextArrowProps), customProps));
      } else {
        nextArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: "1",
          type: "button"
        }, nextArrowProps), " ", "Next");
      }

      return nextArrow;
    }
  }]);

  return NextArrow;
}(_react["default"].PureComponent);

exports.NextArrow = NextArrow;

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(86)))

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  afterChange: null,
  appendDots: function appendDots(dots) {
    return /*#__PURE__*/_react["default"].createElement("ul", {
      style: {
        display: "block"
      }
    }, dots);
  },
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  beforeChange: null,
  centerMode: false,
  centerPadding: "50px",
  className: "",
  cssEase: "ease",
  customPaging: function customPaging(i) {
    return /*#__PURE__*/_react["default"].createElement("button", null, i + 1);
  },
  dots: false,
  dotsClass: "slick-dots",
  draggable: true,
  easing: "linear",
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: null,
  nextArrow: null,
  onEdge: null,
  onInit: null,
  onLazyLoadError: null,
  onReInit: null,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  prevArrow: null,
  responsive: null,
  rows: 1,
  rtl: false,
  slide: "div",
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipe: true,
  swipeEvent: null,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  waitForAnimate: true
};
var _default = defaultProps;
exports["default"] = _default;

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(455);
module.exports = new MediaQueryDispatch();


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(456);
var Util = __webpack_require__(440);
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(457);
var each = __webpack_require__(440).each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),

/***/ 457:
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(212);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);










var styles = function styles(theme) {
  var _extends2;

  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, theme.typography.button, (_extends2 = {
      maxWidth: 264,
      minWidth: 72,
      position: 'relative',
      boxSizing: 'border-box',
      minHeight: 48,
      flexShrink: 0,
      padding: '6px 12px'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_extends2, theme.breakpoints.up('sm'), {
      padding: '6px 24px'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_extends2, "overflow", 'hidden'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_extends2, "whiteSpace", 'normal'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_extends2, "textAlign", 'center'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_extends2, theme.breakpoints.up('sm'), {
      minWidth: 160
    }), _extends2)),

    /* Styles applied to the root element if both `icon` and `label` are provided. */
    labelIcon: {
      minHeight: 72,
      paddingTop: 9,
      '& $wrapper > *:first-child': {
        marginBottom: 6
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`. */
    textColorInherit: {
      color: 'inherit',
      opacity: 0.7,
      '&$selected': {
        opacity: 1
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`. */
    textColorPrimary: {
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`. */
    textColorSecondary: {
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.secondary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },

    /* Pseudo-class applied to the root element if `selected={true}` (controlled by the Tabs component). */
    selected: {},

    /* Pseudo-class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
    disabled: {},

    /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
    fullWidth: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: 'none'
    },

    /* Styles applied to the root element if `wrapped={true}`. */
    wrapped: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.5
    },

    /* Styles applied to the `icon` and `label`'s wrapper element. */
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    }
  };
};
var Tab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Tab(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      fullWidth = props.fullWidth,
      icon = props.icon,
      indicator = props.indicator,
      label = props.label,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      selected = props.selected,
      selectionFollowsFocus = props.selectionFollowsFocus,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
      value = props.value,
      _props$wrapped = props.wrapped,
      wrapped = _props$wrapped === void 0 ? false : _props$wrapped,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["classes", "className", "disabled", "disableFocusRipple", "fullWidth", "icon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"]);

  var handleClick = function handleClick(event) {
    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_ButtonBase__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
    focusRipple: !disableFocusRipple,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(classes.root, classes["textColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(textColor))], className, disabled && classes.disabled, selected && classes.selected, label && icon && classes.labelIcon, fullWidth && classes.fullWidth, wrapped && classes.wrapped),
    ref: ref,
    role: "tab",
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
    className: classes.wrapper
  }, icon, label), indicator);
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(styles, {
  name: 'MuiTab'
})(Tab));

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);






var styles = {
  /* Styles applied to the root element. */
  root: {
    width: '100%',
    overflowX: 'auto'
  }
};
var TableContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TableContainer(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className)
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiTableContainer'
})(TableContainer));

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _TableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(442);







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'table',
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      '& caption': Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, theme.typography.body2, {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        textAlign: 'left',
        captionSide: 'bottom'
      })
    },

    /* Styles applied to the root element if `stickyHeader={true}`. */
    stickyHeader: {
      borderCollapse: 'separate'
    }
  };
};
var defaultComponent = 'table';
var Table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Table(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? defaultComponent : _props$component,
      _props$padding = props.padding,
      padding = _props$padding === void 0 ? 'default' : _props$padding,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$stickyHeader = props.stickyHeader,
      stickyHeader = _props$stickyHeader === void 0 ? false : _props$stickyHeader,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["classes", "className", "component", "padding", "size", "stickyHeader"]);

  var table = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    return {
      padding: padding,
      size: size,
      stickyHeader: stickyHeader
    };
  }, [padding, size, stickyHeader]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_TableContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Provider, {
    value: table
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    role: Component === defaultComponent ? null : 'table',
    ref: ref,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className, stickyHeader && classes.stickyHeader)
  }, other)));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiTable'
})(Table));

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(430);







var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'table-header-group'
  }
};
var tablelvl2 = {
  variant: 'head'
};
var defaultComponent = 'thead';
var TableHead = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TableHead(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? defaultComponent : _props$component,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Provider, {
    value: tablelvl2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className),
    ref: ref,
    role: Component === defaultComponent ? null : 'rowgroup'
  }, other)));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiTableHead'
})(TableHead));

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(430);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: 'inherit',
      display: 'table-row',
      verticalAlign: 'middle',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      '&$hover:hover': {
        backgroundColor: theme.palette.action.hover
      },
      '&$selected, &$selected:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__[/* fade */ "c"])(theme.palette.secondary.main, theme.palette.action.selectedOpacity)
      }
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {},

    /* Pseudo-class applied to the root element if `hover={true}`. */
    hover: {},

    /* Styles applied to the root element if table variant="head". */
    head: {},

    /* Styles applied to the root element if table variant="footer". */
    footer: {}
  };
};
var defaultComponent = 'tr';
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */

var TableRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TableRow(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? defaultComponent : _props$component,
      _props$hover = props.hover,
      hover = _props$hover === void 0 ? false : _props$hover,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "component", "hover", "selected"]);

  var tablelvl2 = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className, tablelvl2 && {
      'head': classes.head,
      'footer': classes.footer
    }[tablelvl2.variant], hover && classes.hover, selected && classes.selected),
    role: Component === defaultComponent ? null : 'row'
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiTableRow'
})(TableRow));

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _Table_TableContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(442);
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(430);










var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, theme.typography.body2, {
      display: 'table-cell',
      verticalAlign: 'inherit',
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: "1px solid\n    ".concat(theme.palette.type === 'light' ? Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__[/* lighten */ "e"])(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__[/* fade */ "c"])(theme.palette.divider, 1), 0.88) : Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__[/* darken */ "a"])(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__[/* fade */ "c"])(theme.palette.divider, 1), 0.68)),
      textAlign: 'left',
      padding: 16
    }),

    /* Styles applied to the root element if `variant="head"` or `context.table.head`. */
    head: {
      color: theme.palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    },

    /* Styles applied to the root element if `variant="body"` or `context.table.body`. */
    body: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
    footer: {
      color: theme.palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: '6px 24px 6px 16px',
      '&:last-child': {
        paddingRight: 16
      },
      '&$paddingCheckbox': {
        width: 24,
        // prevent the checkbox column from growing
        padding: '0 12px 0 16px',
        '&:last-child': {
          paddingLeft: 12,
          paddingRight: 16
        },
        '& > *': {
          padding: 0
        }
      }
    },

    /* Styles applied to the root element if `padding="checkbox"`. */
    paddingCheckbox: {
      width: 48,
      // prevent the checkbox column from growing
      padding: '0 0 0 4px',
      '&:last-child': {
        paddingLeft: 0,
        paddingRight: 4
      }
    },

    /* Styles applied to the root element if `padding="none"`. */
    paddingNone: {
      padding: 0,
      '&:last-child': {
        padding: 0
      }
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `context.table.stickyHeader={true}`. */
    stickyHeader: {
      position: 'sticky',
      top: 0,
      left: 0,
      zIndex: 2,
      backgroundColor: theme.palette.background.default
    }
  };
};
/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */

var TableCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TableCell(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      component = props.component,
      paddingProp = props.padding,
      scopeProp = props.scope,
      sizeProp = props.size,
      sortDirection = props.sortDirection,
      variantProp = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["align", "classes", "className", "component", "padding", "scope", "size", "sortDirection", "variant"]);

  var table = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_Table_TableContext__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);
  var tablelvl2 = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);
  var isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  var role;
  var Component;

  if (component) {
    Component = component;
    role = isHeadCell ? 'columnheader' : 'cell';
  } else {
    Component = isHeadCell ? 'th' : 'td';
  }

  var scope = scopeProp;

  if (!scope && isHeadCell) {
    scope = 'col';
  }

  var padding = paddingProp || (table && table.padding ? table.padding : 'default');
  var size = sizeProp || (table && table.size ? table.size : 'medium');
  var variant = variantProp || tablelvl2 && tablelvl2.variant;
  var ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    ref: ref,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, classes[variant], className, align !== 'inherit' && classes["align".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(align))], padding !== 'default' && classes["padding".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(padding))], size !== 'medium' && classes["size".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(size))], variant === 'head' && table && table.stickyHeader && classes.stickyHeader),
    "aria-sort": ariaSort,
    role: role,
    scope: scope
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiTableCell'
})(TableCell));

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(430);







var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'table-row-group'
  }
};
var tablelvl2 = {
  variant: 'body'
};
var defaultComponent = 'tbody';
var TableBody = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TableBody(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? defaultComponent : _props$component,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Provider, {
    value: tablelvl2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(classes.root, className),
    ref: ref,
    role: Component === defaultComponent ? null : 'rowgroup'
  }, other)));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(styles, {
  name: 'MuiTableBody'
})(TableBody));

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: styleFunction

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/merge.js
var merge = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/css.js





function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

function css(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var output = styleFunction(props);

    if (props.css) {
      return Object(esm_extends["a" /* default */])({}, Object(merge["a" /* default */])(output, styleFunction(Object(esm_extends["a" /* default */])({
        theme: props.theme
      }, props.css))), omit(props.css, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes =  false ? undefined : {};
  newStyleFunction.filterProps = ['css'].concat(Object(toConsumableArray["a" /* default */])(styleFunction.filterProps));
  return newStyleFunction;
}

/* harmony default export */ var esm_css = (css);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/compose.js



function compose() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var fn = function fn(props) {
    return styles.reduce(function (acc, style) {
      var output = style(props);

      if (output) {
        return Object(merge["a" /* default */])(acc, output);
      }

      return acc;
    }, {});
  }; // Alternative approach that doesn't yield any performance gain.
  // const handlers = styles.reduce((acc, style) => {
  //   style.filterProps.forEach(prop => {
  //     acc[prop] = style;
  //   });
  //   return acc;
  // }, {});
  // const fn = props => {
  //   return Object.keys(props).reduce((acc, prop) => {
  //     if (handlers[prop]) {
  //       return merge(acc, handlers[prop](props));
  //     }
  //     return acc;
  //   }, {});
  // };


  fn.propTypes =  false ? undefined : {};
  fn.filterProps = styles.reduce(function (acc, style) {
    return acc.concat(style.filterProps);
  }, []);
  return fn;
}

/* harmony default export */ var esm_compose = (compose);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(163);

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/style.js




function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce(function (acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}

function style_style(options) {
  var prop = options.prop,
      _options$cssProperty = options.cssProperty,
      cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
      themeKey = options.themeKey,
      transform = options.transform;

  var fn = function fn(props) {
    if (props[prop] == null) {
      return null;
    }

    var propValue = props[prop];
    var theme = props.theme;
    var themeMapping = getPath(theme, themeKey) || {};

    var styleFromPropValue = function styleFromPropValue(propValueFinal) {
      var value;

      if (typeof themeMapping === 'function') {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;

        if (transform) {
          value = transform(value);
        }
      }

      if (cssProperty === false) {
        return value;
      }

      return Object(defineProperty["a" /* default */])({}, cssProperty, value);
    };

    return Object(breakpoints["a" /* handleBreakpoints */])(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  false ? undefined : {};
  fn.filterProps = [prop];
  return fn;
}

/* harmony default export */ var esm_style = (style_style);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/borders.js



function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return "".concat(value, "px solid");
}

var border = esm_style({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
var borderTop = esm_style({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
var borderRight = esm_style({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
var borderBottom = esm_style({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
var borderLeft = esm_style({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
var borderColor = esm_style({
  prop: 'borderColor',
  themeKey: 'palette'
});
var borderRadius = esm_style({
  prop: 'borderRadius',
  themeKey: 'shape'
});
var borders = esm_compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);
/* harmony default export */ var esm_borders = (borders);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/display.js


var displayPrint = esm_style({
  prop: 'displayPrint',
  cssProperty: false,
  transform: function transform(value) {
    return {
      '@media print': {
        display: value
      }
    };
  }
});
var displayRaw = esm_style({
  prop: 'display'
});
var overflow = esm_style({
  prop: 'overflow'
});
var textOverflow = esm_style({
  prop: 'textOverflow'
});
var visibility = esm_style({
  prop: 'visibility'
});
var whiteSpace = esm_style({
  prop: 'whiteSpace'
});
/* harmony default export */ var display = (esm_compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace));
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/flexbox.js


var flexBasis = esm_style({
  prop: 'flexBasis'
});
var flexDirection = esm_style({
  prop: 'flexDirection'
});
var flexWrap = esm_style({
  prop: 'flexWrap'
});
var justifyContent = esm_style({
  prop: 'justifyContent'
});
var alignItems = esm_style({
  prop: 'alignItems'
});
var alignContent = esm_style({
  prop: 'alignContent'
});
var order = esm_style({
  prop: 'order'
});
var flex = esm_style({
  prop: 'flex'
});
var flexGrow = esm_style({
  prop: 'flexGrow'
});
var flexShrink = esm_style({
  prop: 'flexShrink'
});
var alignSelf = esm_style({
  prop: 'alignSelf'
});
var justifyItems = esm_style({
  prop: 'justifyItems'
});
var justifySelf = esm_style({
  prop: 'justifySelf'
});
var flexbox = esm_compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
/* harmony default export */ var esm_flexbox = (flexbox);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/grid.js


var gridGap = esm_style({
  prop: 'gridGap'
});
var gridColumnGap = esm_style({
  prop: 'gridColumnGap'
});
var gridRowGap = esm_style({
  prop: 'gridRowGap'
});
var gridColumn = esm_style({
  prop: 'gridColumn'
});
var gridRow = esm_style({
  prop: 'gridRow'
});
var gridAutoFlow = esm_style({
  prop: 'gridAutoFlow'
});
var gridAutoColumns = esm_style({
  prop: 'gridAutoColumns'
});
var gridAutoRows = esm_style({
  prop: 'gridAutoRows'
});
var gridTemplateColumns = esm_style({
  prop: 'gridTemplateColumns'
});
var gridTemplateRows = esm_style({
  prop: 'gridTemplateRows'
});
var gridTemplateAreas = esm_style({
  prop: 'gridTemplateAreas'
});
var gridArea = esm_style({
  prop: 'gridArea'
});
var grid = esm_compose(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ var esm_grid = (grid);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/positions.js


var position = esm_style({
  prop: 'position'
});
var zIndex = esm_style({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
var positions_top = esm_style({
  prop: 'top'
});
var right = esm_style({
  prop: 'right'
});
var bottom = esm_style({
  prop: 'bottom'
});
var left = esm_style({
  prop: 'left'
});
/* harmony default export */ var positions = (esm_compose(position, zIndex, positions_top, right, bottom, left));
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/palette.js


var color = esm_style({
  prop: 'color',
  themeKey: 'palette'
});
var bgcolor = esm_style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
var palette = esm_compose(color, bgcolor);
/* harmony default export */ var esm_palette = (palette);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/shadows.js

var boxShadow = esm_style({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
/* harmony default export */ var shadows = (boxShadow);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/sizing.js



function sizing_transform(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}

var width = esm_style({
  prop: 'width',
  transform: sizing_transform
});
var maxWidth = esm_style({
  prop: 'maxWidth',
  transform: sizing_transform
});
var minWidth = esm_style({
  prop: 'minWidth',
  transform: sizing_transform
});
var height = esm_style({
  prop: 'height',
  transform: sizing_transform
});
var maxHeight = esm_style({
  prop: 'maxHeight',
  transform: sizing_transform
});
var minHeight = esm_style({
  prop: 'minHeight',
  transform: sizing_transform
});
var sizeWidth = esm_style({
  prop: 'size',
  cssProperty: 'width',
  transform: sizing_transform
});
var sizeHeight = esm_style({
  prop: 'size',
  cssProperty: 'height',
  transform: sizing_transform
});
var boxSizing = esm_style({
  prop: 'boxSizing'
});
var sizing = esm_compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ var esm_sizing = (sizing);
// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__(423);

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/typography.js


var fontFamily = esm_style({
  prop: 'fontFamily',
  themeKey: 'typography'
});
var fontSize = esm_style({
  prop: 'fontSize',
  themeKey: 'typography'
});
var fontStyle = esm_style({
  prop: 'fontStyle',
  themeKey: 'typography'
});
var fontWeight = esm_style({
  prop: 'fontWeight',
  themeKey: 'typography'
});
var letterSpacing = esm_style({
  prop: 'letterSpacing'
});
var lineHeight = esm_style({
  prop: 'lineHeight'
});
var textAlign = esm_style({
  prop: 'textAlign'
});
var typography = esm_compose(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
/* harmony default export */ var esm_typography = (typography);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(42);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js + 19 modules
var makeStyles = __webpack_require__(422);

// CONCATENATED MODULE: ./node_modules/@material-ui/styles/esm/styled/styled.js









function styled_omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
} // styled-components's API removes the mapping between components and styles.
// Using components as a low-level styling construct can be simpler.


function styled_styled(Component) {
  var componentCreator = function componentCreator(style) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = options.name,
        stylesOptions = Object(objectWithoutProperties["a" /* default */])(options, ["name"]);

    if (false) {}

    var classNamePrefix = name;

    if (false) { var displayName; }

    var stylesOrCreator = typeof style === 'function' ? function (theme) {
      return {
        root: function root(props) {
          return style(Object(esm_extends["a" /* default */])({
            theme: theme
          }, props));
        }
      };
    } : {
      root: style
    };
    var useStyles = Object(makeStyles["a" /* default */])(stylesOrCreator, Object(esm_extends["a" /* default */])({
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var filterProps;
    var propTypes = {};

    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    /* eslint-disable react/forbid-foreign-prop-types */


    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    /* eslint-enable react/forbid-foreign-prop-types */


    var StyledComponent = /*#__PURE__*/react_default.a.forwardRef(function StyledComponent(props, ref) {
      var children = props.children,
          classNameProp = props.className,
          clone = props.clone,
          ComponentProp = props.component,
          other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "className", "clone", "component"]);

      var classes = useStyles(props);
      var className = Object(clsx_m["a" /* default */])(classes.root, classNameProp);
      var spread = other;

      if (filterProps) {
        spread = styled_omit(spread, filterProps);
      }

      if (clone) {
        return /*#__PURE__*/react_default.a.cloneElement(children, Object(esm_extends["a" /* default */])({
          className: Object(clsx_m["a" /* default */])(children.props.className, className)
        }, spread));
      }

      if (typeof children === 'function') {
        return children(Object(esm_extends["a" /* default */])({
          className: className
        }, spread));
      }

      var FinalComponent = ComponentProp || Component;
      return /*#__PURE__*/react_default.a.createElement(FinalComponent, Object(esm_extends["a" /* default */])({
        ref: ref,
        className: className
      }, spread), children);
    });
     false ? undefined : void 0;

    if (false) {}

    hoist_non_react_statics_cjs_default()(StyledComponent, Component);
    return StyledComponent;
  };

  return componentCreator;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/defaultTheme.js + 16 modules
var defaultTheme = __webpack_require__(115);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/styled.js




var styles_styled_styled = function styled(Component) {
  var componentCreator = styled_styled(Component);
  return function (style, options) {
    return componentCreator(style, Object(esm_extends["a" /* default */])({
      defaultTheme: defaultTheme["a" /* default */]
    }, options));
  };
};

/* harmony default export */ var styles_styled = (styles_styled_styled);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js


var Box_styleFunction = esm_css(esm_compose(esm_borders, display, esm_flexbox, esm_grid, positions, esm_palette, shadows, esm_sizing, spacing["b" /* default */], esm_typography));
/**
 * @ignore - do not document.
 */

var Box = styles_styled('div')(Box_styleFunction, {
  name: 'MuiBox'
});
/* harmony default export */ var Box_Box = __webpack_exports__["a"] = (Box);

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/debounce.js
var debounce = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/ownerWindow.js
var ownerWindow = __webpack_require__(70);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/utils/scrollLeft.js
// Source from https://github.com/alitaheri/normalize-scroll-left
var cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE 11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  var dummy = document.createElement('div');
  var container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  var scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  var type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/animate.js
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}

function animate(property, element, to) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
  var _options$ease = options.ease,
      ease = _options$ease === void 0 ? easeInOutSin : _options$ease,
      _options$duration = options.duration,
      duration = _options$duration === void 0 ? 300 : _options$duration;
  var start = null;
  var from = element[property];
  var cancelled = false;

  var cancel = function cancel() {
    cancelled = true;
  };

  var step = function step(timestamp) {
    if (cancelled) {
      cb(new Error('Animation cancelled'));
      return;
    }

    if (start === null) {
      start = timestamp;
    }

    var time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;

    if (time >= 1) {
      requestAnimationFrame(function () {
        cb(null);
      });
      return;
    }

    requestAnimationFrame(step);
  };

  if (from === to) {
    cb(new Error('Element already at target position'));
    return cancel;
  }

  requestAnimationFrame(step);
  return cancel;
}
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js





var ScrollbarSize_styles = {
  width: 99,
  height: 99,
  position: 'absolute',
  top: -9999,
  overflow: 'scroll'
};
/**
 * @ignore - internal component.
 * The component originates from https://github.com/STORIS/react-scrollbar-size.
 * It has been moved into the core in order to minimize the bundle size.
 */

function ScrollbarSize(props) {
  var onChange = props.onChange,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["onChange"]);

  var scrollbarHeight = react["useRef"]();
  var nodeRef = react["useRef"](null);

  var setMeasurements = function setMeasurements() {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };

  react["useEffect"](function () {
    var handleResize = Object(debounce["a" /* default */])(function () {
      var prevHeight = scrollbarHeight.current;
      setMeasurements();

      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [onChange]);
  react["useEffect"](function () {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    style: ScrollbarSize_styles,
    ref: nodeRef
  }, other));
}
 false ? undefined : void 0;
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js







var TabIndicator_styles = function styles(theme) {
  return {
    root: {
      position: 'absolute',
      height: 2,
      bottom: 0,
      width: '100%',
      transition: theme.transitions.create()
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },
    vertical: {
      height: '100%',
      width: 2,
      right: 0
    }
  };
};
/**
 * @ignore - internal component.
 */

var TabIndicator_TabIndicator = /*#__PURE__*/react["forwardRef"](function TabIndicator(props, ref) {
  var classes = props.classes,
      className = props.className,
      color = props.color,
      orientation = props.orientation,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "color", "orientation"]);

  return /*#__PURE__*/react["createElement"]("span", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, classes["color".concat(Object(capitalize["a" /* default */])(color))], className, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var Tabs_TabIndicator = (Object(withStyles["a" /* default */])(TabIndicator_styles, {
  name: 'PrivateTabIndicator'
})(TabIndicator_TabIndicator));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js + 1 modules
var createSvgIcon = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var KeyboardArrowLeft = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), 'KeyboardArrowLeft'));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var KeyboardArrowRight = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), 'KeyboardArrowRight'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(212);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js



/* eslint-disable jsx-a11y/aria-role */







var TabScrollButton_styles = {
  /* Styles applied to the root element. */
  root: {
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    '&$disabled': {
      opacity: 0
    }
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    width: '100%',
    height: 40,
    '& svg': {
      transform: 'rotate(90deg)'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {}
};

var _ref = /*#__PURE__*/react["createElement"](KeyboardArrowLeft, {
  fontSize: "small"
});

var _ref2 = /*#__PURE__*/react["createElement"](KeyboardArrowRight, {
  fontSize: "small"
});

var TabScrollButton_TabScrollButton = /*#__PURE__*/react["forwardRef"](function TabScrollButton(props, ref) {
  var classes = props.classes,
      classNameProp = props.className,
      direction = props.direction,
      orientation = props.orientation,
      disabled = props.disabled,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "direction", "orientation", "disabled"]);

  return /*#__PURE__*/react["createElement"](ButtonBase["a" /* default */], Object(esm_extends["a" /* default */])({
    component: "div",
    className: Object(clsx_m["a" /* default */])(classes.root, classNameProp, disabled && classes.disabled, orientation === 'vertical' && classes.vertical),
    ref: ref,
    role: null,
    tabIndex: null
  }, other), direction === 'left' ? _ref : _ref2);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_TabScrollButton_TabScrollButton = (Object(withStyles["a" /* default */])(TabScrollButton_styles, {
  name: 'MuiTabScrollButton'
})(TabScrollButton_TabScrollButton));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useEventCallback.js
var useEventCallback = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js


















var Tabs_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      minHeight: 48,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      display: 'flex'
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the flex container element. */
    flexContainer: {
      display: 'flex'
    },

    /* Styles applied to the flex container element if `orientation="vertical"`. */
    flexContainerVertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
    centered: {
      justifyContent: 'center'
    },

    /* Styles applied to the tablist element. */
    scroller: {
      position: 'relative',
      display: 'inline-block',
      flex: '1 1 auto',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the tablist element if `!variant="scrollable"`. */
    fixed: {
      overflowX: 'hidden',
      width: '100%'
    },

    /* Styles applied to the tablist element if `variant="scrollable"`. */
    scrollable: {
      overflowX: 'scroll',
      // Hide dimensionless scrollbar on MacOS
      scrollbarWidth: 'none',
      // Firefox
      '&::-webkit-scrollbar': {
        display: 'none' // Safari + Chrome

      }
    },

    /* Styles applied to the `ScrollButtonComponent` component. */
    scrollButtons: {},

    /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"` or scrollButtons="desktop"`. */
    scrollButtonsDesktop: Object(defineProperty["a" /* default */])({}, theme.breakpoints.down('xs'), {
      display: 'none'
    }),

    /* Styles applied to the `TabIndicator` component. */
    indicator: {}
  };
};
var Tabs_Tabs = /*#__PURE__*/react["forwardRef"](function Tabs(props, ref) {
  var ariaLabel = props['aria-label'],
      ariaLabelledBy = props['aria-labelledby'],
      action = props.action,
      _props$centered = props.centered,
      centered = _props$centered === void 0 ? false : _props$centered,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$indicatorColor = props.indicatorColor,
      indicatorColor = _props$indicatorColor === void 0 ? 'secondary' : _props$indicatorColor,
      onChange = props.onChange,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$ScrollButtonCo = props.ScrollButtonComponent,
      ScrollButtonComponent = _props$ScrollButtonCo === void 0 ? esm_TabScrollButton_TabScrollButton : _props$ScrollButtonCo,
      _props$scrollButtons = props.scrollButtons,
      scrollButtons = _props$scrollButtons === void 0 ? 'auto' : _props$scrollButtons,
      selectionFollowsFocus = props.selectionFollowsFocus,
      _props$TabIndicatorPr = props.TabIndicatorProps,
      TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr,
      TabScrollButtonProps = props.TabScrollButtonProps,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["aria-label", "aria-labelledby", "action", "centered", "children", "classes", "className", "component", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant"]);

  var theme = Object(useTheme["a" /* default */])();
  var scrollable = variant === 'scrollable';
  var isRtl = theme.direction === 'rtl';
  var vertical = orientation === 'vertical';
  var scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
  var start = vertical ? 'top' : 'left';
  var end = vertical ? 'bottom' : 'right';
  var clientSize = vertical ? 'clientHeight' : 'clientWidth';
  var size = vertical ? 'height' : 'width';

  if (false) {}

  var _React$useState = react["useState"](false),
      mounted = _React$useState[0],
      setMounted = _React$useState[1];

  var _React$useState2 = react["useState"]({}),
      indicatorStyle = _React$useState2[0],
      setIndicatorStyle = _React$useState2[1];

  var _React$useState3 = react["useState"]({
    start: false,
    end: false
  }),
      displayScroll = _React$useState3[0],
      setDisplayScroll = _React$useState3[1];

  var _React$useState4 = react["useState"]({
    overflow: 'hidden',
    marginBottom: null
  }),
      scrollerStyle = _React$useState4[0],
      setScrollerStyle = _React$useState4[1];

  var valueToIndex = new Map();
  var tabsRef = react["useRef"](null);
  var tabListRef = react["useRef"](null);

  var getTabsMeta = function getTabsMeta() {
    var tabsNode = tabsRef.current;
    var tabsMeta;

    if (tabsNode) {
      var rect = tabsNode.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft

      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, theme.direction),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }

    var tabMeta;

    if (tabsNode && value !== false) {
      var _children = tabListRef.current.children;

      if (_children.length > 0) {
        var tab = _children[valueToIndex.get(value)];

        if (false) {}

        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }

    return {
      tabsMeta: tabsMeta,
      tabMeta: tabMeta
    };
  };

  var updateIndicatorState = Object(useEventCallback["a" /* default */])(function () {
    var _newIndicatorStyle;

    var _getTabsMeta = getTabsMeta(),
        tabsMeta = _getTabsMeta.tabsMeta,
        tabMeta = _getTabsMeta.tabMeta;

    var startValue = 0;

    if (tabMeta && tabsMeta) {
      if (vertical) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      } else {
        var correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        startValue = tabMeta.left - tabsMeta.left + correction;
      }
    }

    var newIndicatorStyle = (_newIndicatorStyle = {}, Object(defineProperty["a" /* default */])(_newIndicatorStyle, start, startValue), Object(defineProperty["a" /* default */])(_newIndicatorStyle, size, tabMeta ? tabMeta[size] : 0), _newIndicatorStyle);

    if (isNaN(indicatorStyle[start]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      var dStart = Math.abs(indicatorStyle[start] - newIndicatorStyle[start]);
      var dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);

      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });

  var scroll = function scroll(scrollValue) {
    animate(scrollStart, tabsRef.current, scrollValue);
  };

  var moveTabsScroll = function moveTabsScroll(delta) {
    var scrollValue = tabsRef.current[scrollStart];

    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1); // Fix for Edge

      scrollValue *= isRtl && detectScrollType() === 'reverse' ? -1 : 1;
    }

    scroll(scrollValue);
  };

  var handleStartScrollClick = function handleStartScrollClick() {
    moveTabsScroll(-tabsRef.current[clientSize]);
  };

  var handleEndScrollClick = function handleEndScrollClick() {
    moveTabsScroll(tabsRef.current[clientSize]);
  };

  var handleScrollbarSizeChange = react["useCallback"](function (scrollbarHeight) {
    setScrollerStyle({
      overflow: null,
      marginBottom: -scrollbarHeight
    });
  }, []);

  var getConditionalElements = function getConditionalElements() {
    var conditionalElements = {};
    conditionalElements.scrollbarSizeListener = scrollable ? /*#__PURE__*/react["createElement"](ScrollbarSize, {
      className: classes.scrollable,
      onChange: handleScrollbarSizeChange
    }) : null;
    var scrollButtonsActive = displayScroll.start || displayScroll.end;
    var showScrollButtons = scrollable && (scrollButtons === 'auto' && scrollButtonsActive || scrollButtons === 'desktop' || scrollButtons === 'on');
    conditionalElements.scrollButtonStart = showScrollButtons ? /*#__PURE__*/react["createElement"](ScrollButtonComponent, Object(esm_extends["a" /* default */])({
      orientation: orientation,
      direction: isRtl ? 'right' : 'left',
      onClick: handleStartScrollClick,
      disabled: !displayScroll.start,
      className: Object(clsx_m["a" /* default */])(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    conditionalElements.scrollButtonEnd = showScrollButtons ? /*#__PURE__*/react["createElement"](ScrollButtonComponent, Object(esm_extends["a" /* default */])({
      orientation: orientation,
      direction: isRtl ? 'left' : 'right',
      onClick: handleEndScrollClick,
      disabled: !displayScroll.end,
      className: Object(clsx_m["a" /* default */])(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    return conditionalElements;
  };

  var scrollSelectedIntoView = Object(useEventCallback["a" /* default */])(function () {
    var _getTabsMeta2 = getTabsMeta(),
        tabsMeta = _getTabsMeta2.tabsMeta,
        tabMeta = _getTabsMeta2.tabMeta;

    if (!tabMeta || !tabsMeta) {
      return;
    }

    if (tabMeta[start] < tabsMeta[start]) {
      // left side of button is out of view
      var nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart);
    } else if (tabMeta[end] > tabsMeta[end]) {
      // right side of button is out of view
      var _nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);

      scroll(_nextScrollStart);
    }
  });
  var updateScrollButtonState = Object(useEventCallback["a" /* default */])(function () {
    if (scrollable && scrollButtons !== 'off') {
      var _tabsRef$current = tabsRef.current,
          scrollTop = _tabsRef$current.scrollTop,
          scrollHeight = _tabsRef$current.scrollHeight,
          clientHeight = _tabsRef$current.clientHeight,
          scrollWidth = _tabsRef$current.scrollWidth,
          clientWidth = _tabsRef$current.clientWidth;
      var showStartScroll;
      var showEndScroll;

      if (vertical) {
        showStartScroll = scrollTop > 1;
        showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
      } else {
        var scrollLeft = getNormalizedScrollLeft(tabsRef.current, theme.direction); // use 1 for the potential rounding error with browser zooms.

        showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
        showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
      }

      if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
        setDisplayScroll({
          start: showStartScroll,
          end: showEndScroll
        });
      }
    }
  });
  react["useEffect"](function () {
    var handleResize = Object(debounce["a" /* default */])(function () {
      updateIndicatorState();
      updateScrollButtonState();
    });
    var win = Object(ownerWindow["a" /* default */])(tabsRef.current);
    win.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      win.removeEventListener('resize', handleResize);
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var handleTabsScroll = react["useCallback"](Object(debounce["a" /* default */])(function () {
    updateScrollButtonState();
  }));
  react["useEffect"](function () {
    return function () {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);
  react["useEffect"](function () {
    setMounted(true);
  }, []);
  react["useEffect"](function () {
    updateIndicatorState();
    updateScrollButtonState();
  });
  react["useEffect"](function () {
    scrollSelectedIntoView();
  }, [scrollSelectedIntoView, indicatorStyle]);
  react["useImperativeHandle"](action, function () {
    return {
      updateIndicator: updateIndicatorState,
      updateScrollButtons: updateScrollButtonState
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var indicator = /*#__PURE__*/react["createElement"](Tabs_TabIndicator, Object(esm_extends["a" /* default */])({
    className: classes.indicator,
    orientation: orientation,
    color: indicatorColor
  }, TabIndicatorProps, {
    style: Object(esm_extends["a" /* default */])({}, indicatorStyle, TabIndicatorProps.style)
  }));
  var childIndex = 0;
  var children = react["Children"].map(childrenProp, function (child) {
    if (! /*#__PURE__*/react["isValidElement"](child)) {
      return null;
    }

    if (false) {}

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return /*#__PURE__*/react["cloneElement"](child, {
      fullWidth: variant === 'fullWidth',
      indicator: selected && !mounted && indicator,
      selected: selected,
      selectionFollowsFocus: selectionFollowsFocus,
      onChange: onChange,
      textColor: textColor,
      value: childValue
    });
  });

  var handleKeyDown = function handleKeyDown(event) {
    var target = event.target; // Keyboard navigation assumes that [role="tab"] are siblings
    // though we might warn in the future about nested, interactive elements
    // as a a11y violation

    var role = target.getAttribute('role');

    if (role !== 'tab') {
      return;
    }

    var newFocusTarget = null;
    var previousItemKey = orientation !== "vertical" ? 'ArrowLeft' : 'ArrowUp';
    var nextItemKey = orientation !== "vertical" ? 'ArrowRight' : 'ArrowDown';

    if (orientation !== "vertical" && theme.direction === 'rtl') {
      // swap previousItemKey with nextItemKey
      previousItemKey = 'ArrowRight';
      nextItemKey = 'ArrowLeft';
    }

    switch (event.key) {
      case previousItemKey:
        newFocusTarget = target.previousElementSibling || tabListRef.current.lastChild;
        break;

      case nextItemKey:
        newFocusTarget = target.nextElementSibling || tabListRef.current.firstChild;
        break;

      case 'Home':
        newFocusTarget = tabListRef.current.firstChild;
        break;

      case 'End':
        newFocusTarget = tabListRef.current.lastChild;
        break;

      default:
        break;
    }

    if (newFocusTarget !== null) {
      newFocusTarget.focus();
      event.preventDefault();
    }
  };

  var conditionalElements = getConditionalElements();
  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, vertical && classes.vertical),
    ref: ref
  }, other), conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /*#__PURE__*/react["createElement"]("div", {
    className: Object(clsx_m["a" /* default */])(classes.scroller, scrollable ? classes.scrollable : classes.fixed),
    style: scrollerStyle,
    ref: tabsRef,
    onScroll: handleTabsScroll
  }, /*#__PURE__*/react["createElement"]("div", {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    className: Object(clsx_m["a" /* default */])(classes.flexContainer, vertical && classes.flexContainerVertical, centered && !scrollable && classes.centered),
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, children), mounted && indicator), conditionalElements.scrollButtonEnd);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Tabs_Tabs = __webpack_exports__["a"] = (Object(withStyles["a" /* default */])(Tabs_styles, {
  name: 'MuiTabs'
})(Tabs_Tabs));

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/Pagination/usePagination.js





function usePagination() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // keep default values in sync with @default tags in Pagination.propTypes
  var _props$boundaryCount = props.boundaryCount,
      boundaryCount = _props$boundaryCount === void 0 ? 1 : _props$boundaryCount,
      _props$componentName = props.componentName,
      componentName = _props$componentName === void 0 ? 'usePagination' : _props$componentName,
      _props$count = props.count,
      count = _props$count === void 0 ? 1 : _props$count,
      _props$defaultPage = props.defaultPage,
      defaultPage = _props$defaultPage === void 0 ? 1 : _props$defaultPage,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$hideNextButton = props.hideNextButton,
      hideNextButton = _props$hideNextButton === void 0 ? false : _props$hideNextButton,
      _props$hidePrevButton = props.hidePrevButton,
      hidePrevButton = _props$hidePrevButton === void 0 ? false : _props$hidePrevButton,
      handleChange = props.onChange,
      pageProp = props.page,
      _props$showFirstButto = props.showFirstButton,
      showFirstButton = _props$showFirstButto === void 0 ? false : _props$showFirstButto,
      _props$showLastButton = props.showLastButton,
      showLastButton = _props$showLastButton === void 0 ? false : _props$showLastButton,
      _props$siblingCount = props.siblingCount,
      siblingCount = _props$siblingCount === void 0 ? 1 : _props$siblingCount,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"]);

  var _useControlled = Object(useControlled["a" /* default */])({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: 'page'
  }),
      _useControlled2 = Object(slicedToArray["a" /* default */])(_useControlled, 2),
      page = _useControlled2[0],
      setPageState = _useControlled2[1];

  var handleClick = function handleClick(event, value) {
    if (!pageProp) {
      setPageState(value);
    }

    if (handleChange) {
      handleChange(event, value);
    }
  }; // https://dev.to/namirsab/comment/2050


  var range = function range(start, end) {
    var length = end - start + 1;
    return Array.from({
      length: length
    }, function (_, i) {
      return start + i;
    });
  };

  var startPages = range(1, Math.min(boundaryCount, count));
  var endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  var siblingsStart = Math.max(Math.min( // Natural start
  page - siblingCount, // Lower boundary when page is high
  count - boundaryCount - siblingCount * 2 - 1), // Greater than startPages
  boundaryCount + 2);
  var siblingsEnd = Math.min(Math.max( // Natural end
  page + siblingCount, // Upper boundary when page is low
  boundaryCount + siblingCount * 2 + 2), // Less than endPages
  endPages[0] - 2); // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']

  var itemList = [].concat(Object(toConsumableArray["a" /* default */])(showFirstButton ? ['first'] : []), Object(toConsumableArray["a" /* default */])(hidePrevButton ? [] : ['previous']), Object(toConsumableArray["a" /* default */])(startPages), Object(toConsumableArray["a" /* default */])(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []), Object(toConsumableArray["a" /* default */])(range(siblingsStart, siblingsEnd)), Object(toConsumableArray["a" /* default */])(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), Object(toConsumableArray["a" /* default */])(endPages), Object(toConsumableArray["a" /* default */])(hideNextButton ? [] : ['next']), Object(toConsumableArray["a" /* default */])(showLastButton ? ['last'] : [])); // Map the button type to its page number

  var buttonPage = function buttonPage(type) {
    switch (type) {
      case 'first':
        return 1;

      case 'previous':
        return page - 1;

      case 'next':
        return page + 1;

      case 'last':
        return count;

      default:
        return null;
    }
  }; // Convert the basic item list to PaginationItem props objects


  var items = itemList.map(function (item) {
    return typeof item === 'number' ? {
      onClick: function onClick(event) {
        handleClick(event, item);
      },
      type: 'page',
      page: item,
      selected: item === page,
      disabled: disabled,
      'aria-current': item === page ? 'true' : undefined
    } : {
      onClick: function onClick(event) {
        handleClick(event, buttonPage(item));
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || item.indexOf('ellipsis') === -1 && (item === 'next' || item === 'last' ? page >= count : page <= 1)
    };
  });
  return Object(esm_extends["a" /* default */])({
    items: items
  }, other);
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js + 1 modules
var createSvgIcon = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/internal/svg-icons/FirstPage.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var FirstPage = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), 'FirstPage'));
// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/internal/svg-icons/LastPage.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var LastPage = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), 'LastPage'));
// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/internal/svg-icons/NavigateBefore.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var NavigateBefore = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'NavigateBefore'));
// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/internal/svg-icons/NavigateNext.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var NavigateNext = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/PaginationItem/PaginationItem.js












var PaginationItem_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(esm_extends["a" /* default */])({}, theme.typography.body2, {
      borderRadius: 32 / 2,
      textAlign: 'center',
      boxSizing: 'border-box',
      minWidth: 32,
      height: 32,
      padding: '0 6px',
      margin: '0 3px',
      color: theme.palette.text.primary
    }),

    /* Styles applied to the root element if `type="page"`. */
    page: {
      transition: theme.transitions.create(['color', 'background-color'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$focusVisible': {
        backgroundColor: theme.palette.action.focus
      },
      '&$selected': {
        backgroundColor: theme.palette.action.selected,
        '&:hover, &$focusVisible': {
          backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.action.selected
          }
        },
        '&$disabled': {
          opacity: 1,
          color: theme.palette.action.disabled,
          backgroundColor: theme.palette.action.selected
        }
      },
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity
      }
    },

    /* Styles applied applied to the root element if `size="small"`. */
    sizeSmall: {
      minWidth: 26,
      height: 26,
      borderRadius: 26 / 2,
      margin: '0 1px',
      padding: '0 4px',
      '& $icon': {
        fontSize: theme.typography.pxToRem(18)
      }
    },

    /* Styles applied applied to the root element if `size="large"`. */
    sizeLarge: {
      minWidth: 40,
      height: 40,
      borderRadius: 40 / 2,
      padding: '0 10px',
      fontSize: theme.typography.pxToRem(15),
      '& $icon': {
        fontSize: theme.typography.pxToRem(22)
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      '&$selected': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover, &$focusVisible': {
          backgroundColor: theme.palette.primary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.primary.main
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      '&$selected': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover, &$focusVisible': {
          backgroundColor: theme.palette.secondary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.secondary.main
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }
    },

    /* Styles applied to the root element if `outlined="true"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '&$selected': {
        '&$disabled': {
          border: "1px solid ".concat(theme.palette.action.disabledBackground)
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      '&$selected': {
        color: theme.palette.primary.main,
        border: "1px solid ".concat(Object(colorManipulator["c" /* fade */])(theme.palette.primary.main, 0.5)),
        backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        '&:hover, &$focusVisible': {
          backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.primary.main, theme.palette.action.activatedOpacity + theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      '&$selected': {
        color: theme.palette.secondary.main,
        border: "1px solid ".concat(Object(colorManipulator["c" /* fade */])(theme.palette.secondary.main, 0.5)),
        backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.secondary.main, theme.palette.action.activatedOpacity),
        '&:hover, &$focusVisible': {
          backgroundColor: Object(colorManipulator["c" /* fade */])(theme.palette.secondary.main, theme.palette.action.activatedOpacity + theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }
    },

    /* Styles applied to the root element if `rounded="true"`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `type="start-ellipsis"` or `type="end-ellipsis"`. */
    ellipsis: {
      height: 'auto',
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity
      }
    },

    /* Pseudo-class applied to the root element if keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the icon element. */
    icon: {
      fontSize: theme.typography.pxToRem(20),
      margin: '0 -8px'
    }
  };
};
var PaginationItem_PaginationItem = /*#__PURE__*/react["forwardRef"](function PaginationItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'standard' : _props$color,
      component = props.component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      page = props.page,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'round' : _props$shape,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$type = props.type,
      type = _props$type === void 0 ? 'page' : _props$type,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "color", "component", "disabled", "page", "selected", "shape", "size", "type", "variant"]);

  var theme = Object(useTheme["a" /* default */])();
  var normalizedIcons = theme.direction === 'rtl' ? {
    previous: NavigateNext,
    next: NavigateBefore,
    last: FirstPage,
    first: LastPage
  } : {
    previous: NavigateBefore,
    next: NavigateNext,
    first: FirstPage,
    last: LastPage
  };
  var Icon = normalizedIcons[type];
  return type === 'start-ellipsis' || type === 'end-ellipsis' ? /*#__PURE__*/react["createElement"]("div", {
    ref: ref,
    className: Object(clsx_m["a" /* default */])(classes.root, classes.ellipsis, disabled && classes.disabled, size !== 'medium' && classes["size".concat(Object(capitalize["a" /* default */])(size))])
  }, "\u2026") : /*#__PURE__*/react["createElement"](ButtonBase["a" /* default */], Object(esm_extends["a" /* default */])({
    ref: ref,
    component: component,
    disabled: disabled,
    focusVisibleClassName: classes.focusVisible,
    className: Object(clsx_m["a" /* default */])(classes.root, classes.page, classes[variant], classes[shape], className, color !== 'standard' && classes["".concat(variant).concat(Object(capitalize["a" /* default */])(color))], disabled && classes.disabled, selected && classes.selected, size !== 'medium' && classes["size".concat(Object(capitalize["a" /* default */])(size))])
  }, other), type === 'page' && page, Icon ? /*#__PURE__*/react["createElement"](Icon, {
    className: classes.icon
  }) : null);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_PaginationItem_PaginationItem = (Object(withStyles["a" /* default */])(PaginationItem_styles, {
  name: 'MuiPaginationItem'
})(PaginationItem_PaginationItem));
// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/Pagination/Pagination.js








var Pagination_styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the ul element. */
  ul: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  }
};

function defaultGetAriaLabel(type, page, selected) {
  if (type === 'page') {
    return "".concat(selected ? '' : 'Go to ', "page ").concat(page);
  }

  return "Go to ".concat(type, " page");
}

var Pagination_Pagination = /*#__PURE__*/react["forwardRef"](function Pagination(props, ref) {
  var boundaryCount = props.boundaryCount,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'standard' : _props$color,
      count = props.count,
      defaultPage = props.defaultPage,
      disabled = props.disabled,
      _props$getItemAriaLab = props.getItemAriaLabel,
      getItemAriaLabel = _props$getItemAriaLab === void 0 ? defaultGetAriaLabel : _props$getItemAriaLab,
      hideNextButton = props.hideNextButton,
      hidePrevButton = props.hidePrevButton,
      onChange = props.onChange,
      page = props.page,
      _props$renderItem = props.renderItem,
      renderItem = _props$renderItem === void 0 ? function (item) {
    return /*#__PURE__*/react["createElement"](esm_PaginationItem_PaginationItem, item);
  } : _props$renderItem,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'round' : _props$shape,
      showFirstButton = props.showFirstButton,
      showLastButton = props.showLastButton,
      siblingCount = props.siblingCount,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["boundaryCount", "classes", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"]);

  var _usePagination = usePagination(Object(esm_extends["a" /* default */])({}, props, {
    componentName: 'Pagination'
  })),
      items = _usePagination.items;

  return /*#__PURE__*/react["createElement"]("nav", Object(esm_extends["a" /* default */])({
    "aria-label": "pagination navigation",
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react["createElement"]("ul", {
    className: classes.ul
  }, items.map(function (item, index) {
    return /*#__PURE__*/react["createElement"]("li", {
      key: index
    }, renderItem(Object(esm_extends["a" /* default */])({}, item, {
      color: color,
      'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
      shape: shape,
      size: size,
      variant: variant
    })));
  })));
}); // @default tags synced with default values from usePagination

 false ? undefined : void 0;
/* harmony default export */ var esm_Pagination_Pagination = __webpack_exports__["a"] = (Object(withStyles["a" /* default */])(Pagination_styles, {
  name: 'MuiPagination'
})(Pagination_Pagination));

/***/ })

}]);