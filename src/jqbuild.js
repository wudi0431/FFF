({
    appDir:"./",
    baseUrl:"./",
    dir: "../dist/jquery/v0.2",
    removeCombined:true,
    //optimize:'none',
    modules: [{
        name: "FFF.min",
        include: ["requirejs", "jquery","FFF"]
    },{
        name: "FFF.fc.template.min",
        include: ["requirejs", "jquery","FFF","fastclick","template"]
    },{
        name: "FFF.fc.template.bridge.min",
        include: ["requirejs", "jquery", "FFF","fastclick","template","H5ToNative","bridge"]
    },{
        name: "FFF.fc.min",
        include: ["requirejs", "jquery", "FFF","fastclick"]
    },{
        name: "FFF.template.min",
        include: ["requirejs", "jquery","FFF","template"]
    }],
    paths: {
        requirejs: "./lib/require",
        zepto: "./lib/zepto",
        jquery: "./lib/jquery",
        base: "./core/base",
        attribute: "./core/attribute",
        FFF: "./core/FFF",
        language: "./core/language",
        eventEmitter: "./core/eventEmitter",
        widget: "./core/widget",
        fastclick:"./lib/fastclick",
        template:"./lib/template",
        H5ToNative:"./util/H5ToNative",
        bridge:"./util/bridge"
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        }
    },
    onBuildWrite: function( moduleName, path, contents) {
        if(moduleName=='zepto') {
            contents="";
            return contents
        }
        if(moduleName=='language'  || moduleName=='widget' || moduleName=='base'){
            return contents.replace('zepto','jquery')
        }else{
            return contents
        }
    }
});
