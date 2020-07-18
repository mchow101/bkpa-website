var links = {
    "index": "main.html",
    "bhc": "education/bhc.html",
    "fun": "education/fun.html",
    "trips": "education/trips.html",
    "shadowing": "education/shadowing.html",
    "annual": "culture/annual.html",
    "calendar": "culture/calendar.html",
    "upcoming": "culture/upcoming.html",
    "emagazines": "literature/emagazines.html",
    "books": "literature/books.html",
    "scholarships": "literature/scholarships.html",
    "events": "charity/events.html",
    "drives": "charity/drives.html",
    "volunteer": "charity/volunteer.html",
    "contact": "involved/contact.html",
    "sponsor": "involved/sponsor.html"
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