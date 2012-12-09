http://daringfireball.net/projects/markdown/basics

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

And that's it. Really. Give it try!

Reference
---------

Credits
-------

Go to me and my wife for having the crazy idea of settings up our website :-)
Randomize array alghorithm found somewhere on stackoverflow, then forgotten and then reinvented myself.