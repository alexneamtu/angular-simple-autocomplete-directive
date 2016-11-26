/*
 * angular-simple-autocomplete-directive v1.0.5
 * (c) 2016 Alex Neamtu
 * License: MIT
 */

'use strict';

angular.module('simple-autocomplete', [])
    .directive('autocomplete', function () {
        return {
            restrict: 'AE',
            scope: {
                model: '=',
                options: '=',
                ngDisabled: '='
            },
            replace: true,
            transclude: true,
            template: require('./templates/autocomplete.html'),
            controller: require('./controllers/autocompleteController')

        }
    });
