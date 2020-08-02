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
    "scholarships": "literature/scholarships.html",
    "fundraising": "charity/fundraising.html",
    "gives": "charity/gives.html",
    "volunteer": "charity/volunteer.html",
    "contact": "involved/contact.html",
    "donate": "involved/sponsor.html"
};

var page = document.URL.substring(document.URL.lastIndexOf('#') + 1);
if (page.length === 0 || document.URL.lastIndexOf('#') === -1) {
    page = "index";
}

var contents;
setpage(page);
function setpage(curpage) {
    page = curpage;
    getFile(links[page]);
}

function getFile(file) {
    $(document).ready(function () {
        $('#content').load(file);
    });
}