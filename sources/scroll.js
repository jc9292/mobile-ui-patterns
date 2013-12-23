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
    $('.page').css('width', wrapperWidth - 0);
    myScroll.refresh();
    myScroll.scrollToPage(currentPage, 0, 0);
}

var page3Scroll = new iScroll('wrapper3', {hScrollbar: false, vScrollbar: false, lockDirection: true });
var page2Scroll = new iScroll('wrapper2', {hScrollbar: false, vScrollbar: false, lockDirection: true });
var page1Scroll = new iScroll('wrapper1', {hScrollbar: false, vScrollbar: false, lockDirection: true });
function update1(){
		$('.page').css('width', $(document).width()+'px');
		updateLayout();
		myScroll.refresh();
}
$('#m4').click(go1);
function go1() {
	$('#p2').css('display','none');
	$('#p3').css('display','none');
	myScroll.scrollToElement('#p4',1000);
	$('#p2').css('display','block');
	$('#p3').css('display','block');
}

$(window).on('resize', function(){
   update1();
});
