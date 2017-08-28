// site.js 

(function () {

    var ele = $("#username");
    ele.text("Vinyl World");

    var main = $("#main");
    main.on("mouseenter", function () {
        main.css("background-color", "#ccc");
    });

    main.on("mouseleave", function () {
        main.css("background-color", "");
    });

    var $sidebarAndWrapper = $("#sidebar,#wrapper");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");

        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("show sidebar");
        }
        else {
            $(this).text("hide-sidebar");
        }
    });

})();