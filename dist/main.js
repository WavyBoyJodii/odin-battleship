/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f0f0f0;
}

.game-container {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.player-board {
  width: 300px;
  height: 300px;
  border: 2px solid #000;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.player-board div {
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hit {
  background-color: #ff4c4c;
}

.miss {
  background-color: #4c98ff;
}

.button {
  display: flex;
  height: 20px;
  width: 40px;
  background-color: #4c98ff;
}

.ships-box {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.ships {
  width: 300px;
  height: 40px;
  border: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;AACd","sourcesContent":["body {\n  font-family: Arial, sans-serif;\n  text-align: center;\n  background-color: #f0f0f0;\n}\n\n.game-container {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 50px;\n}\n\n.player-board {\n  width: 300px;\n  height: 300px;\n  border: 2px solid #000;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.player-board div {\n  border: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hit {\n  background-color: #ff4c4c;\n}\n\n.miss {\n  background-color: #4c98ff;\n}\n\n.button {\n  display: flex;\n  height: 20px;\n  width: 40px;\n  background-color: #4c98ff;\n}\n\n.ships-box {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 50px;\n}\n\n.ships {\n  width: 300px;\n  height: 40px;\n  border: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const Gameboard = () => {
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    board.push(Array(10).fill(null));
  }

  const ships = [];

  // Generate a random starting point for each ship.
  const generateRandomPosition = () => {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    return { row, col };
  };

  // check if it overlaps with existing ships or is adjacent to them.
  const isPositionValid = (grid, row, col) => {
    if (row < 0 || row >= 10 || col < 0 || col >= 10) {
      return false;
    }
    if (grid[row][col] !== null) {
      return false;
    }
    for (let i = Math.max(0, row - 1); i <= Math.min(row + 1, 9); i += 1) {
      for (let j = Math.max(0, col - 1); j <= Math.min(col + 1, 9); j += 1) {
        if (grid[i][j] !== null) {
          return false;
        }
      }
    }
    return true;
  };

  function placeShipOnGrid(grid, ship) {
    const { length } = ship;
    // const { grid } = gameboard;

    let placed = false;
    while (!placed) {
      const { row, col } = generateRandomPosition();
      const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';

      let valid = true;
      for (let i = 0; i < length; i += 1) {
        let currentRow = row;
        let currentCol = col;
        if (orientation === 'horizontal') {
          currentCol += i;
        } else {
          currentRow += i;
        }
        if (!isPositionValid(grid, currentRow, currentCol)) {
          valid = false;
          break;
        }
      }

      if (valid) {
        for (let i = 0; i < length; i += 1) {
          let currentRow = row;
          let currentCol = col;
          if (orientation === 'horizontal') {
            currentCol += i;
          } else {
            currentRow += i;
          }
          board[currentRow][currentCol] = ship;
          ship.positions[i] = { row: currentRow, col: currentCol };
        }
        placed = true;
      }
    }
  }

  const createAndAddShips = () => {
    const shipLengths = [5, 4, 3, 3, 2];
    for (let i = 0; i < shipLengths.length; i += 1) {
      const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipLengths[i]);
      placeShipOnGrid(board, ship);
      ships.push(ship);
    }
  };

  const getShipCoordinates = () => {
    const shipCoordinates = [];

    for (let row = 0; row < 10; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        if (board[row][col] !== null && board[row][col] !== 'HIT') {
          shipCoordinates.push({ row, col });
        }
      }
    }

    return shipCoordinates;
  };

  // const recieveAttack = (x, y) => {
  //   if (x < 0 || y < 0 || x > 9 || y > 9) {
  //     return console.log(
  //       'input coordinates are off the board, values must be between 0 and 9'
  //     );
  //   }
  //   if (board[x][y] === 'HIT') return Error;
  //   if (board[x][y] !== null) {
  //     const search = board[x][y];
  //     const ship = ships.find(search);
  //     ship.hit();
  //     board[x][y] = 'HIT';
  //     board[x - 1][y - 1] = 'HIT';
  //     board[x - 1][y + 1] = 'HIT';
  //     board[x + 1][y - 1] = 'HIT';
  //     board[x + 1][y + 1] = 'HIT';
  //   } else board[x][y] = 'HIT';
  // };

  function receiveAttack(row, col) {
    // Check if the coordinates are already labeled "HIT"
    if (board[row][col] === 'HIT') {
      return Error;
    }

    // If the coordinates are null, mark it as "HIT"
    if (board[row][col] === null) {
      board[row][col] = 'HIT';
      return null;
    }

    // If the coordinates are occupied by a ship, get the ship and trigger its "hit" function
    const ship = board[row][col];
    ship.hit();

    // Mark the coordinates as "HIT"
    board[row][col] = 'HIT';

    // Check adjacent diagonal squares (if possible) and mark them as "HIT"
    const adjacentCoords = [
      { row: row - 1, col: col - 1 },
      { row: row - 1, col: col + 1 },
      { row: row + 1, col: col - 1 },
      { row: row + 1, col: col + 1 },
    ];

    for (const { row: r, col: c } of adjacentCoords) {
      if (r >= 0 && r < 10 && c >= 0 && c < 10) {
        board[r][c] = 'HIT';
      }
    }

    if (ship.isSunk()) {
      // Get the ship's positions and mark all adjacent squares as "HIT"
      const { positions } = ship;
      for (const { row: r, col: c } of positions) {
        const sunkCoords = [
          { sunkRow: r - 1, sunkCol: c },
          { sunkRow: r + 1, sunkCol: c },
          { sunkRow: r, sunkCol: c - 1 },
          { sunkRow: r, sunkCol: c + 1 },
        ];

        for (const { sunkRow, sunkCol } of sunkCoords) {
          if (sunkRow >= 0 && sunkRow < 10 && sunkCol >= 0 && sunkCol < 10) {
            board[sunkRow][sunkCol] = 'HIT';
          }
        }
      }
    }

    return ship;
  }

  const allSunk = () => {
    for (const ship of ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  };

  return {
    board,
    ships,
    createAndAddShips,
    generateRandomPosition,
    isPositionValid,
    placeShipOnGrid,
    getShipCoordinates,
    receiveAttack,
    allSunk,
  };
};


/***/ }),

