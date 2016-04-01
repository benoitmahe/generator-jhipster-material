(function() {
    'use strict';

    angular
        .module('<%=angularAppName%>')
        .factory('PasswordResetInit', PasswordResetInit);

    PasswordResetInit.$inject = ['$resource'];

    function PasswordResetInit($resource) {
        var service = $resource(<% if(applicationType == 'gateway') { %>'uaa/api/account/reset_password/init'<%} else { %>'api/account/reset_password/init'<% } %>, {}, {});

        return service;
    }
})();
