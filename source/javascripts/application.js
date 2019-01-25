//= require jquery
//= require popper
//= require bootstrap-sprockets
//= require navbar_scroll
//= require_tree .



$('.multi-item-carousel .item').each(function(){
  console.log("hello");
  next = $(this).next();
  if (!next.length) next = $(this).siblings(':first');
  next.children(':first-child').clone().appendTo($(this));
});
$('.multi-item-carousel .item').each(function(){
  prev = $(this).prev();
  if (!prev.length) prev = $(this).siblings(':last');
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});
