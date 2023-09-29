# jQuery Overlay
[Homepage](https://www.berlinsms.de/)

# Description
A jquery-plugin to popup an overlay. 

The overlay can carry each dom you want.

The dom-elements are arranged in pages.

You can easy flipp between pages and hide and show them together with the oyerlay

# Usage

Include jquery    
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```
Download bsms-overlay

```link
https://raw.githubusercontent.com/berlinSMS/overlay/main/bsms-overlay.js
```

Include bsms-overlay
```html
<script src="bsms-overlay.js"></script>
```

Assign overlay to your dom, but make sure, the script is fully loaded, before you assign overlay, e.g. use jquerys 'ready'
```js
$(document).ready(function () {
    $.bsmsOverlay();
});    
```

Create pages for the overlay.
```js
$(document).ready(function () {
    $.bsmsOverlay()
        .addPage();
});    
```

Add callbacks, if you need whem:
```js
$(document).ready(()=>{
    $.bsmsOverlay( { closeRequested: overlayCloseRequested, onClose: overlayOnClose } );
});    
function overlayCloseRequested() {
    return confirm('Close overlay ?');
}
function overlayOnClose() {
    alert('Overlay closed');
}
```

If you store the return value, you can use it, to add content or show or hide the previously created page
```js
$(document).ready(function () {
    const $page1 = $.bsmsOverlay()
        .addPage();
    $page1.append($('<p>This is any content</p>'));
    $page1.show();
});   
```   

It is not neccessary, to store the return value, if you provide a page-identifier
```js
$(document).ready(function () {
    $.bsmsOverlay()
        .addPage('page-id-1');
    $.bsmsOverlay()
        .getPage('page-id-1').show();
}
```  

And of course you can use jQuerys object-chains
```js
$(document).ready(function () {
    const $overlay = $.bsmsOverlay()
        .addPage('page-id-1',$('<p>This is page 1 content</p>'))
        .addPage('page-id-2',$('<p>This is page 2 content</p>'))
        .showPage('page-id-1,'Title-Text on Page 1')
        .getPage('page-id-2')
        .append($('<p>More content on page 2</p>'))
        .addPage('page-id-3',$('<p>This is page 3 content</p>'));
}
```

# Options

| Option         | DESCRIPTION                                                                                                                                         | DEFAULT               |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| fadeInDuration | Duration the pages need to fadeIn                                                                                                                   | 500                   |
| closeRequested | Callback that fires when the user clicks the cross in the top right corner.<br>- Return true to enable closing<br>- Return false to undo the close. | null<br>(allow close) |
| onClose        | Callback triggered when overlay is closed                                                                                                           | null                  | 
| showClose      | shows the close-cross                                                                                                                               | true                  | 
| showCredits    | shows credits                                                                                                                                       | true                  |

# Functions

| Option   | Parameter                    | DESCRIPTION                                   |
|----------|------------------------------|-----------------------------------------------|
| addPage  | pagename, title, $dom        | Creates a new page containing the given DOM   |
| getPage  | pagename                     | Retrieves a page                              |
| showPage | pagename, title, afterFadeIn | Shows a page (and calls the callback after)   |
| hide     |                              | Hides the overlay                             |
| show     |                              | Shows the overlay                             |

## Meaning of the parameters

| Parameter   | Default        | Description                                                                          |
|-------------|----------------|--------------------------------------------------------------------------------------|
| pagename    | auto-generated | page-identifier, that you can use to access to a page (will not be shown on page)    |
| title       | null           | Title-text, that will be showed on the top of a page (null=dont change current title |
| $dom        | null           | Jquery-Object, that will be append to a page                                         |
| afterFadeIn | null           | Callback triggered when page-fade-in is finished (see fadeInDuration-option)         |

## Remarks:
 - if pagename is unknow, it will create a page with this pagename
 - if pagename is empty, a random pagename is generated
 - show: in page-context it will open this page, but in context of the overlay itself it opens the last shown page or an empty-page, if there is no last shown page


                                                                                                                                                                            
