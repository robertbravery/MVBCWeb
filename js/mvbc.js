function getYear() {
    $('#copyrightdate').html(new Date().getFullYear());
};
$(function () {
    //$("#header").load("header.html"); 
    $("#footersection").load("footer.html");
});