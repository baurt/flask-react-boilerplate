const path = require('path');
const glob = require('glob');

module.exports = {
    webpackConfig: require('./webpack.config.js'),
    title: 'React Style Guide Example',
    components: function () {
        return glob.sync(path.resolve(__dirname, 'src/components/**'))
            .filter(function (module) {
                return /\/[A-Z]\w*\.tsx$/.test(module);
            });
    },
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse
};