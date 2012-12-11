picoGal
=======

Smallest possible gallery for your website

1. Usage
2. Reference
3. Credit

Usage
-----
The simplest possible way to create a gallery is to list your images in a tag and then refer to that tag is picoGal.

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="/picoGal.js"></script>
    <div>
        <img src="1" title="title1"/>
        ...
        <img src="10" title="title10"/>
    </div>

Given this html you can do:

    $('div').picoGal({}).picoGal('show');

or (even simpler)
    
    $('div').picoGal('show');

And that's it. Really. Give it a try!

Reference
---------
### Settings
- effect [none|randomize|reveal]: display effect (how thumbnails are displayed)
- thumbWidth: thumbnail width
- thumbHeight: thumbnail height
- height: image hight (the full size one)
- width: image width (the full size one)
- displayTitle: if true then title is displayed when mouse hover over the thumbnail
- thumbTransform: function that returns thumbnail url based on full size image url (usefull with picasa)

### Methods
- init ('init', settings): takes settings structure and initializes gallery
- build ('build'): build the gallery
- show ('show'): shows the gallery (reveals it)
- hide ('hide'): hides gallery, but the underlying dom is still there
- destroy ('destroy'): clears out the dom so the gallery is completely removed

Credits
-------
Go to me and my wife for having the crazy idea of settings up our website :-)
Randomize array alghorithm found somewhere on stackoverflow, then forgotten and then reinvented myself.