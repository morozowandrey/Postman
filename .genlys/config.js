module.exports = {
    'path': {
        'app': {
            'html': 'app/**/*.html',
            'stylus': 'app/stylus/*.styl',
            'css': 'app/css/**/*.*',
            'images': 'app/images/**/*.*',
            'models': 'app/models/**/*.*',
            'fonts': 'app/fonts/**/*.*',
            'scripts': 'app/scripts/**/*.js'
        },

        'dev': {
            'html': 'dev/',
            'css': 'dev/styles/',
            'images': 'dev/images/',
            'models': 'dev/models/',
            'fonts': 'dev/fonts/',
            'js': 'dev/js/',
            'bower': 'dev/bower_components/'
        },
        
        'production': {
            'main': 'production/',
            'css': 'production/styles/',
            'fonts': 'production/fonts',
            'images': 'production/images',
            'models': 'production/models',
            'views': 'production/',
            'js': 'production/js/'
        },
        'watch': {
            'html': 'app/**/*.html',
            'stylus': 'app/stylus/**/*.styl',
            'images': 'app/images/**/*.*',
            'models': 'app/models/**/*.*',
            'fonts': 'app/fonts/**/*.*',
            'scripts': 'app/scripts/**/*.js'
        },
        'clean': './dev',
        'bower': 'bower_components/**/*.*'
    },
    'serverConfig': {
        'server': {
            'baseDir': "./dev"
        },
        'tunnel': true,
        'host': 'localhost',
        'port': 9000
    }
}