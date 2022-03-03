/*Floating Code for Iframe Start*/
if (jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"],iframe[src*="https://player.vimeo.com/"]').length > 0) {
    /*Wrap (all code inside div) all vedio code inside div*/
    jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').wrap("<div class='iframe-parent-class'></div>");
    /*main code of each (particular) vedio*/
    jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').each(function(index) {

        /*Floating js Start*/
        var windows = jQuery(window);
        var iframeWrap = jQuery(this).parent();
        var iframe = jQuery(this);
        var iframeHeight = iframe.outerHeight();
        var iframeElement = iframe.get(0);
        windows.on('scroll', function() {
            var windowScrollTop = windows.scrollTop();
            var iframeBottom = iframeHeight + iframeWrap.offset().top;
            //alert(iframeBottom);

            if ((windowScrollTop > iframeBottom)) {
                iframeWrap.height(iframeHeight);
                iframe.addClass('stuck');
                jQuery(".scrolldown").css({"display": "none"});
            } else {
                iframeWrap.height('auto');
                iframe.removeClass('stuck');
            }
        });
        /*Floating js End*/
    });
}

/*Floating Code for Iframe End*/