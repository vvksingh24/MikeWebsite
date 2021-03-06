function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
if (hasClass(document.getElementById("mikelegaltm"),'active'))
	{
		$('#mikelitigation').hide();
		$('#litigation-video-heading').hide();
		document.getElementById("litigation-video").classList.add('l-video');
	}
$('#mikelegaltm').on("click",function(){
	$('#mikelitigation').hide();
	$('#litigation-video-heading').hide();
	$('#miketm').show();
	if (!(hasClass($(this),'active')))
	{
		$('#litigation-video').html('');
		document.getElementById("litigation-video").classList.add('l-video');
		document.getElementById("mikelegaltm").classList.add('active');
		document.getElementById("mikelegalai").classList.remove('active');
	}
});
$('#mikelegalai').on("click",function(){
	$('#miketm').hide();
	$('#mikelitigation').show();
	$('#litigation-video-heading').show();
	if (!(hasClass($(this),'active')))
	{
		document.getElementById("litigation-video").classList.remove('l-video');
		$('#litigation-video').html('<iframe allowFullScreen frameborder="0" mozallowfullscreen src="https://player.vimeo.com/video/253207289?title=0&amp;byline=0&amp;portrait=0&amp;color=4285F4" webkitAllowFullScreen></iframe>');
		$('#litigation-video').fitVids();
		document.getElementById("mikelegalai").classList.add('active');
		document.getElementById("mikelegaltm").classList.remove('active');
	}
});
$('.carousel').carousel({
    interval: 2000 //TIME IN MILLI SECONDS
});
var search = '<div class="title">\
		        <h2 class="underline">What is MikeTM Search?<\/h2>\
		    <\/div>\
		    <div class="row">\
		        <div class="col-xs-12">\
		            <p> MikeTM Search is one of the world’s most advanced TM search tools built using AI and advanced technology to help lawyers and counsels identify similar marks and build an analysis within minutes. Mike TM Search empowers the lawyer to go beyond current methods of identifying similar marks allowing them to service clients better. As opposed to making a human spend hours and still covering a limited scope of marks that may be relevant, MikeTM Search gives you a holistic and detail view so you can always be 100% sure.\
		          <\/p>\
		        <\/div>\
		    <\/div> \
		<div class="container text-center features">\
			<div class="row feature">\
				<div class=" col-xs-12 right">\
					<h3>Real Time Integration<\/h3>\
					<p>MikeTM Search updates information in sync with the Trademark Registry.With MikeTM Search you never need to worry about seeing incorrect information.MikeTM Search is the only tool in the market to provide in sync data.<\/p>\
				<\/div>\
				<div class=" col-xs-12">\
					<img class="" src="landing-assets\/img\/stopwatch.png">\
				<\/div>\
				\
			<\/div>\
			<div class="row feature">\
				<div class="col-xs-12">\
					<h3>Advanced Search Tools<\/h3>\
					<p> Search across multiple classes In one go. Have the ability to do different searches such as Boolean Search, Initial Search, contextual search etc.Analyze the level of oppositions to marks similar to you and which proprietor is highly aggressive in your class.Analyze similar marks and level of oppositions faster and more accurately <\/p>\
				<\/div>\
				<div class="col-xs-12">\
					<img  class="" src="landing-assets\/img\/search-engine.png">\
				<\/div>\
			<\/div>\
			<div class="row feature">\
				<div class="col-xs-12 right">\
					<h3>In Depth Analysis<\/h3>\
					<p>MikeTM Search gives you a highly detailed analysis of marks similar to yours and the proprietors.Analyze the level of aggressiveness in your class and take measured decisions. Analyze the danger meter of marks similar to yours to understand the likelihood of opposition within seconds.Get easy access to a holistic view of all the information required to make an informed decision .<\/p>\
				<\/div>\
				<div class="col-xs-12">\
					<img class="" src="landing-assets\/img\/laptop.png">\
				<\/div>\
			<\/div>\
			<div class="row feature">\
				<div class="col-xs-12">\
					<h3>Share your analysis easily<\/h3>\
					<p>MikeTM Search allows you to create a detailed report to send to your clients.Customize the report with details you would want to include within seconds.Download in PDF and Word format or directly send your clients a mail .<\/p>\
				<\/div>\
				<div class="col-xs-12">\
					<img  class="" src="landing-assets\/img\/archive.png">\
				<\/div>	\
			<\/div>\
		<\/div>';
