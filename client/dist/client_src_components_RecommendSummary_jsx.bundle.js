/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcustomer_review_service"] = self["webpackChunkcustomer_review_service"] || []).push([["client_src_components_RecommendSummary_jsx"],{

/***/ "./client/src/components/RecommendSummary.jsx":
/*!****************************************************!*\
  !*** ./client/src/components/RecommendSummary.jsx ***!
  \****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable react/destructuring-assignment */\n;\n\n\nvar RecommendSummary = function RecommendSummary(props) {\n  var comfortDistribution = {\n    first: 0,\n    second: 0,\n    third: 0,\n    fourth: 0,\n    fifth: 0\n  };\n  var qualityDistribution = {\n    first: 0,\n    second: 0,\n    third: 0,\n    fourth: 0,\n    fifth: 0\n  };\n  var fitDistribution = {\n    first: 0,\n    second: 0,\n    third: 0,\n    fourth: 0,\n    fifth: 0\n  }; // eslint-disable-next-line array-callback-return\n\n  props.reviews.map(function (review) {\n    comfortDistribution[review.comfort]++;\n    qualityDistribution[review.quality]++;\n    fitDistribution[review.fitness]++;\n  });\n\n  var averageRating = function averageRating(distribution) {\n    var average = (distribution.first * 1 + distribution.second * 2 + distribution.third * 3 + distribution.fourth * 4 + distribution.fifth * 5) / props.reviews.length;\n    average /= 5;\n    return average.toFixed(2);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"item reconmmend\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"COMFORT\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"bar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"triangle\",\n    style: {\n      marginLeft: averageRating(comfortDistribution) * 150,\n      color: '#2ada71'\n    }\n  }, \"\\u25BC\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    width: \"50\",\n    height: \"4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"rect\", {\n    width: \"50\",\n    height: \"4\",\n    style: {\n      fill: 'grey'\n    },\n    className: \"grey-bar\"\n  })), \"\\xA0\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    width: \"50\",\n    height: \"4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"rect\", {\n    width: \"50\",\n    height: \"4\",\n    style: {\n      fill: 'grey'\n    },\n    className: \"grey-bar\"\n  })), \"\\xA0\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    width: \"50\",\n    height: \"4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"rect\", {\n    width: \"50\",\n    height: \"4\",\n    style: {\n      fill: 'grey'\n    },\n    className: \"grey-bar\"\n  })), \"\\xA0\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    width: \"50\",\n    height: \"4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"rect\", {\n    width: \"50\",\n    height: \"4\",\n    style: {\n      fill: 'grey'\n    },\n    className: \"grey-bar\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"under-words\"\n  }, \"POOR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"under-words\",\n    style: {\n      marginLeft: 150\n    }\n  }, \"PERFECT\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"QUALITY\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"bar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"triangle\",\n    style: {\n      marginLeft: averageRating(qualityDistribution) * 160,\n      color: '#2ada71'\n    }\n  }, \"\\u25BC\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    width: \"50\",\n    height: \"4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"rect\", {\n    width: \"50\",\n    height: \"4\",\n    style: {\n      fill: 'grey'\n    },\n    className: \"grey-bar\"\n  })), \"\\xA0\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    width: \"50\",\n    height: \"4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"rect\", {\n    width: \"50\",\n    height: \"4\",\n    style: {\n      fill: 'grey'\n    },\n    className: \"grey-bar\"\n  })), \"\\xA0\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    width: \"50\",\n    height: \"4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"rect\", {\n    width: \"50\",\n    height: \"4\",\n    style: {\n      fill: 'grey'\n    },\n    className: \"grey-bar\"\n  })), \"\\xA0\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    width: \"50\",\n    height: \"4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"rect\", {\n    width: \"50\",\n    height: \"4\",\n    style: {\n      fill: 'grey'\n    },\n    className: \"grey-bar\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"under-words\"\n  }, \"POOR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"under-words\",\n    style: {\n      marginLeft: 150\n    }\n  }, \"PERFECT\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"FIT\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"bar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"triangle\",\n    style: {\n      marginLeft: averageRating(fitDistribution) * 160,\n      color: '#2ada71'\n    }\n  }, \"\\u25BC\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    width: \"50\",\n    height: \"4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"rect\", {\n    width: \"50\",\n    height: \"4\",\n    style: {\n      fill: 'grey'\n    },\n    className: \"grey-bar\"\n  })), \"\\xA0\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    width: \"50\",\n    height: \"4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"rect\", {\n    width: \"50\",\n    height: \"4\",\n    style: {\n      fill: 'grey'\n    },\n    className: \"grey-bar\"\n  })), \"\\xA0\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    width: \"50\",\n    height: \"4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"rect\", {\n    width: \"50\",\n    height: \"4\",\n    style: {\n      fill: 'grey'\n    },\n    className: \"grey-bar\"\n  })), \"\\xA0\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    width: \"50\",\n    height: \"4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"rect\", {\n    width: \"50\",\n    height: \"4\",\n    style: {\n      fill: 'grey'\n    },\n    className: \"grey-bar\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"under-words\"\n  }, \"TIGHT\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"under-words\",\n    style: {\n      marginLeft: 150\n    }\n  }, \"LOOSE\"))));\n};\n\nRecommendSummary.propTypes = {\n  reviews: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecommendSummary);\n\n//# sourceURL=webpack://customer-review-service/./client/src/components/RecommendSummary.jsx?");

/***/ })

}]);