'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SWebComponent2 = require('coffeekraken-sugar/js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _scrollTop = require('coffeekraken-sugar/js/dom/scrollTop');

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _scrollTo = require('coffeekraken-sugar/js/dom/scrollTo');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _easeInOutQuint = require('coffeekraken-sugar/js/easings/easeInOutQuint');

var _easeInOutQuint2 = _interopRequireDefault(_easeInOutQuint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Provide a simple fully customizable component to let the user know that he can scroll down for more content.
 * @example    html
 * <s-scroll-down-indicator>
 *   <div class="my-cool-scroll-down-indicator">
 *     Scroll down
 *   </div>
 * </s-scroll-down-indicator>
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
var SScrollDownIndicatorComponent = function (_SWebComponent) {
  _inherits(SScrollDownIndicatorComponent, _SWebComponent);

  function SScrollDownIndicatorComponent() {
    _classCallCheck(this, SScrollDownIndicatorComponent);

    return _possibleConstructorReturn(this, (SScrollDownIndicatorComponent.__proto__ || Object.getPrototypeOf(SScrollDownIndicatorComponent)).apply(this, arguments));
  }

  _createClass(SScrollDownIndicatorComponent, [{
    key: 'componentMount',


    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */
    value: function componentMount() {
      var _this2 = this;

      _get(SScrollDownIndicatorComponent.prototype.__proto__ || Object.getPrototypeOf(SScrollDownIndicatorComponent.prototype), 'componentMount', this).call(this);

      // apply the transition
      setTimeout(function () {
        _this2.style.transition = 'transform .2s ease-in-out 0s';
      });

      // some internal variables
      this._onScrollFn = this._onScroll.bind(this);

      // handle display
      this._handleDisplay();

      // handle click
      this._handleClick();
    }

    /**
     * Component unmount
     * @definition    SWebComponent.componentUnmount
     * @protected
     */

  }, {
    key: 'componentUnmount',
    value: function componentUnmount() {
      _get(SScrollDownIndicatorComponent.prototype.__proto__ || Object.getPrototypeOf(SScrollDownIndicatorComponent.prototype), 'componentUnmount', this).call(this);

      // clear the display timeout
      clearTimeout(this._displayTimeout);

      // remove listeners
      document.removeEventListener('scroll', this._onScrollFn);
    }

    /**
     * Handle display
     */

  }, {
    key: '_handleDisplay',
    value: function _handleDisplay() {
      var _this3 = this;

      if ((0, _scrollTop2.default)() <= 0) {
        this._displayTimeout = setTimeout(function () {
          _this3.classList.add('active');
        }, this.props.displayTimeout);
        document.addEventListener('scroll', this._onScrollFn);
      }
    }

    /**
     * Handle click
     */

  }, {
    key: '_handleClick',
    value: function _handleClick() {
      var _this4 = this;

      // listen for click on the component
      this.addEventListener('click', function (e) {
        // scroll to the amount specified in the props
        // or take the window height as amount
        var scrollAmount = _this4.props.scrollAmount || window.innerHeight;

        // scroll the amount needed
        (0, _scrollTo2.default)(document.body, _this4.props.scrollDuration, _this4.props.scrollEasing, scrollAmount * -1, 'top');
      });
    }

    /**
     * On scroll
     * @param    {Event}    e    The scroll event
     */

  }, {
    key: '_onScroll',
    value: function _onScroll(e) {
      this.classList.remove('active');
      clearTimeout(this._displayTimeout);
    }
  }], [{
    key: 'defaultCss',


    /**
     * Css
     * @protected
     */
    value: function defaultCss(componentName, componentNameDash) {
      return '\n      ' + componentNameDash + ' {\n        display : block;\n        position: fixed;\n        bottom: 0; left: 50%;\n        transform: translateX(-50%) translateY(100%);\n        cursor: pointer;\n        pointer-events: none;\n      }\n      ' + componentNameDash + '.active {\n        transform: translateX(-50%) translateY(0);\n        pointer-events: all;\n      }\n    ';
    }
  }, {
    key: 'defaultProps',

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
      return {

        /**
         * Specify the scroll duration in ms
         * @prop
         * @type    {Integer}
         */
        scrollDuration: 500,

        /**
         * Specify the easing function to use for the scroll
         * @prop
         * @type    {Function}
         */
        scrollEasing: _easeInOutQuint2.default,

        /**
         * Specify how many pixels to scroll on click.
         * If not specified, will take the window height as value
         * @prop
         * @type    {Integer}
         */
        scrollAmount: null,

        /**
         * Specify a display timeout in ms before displaying the indicator
         * @prop
         * @type    {Integer}
         */
        displayTimeout: 1000

      };
    }
  }]);

  return SScrollDownIndicatorComponent;
}(_SWebComponent3.default);

exports.default = SScrollDownIndicatorComponent;