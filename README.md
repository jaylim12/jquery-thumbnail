jquery-thumbnail
================

Simple jQuery plugin that creates image thumbnail

Usage
-----
```javascript
$('img').thumbnail();
// adjust thumbnail size and the margin that separate the images
$('img').thumbnail({ size: 40, margin: 5 });
```
Each image has to wrap with a container such as **div**.

e.g.:
```html
<div><img src="img1.jpg" /></div>
<div><img src="img2.jpg" /></div>
```
