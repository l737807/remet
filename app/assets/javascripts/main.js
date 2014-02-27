function switchGraphLayout() {
	if($('.graph-container.col-md-4').length > 0) {
		$('.graph-container.col-md-4').each(function(index, element){$(element).removeClass('col-md-4')})
		$('#graph-icon').removeClass('glyphicon-align-justify')
		$('#graph-icon').addClass('glyphicon-th-large')
	} else {
		$('.graph-container').each(function(index, element){$(element).addClass('col-md-4')})
		$('#graph-icon').removeClass('glyphicon-th-large')
		$('#graph-icon').addClass('glyphicon-align-justify')
	}
}

$(function() {
    //$( ".sortable" ).sortable();
    //$( ".sortable" ).disableSelection();
  });

$(function() {
    $('.sort-parent').sortable({
        items: '.sortable',
        connectWith: ".sort-parent"
    }).disableSelection();
});