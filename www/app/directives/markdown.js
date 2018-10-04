(function () {
    'use strict';

    angular.module('eliteApp').directive('markdown', [markdown]);

    function markdown() {

        var converter = new Showdown.converter();


        function link(scope, element, attrs) {
            attrs.$observe('markdown', function (value) {
                var markup = converter.makeHtml(value);
                element.html(markup);
            })
        }

        return {
            link: link,
            restrict: 'A'
        };
    }
})();