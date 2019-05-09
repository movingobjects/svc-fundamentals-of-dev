$(function() {

  var $sections = $('section');

  $sections.each(function(index) {

    var $section = $(this);

    $section.find('.expand-collapse-controls a').click(function(e) {
      e.preventDefault();
      $section.toggleClass('collapsed');
    });

  });

});
