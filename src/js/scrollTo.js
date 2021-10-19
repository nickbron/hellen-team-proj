import $ from 'jquery';

var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    400,
  );
  return false;
});
$('button[data-scroll]').click(function () {
  $page.animate(
    {
      scrollTop: $(`#${$.attr(this, 'data-scroll')}`).offset().top,
    },
    400,
  );
  return false;
});