var watch = '<div class="title">\
		        <h2 class="underline">What is MikeTM Watch?<\/h2>\
		    <\/div>\
		    <div class="row">\
		        <div class="col-xs-12">\
		            <p> MikeTM Watch is one of the world’s most advanced trademark watch tool. It analyzes the journal every week to show you potentially infringing marks by automatically deploying various algorithms to identify infringing marks that today would have been missed or would take a huge amount of time to identify. With an easy access with cloud based dashboard no need for your associates to manually search across journals allowing your to generate more revenue with reduced costs.\
		          <\/p>\
		        <\/div>\
		    <\/div> \
		<div class="container text-center features">\
			<div class="row feature">\
				<div class=" col-xs-12 right">\
					<h3>Advanced AI solution to watch your marks<\/h3>\
					<p>MikeTM Watch leverages state of the art AI algorithms to identify deceptively similar marks within minutes allowing you to be completely sure that there is no mark that you may have missed.<\/p>\
				<\/div>\
				<div class=" col-xs-12">\
					<img class="" src="landing-assets\/img\/cloud-computing.png">\
				<\/div>\
				\
			<\/div>\
			<div class="row feature">\
				<div class="col-xs-12">\
					<h3>Automated report generation<\/h3>\
					<p> MikeTM Watch auto generates a report that can easily be customized based on your preferences. Collectively see all the details of the marks that are infringing your brand and send reports to your clients or colleagues within minutes<\/p>\
				<\/div>\
				<div class="">\
					<img  class="" src="landing-assets\/img\/clipboard.png">\
				<\/div>\
			<\/div>\
			<div class="row feature">\
				<div class="col-xs-12 right">\
					<h3>Multi class watch<\/h3>\
					<p>MikeTM Watch runs its advanced algorithms on multiple classes to ensure there is no possible mark that is missed that may be infringing your mark .<\/p>\
				<\/div>\
				<div class="col-xs-12">\
					<img class="" src="landing-assets\/img\/folder.png">\
				<\/div>\
			<\/div>\
			<div class="row feature">\
				<div class="col-xs-12">\
					<h3>Custom dashboard to see infringements<\/h3>\
					<p>MikeTM Watch provides you a custom dashboard to see all your marks, potential infringements, ability to customize your reports and much more.<\/p>\
				<\/div>\
				<div class="col-xs-12">\
					<img  class="" src="landing-assets\/img\/monitor.png">\
				<\/div>			\
			<\/div>\
		<\/div>';
var management = '<div class="title">\
		        <h2  class="underline">What is MikeTM Manager?<\/h2>\
		    <\/div>\
		    <div class="row">\
		        <div class="col-xs-12">\
		            <p>MikeTM Manager is one of kind automated solution to manage all your marks. Get a detailed, holistic view of your marks based on status segregation, date of application, upcoming hearing and much more. MikeTM Manager is in sync with the Trademark registry so always be updated with the changes to your marks.With MikeTM Manager you have Easy access, Easy management and Easy analysis.\
		          <\/p>\
		        <\/div>\
		    <\/div> \
		<div class="container text-center features">\
			<div class="row feature">\
				<div class=" col-xs-12 right">\
					<h3>Business intelligence Dashboard<\/h3>\
					<p>MikeTM Management provides you with a business intelligence dashboard to easily see a holistic view of your marks based on various factors such as status, date of application, legal proceedings etc.<\/p>\
				<\/div>\
				<div class=" col-xs-12">\
					<img class="" src="landing-assets\/img\/analytics.png">\
				<\/div>\
				\
			<\/div>\
			<div class="row feature">\
				<div class="col-xs-12">\
					<h3>Real time integration<\/h3>\
					<p> MikeTM Management has a real time integration with the trademark registry and would update any changes within the status, documents etc of your marks <\/p>\
				<\/div>\
				<div class="">\
					<img  class="" src="landing-assets\/img\/stopwatch.png">\
				<\/div>\
			<\/div>\
			<div class="row feature">\
				<div class="col-xs-12 right">\
					<h3>Minimal associate use<\/h3>\
					<p>With MikeTM management firms do not need to spend countless hours managing their marks. They can now have an automated solution that required minimal manual intervention. .<\/p>\
				<\/div>\
				<div class="col-xs-12">\
					<img class="" src="landing-assets\/img\/bars-chart.png">\
				<\/div>\
			<\/div>\
		<\/div>';
