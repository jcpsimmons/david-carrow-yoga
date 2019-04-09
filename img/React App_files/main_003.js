webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/simsies/Documents/GitHub/flight-exposure-hierarchy/flight-exposure-hierarchy/src/App.js";

 // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.712784,-74.005941&rankby=distance&type=airport&key=<Your API Key>
// class Geolocation extends Component {
//
// }

var QueryApi =
/*#__PURE__*/
function (_Component) {
  Object(_Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QueryApi, _Component);

  function QueryApi() {
    var _this;

    Object(_Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QueryApi);

    _this = Object(_Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QueryApi).call(this));
    _this.state = {
      latitude: null,
      longitude: null,
      error: null,
      airports: null,
      airportArray: null
    };
    return _this;
  }

  Object(_Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QueryApi, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      navigator.geolocation.getCurrentPosition(function (position) {
        _this2.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      }, function (error) {
        return _this2.setState({
          error: error.message
        });
      }, {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      });
      fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.77368,-118.1954&rankby=distance&type=airport&key=AIzaSyDKwS28F6KW39K0tq4fPWsA6d0nGnqkSWo').then(function (resp) {
        return resp.json();
      }) // .then(function(data) {
      //   console.log("unfolded " + data.results[0].name);
      //   console.log("unfolded " + data.results[1].name);
      //   console.log("unfolded " + data.results[2].name);
      //   console.log("unfolded " + data.results[3].name);
      // })
      .then(function (data) {
        var i = 0;

        for (i = 0; i < Object.keys(data.results).length; i++) {
          console.log(data.results[i].name);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      });
    }
  }]);

  return QueryApi;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var App =
/*#__PURE__*/
function (_Component2) {
  Object(_Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component2);

  function App() {
    Object(_Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_simsies_Documents_GitHub_flight_exposure_hierarchy_flight_exposure_hierarchy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      var date = Date();
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "App-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, date), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(QueryApi, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.0bf8a0ed4bbe26feca8f.hot-update.js.map