/***/ "./src/gameplay.js":
/*!*************************!*\
  !*** ./src/gameplay.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPlayerInput: () => (/* binding */ getPlayerInput),
/* harmony export */   playGame: () => (/* binding */ playGame)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





function setupGame() {
  const player1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  const player2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

  player1.createAndAddShips();
  player2.createAndAddShips();

  return { player1, player2 };
}

// function getRandomCoordinate() {
//   return {
//     row: Math.floor(Math.random() * 10),
//     col: Math.floor(Math.random() * 10),
//   };
// }

function getPlayerInput(row, col) {
  // Implement a function to get the attack coordinates from the player's input
  // You can use the 'prompt' method or any other method to get the input
  return { row, col };
}

function isCoordinateValid(player, row, col) {
  const { board } = player;
  return (
    row >= 0 && row < 10 && col >= 0 && col < 10 && board[row][col] !== 'HIT'
  );
}

// function isGameOver() {
//   if (
//     (currentPlayer === player1 ? player2.allSunk() : player1.allSunk()) === true
//   ) {
//     console.log("Congratulations! You've sunk all the opponent's ships!");
//     dialogBox.textContent =
//       "Congratulations! You've sunk all the opponent's ships!";
//     console.log('Player', currentPlayer === player1 ? '1' : '2', 'wins!');
//     if (currentPlayer === player1) {
//       dialogBox.textContent =
//         "Congratulations! You've sunk all the opponent's ships!";
//     } else {
//       dialogBox.textContent = 'The Computer Wins!';
//     }
//     //   break;
//     gameActive = false;
//   }
// }

let gameActive = null;

