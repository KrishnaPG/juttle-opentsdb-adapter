var TestUtils = require("./utils");

describe('OpenTSDB adapter API tests', function () {
    describe('read proc', function () {
        before(function() {
            var config = {
                host: '192.168.99.100',
                port: 4247
            };
            return TestUtils.init(config);
        });

        require('./options.spec');
        require('./filters.spec');
    });

    require('./db.spec');
});