if (screen.width<768){
	$('#swm-question').parent().hide();
	$("#video").hide();
	$('#Search').append(search);
	$('#Watch').append(watch);
	$('#Management').append(management);
}
else{
	$("#Search img, #Search p").mouseenter(function() {
	    $('#swm-question').html('<h2 class="underline">What is MikeTM Search?</h2>');
		$('#swm-question').css({'animation-name':'fadeIn','animation-duration': '3s'});
		$('#swm-answer').html("<p>MikeTM Search is one of the world’s most advanced TM search tools built using AI and advanced technology to help lawyers and counsels identify similar marks and build an analysis within minutes. Mike TM Search empowers the lawyer to go beyond current methods of identifying similar marks allowing them to service clients better. As opposed to making a human spend hours and still covering a limited scope of marks that may be relevant, MikeTM Search gives you a holistic and detail view so you can always be 100% sure .</p>");
		$('#swm-answer').css({'animation-name':'fadeIn','animation-duration': '3s'});
		$('#tmfeature').html('<div class="row feature"><div class="col-sm-6  col-xs-12 right"><h3>Real Time Integration</h3><p>MikeTM Search updates information in sync with the Trademark Registry.With MikeTM Search you never need to worry about seeing incorrect information.MikeTM Search is the only tool in the market to provide in sync data.</p></div><div class="col-sm-6  col-xs-12"><img class="" src="landing-assets/img/stopwatch.png"></div></div><div class="row feature"><div class="col-sm-6 col-xs-12"><h3>Advanced Search Tools</h3><p> Search across multiple classes In one go. Have the ability to do different searches such as Boolean Search, Initial Search, contextual search etc.Analyze the level of oppositions to marks similar to you and which proprietor is highly aggressive in your class.Analyze similar marks and level of oppositions faster and more accurately </p></div><div class="col-sm-6"><img  class="" src="landing-assets/img/search-engine.png"></div></div><div class="row feature"><div class="col-sm-6 col-xs-12 right"><h3>In Depth Analysis</h3><p>MikeTM Search gives you a highly detailed analysis of marks similar to yours and the proprietors.Analyze the level of aggressiveness in your class and take measured decisions. Analyze the danger meter of marks similar to yours to understand the likelihood of opposition within seconds.Get easy access to a holistic view of all the information required to make an informed decision .</p></div><div class="col-sm-6 col-xs-12"><img class="" src="landing-assets/img/laptop.png"></div></div><div class="row feature"><div class="col-sm-6 col-xs-12"><h3>Share your analysis easily</h3><p>MikeTM Search allows you to create a detailed report to send to your clients.Customize the report with details you would want to include within seconds.Download in PDF and Word format or directly send your clients a mail .</p></div><div class="col-sm-6 col-xs-12"><img  class="" src="landing-assets/img/archive.png"></div></div>');
		$('#tmfeature').css({'animation-name':'fadeIn','animation-duration': '3s'});

	}).mouseleave(function() {
	    $('#swm-question').removeAttr('style');
		$('#swm-answer').removeAttr('style');
		$('#tmfeature').removeAttr('style');
	});
	$("#Watch img,#Watch p").mouseenter(function() {
	    $('#swm-question').html('<h2 class="underline">What is MikeTM Watch?</h2>');
		$('#swm-question').css({'animation-name':'fadeIn','animation-duration': '3s'});
		$('#swm-answer').html("<p>MikeTM Watch is one of the world’s most advanced trademark watch tool. It  analyzes the journal every week to show you potentially infringing marks by  automatically deploying various algorithms to identify infringing marks that today would have been missed or would take a huge amount of time to identify. With an easy access with cloud based dashboard no need for your associates to manually search across journals allowing your to generate more revenue with reduced costs.</p>");
		$('#swm-answer').css({'animation-name':'fadeIn','animation-duration': '3s'});
		$('#tmfeature').html('<div class="row feature"><div class="col-sm-6  col-xs-12 right"><h3>Advanced AI solution to watch your marks</h3><p>MikeTM Watch leverages state of the art AI algorithms to identify deceptively similar marks within minutes allowing you to be completely sure that there is no mark that you may have missed.</p></div><div class="col-sm-6  col-xs-12"><img class="" src="landing-assets/img/cloud-computing.png"></div></div><div class="row feature"><div class="col-sm-6 col-xs-12"><h3>Automated report generation</h3><p>MikeTM Watch auto generates a report that can easily be customized based on your preferences. Collectively see all the details of the marks that are infringing your brand and send reports to your clients or colleagues within minutes</p></div><div class="col-sm-6"><img  class="" src="landing-assets/img/clipboard.png"></div></div><div class="row feature"><div class="col-sm-6 col-xs-12 right"><h3>Multi class watch</h3><p>MikeTM Watch runs its advanced algorithms on multiple classes to ensure there is no possible mark that is missed that may be infringing your mark </p></div><div class="col-sm-6 col-xs-12"><img class="" src="landing-assets/img/folder.png"></div></div><div class="row feature"><div class="col-sm-6 col-xs-12"><h3>Custom dashboard to see infringements</h3><p>MikeTM Watch provides you a custom dashboard to see all your marks, potential infringements, ability to customize your reports and much more</p></div><div class="col-sm-6 col-xs-12"><img  class="" src="landing-assets/img/monitor.png"></div></div>');
		$('#tmfeature').css({'animation-name':'fadeIn','animation-duration': '3s'});
	}).mouseleave(function() {
	    $('#swm-question').removeAttr('style');
		$('#swm-answer').removeAttr('style');
		$('#tmfeature').removeAttr('style');
	});
	$("#Management img,#Management p").mouseenter(function() {
	    $('#swm-question').html('<h2 class="underline">What is MikeTM Manager?</h2>');
		$('#swm-question').css({'animation-name':'fadeIn','animation-duration': '3s'});
		$('#swm-answer').html("<p>MikeTM Manager is one of kind automated solution to manage all your marks. Get a detailed, holistic view of your marks based on status segregation, date of application, upcoming hearing and much more. MikeTM Manager is in sync with the Trademark registry so always be updated with the changes to your marks.With MikeTM Manager you have Easy access, Easy management and Easy analysis</p>");
		$('#swm-answer').css({'animation-name':'fadeIn','animation-duration': '3s'});
		$('#tmfeature').html('<div class="row feature"><div class="col-sm-6  col-xs-12 right"><h3>Business intelligence Dashboard </h3><p>MikeTM Management provides you with a business intelligence dashboard to easily see a holistic view of your marks based on various factors such as status, date of application, legal proceedings etc. </p></div><div class="col-sm-6  col-xs-12"><img class="" src="landing-assets/img/analytics.png"></div></div><div class="row feature"><div class="col-sm-6 col-xs-12"><h3>Real time integration</h3><p> MikeTM Management has a real time integration with the trademark registry and would update any changes within the status, documents etc of your marks </p></div><div class="col-sm-6"><img  class="" src="landing-assets/img/stopwatch.png"></div></div><div class="row feature"><div class="col-sm-6 col-xs-12 right"><h3>Minimal associate use</h3><p>With MikeTM management firms do not need to spend countless hours managing their marks. They can now have an automated solution that required minimal manual intervention. </p></div><div class="col-sm-6 col-xs-12"><img class="" src="landing-assets/img/bars-chart.png"></div></div>');
		$('#tmfeature').css({'animation-name':'fadeIn','animation-duration': '3s'});
	}).mouseleave(function() {
	    $('#swm-question').removeAttr('style');
		$('#swm-answer').removeAttr('style');
		$('#tmfeature').removeAttr('style');
	});
}

$('.multi-item-carousel').carousel({
  interval: 3000
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
        next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
$(".fluid-video-container").fitVids();

