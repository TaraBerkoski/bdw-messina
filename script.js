$("span").click(function(){
	alert("Hello!");
});
$("a span").onclick(function () {
    alert("click on <a>");
    return false;
});