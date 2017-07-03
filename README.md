# Simple JS Tooltips

Simple and very light javascript tooltips with no dependencies, uses the "aria-label" attribute with full fallback for old browsers.

An adaptation of the Chris Bracco's CSS codepen (http://codepen.io/cbracco/pen/nufHz) with retroactive enhancements.

## Usage

Simply add a **blank** `data-tooltip=""` attribute where to add a stylish tooltip. The script transferts the content of the `title` attributes into `aria-label` ones and do not affect old browsers which keep showing the default tooltip mode.

## Fallback (included into the tooltips.min.css file)

A good practice consists to start your custom styles with these rules to avoid displaying unpopulated shapes (as alternatives to the default browser tooltips) for old browsers:

    [data-tooltip]:before,
    [data-tooltip]:after,
    .tooltip:before,
    .tooltip:after {
          display: none
    }

A new class named `tooltips` is injected within the `<html>` tag element when the script is ready and available through the DOM. As a consequence, you get a fallback for your custom styles:

    .tooltips [data-tooltip]:before,
    .tooltips .tooltip:before,
    .tooltips [data-tooltip]:after,
    .tooltips .tooltip:after {
          display: block
    }

## Demos

See in action this: [online demo here](http://jsfiddle.net/1js5x9v7/2/)

Updated version: [online demo here](http://jsfiddle.net/1js5x9v7/6/)
