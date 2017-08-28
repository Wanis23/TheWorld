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
    var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");

        if ($sidebarAndWrapper.hasClass("hide-sidebar"))
        {
            $icon.removeClass("fa-angle-double-left"); 
            $icon.addClass("fa-angle-double-right");
        }
        else
        {
            $icon.addClass("fa-angle-double-left");
            $icon.removeClass("fa-angle-double-right");
        }
    });

})();