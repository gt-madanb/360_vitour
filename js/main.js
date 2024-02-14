var debug = true;
var closeMenuOnPanoLoad = true;
var rightAlignNav = false;

if (rightAlignNav) {
	$('head').append('<link rel="stylesheet" href="css/right-align-nav.css" type="text/css" />');
}

jQuery(document).ready(function(){
	//cache DOM elements
	var mainContent = $('.cd-main-content'),
		header = $('.cd-main-header'),
		sidebar = $('.cd-side-nav'),
		sidebarTrigger = $('.cd-nav-trigger'),
		topNavigation = $('.cd-top-nav'),
		searchForm = $('.cd-search'),
		accountInfo = $('.account');
		
	//on resize, move search and top nav position according to window width
	var resizing = false;
	moveNavigation();
	$(window).on('resize', function(){
		if( !resizing ) {
			(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
			resizing = true;
		}
	});

	//on window scrolling - fix sidebar nav
	var scrolling = false;
	checkScrollbarPosition();
	$(window).on('scroll', function(){
		if( !scrolling ) {
			(!window.requestAnimationFrame) ? setTimeout(checkScrollbarPosition, 300) : window.requestAnimationFrame(checkScrollbarPosition);
			scrolling = true;
		}
	});
	  

	//mobile only - open sidebar when user clicks the hamburger menu
	sidebarTrigger.on('click', function(event){
		if (debug) { console.log("click -> sidebarTrigger"); }
		event.preventDefault();
		$([sidebar, sidebarTrigger]).toggleClass('nav-is-visible');
	});

	//click on item and show submenu
	$('.has-children > a').on('click', function(event){
		if (debug) { console.log("click -> has-children < a"); }
		var mq = checkMQ(),
			selectedItem = $(this);
		if( mq == 'mobile' || mq == 'tablet' ) {
			event.preventDefault();
			if( selectedItem.parent('li').hasClass('selected')) {
				selectedItem.parent('li').removeClass('selected');
			} else {
				sidebar.find('.has-children.selected').removeClass('selected');
				accountInfo.removeClass('selected');
				selectedItem.parent('li').addClass('selected');
			}
		}
		$('.mainMap').hide();
		$('#allRooms').hide();
	});

	//click on account and show submenu - desktop version only
	accountInfo.children('a').on('click', function(event){
		var mq = checkMQ(),
			selectedItem = $(this);
		if( mq == 'desktop') {
			event.preventDefault();
			accountInfo.toggleClass('selected');
			sidebar.find('.has-children.selected').removeClass('selected');
		}
	});

	$(document).on('click', function(event){
		if (debug) { 
		//	console.log("click -> "+$(event.target)); 
			console.log("click href -> "+$(event.target).attr('href')); 
			console.log("click text -> "+$(event.target).text()); 
		}
	
		if( !$(event.target).is('.has-children a') ) {
			sidebar.find('.has-children.selected').removeClass('selected');
			accountInfo.removeClass('selected');
		}
		
		if ($(event.target).attr('href') == undefined && $(event.target).text() != "") {
				if (debug) { console.log("check for closeMenuOnPanoLoad"); }
				if (closeMenuOnPanoLoad) {
					$([sidebar, sidebarTrigger]).toggleClass('nav-is-visible');
					$('.mainMap').hide();
					$('#allRooms').hide();
			  }
		}
		
		var mq = checkMQ();
		if ($(event.target).text() != "View Map" && mq == 'mobile') {
			if (debug) { console.log("close map"); }
			$('.mainMap').hide();
			$('#allRooms').hide();
		}
		
	});

	//on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
	sidebar.children('ul').menuAim({
        activate: function(row) {
        	$(row).addClass('hover');
        },
        deactivate: function(row) {
        	$(row).removeClass('hover');
        },
        exitMenu: function() {
        	sidebar.find('.hover').removeClass('hover');
        	return true;
        },
        submenuSelector: ".has-children",
    });

	function checkMQ() {
		//check if mobile or desktop device
		console.log(window.getComputedStyle(document.querySelector('.cd-main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, ""));
		return window.getComputedStyle(document.querySelector('.cd-main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
	}

	function moveNavigation(){
  		var mq = checkMQ();
        
        if ( mq == 'mobile' && topNavigation.parents('.cd-side-nav').length == 0 ) {
        	detachElements();
			topNavigation.appendTo(sidebar);
			searchForm.removeClass('is-hidden').prependTo(sidebar);
		} else if ( ( mq == 'tablet' || mq == 'desktop') &&  topNavigation.parents('.cd-side-nav').length > 0 ) {
			detachElements();
			searchForm.insertAfter(header.find('.cd-logo'));
			topNavigation.appendTo(header.find('.cd-nav'));
		}
		checkSelected(mq);
		resizing = false;
	}

	function detachElements() {
		topNavigation.detach();
		searchForm.detach();
	}

	function checkSelected(mq) {
		//on desktop, remove selected class from items selected on mobile/tablet version
		if( mq == 'desktop' ) $('.has-children.selected').removeClass('selected');
	}

	function checkScrollbarPosition() {
		var mq = checkMQ();
		
		if( mq != 'mobile' ) {
			var sidebarHeight = sidebar.outerHeight(),
				windowHeight = $(window).height(),
				mainContentHeight = mainContent.outerHeight(),
				scrollTop = $(window).scrollTop();

			( ( scrollTop + windowHeight > sidebarHeight ) && ( mainContentHeight - sidebarHeight != 0 ) ) ? sidebar.addClass('is-fixed').css('bottom', 0) : sidebar.removeClass('is-fixed').attr('style', '');
		}
		scrolling = false;
	}
	
	
	$('.map').on('click', function(event){
	 if (debug) { console.log("click -> map"); }
	 $('.mainMap').show();
	 $('#allRooms').hide();
	});
	
	
	
	$('.mainMap .close').on('click', function(event){
	 if (debug) { console.log("click -> map close"); }
	 $('.mainMap').hide();
	});
	
	
	$('.hotspot.main').on('mouseover', function(event){
			 if (debug) { console.log("mouseover -> hotspot.navmain"); }
			 	$('.has-children').removeClass('hover').removeClass('hlight');
       	$('.has-children.navmain').addClass('hover').addClass('hlight');

	});
	
	$('.hotspot.sports').on('mouseover', function(event){
			 if (debug) { console.log("mouseover -> hotspot.navsports"); }
			 	$('.has-children').removeClass('hover').removeClass('hlight');
       	$('.has-children.navsports').addClass('hover').addClass('hlight');
	});
	
	$('.hotspot.primary').on('mouseover', function(event){
			 if (debug) { console.log("mouseover -> hotspot.navprimary"); }
			 	$('.has-children').removeClass('hover').removeClass('hlight');
       	$('.has-children.navprimary').addClass('hover').addClass('hlight');
	});
	
	$('.hotspot.secondary').on('mouseover', function(event){
			 if (debug) { console.log("mouseover -> hotspot.navsecondary"); }
			 	$('.has-children').removeClass('hover').removeClass('hlight');
       	$('.has-children.navsecondary').addClass('hover').addClass('hlight');
	});
	
	$('.hotspot.boys').on('mouseover', function(event){
			 if (debug) { console.log("mouseover -> hotspot.navboarding"); }
			 	$('.has-children').removeClass('hover').removeClass('hlight');
       	$('.has-children.navboarding').addClass('hover').addClass('hlight');
	});


	$('.hotspot').on('mouseout', function(event){
	 if (debug) { console.log("mouseout -> hotspot"); }
			 $('.has-children').removeClass('hlight');
	});
	
	
	$('.all').on('click', function(event){
	 if (debug) { console.log("click -> all"); } 
	 $('#allRooms').show();
	 $('.mainMap').hide();	
	});

	
});