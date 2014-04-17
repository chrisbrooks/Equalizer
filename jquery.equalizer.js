(function ($) {

    "use strict";

    $.fn.equalizer = function (options) {
        //plugin optons
        var settings = $.extend({
            padding: 2,
            margin: 2,
            columns: 3,
            container: ".container",
            containerPadding: true
        }, options);
        
        var currentTallest = 0,
            rowDivs = [],
            eq = 0,
            currentDiv = 0;

        //height settings to be called in the return each function
        function heightAjust() {
            //allow height to adjust when resizing columns
            eq.height('auto');
            currentTallest = (currentTallest < eq.height()) ? (eq.height()) : (currentTallest);
            rowDivs.push(eq);
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        }
        //work the width of the columns in a percentage and minus the margin for fluid responsivness
        function widthAdjust(){
            var columnSize = eq.parent('div').width() / $(settings.container).width() * 100 / settings.columns;
            eq.css({
                padding: settings.padding + '%',
                margin: settings.margin + '%',
                width: columnSize - settings.margin * 2 + "%"
            });
        }
        //work out the container margin based on the column outerwidth minus width divided by 2.
        function cntrPadding(){
            var marginWidth = eq.outerWidth() - eq.width();
            if(settings.containerPadding){
                 $(settings.container).css('padding', marginWidth / 2);
            }
        } 
        //return the functions for each item/column
        return this.each(function () {
            eq = $(this);
            widthAdjust();
            cntrPadding();
            heightAjust();
        });
    };
}(jQuery));