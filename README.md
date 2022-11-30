# Multimedia en Informatietechnologie - Digitaal Vormgever README

This is a Visual Code Extension written for Associate Degree Programme [Web Development & esign (Kortrijk)](https://https://www.howest.be/WDD) and Bachelor Degree Programme [Multimedia and Creative Technology (Kortrijk)](https://https://www.howest.be/mct), both at [Howest University of Applied Sciences](https://howest.be/en).

## Features

This extension contains snippets used in the courses:
- Web Development (WDD)
- Coding Skills (WDD)
- Advanced Web development (WDD)
- Front-end (WDD)
- Basic Programming (MCT)
- Full Stack Web Development (MCT)


### CSS Snippets (*)
- `wdd-itcss`<sup>*</sup>: creating ITCSS-structure in CSS/SCSS (without Bootstrap)
- `wdd-itcss-bootstrap`<sup>*</sup>: creating ITCSS-structure in CSS/SCSS (with Bootstrap section)
- `wdd-mediaquery-min`<sup>*</sup>: creating mediaquery from specific Bootstrap breakpoint
- `wdd-mediaquery-max`<sup>*</sup>: creating mediaquery to specific Bootstrap breakpoint

### JS Snippets (*)
- `wdd-handledata`<sup>*</sup>: create a handleData function (basic)
- `wdd-authorization-handledata`<sup>*</sup>: create a handleData function (with bearer token authorization)
- `wdd-domcontentloaded`<sup>*</sup>: create a DOMContentLoaded eventlistener
- `wdd-dataregion`<sup>*</sup>: create regions for Javascript Data Access
- `wdd-random`<sup>*</sup>: create a random function between min and max value

### Python Snippets
- `mct-ppropgs` or `mct-public-property-getter-setter`: create a public property getter and setter
- `mct-ppropgs` or `mct-public-property-getter`: create a public property getter

### HTML Snippets
- `bs5-css`: Create a HTML link to Boostrap CDN CSS
- `bs5-js`: Create a HTML link to Boostrap CDN JS (with Popper)

(*) <sup>*</sup> All `wdd-` prefixes can be replaced with `mct-` prefixes, as prefered

## Requirements

No specific requirements for this extension

## Known Issues
No known issues for this extension


## Release Notes
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
