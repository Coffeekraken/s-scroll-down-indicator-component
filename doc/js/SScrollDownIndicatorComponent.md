# SScrollDownIndicatorComponent

Provide a simple fully customizable component to let the user know that he can scroll down for more content.

### Example
```html
	<s-scroll-down-indicator>
  <div class="my-cool-scroll-down-indicator">
    Scroll down
  </div>
</s-scroll-down-indicator>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

Extends **SWebComponent**




## Attributes

Here's the list of available attribute(s).

### scrollDuration

Specify the scroll duration in ms

Type : **{ Integer }**

Default : **500**


### scrollEasing

Specify the easing function to use for the scroll

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**

Default : **__easing**


### scrollAmount

Specify how many pixels to scroll on click.
If not specified, will take the window height as value

Type : **{ Integer }**

Default : **null**


### displayTimeout

Specify a display timeout in ms before displaying the indicator

Type : **{ Integer }**

Default : **1000**