function playGame() {
  const { player1, player2 } = setupGame();
  let currentPlayer = player1;
  gameActive = true;

  // const player1Board = document.getElementById('player1-board');
  // const player2Board = document.getElementById('player2-board');
  function initGameboard(player, containerId, isPlayerBoard) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    for (let row = 0; row < 10; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        const cell = document.createElement('div');
        cell.dataset.row = row;
        cell.dataset.col = col;

        if (isPlayerBoard) {
          if (player.board[row][col] === null) {
            cell.textContent = '';
          } else if (player.board[row][col] === 'HIT') {
            cell.textContent = 'H';
            cell.classList.add('hit');
          } else {
            cell.textContent = 'M';
            cell.classList.add('miss');
          }
        } else if (player.board[row][col] === 'HIT') {
          cell.textContent = 'H';
          cell.classList.add('hit');
        } else {
          cell.textContent = '';
        }
        if (!isPlayerBoard) {
          cell.addEventListener('click', () => makeMove(row, col));
        }

        container.appendChild(cell);
      }
    }
  }
  function displayShipsLeft(gameboard, containerId) {
    const container = document.getElementById(containerId);
    const remainingShips = gameboard.ships.filter(
      (ship) => !ship.isSunk()
    ).length;

    container.textContent = `Ships Left: ${remainingShips}`;
  }

  function isGameOver() {
    if (
      (currentPlayer === player1 ? player2.allSunk() : player1.allSunk()) ===
      true
    ) {
      console.log("Congratulations! You've sunk all the opponent's ships!");
      dialogBox.textContent =
        "Congratulations! You've sunk all the opponent's ships!";
      console.log('Player', currentPlayer === player1 ? '1' : '2', 'wins!');
      if (currentPlayer === player1) {
        dialogBox.textContent =
          "Congratulations! You've sunk all the opponent's ships!";
      } else {
        dialogBox.textContent = 'The Computer Wins!';
      }
      //   break;
      gameActive = false;
      ___WEBPACK_IMPORTED_MODULE_2__.startButton.addEventListener('click', ___WEBPACK_IMPORTED_MODULE_2__.startAndRemoveButton);
      document.body.append(___WEBPACK_IMPORTED_MODULE_2__.startButton);
    }
  }

  initGameboard(player1, 'player1-board', true);
  initGameboard(player2, 'player2-board');
  console.log("Current Player's Gameboard:");
  console.table(currentPlayer.board);

  const dialogBox = document.getElementById('dialog');

  dialogBox.textContent = "Player 1's turn";
  // Potential targets for the computer-controlled Player 2
  const computerTargets = [];
  for (let row = 0; row < 10; row += 1) {
    for (let col = 0; col < 10; col += 1) {
      computerTargets.push({ row, col });
    }
  }
  function makeMove(row, col) {
    if (gameActive) {
      console.log(`${row} ${col}`);
      if (isCoordinateValid(player2, row, col)) {
        // Perform the attack on the opponent's gameboard
        const attackedShip = player2.receiveAttack(row, col);
        // Display the result of the attack
        if (attackedShip) {
          console.log('You hit a ship!');
          dialogBox.textContent = 'You hit a ship!';
          if (attackedShip.isSunk()) {
            console.log('The ship has been sunk!');
            dialogBox.textContent = 'You hit a ship! The Ship has been Sunk!';
          }
        } else {
          console.log('You missed!');
          dialogBox.textContent = 'You Missed!';
        }
      } else {
        console.log('Invalid coordinates. Try again.');
        dialogBox.textContent = 'Invalid coordinates. Try again.';
        return;
      }
      initGameboard(player2, 'player2-board');
      displayShipsLeft(player2, 'ships-player2');
      isGameOver();
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      computerMove();
    }
  }

  function computerMove() {
    if (gameActive) {
      const aiTargetIndex = Math.floor(Math.random() * computerTargets.length);
      const { row, col } = computerTargets[aiTargetIndex];
      console.log(`computers moves ${row} ${col}`);
      if (isCoordinateValid(player1, row, col)) {
        // Perform the attack on the opponent's gameboard
        const attackedShip = player1.receiveAttack(row, col);

        // Remove the attacked coordinate from the potential targets list
        computerTargets.splice(aiTargetIndex, 1);

        // Add adjacent coordinates to the potential targets list if they are valid and not attacked
        const adjacentCoords = [
          { row: row - 1, col },
          { row: row + 1, col },
          { row, col: col - 1 },
          { row, col: col + 1 },
        ];
        for (const { row: r, col: c } of adjacentCoords) {
          if (isCoordinateValid(player1, r, c)) {
            computerTargets.push({ row: r, col: c });
          }
        }

        // Display the result of the attack
        if (attackedShip) {
          console.log('Computer hit a ship!');
          // dialogBox.textContent = 'The Computer hit a ship!';
          if (attackedShip.isSunk()) {
            console.log('The ship has been sunk!');
            // dialogBox.textContent =
            //   'The Computer hit a ship! The Ship Has Been Sunk!';
          }
        } else {
          console.log('Computer missed!');
          // dialogBox.textContent = 'The Computer missed!';
        }
      }
      initGameboard(player1, 'player1-board', true);
      displayShipsLeft(player1, 'ships-player1');
      console.log("Current Player's Gameboard:");
      console.table(player1.board);
      isGameOver();
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startAndRemoveButton: () => (/* binding */ startAndRemoveButton),
/* harmony export */   startButton: () => (/* binding */ startButton)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameplay */ "./src/gameplay.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const startButton = document.getElementById('start');

function startAndRemoveButton() {
  (0,_gameplay__WEBPACK_IMPORTED_MODULE_2__.playGame)();
  startButton.remove();
}

startButton.addEventListener('click', startAndRemoveButton);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (x) => {
  const length = x;
  let hits = 0;
  const hit = () => (hits += 1);
  const isSunk = () => {
    if (hits === length) return true;
    return false;
  };
  return { length, hits, hit, isSunk, positions: Array(length).fill(null) };
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVwbGF5LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cblxuLmdhbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5wbGF5ZXItYm9hcmQge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLnBsYXllci1ib2FyZCBkaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjRjNGM7XG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjOThmZjtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Yzk4ZmY7XG59XG5cbi5zaGlwcy1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnNoaXBzIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG5cXG4uZ2FtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLnBsYXllci1ib2FyZCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YzRjO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM5OGZmO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Yzk4ZmY7XFxufVxcblxcbi5zaGlwcy1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLnNoaXBzIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGJvYXJkLnB1c2goQXJyYXkoMTApLmZpbGwobnVsbCkpO1xuICB9XG5cbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBzdGFydGluZyBwb2ludCBmb3IgZWFjaCBzaGlwLlxuICBjb25zdCBnZW5lcmF0ZVJhbmRvbVBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbiAgfTtcblxuICAvLyBjaGVjayBpZiBpdCBvdmVybGFwcyB3aXRoIGV4aXN0aW5nIHNoaXBzIG9yIGlzIGFkamFjZW50IHRvIHRoZW0uXG4gIGNvbnN0IGlzUG9zaXRpb25WYWxpZCA9IChncmlkLCByb3csIGNvbCkgPT4ge1xuICAgIGlmIChyb3cgPCAwIHx8IHJvdyA+PSAxMCB8fCBjb2wgPCAwIHx8IGNvbCA+PSAxMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZ3JpZFtyb3ddW2NvbF0gIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IE1hdGgubWF4KDAsIHJvdyAtIDEpOyBpIDw9IE1hdGgubWluKHJvdyArIDEsIDkpOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSBNYXRoLm1heCgwLCBjb2wgLSAxKTsgaiA8PSBNYXRoLm1pbihjb2wgKyAxLCA5KTsgaiArPSAxKSB7XG4gICAgICAgIGlmIChncmlkW2ldW2pdICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcE9uR3JpZChncmlkLCBzaGlwKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHNoaXA7XG4gICAgLy8gY29uc3QgeyBncmlkIH0gPSBnYW1lYm9hcmQ7XG5cbiAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgd2hpbGUgKCFwbGFjZWQpIHtcbiAgICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IGdlbmVyYXRlUmFuZG9tUG9zaXRpb24oKTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG5cbiAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGxldCBjdXJyZW50Um93ID0gcm93O1xuICAgICAgICBsZXQgY3VycmVudENvbCA9IGNvbDtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBjdXJyZW50Q29sICs9IGk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudFJvdyArPSBpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNQb3NpdGlvblZhbGlkKGdyaWQsIGN1cnJlbnRSb3csIGN1cnJlbnRDb2wpKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGxldCBjdXJyZW50Um93ID0gcm93O1xuICAgICAgICAgIGxldCBjdXJyZW50Q29sID0gY29sO1xuICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBjdXJyZW50Q29sICs9IGk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRSb3cgKz0gaTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9hcmRbY3VycmVudFJvd11bY3VycmVudENvbF0gPSBzaGlwO1xuICAgICAgICAgIHNoaXAucG9zaXRpb25zW2ldID0geyByb3c6IGN1cnJlbnRSb3csIGNvbDogY3VycmVudENvbCB9O1xuICAgICAgICB9XG4gICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY3JlYXRlQW5kQWRkU2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Rocy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoc2hpcExlbmd0aHNbaV0pO1xuICAgICAgcGxhY2VTaGlwT25HcmlkKGJvYXJkLCBzaGlwKTtcbiAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBDb29yZGluYXRlcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCArPSAxKSB7XG4gICAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0gIT09IG51bGwgJiYgYm9hcmRbcm93XVtjb2xdICE9PSAnSElUJykge1xuICAgICAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKHsgcm93LCBjb2wgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2hpcENvb3JkaW5hdGVzO1xuICB9O1xuXG4gIC8vIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAvLyAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB4ID4gOSB8fCB5ID4gOSkge1xuICAvLyAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAvLyAgICAgICAnaW5wdXQgY29vcmRpbmF0ZXMgYXJlIG9mZiB0aGUgYm9hcmQsIHZhbHVlcyBtdXN0IGJlIGJldHdlZW4gMCBhbmQgOSdcbiAgLy8gICAgICk7XG4gIC8vICAgfVxuICAvLyAgIGlmIChib2FyZFt4XVt5XSA9PT0gJ0hJVCcpIHJldHVybiBFcnJvcjtcbiAgLy8gICBpZiAoYm9hcmRbeF1beV0gIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IHNlYXJjaCA9IGJvYXJkW3hdW3ldO1xuICAvLyAgICAgY29uc3Qgc2hpcCA9IHNoaXBzLmZpbmQoc2VhcmNoKTtcbiAgLy8gICAgIHNoaXAuaGl0KCk7XG4gIC8vICAgICBib2FyZFt4XVt5XSA9ICdISVQnO1xuICAvLyAgICAgYm9hcmRbeCAtIDFdW3kgLSAxXSA9ICdISVQnO1xuICAvLyAgICAgYm9hcmRbeCAtIDFdW3kgKyAxXSA9ICdISVQnO1xuICAvLyAgICAgYm9hcmRbeCArIDFdW3kgLSAxXSA9ICdISVQnO1xuICAvLyAgICAgYm9hcmRbeCArIDFdW3kgKyAxXSA9ICdISVQnO1xuICAvLyAgIH0gZWxzZSBib2FyZFt4XVt5XSA9ICdISVQnO1xuICAvLyB9O1xuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socm93LCBjb2wpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgY29vcmRpbmF0ZXMgYXJlIGFscmVhZHkgbGFiZWxlZCBcIkhJVFwiXG4gICAgaWYgKGJvYXJkW3Jvd11bY29sXSA9PT0gJ0hJVCcpIHtcbiAgICAgIHJldHVybiBFcnJvcjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgY29vcmRpbmF0ZXMgYXJlIG51bGwsIG1hcmsgaXQgYXMgXCJISVRcIlxuICAgIGlmIChib2FyZFtyb3ddW2NvbF0gPT09IG51bGwpIHtcbiAgICAgIGJvYXJkW3Jvd11bY29sXSA9ICdISVQnO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGNvb3JkaW5hdGVzIGFyZSBvY2N1cGllZCBieSBhIHNoaXAsIGdldCB0aGUgc2hpcCBhbmQgdHJpZ2dlciBpdHMgXCJoaXRcIiBmdW5jdGlvblxuICAgIGNvbnN0IHNoaXAgPSBib2FyZFtyb3ddW2NvbF07XG4gICAgc2hpcC5oaXQoKTtcblxuICAgIC8vIE1hcmsgdGhlIGNvb3JkaW5hdGVzIGFzIFwiSElUXCJcbiAgICBib2FyZFtyb3ddW2NvbF0gPSAnSElUJztcblxuICAgIC8vIENoZWNrIGFkamFjZW50IGRpYWdvbmFsIHNxdWFyZXMgKGlmIHBvc3NpYmxlKSBhbmQgbWFyayB0aGVtIGFzIFwiSElUXCJcbiAgICBjb25zdCBhZGphY2VudENvb3JkcyA9IFtcbiAgICAgIHsgcm93OiByb3cgLSAxLCBjb2w6IGNvbCAtIDEgfSxcbiAgICAgIHsgcm93OiByb3cgLSAxLCBjb2w6IGNvbCArIDEgfSxcbiAgICAgIHsgcm93OiByb3cgKyAxLCBjb2w6IGNvbCAtIDEgfSxcbiAgICAgIHsgcm93OiByb3cgKyAxLCBjb2w6IGNvbCArIDEgfSxcbiAgICBdO1xuXG4gICAgZm9yIChjb25zdCB7IHJvdzogciwgY29sOiBjIH0gb2YgYWRqYWNlbnRDb29yZHMpIHtcbiAgICAgIGlmIChyID49IDAgJiYgciA8IDEwICYmIGMgPj0gMCAmJiBjIDwgMTApIHtcbiAgICAgICAgYm9hcmRbcl1bY10gPSAnSElUJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgLy8gR2V0IHRoZSBzaGlwJ3MgcG9zaXRpb25zIGFuZCBtYXJrIGFsbCBhZGphY2VudCBzcXVhcmVzIGFzIFwiSElUXCJcbiAgICAgIGNvbnN0IHsgcG9zaXRpb25zIH0gPSBzaGlwO1xuICAgICAgZm9yIChjb25zdCB7IHJvdzogciwgY29sOiBjIH0gb2YgcG9zaXRpb25zKSB7XG4gICAgICAgIGNvbnN0IHN1bmtDb29yZHMgPSBbXG4gICAgICAgICAgeyBzdW5rUm93OiByIC0gMSwgc3Vua0NvbDogYyB9LFxuICAgICAgICAgIHsgc3Vua1JvdzogciArIDEsIHN1bmtDb2w6IGMgfSxcbiAgICAgICAgICB7IHN1bmtSb3c6IHIsIHN1bmtDb2w6IGMgLSAxIH0sXG4gICAgICAgICAgeyBzdW5rUm93OiByLCBzdW5rQ29sOiBjICsgMSB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAoY29uc3QgeyBzdW5rUm93LCBzdW5rQ29sIH0gb2Ygc3Vua0Nvb3Jkcykge1xuICAgICAgICAgIGlmIChzdW5rUm93ID49IDAgJiYgc3Vua1JvdyA8IDEwICYmIHN1bmtDb2wgPj0gMCAmJiBzdW5rQ29sIDwgMTApIHtcbiAgICAgICAgICAgIGJvYXJkW3N1bmtSb3ddW3N1bmtDb2xdID0gJ0hJVCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoaXA7XG4gIH1cblxuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBzaGlwcyxcbiAgICBjcmVhdGVBbmRBZGRTaGlwcyxcbiAgICBnZW5lcmF0ZVJhbmRvbVBvc2l0aW9uLFxuICAgIGlzUG9zaXRpb25WYWxpZCxcbiAgICBwbGFjZVNoaXBPbkdyaWQsXG4gICAgZ2V0U2hpcENvb3JkaW5hdGVzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU3VuayxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IHN0YXJ0QnV0dG9uLCBzdGFydEFuZFJlbW92ZUJ1dHRvbiB9IGZyb20gJy4nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIHNldHVwR2FtZSgpIHtcbiAgY29uc3QgcGxheWVyMSA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBwbGF5ZXIyID0gR2FtZWJvYXJkKCk7XG5cbiAgcGxheWVyMS5jcmVhdGVBbmRBZGRTaGlwcygpO1xuICBwbGF5ZXIyLmNyZWF0ZUFuZEFkZFNoaXBzKCk7XG5cbiAgcmV0dXJuIHsgcGxheWVyMSwgcGxheWVyMiB9O1xufVxuXG4vLyBmdW5jdGlvbiBnZXRSYW5kb21Db29yZGluYXRlKCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHJvdzogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuLy8gICAgIGNvbDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuLy8gICB9O1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxheWVySW5wdXQocm93LCBjb2wpIHtcbiAgLy8gSW1wbGVtZW50IGEgZnVuY3Rpb24gdG8gZ2V0IHRoZSBhdHRhY2sgY29vcmRpbmF0ZXMgZnJvbSB0aGUgcGxheWVyJ3MgaW5wdXRcbiAgLy8gWW91IGNhbiB1c2UgdGhlICdwcm9tcHQnIG1ldGhvZCBvciBhbnkgb3RoZXIgbWV0aG9kIHRvIGdldCB0aGUgaW5wdXRcbiAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbn1cblxuZnVuY3Rpb24gaXNDb29yZGluYXRlVmFsaWQocGxheWVyLCByb3csIGNvbCkge1xuICBjb25zdCB7IGJvYXJkIH0gPSBwbGF5ZXI7XG4gIHJldHVybiAoXG4gICAgcm93ID49IDAgJiYgcm93IDwgMTAgJiYgY29sID49IDAgJiYgY29sIDwgMTAgJiYgYm9hcmRbcm93XVtjb2xdICE9PSAnSElUJ1xuICApO1xufVxuXG4vLyBmdW5jdGlvbiBpc0dhbWVPdmVyKCkge1xuLy8gICBpZiAoXG4vLyAgICAgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEgPyBwbGF5ZXIyLmFsbFN1bmsoKSA6IHBsYXllcjEuYWxsU3VuaygpKSA9PT0gdHJ1ZVxuLy8gICApIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIkNvbmdyYXR1bGF0aW9ucyEgWW91J3ZlIHN1bmsgYWxsIHRoZSBvcHBvbmVudCdzIHNoaXBzIVwiKTtcbi8vICAgICBkaWFsb2dCb3gudGV4dENvbnRlbnQgPVxuLy8gICAgICAgXCJDb25ncmF0dWxhdGlvbnMhIFlvdSd2ZSBzdW5rIGFsbCB0aGUgb3Bwb25lbnQncyBzaGlwcyFcIjtcbi8vICAgICBjb25zb2xlLmxvZygnUGxheWVyJywgY3VycmVudFBsYXllciA9PT0gcGxheWVyMSA/ICcxJyA6ICcyJywgJ3dpbnMhJyk7XG4vLyAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEpIHtcbi8vICAgICAgIGRpYWxvZ0JveC50ZXh0Q29udGVudCA9XG4vLyAgICAgICAgIFwiQ29uZ3JhdHVsYXRpb25zISBZb3UndmUgc3VuayBhbGwgdGhlIG9wcG9uZW50J3Mgc2hpcHMhXCI7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGRpYWxvZ0JveC50ZXh0Q29udGVudCA9ICdUaGUgQ29tcHV0ZXIgV2lucyEnO1xuLy8gICAgIH1cbi8vICAgICAvLyAgIGJyZWFrO1xuLy8gICAgIGdhbWVBY3RpdmUgPSBmYWxzZTtcbi8vICAgfVxuLy8gfVxuXG5sZXQgZ2FtZUFjdGl2ZSA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5R2FtZSgpIHtcbiAgY29uc3QgeyBwbGF5ZXIxLCBwbGF5ZXIyIH0gPSBzZXR1cEdhbWUoKTtcbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxO1xuICBnYW1lQWN0aXZlID0gdHJ1ZTtcblxuICAvLyBjb25zdCBwbGF5ZXIxQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMS1ib2FyZCcpO1xuICAvLyBjb25zdCBwbGF5ZXIyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMi1ib2FyZCcpO1xuICBmdW5jdGlvbiBpbml0R2FtZWJvYXJkKHBsYXllciwgY29udGFpbmVySWQsIGlzUGxheWVyQm9hcmQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gcm93O1xuICAgICAgICBjZWxsLmRhdGFzZXQuY29sID0gY29sO1xuXG4gICAgICAgIGlmIChpc1BsYXllckJvYXJkKSB7XG4gICAgICAgICAgaWYgKHBsYXllci5ib2FyZFtyb3ddW2NvbF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5ib2FyZFtyb3ddW2NvbF0gPT09ICdISVQnKSB7XG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJ0gnO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICdNJztcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuYm9hcmRbcm93XVtjb2xdID09PSAnSElUJykge1xuICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnSCc7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1BsYXllckJvYXJkKSB7XG4gICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1ha2VNb3ZlKHJvdywgY29sKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGRpc3BsYXlTaGlwc0xlZnQoZ2FtZWJvYXJkLCBjb250YWluZXJJZCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKTtcbiAgICBjb25zdCByZW1haW5pbmdTaGlwcyA9IGdhbWVib2FyZC5zaGlwcy5maWx0ZXIoXG4gICAgICAoc2hpcCkgPT4gIXNoaXAuaXNTdW5rKClcbiAgICApLmxlbmd0aDtcblxuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBTaGlwcyBMZWZ0OiAke3JlbWFpbmluZ1NoaXBzfWA7XG4gIH1cblxuICBmdW5jdGlvbiBpc0dhbWVPdmVyKCkge1xuICAgIGlmIChcbiAgICAgIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIxID8gcGxheWVyMi5hbGxTdW5rKCkgOiBwbGF5ZXIxLmFsbFN1bmsoKSkgPT09XG4gICAgICB0cnVlXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbmdyYXR1bGF0aW9ucyEgWW91J3ZlIHN1bmsgYWxsIHRoZSBvcHBvbmVudCdzIHNoaXBzIVwiKTtcbiAgICAgIGRpYWxvZ0JveC50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiQ29uZ3JhdHVsYXRpb25zISBZb3UndmUgc3VuayBhbGwgdGhlIG9wcG9uZW50J3Mgc2hpcHMhXCI7XG4gICAgICBjb25zb2xlLmxvZygnUGxheWVyJywgY3VycmVudFBsYXllciA9PT0gcGxheWVyMSA/ICcxJyA6ICcyJywgJ3dpbnMhJyk7XG4gICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgICBkaWFsb2dCb3gudGV4dENvbnRlbnQgPVxuICAgICAgICAgIFwiQ29uZ3JhdHVsYXRpb25zISBZb3UndmUgc3VuayBhbGwgdGhlIG9wcG9uZW50J3Mgc2hpcHMhXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaWFsb2dCb3gudGV4dENvbnRlbnQgPSAnVGhlIENvbXB1dGVyIFdpbnMhJztcbiAgICAgIH1cbiAgICAgIC8vICAgYnJlYWs7XG4gICAgICBnYW1lQWN0aXZlID0gZmFsc2U7XG4gICAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0QW5kUmVtb3ZlQnV0dG9uKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHN0YXJ0QnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICBpbml0R2FtZWJvYXJkKHBsYXllcjEsICdwbGF5ZXIxLWJvYXJkJywgdHJ1ZSk7XG4gIGluaXRHYW1lYm9hcmQocGxheWVyMiwgJ3BsYXllcjItYm9hcmQnKTtcbiAgY29uc29sZS5sb2coXCJDdXJyZW50IFBsYXllcidzIEdhbWVib2FyZDpcIik7XG4gIGNvbnNvbGUudGFibGUoY3VycmVudFBsYXllci5ib2FyZCk7XG5cbiAgY29uc3QgZGlhbG9nQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZycpO1xuXG4gIGRpYWxvZ0JveC50ZXh0Q29udGVudCA9IFwiUGxheWVyIDEncyB0dXJuXCI7XG4gIC8vIFBvdGVudGlhbCB0YXJnZXRzIGZvciB0aGUgY29tcHV0ZXItY29udHJvbGxlZCBQbGF5ZXIgMlxuICBjb25zdCBjb21wdXRlclRhcmdldHMgPSBbXTtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCArPSAxKSB7XG4gICAgICBjb21wdXRlclRhcmdldHMucHVzaCh7IHJvdywgY29sIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtYWtlTW92ZShyb3csIGNvbCkge1xuICAgIGlmIChnYW1lQWN0aXZlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtyb3d9ICR7Y29sfWApO1xuICAgICAgaWYgKGlzQ29vcmRpbmF0ZVZhbGlkKHBsYXllcjIsIHJvdywgY29sKSkge1xuICAgICAgICAvLyBQZXJmb3JtIHRoZSBhdHRhY2sgb24gdGhlIG9wcG9uZW50J3MgZ2FtZWJvYXJkXG4gICAgICAgIGNvbnN0IGF0dGFja2VkU2hpcCA9IHBsYXllcjIucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICAgIC8vIERpc3BsYXkgdGhlIHJlc3VsdCBvZiB0aGUgYXR0YWNrXG4gICAgICAgIGlmIChhdHRhY2tlZFNoaXApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnWW91IGhpdCBhIHNoaXAhJyk7XG4gICAgICAgICAgZGlhbG9nQm94LnRleHRDb250ZW50ID0gJ1lvdSBoaXQgYSBzaGlwISc7XG4gICAgICAgICAgaWYgKGF0dGFja2VkU2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZSBzaGlwIGhhcyBiZWVuIHN1bmshJyk7XG4gICAgICAgICAgICBkaWFsb2dCb3gudGV4dENvbnRlbnQgPSAnWW91IGhpdCBhIHNoaXAhIFRoZSBTaGlwIGhhcyBiZWVuIFN1bmshJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1lvdSBtaXNzZWQhJyk7XG4gICAgICAgICAgZGlhbG9nQm94LnRleHRDb250ZW50ID0gJ1lvdSBNaXNzZWQhJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgY29vcmRpbmF0ZXMuIFRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgZGlhbG9nQm94LnRleHRDb250ZW50ID0gJ0ludmFsaWQgY29vcmRpbmF0ZXMuIFRyeSBhZ2Fpbi4nO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbml0R2FtZWJvYXJkKHBsYXllcjIsICdwbGF5ZXIyLWJvYXJkJyk7XG4gICAgICBkaXNwbGF5U2hpcHNMZWZ0KHBsYXllcjIsICdzaGlwcy1wbGF5ZXIyJyk7XG4gICAgICBpc0dhbWVPdmVyKCk7XG4gICAgICBjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyMSA/IHBsYXllcjIgOiBwbGF5ZXIxO1xuICAgICAgY29tcHV0ZXJNb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZXJNb3ZlKCkge1xuICAgIGlmIChnYW1lQWN0aXZlKSB7XG4gICAgICBjb25zdCBhaVRhcmdldEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJUYXJnZXRzLmxlbmd0aCk7XG4gICAgICBjb25zdCB7IHJvdywgY29sIH0gPSBjb21wdXRlclRhcmdldHNbYWlUYXJnZXRJbmRleF07XG4gICAgICBjb25zb2xlLmxvZyhgY29tcHV0ZXJzIG1vdmVzICR7cm93fSAke2NvbH1gKTtcbiAgICAgIGlmIChpc0Nvb3JkaW5hdGVWYWxpZChwbGF5ZXIxLCByb3csIGNvbCkpIHtcbiAgICAgICAgLy8gUGVyZm9ybSB0aGUgYXR0YWNrIG9uIHRoZSBvcHBvbmVudCdzIGdhbWVib2FyZFxuICAgICAgICBjb25zdCBhdHRhY2tlZFNoaXAgPSBwbGF5ZXIxLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgYXR0YWNrZWQgY29vcmRpbmF0ZSBmcm9tIHRoZSBwb3RlbnRpYWwgdGFyZ2V0cyBsaXN0XG4gICAgICAgIGNvbXB1dGVyVGFyZ2V0cy5zcGxpY2UoYWlUYXJnZXRJbmRleCwgMSk7XG5cbiAgICAgICAgLy8gQWRkIGFkamFjZW50IGNvb3JkaW5hdGVzIHRvIHRoZSBwb3RlbnRpYWwgdGFyZ2V0cyBsaXN0IGlmIHRoZXkgYXJlIHZhbGlkIGFuZCBub3QgYXR0YWNrZWRcbiAgICAgICAgY29uc3QgYWRqYWNlbnRDb29yZHMgPSBbXG4gICAgICAgICAgeyByb3c6IHJvdyAtIDEsIGNvbCB9LFxuICAgICAgICAgIHsgcm93OiByb3cgKyAxLCBjb2wgfSxcbiAgICAgICAgICB7IHJvdywgY29sOiBjb2wgLSAxIH0sXG4gICAgICAgICAgeyByb3csIGNvbDogY29sICsgMSB9LFxuICAgICAgICBdO1xuICAgICAgICBmb3IgKGNvbnN0IHsgcm93OiByLCBjb2w6IGMgfSBvZiBhZGphY2VudENvb3Jkcykge1xuICAgICAgICAgIGlmIChpc0Nvb3JkaW5hdGVWYWxpZChwbGF5ZXIxLCByLCBjKSkge1xuICAgICAgICAgICAgY29tcHV0ZXJUYXJnZXRzLnB1c2goeyByb3c6IHIsIGNvbDogYyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNwbGF5IHRoZSByZXN1bHQgb2YgdGhlIGF0dGFja1xuICAgICAgICBpZiAoYXR0YWNrZWRTaGlwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0NvbXB1dGVyIGhpdCBhIHNoaXAhJyk7XG4gICAgICAgICAgLy8gZGlhbG9nQm94LnRleHRDb250ZW50ID0gJ1RoZSBDb21wdXRlciBoaXQgYSBzaGlwISc7XG4gICAgICAgICAgaWYgKGF0dGFja2VkU2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZSBzaGlwIGhhcyBiZWVuIHN1bmshJyk7XG4gICAgICAgICAgICAvLyBkaWFsb2dCb3gudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgLy8gICAnVGhlIENvbXB1dGVyIGhpdCBhIHNoaXAhIFRoZSBTaGlwIEhhcyBCZWVuIFN1bmshJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0NvbXB1dGVyIG1pc3NlZCEnKTtcbiAgICAgICAgICAvLyBkaWFsb2dCb3gudGV4dENvbnRlbnQgPSAnVGhlIENvbXB1dGVyIG1pc3NlZCEnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbml0R2FtZWJvYXJkKHBsYXllcjEsICdwbGF5ZXIxLWJvYXJkJywgdHJ1ZSk7XG4gICAgICBkaXNwbGF5U2hpcHNMZWZ0KHBsYXllcjEsICdzaGlwcy1wbGF5ZXIxJyk7XG4gICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgUGxheWVyJ3MgR2FtZWJvYXJkOlwiKTtcbiAgICAgIGNvbnNvbGUudGFibGUocGxheWVyMS5ib2FyZCk7XG4gICAgICBpc0dhbWVPdmVyKCk7XG4gICAgICBjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyMSA/IHBsYXllcjIgOiBwbGF5ZXIxO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgeyBwbGF5R2FtZSB9IGZyb20gJy4vZ2FtZXBsYXknO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRBbmRSZW1vdmVCdXR0b24oKSB7XG4gIHBsYXlHYW1lKCk7XG4gIHN0YXJ0QnV0dG9uLnJlbW92ZSgpO1xufVxuXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0QW5kUmVtb3ZlQnV0dG9uKTtcbiIsImV4cG9ydCBjb25zdCBTaGlwID0gKHgpID0+IHtcbiAgY29uc3QgbGVuZ3RoID0geDtcbiAgbGV0IGhpdHMgPSAwO1xuICBjb25zdCBoaXQgPSAoKSA9PiAoaGl0cyArPSAxKTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRzID09PSBsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgcmV0dXJuIHsgbGVuZ3RoLCBoaXRzLCBoaXQsIGlzU3VuaywgcG9zaXRpb25zOiBBcnJheShsZW5ndGgpLmZpbGwobnVsbCkgfTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==