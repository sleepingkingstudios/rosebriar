---
layout: nil
---

/* Included files. */

{% include assets/javascripts/jquery-2.1.3.min.js %}
{% include assets/javascripts/twitter-bootstrap/bootstrap.min.js %}

/* Local Scripts */

jQuery(document).ready(function() {
  var $extendedContent = jQuery('.extended-edition');
  var hideButton       = '<p><a href="#" class="hide-extended-content">Hide Extended Content</a></p>';
  var showButton       = '<p><a href="#" class="show-extended-content">Show Extended Content</a></p>';

  $extendedContent.prepend(hideButton);
  $extendedContent.append(hideButton);
  $extendedContent.after(showButton);

  var $showExtendedContentButtons = jQuery('a.show-extended-content');
  $showExtendedContentButtons.on('click', function(event) {
    event.preventDefault();

    $extendedContent.show();
    $showExtendedContentButtons.hide();
  });

  var $hideExtendedContentButtons = jQuery('a.hide-extended-content');
  $hideExtendedContentButtons.on('click', function(event) {
    event.preventDefault();

    $extendedContent.hide();
    $showExtendedContentButtons.show();
  });
});
