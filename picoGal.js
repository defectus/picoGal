(function($) {
    var methods = {
        init: function(settings) {
            var images = this.find('img').map(function() {
                return {
                    src: $(this).attr('src'),
                    title: $(this).attr('title'),
                    alt: $(this).attr('alt')
                };
            }).get();
            this.data('images', images);
            this.data('settings', $.extend({
                effect: 'reveal', // [none|randomize|reveal]
                thumbWidth: 'auto',
                thumbHeight: 'auto',
                height: 'auto',
                width: 'auto',
                displayTitle: true,
                thumbTransform: function(url) {
                    return url
                }
            }, settings));
            return this;
        },
        show: function() {
            var settings = this.data('settings') || function() {
                    methods.build.call(this);
                    this.data('settings');
                }();
            if (this.size() > 0) {
                methods.build.call(this);
            }
            if (settings.effect === 'randomize' || settings.effect === 'reveal') {
                var $images = this.find('img');
                if (settings.effect === 'randomize') {
                    for (var i = $images.size(), x, y; i; --i, y = Math.round(Math.random() * i), x = $images[i], $images[i] = $images[y], $images[y] = x);
                }
                $images.each(function(i, e) {
                    var _this = $(this)
                    window.setTimeout(function() {
                        _this.animate({
                            'opacity': 1
                        }, 'slow')
                    }, i * 75);
                });
            }
            this.show();
            return this;
        },
        hide: function() {
            this.hide();
            return this;
        },
        build: function() {
            var _this = this,
                settings = this.data('settings'),
                images = this.data('images');
            this.children().remove();
            var $container = $('<div>', {
                css: {
                    width: settings.width,
                    height: settings.height,
                    position: 'relative'
                }
            });
            $.each(images, function(i, v) {
                var $img = $('<img>', {
                    src: settings.thumbTransform(v.src),
                    alt: v.alt,
                    title: settings.displayTitle ? v.title : '',
                    'data-fullsize': v.src,
                    css: {
                        position: 'relative',
                        border: 0,
                        margin: '5px',
                        padding: 0,
                        width: settings.thumbWidth,
                        height: settings.thumbHeight,
                        'font-weight': 'normal',
                        opacity: 0,
                        '-moz-box-shadow': '0 0 4px 1px #ddf',
                        '-webkit-box-shadow': '0 0 4px 1px #DDF',
                        'box-shadow': '0 0 4px 1px #DDF',
                        '-moz-border-radius': '4px',
                        'border-radius': '4px',
                        cursor: 'pointer'
                    }
                }).on('click', imgOnClick), 
                $title=$('<div>',{
                        text: v.title,
                        css: {}
                    });
                $container.append(function(){
                    if(v.title) {
                        return $('<div>',{css:{float:'left'}}).append($img, $title);
                    } else {
                        return $('<div>',{css:{float:'left'}}).append($img);
                    }
                });
            });
            _this.append($container);
        },
        destroy: function() {
            this.find('div').remove();
        }
    };

    function imgOnClick() {
        var _this = this,
            $preview = $(document).find('body>#preview').size() > 0 ? $(document).find('body>#preview') : function() {
                var $img = $('<img>', {
                    id: 'preview',
                    css: {
                        display: 'none',
                        height: $(_this).parent().parent().parent().data('settings').height,
                        width: $(_this).parent().parent().parent().data('settings').width,
                        'z-index': 999999999,
                        'position': 'absolute',
                        '-moz-box-shadow': '0 0 4px 1px #ddf',
                        '-webkit-box-shadow': '0 0 4px 1px #ddf',
                        'box-shadow': '0 0 4px 1px #ddf',
                        '-moz-border-radius': '4px',
                        'border-radius': '4px'
                    }
                });
                $('body').append($img);
                return $img;
            }();
        $('body').css({
            position: 'relative'
        });
        $preview.attr('src', $(_this).data('fullsize')).attr('alt', $(_this).attr('alt'));
        $preview.on('load', function() {
            console.log($(_this).offset().top);
            $preview.css({
                'left': ($(document).width() - $('#preview').width()) / 2,
                'top': window.pageYOffset + 100
            });
            $preview.fadeIn('slow');
        });

        $preview.on('click', function() {
            $preview.fadeOut("slow", function() {
                $preview.remove();
            });
        });
    }

    $.fn.picoGal = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Method ' + method + ' does not exist on jQuery.picoGal');
        }
    };

})(jQuery);