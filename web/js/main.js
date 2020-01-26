$(document).ready(function () {
$('.Acordion>ul>li>a').click(function(event) {
	alert('asd');
if ($(this).closest('li').hasClass('active')) {
   $(this).closest('li').removeClass('active');
}else{
$(this).closest('li').addClass('active');
}
});
});