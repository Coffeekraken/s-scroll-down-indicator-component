import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import __scrollTop from 'coffeekraken-sugar/js/dom/scrollTop'
import __scrollTo from 'coffeekraken-sugar/js/dom/scrollTo'
import __easing from 'coffeekraken-sugar/js/easings/easeInOutQuint'

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
export default class SScrollDownIndicatorComponent extends SWebComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps () {
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
      scrollEasing: __easing,

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

    }
  }

  /**
   * Css
   * @protected
   */
  static defaultCss (componentName, componentNameDash) {
    return `
      ${componentNameDash} {
        display : block;
        position: fixed;
        bottom: 0; left: 50%;
        transform: translateX(-50%) translateY(100%);
        cursor: pointer;
        pointer-events: none;
      }
      ${componentNameDash}.active {
        transform: translateX(-50%) translateY(0);
        pointer-events: all;
      }
    `
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  componentMount () {
    super.componentMount()

    // apply the transition
    setTimeout(() => {
      this.style.transition = 'transform .2s ease-in-out 0s'
    })

    // some internal variables
    this._onScrollFn = this._onScroll.bind(this)

    // handle display
    this._handleDisplay()

    // handle click
    this._handleClick()
  }

  /**
   * Component unmount
   * @definition    SWebComponent.componentUnmount
   * @protected
   */
  componentUnmount () {
    super.componentUnmount()

    // clear the display timeout
    clearTimeout(this._displayTimeout)

    // remove listeners
    document.removeEventListener('scroll', this._onScrollFn)
  }

  /**
   * Handle display
   */
  _handleDisplay () {
    if (__scrollTop() <= 0) {
      this._displayTimeout = setTimeout(() => {
        this.classList.add('active')
      }, this.props.displayTimeout)
      document.addEventListener('scroll', this._onScrollFn)
    }
  }

  /**
   * Handle click
   */
  _handleClick() {
    // listen for click on the component
    this.addEventListener('click', (e) => {
      // scroll to the amount specified in the props
      // or take the window height as amount
      let scrollAmount = this.props.scrollAmount || window.innerHeight

      // scroll the amount needed
      __scrollTo(document.body, this.props.scrollDuration, this.props.scrollEasing, scrollAmount * -1, 'top')
    })
  }

  /**
   * On scroll
   * @param    {Event}    e    The scroll event
   */
  _onScroll (e) {
    this.classList.remove('active')
    clearTimeout(this._displayTimeout)
  }
}
