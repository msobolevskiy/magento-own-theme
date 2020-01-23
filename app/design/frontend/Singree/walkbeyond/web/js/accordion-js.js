define(["jquery", "matchMedia", "accordion"], function($, mediaCheck) {
  "use strict";


//   mediaCheck({
//     media: "(min-width: 768px)",

//     entry: function() {
//       $("#accordion").accordion("destroy");
//     },

//     exit: function() {
//       $("#accordion").accordion({
//         active: [0, 1, 2],
//         openedState: "active",
//         closedState: "closed",
//         collapsible: true,
//         multipleCollapsible: true,
//         animate: { duration: 600 }
//       });
//     }
//   });
// });

    $.widget('mage.widgetAccordion',{

        // Your custom code and custom methods will be here

        _init: function(){
            this._render();
        },
        _render: function(){

            mediaCheck({
                media: '(min-width: 768px)',
                entry: $.proxy(function(){
                    this._destroy();
                },this),
                exit: $.proxy(function(){
                    this._build();
                },this)
            });
        },
        _destroy: function(){
            $(this.element).accordion("destroy");
        },
        _build: function(){
            $(this.element).accordion({
                active: [0,1,2],
                openedState: 'active',
                closedState: "closed",
                collapsible: true,
                multipleCollapsible: true,
                animate: {"duration": 600}
            });
        }
    });

    return $.mage.widgetAccordion;
})