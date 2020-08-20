var links = {
    "index": "main.html",
    "mission": "story/mission.html",
    "about": "story/about.html",
    "leadership": "story/leadership.html",
    "bengali": "story/bengali.html",
    "bhc": "education/bhc.html",
    "fun": "education/fun.html",
    "trips": "education/trips.html",
    "shadowing": "education/shadowing.html",
    "annual": "culture/annual.html",
    "calendar": "culture/calendar.html",
    "upcoming": "culture/upcoming.html",
    "emagazines": "literature/emagazines.html",
    "books": "literature/book.html",
    "scholarships": "charity/scholarships.html",
    "fundraising": "charity/fundraising.html",
    "gives": "charity/gives.html",
    "volunteer": "charity/volunteer.html",
    "contact": "involved/contact.html",
    "donate": "involved/sponsor.html"
};

var colors = {
    "main.": "#fbde68",
    "story": "#7fdae8",
    "education": "#fbde68",
    "culture": "#7fdae8",
    "literature": "#6c72bb",
    "charity": "#a7c973",
    "involved": "#f69f44"
};

var page = document.URL.substring(document.URL.lastIndexOf('#') + 1);
if (page.length === 0 || document.URL.lastIndexOf('#') === -1) {
    page = "index";
}
setpage(page);

var contents, file, color;
function setpage(curpage) {
	$(document).ready(function () {

    page = curpage;
	console.log(page);
    var i = links[page].indexOf("/");
    if (i < 0) { 
        i = page.length; 
    }
	file = links[page];
	color = colors[links[page].substring(0, i)];
    //getFile(links[page], colors[links[page].substring(0, i)]);
    console.log(links[page].substring(0, i));
		document.body.innerHTML = document.body.innerHTML.replace("#header-color", color);
		$(".navbar")[0].style.backgroundColor = color;
        $('#content').load(file);
	});
}

//$(document).ready(function () {
	//function getFile(file, color) {
	//	setpage(page);
        
	//}
//});