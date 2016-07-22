(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('./module/ns');

var _ns2 = _interopRequireDefault(_ns);

var _Router = require('./module/Router');

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Main);

    console.log('Hello, world!');

    this.initialize();

    console.log('Thanks, world!');
  }

  _createClass(Main, [{
    key: 'initialize',
    value: function initialize() {
      var _this = this;

      $(function () {
        _this.router = new _Router2.default();
      });
    }
  }]);

  return Main;
}();

_ns2.default.main = new Main();

},{"./module/Router":3,"./module/ns":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('./ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cellSize = 100;

var Cell = function () {
  function Cell() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Cell);

    this.$elm = opts.$elm;
    this.posId = opts.posId;

    // this.colorTop =    opts.colorTop;
    // this.colorRight =  opts.colorRight;
    // this.colorBottom = opts.colorBottom;
    // this.colorLeft =   opts.colorLeft;

    this.initialize();
  }

  _createClass(Cell, [{
    key: 'initialize',
    value: function initialize() {
      var pos = this.position();
      var coord = this.coordinate();

      this.$elm.attr('data-x', coord[0]);
      this.$elm.attr('data-y', coord[1]);
    }
  }, {
    key: 'setColor',
    value: function setColor() {
      this.$elm.css({
        'border-top-color': this.colorTop || 'transparent',
        'border-right-color': this.colorRight || 'transparent',
        'border-bottom-color': this.colorBottom || 'transparent',
        'border-left-color': this.colorLeft || 'transparent'
      });
    }
  }, {
    key: 'setButton',
    value: function setButton() {
      var _this = this;

      var $tapArea = this.$elm.find('.tap-area');

      $tapArea.filter('[data-dir="top"]').css({
        display: this.colorTop ? 'block' : 'none',
        "background-color": this.colorTop || 'transparent'
      });
      $tapArea.filter('[data-dir="right"]').css({
        display: this.colorRight ? 'block' : 'none',
        "background-color": this.colorRight || 'transparent'
      });
      $tapArea.filter('[data-dir="bottom"]').css({
        display: this.colorBottom ? 'block' : 'none',
        "background-color": this.colorBottom || 'transparent'
      });
      $tapArea.filter('[data-dir="left"]').css({
        display: this.colorLeft ? 'block' : 'none',
        "background-color": this.colorLeft || 'transparent'
      });

      $tapArea.on('click', function (evt) {
        var position = _this.position();
        var coordinate = _this.coordinate();

        _ns2.default.square.$elm.trigger('select', {
          $elm: $(evt.target),
          posId: _this.posId,
          position: position,
          coordinate: coordinate
        });
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var left = this.posId % 3;
      var top = Math.floor(this.posId / 3);

      return [left, top];
    }
  }, {
    key: 'coordinate',
    value: function coordinate() {
      var pos = this.position();
      var x = pos[0] - 1;
      var y = pos[1] - 1;

      return [x, y];
    }
  }]);

  return Cell;
}();

exports.default = Cell;

},{"./ns":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('./ns');

var _ns2 = _interopRequireDefault(_ns);

var _Common = require('../page/Common');

var _Common2 = _interopRequireDefault(_Common);

var _Index = require('../page/Index');

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
  function Router() {
    _classCallCheck(this, Router);

    this.initialize();
  }

  _createClass(Router, [{
    key: 'initialize',
    value: function initialize() {
      var $body = $('body');

      this.pageCommon = new _Common2.default();

      if ($body.hasClass('page-index')) {
        this.pageIndex = new _Index2.default();
      }
    }
  }]);

  return Router;
}();

exports.default = Router;

},{"../page/Common":6,"../page/Index":7,"./ns":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('./ns');

var _ns2 = _interopRequireDefault(_ns);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var colorLi = {
  TOP: '#F00',
  RIGHT: '#0F0',
  BOTTOM: '#00F',
  LEFT: '#FF0'
};

var Square = function () {
  function Square() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Square);

    this.$elm = opts.$elm || $('[data-js-class~="square"]');

    this.initialize();
  }

  _createClass(Square, [{
    key: 'initialize',
    value: function initialize() {
      var _this = this;

      this.cellArr = [];

      this.$elm.find('[data-js-class~="cell"]').each(function (i, elm) {
        var cell = new _Cell2.default({
          $elm: $(elm),
          posId: i
        });

        _this.cellArr.push(cell);
      });

      this.cellArr.forEach(function (cell) {
        var coord = cell.coordinate();

        if (coord[0] === -1) {
          cell.colorLeft = colorLi.LEFT;
        }
        if (coord[0] === 1) {
          cell.colorRight = colorLi.RIGHT;
        }
        if (coord[1] === -1) {
          cell.colorTop = colorLi.TOP;
        }
        if (coord[1] === 1) {
          cell.colorBottom = colorLi.BOTTOM;
        }

        cell.setColor();
        cell.setButton();
      });

      this.$elm.on('select', function (evt, data) {
        console.log(data);
      });
    }
  }]);

  return Square;
}();

exports.default = Square;

},{"./Cell":2,"./ns":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * グローバル直下に変数を置かないよう、ネームスペースを切る。
 * ネームスペース以下の変数にアクセスしたいときは各クラスでこれをimportする
 */

window.licker = window.licker || {};
var ns = window.licker;
exports.default = ns;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('../module/ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = function () {
  function Common() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Common);

    this.initialize();
  }

  _createClass(Common, [{
    key: 'initialize',
    value: function initialize() {
      console.log('page common');
    }
  }]);

  return Common;
}();

exports.default = Common;

},{"../module/ns":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('../module/ns');

var _ns2 = _interopRequireDefault(_ns);

var _Square = require('../module/Square');

var _Square2 = _interopRequireDefault(_Square);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
  function Index() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Index);

    this.initialize();
  }

  _createClass(Index, [{
    key: 'initialize',
    value: function initialize() {
      this.square = new _Square2.default();

      _ns2.default.square = this.square;
    }
  }]);

  return Index;
}();

exports.default = Index;

},{"../module/Square":4,"../module/ns":5}]},{},[1]);
