$(window).on("scroll", function() {
    if($(window).scrollTop() > 80) {
        $(".navbar").addClass("active");
    } else {
       $(".navbar").removeClass("active");
    }
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > 80) {
        $(".mobileMenu").addClass("active");
    } else {
       $(".mobileMenu").removeClass("active");
    }
});


// external js: isotope.pkgd.js, imagesloaded.pkgd.js
// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer' } });
    
    
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');
    });
    // external js: isotope.pkgd.js
    // init Isotope
    var iso = new Isotope('.grid', {
    itemSelector: '.grid-item' });
    
    // filter functions
    var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function (itemElem) {
      var number = itemElem.querySelector('.number').textContent;
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function (itemElem) {
      var name = itemElem.querySelector('.name').textContent;
      return name.match(/ium$/);
    } };
    
    // bind filter button click
    var filtersElem = document.querySelector('.filters-button-group');
    filtersElem.addEventListener('click', function (event) {
    // only work with buttons
    if (!matchesSelector(event.target, 'a')) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[filterValue] || filterValue;
    iso.arrange({
      filter: filterValue });
    
    });
    // change is-checked class on buttons
    var buttonGroups = document.querySelectorAll('.button-group');
    for (var i = 0, len = buttonGroups.length; i < len; i++) {if (window.CP.shouldStopExecution(0)) break;
    var buttonGroup = buttonGroups[i];
    radioButtonGroup(buttonGroup);
    }window.CP.exitedLoop(0);
    
    function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener('click', function (event) {
      // only work with buttons
      if (!matchesSelector(event.target, 'a')) {
        return;
      }
      buttonGroup.querySelector('.is-checked').classList.remove(
      'is-checked');
      event.target.classList.add('is-checked');
    });
};



// add all to same gallery
$(".projectsdetailsPage .fancy").attr("data-fancybox","mygallery");
// assign captions and title from alt-attributes of images:
$(".projectsdetailsPage .fancy").each(function(){
  $(this).attr("data-caption", $(this).find("img").attr("alt"));
  $(this).attr("title", $(this).find("img").attr("alt"));
});
// start fancybox:
  $(".projectsdetailsPage .fancy").fancybox();