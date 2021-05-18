"use strict";

var main = {
    lazyLoad: function () {
        if($("img").length) {
            $("img.lazyload").lazyload({
                src: "data-src",
                srcset: "data-srcset",
                selector: ".lazyload",
                root: null,
                rootMargin: "0px",
                threshold: 0
            });
        }

    },
    tagFunction: function () {
            $('.tag-round').on({
                click: function () {
                    var _this = $(this);
                    if (!$(_this).hasClass("active")) {
                        $(_this).addClass("active");
                        _this.find(".icon").removeClass("icon-tag").addClass("icon-close");
                        _this.parent().find(".box-v1").css("display", "block");
                    } else {
                        $(_this).removeClass("active");
                        _this.find(".icon").removeClass("icon-close").addClass("icon-tag");
                        _this.parent().find(".box-v1").css("display", "none");
                    }

                }
            });

    },


}

$(function () {
    main.lazyLoad();
    main.tagFunction();
});

