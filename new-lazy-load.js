/* js */

$.lazyLoadXT.onload = function() {
  var $el = $(this);
  $el
    .removeClass('lazy-hidden')
    .addClass('animated ' + $el.attr('data-effect'));
};

/* html */

<div class="container">
    
    <div class="page-header">
        <h1>Animate.css effects</h1>
        <p class="lead">Use effects from <a href="https://daneden.me/animate">animate.css</a> project for loaded images.</p>
    </div>
    <script>
        var category = 'animals',
            effects = ['tada', 'pulse', 'flipInX', 'flipInY', 'fadeIn', 'fadeInUp', 'fadeInRight', 'fadeInUpBig',
                'fadeInRightBig', 'slideInRight', 'bounceIn', 'bounceInUp', 'bounceInRight', 'rotateIn',
                'rotateInUpLeft', 'rotateInUpRight', 'lightSpeedIn'];
        for(var i=0; i<effects.length; i++) {
            document.write('<p>' + effects[i] + ':<br><img data-src="http://lorempixel.com/300/200/'
                    + category + '/' + (1+(i%10)) + '" data-effect="' + effects[i]
                    + '" width="300" height="200"></p>');
        }
    </script>
    <p>tada:<br><img data-src="http://lorempixel.com/300/200/animals/1" data-effect="tada" width="300" height="200" src="http://lorempixel.com/300/200/animals/1" class="animated tada"></p><p>pulse:<br><img data-src="http://lorempixel.com/300/200/animals/2" data-effect="pulse" width="300" height="200" src="http://lorempixel.com/300/200/animals/2" class="animated pulse"></p><p>flipInX:<br><img data-src="http://lorempixel.com/300/200/animals/3" data-effect="flipInX" width="300" height="200" src="http://lorempixel.com/300/200/animals/3" class="animated flipInX"></p><p>flipInY:<br><img data-src="http://lorempixel.com/300/200/animals/4" data-effect="flipInY" width="300" height="200" src="http://lorempixel.com/300/200/animals/4" class="animated flipInY"></p><p>fadeIn:<br><img data-src="http://lorempixel.com/300/200/animals/5" data-effect="fadeIn" width="300" height="200" src="http://lorempixel.com/300/200/animals/5" class="animated fadeIn"></p><p>fadeInUp:<br><img data-src="http://lorempixel.com/300/200/animals/6" data-effect="fadeInUp" width="300" height="200" src="http://lorempixel.com/300/200/animals/6" class="animated fadeInUp"></p><p>fadeInRight:<br><img data-src="http://lorempixel.com/300/200/animals/7" data-effect="fadeInRight" width="300" height="200" src="http://lorempixel.com/300/200/animals/7" class=""></p><p>fadeInUpBig:<br><img data-src="http://lorempixel.com/300/200/animals/8" data-effect="fadeInUpBig" width="300" height="200" src="http://lorempixel.com/300/200/animals/8" class="animated fadeInUpBig"></p><p>fadeInRightBig:<br><img data-src="http://lorempixel.com/300/200/animals/9" data-effect="fadeInRightBig" width="300" height="200" src="http://lorempixel.com/300/200/animals/9" class="animated fadeInRightBig"></p><p>slideInRight:<br><img data-src="http://lorempixel.com/300/200/animals/10" data-effect="slideInRight" width="300" height="200" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></p><p>bounceIn:<br><img data-src="http://lorempixel.com/300/200/animals/1" data-effect="bounceIn" width="300" height="200" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></p><p>bounceInUp:<br><img data-src="http://lorempixel.com/300/200/animals/2" data-effect="bounceInUp" width="300" height="200" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></p><p>bounceInRight:<br><img data-src="http://lorempixel.com/300/200/animals/3" data-effect="bounceInRight" width="300" height="200" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></p><p>rotateIn:<br><img data-src="http://lorempixel.com/300/200/animals/4" data-effect="rotateIn" width="300" height="200" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></p><p>rotateInUpLeft:<br><img data-src="http://lorempixel.com/300/200/animals/5" data-effect="rotateInUpLeft" width="300" height="200" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></p><p>rotateInUpRight:<br><img data-src="http://lorempixel.com/300/200/animals/6" data-effect="rotateInUpRight" width="300" height="200" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></p><p>lightSpeedIn:<br><img data-src="http://lorempixel.com/300/200/animals/7" data-effect="lightSpeedIn" width="300" height="200" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></p>
</div>


