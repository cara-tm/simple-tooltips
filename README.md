# Simple JS Tooltips

Simple and very light javascript tooltips with no dependencies, uses the "aria-label" attribute with full fallback for old browsers.

An adaptation of the Ben Mildren's CSS codepen (https://codepen.io/mildrenben/pen/rVBrpK) with retroactive enhancements and gracefull degradation.

## Usage

Simply add a **tooltip** `class` to your links. The script transferts the content of the `title` attributes into `aria-label` ones and do not affect old browsers which keep showing the default tooltip mode.

## Limitations and browser bugs noticed

* Edge browser (and old WebKit engines) underlines the tooltips content for links with a "text-decoration" rule (without possible corrections): https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/13140617/
* Edge browser shrinks tooltips with links surrounding long sentences. Solution: reduice the links length.
* For links with a `table-cell` or `table-row` display, the tooltips are shown full width (according to their parents). Solution: change the tooltip's `display` and `width` properties (ex. `.parent .link [class^=tooltip]:after {display: table;min-width: auto}`).

## Demos

See in action this: [online demo here](http://jsfiddle.net/1js5x9v7/2/)

Updated version: [online demo here](http://jsfiddle.net/1js5x9v7/6/)
