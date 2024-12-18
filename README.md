# Digitale Vormgeving - README

This is a Visual Code Extension written for Associate Degree Programme [Web Development & Design (Kortrijk)](https://https://www.howest.be/WDD) and two Bachelor Degree Programmes: [Multimedia and Creative Technology (Kortrijk)](https://https://www.howest.be/mct) and [Creative Technology & AI (Kortrijk)](https://https://www.howest.be/mct), all at [Howest University of Applied Sciences](https://www.howest.be/en).

## Features

This extension contains snippets used in the courses:

- Web Development (WDD)
- Coding Skills (WDD)
- Dynamic Web Development (WDD)
- API (WDD)
- Front-end (WDD)
- Basic Programming (MCT & CTAI)
- Full Stack Web Development (MCT)
- Project One (MCT)

## Important Notes
- All `wdd-` prefixes can be replaced with `mct-` prefixes, as prefered. 
- Python snippets also exist with `ctai-` prefix.

### CSS Snippets (*)

- `wdd-itcss`<sup>*</sup>: creating ITCSS-structure in CSS/SCSS (without Bootstrap)
- `wdd-itcss-bootstrap`<sup>*</sup>: creating ITCSS-structure in CSS/SCSS (with Bootstrap section)
- `wdd-mediaquery-min`<sup>*</sup>: creating mediaquery from specific Bootstrap breakpoint
- `wdd-mediaquery-max`<sup>*</sup>: creating mediaquery to specific Bootstrap breakpoint
- `wdd-flex-basis`<sup>*</sup>: easy writing of flex-basis property with gap
  
### JS Snippets (*)
⚠️ `mct-`prefix uses _fat arrow functions_, while `wdd-` prefix uses _function expressions_.

- `wdd-getData`<sup>*</sup>: create an asynchronous fetch with JSON parsing
- `wdd-handledata`<sup>*</sup>: create a handleData function (basic)
- `wdd-authorization-handledata`<sup>*</sup>: create a handleData function (with bearer token authorization)
- `wdd-domcontentloaded`<sup>*</sup>: create a DOMContentLoaded eventlistener
- `wdd-dataregion`<sup>*</sup>: create regions for Javascript Data Access
- `wdd-random`<sup>*</sup>: create a random function between min and max value

### Python Snippets

- `mct-ppropgs` or `mct-public-property-getter-setter`: create a public property getter and setter
- `ctai-ppropgs` or `ctai-public-property-getter-setter`: create a public property getter and setter
- `mct-ppropg` or `mct-public-property-getter`: create a public property getter
- `ctai-ppropg` or `ctai-public-property-getter`: create a public property getter

### HTML Snippets

- `bs5-css`: Create a HTML link to Boostrap CDN CSS
- `bs5-js`: Create a HTML link to Boostrap CDN JS (with Popper)
- `wdd-responsive-picture`: Create HTML code for an responsive picture using picture tag and sources
- `wdd-responsive-image`: Create HTML code for an responsive picture using img and srcset


## Requirements

No specific requirements for this extension

## Known Issues

No known issues for this extension

## Release Notes
### 1.2
- Added asynchronous function snippet
- Updated README

### 1.1.2
- Changed the JS Snippets for MCT to use fat arrow functions
- fixed small issue with new handleData snippet
- Updated README

### 1.0.1

- Updated README
  
### 0.18

- Updated Bootstrap links to 5.3.3
- Added Bootstrap Icon CDN Link  

### 0.13.2

- Typo in python snippets
- Updated readme

### 0.13.1

- Typo in python snippets
- Updated readme

### 0.13

- Added Creative Tech & AI to the description
- Updated Python snippets to work with ctai prefix
- Updated readme

### 0.12

- Added HTML snippets for responsive images
- Updated Bootstrap links to 5.3.2

### 0.11.1

- Added HTML snippets for bootstrap CSS en JS (via CDN)

### 0.10

- Added getter and setter snippet for Python in MCT

### 0.9

- Changed the values of wdd-mediaquery-min to 577,769,993,1201,1401 (Bootstrap breakpoints)

### 0.8.1

- Fix: Bad Publishing

### 0.8

- Added a javascriptsnippet for a random function between min and max value

### 0.7

- Changed snippet prefixes `dv-` to `wdd-` according to the new name of the Associate Degree programme.

### 0.6.3

- Fix: Bad Publishing

### 0.6.2

- Fix: [Issue](https://github.com/Diero/howest-digitaalvormgever/issues/1#issue-1271884562): Bootstrap ITCSS

### 0.6.1

- Added a javascriptsnippet for handling data with bearer token authorization
- Fix documentation

### 0.4.3

- From now on you can choose between the snippet prefixes `dv-` and `mct-`.

### 0.4.2

- Release patch, development troubles

### 0.4.1

- Release patch, development troubles

### 0.4.0

- Accidental minor release

### 0.3.0

- Added three new javascriptsnippets for handling data, creating dataregions and adding a domcontentloadedevent.

### 0.2.0

- Changed snippet prefix from `mit-` to `dv-`
- Added two new snippets for generating mediaqueries at Bootstrap breakpoints.

### 0.1.1

- Changed logo to transparent background
- Added snippet schortcodes to features section in readme.

### 0.1.0

- First release of the extension with a few CSS/SCSS snippets.
