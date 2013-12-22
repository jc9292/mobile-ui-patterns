document.addEventListener("orientationchange", updateLayout);

// The wrapperWidth before orientationChange. Used to identify the current page number in updateLayout();
wrapperWidth = 0;

var myScroll = new iScroll('pageWrapper', {
	snap: true,
	momentum: false,
	hScrollbar: false,
	vScrollbar: false,
    lockDirection: true});

updateLayout();

function updateLayout() {
    var currentPage = 0;
    if (wrapperWidth > 0) {
        currentPage = - Math.ceil( $('#pageScroller').position().left / wrapperWidth);
    }
    wrapperWidth = $('#pageWrapper').width();

    $('#pageScroller').css('width', wrapperWidth * 4);
    alert($('#pageScroller').css('width'));
    $('.page').css('width', wrapperWidth - 0);
    myScroll.refresh();
    myScroll.scrollToPage(currentPage, 0, 0);
}

page3Scroll = new iScroll('wrapper3', {hScrollbar: false, vScrollbar: false, lockDirection: true });
page1Scroll = new iScroll('wrapper1', {hScrollbar: false, vScrollbar: false, lockDirection: true });

window.addEventListener("orientationchange", function() {
	alert('width='+$('.page').css('width')+' height='+$('.page').css('height'));
	settimeout(function(){
		wrapperWidth = $('.page').css('width')+40;
		$('#pageScroller').css('width', wrapperWidth * 4);
  		updateLayout();
	},1000);
}, false);
