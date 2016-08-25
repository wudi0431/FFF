({
    appDir:"./",
    baseUrl:"./",
    dir: "../dist/zepto/v0.2",
    //optimize:'none',
    modules: [{
        name: "FFF.min",
        include: ["requirejs", "zepto","FFF"]
    },{
        name: "FFF.fc.template.min",
        include: ["requirejs", "zepto","FFF","fastclick","template"]
    },{
        name: "FFF.fc.template.bridge.min",
        include: ["requirejs", "zepto","FFF","fastclick","template","H5ToNative","bridge"]
    },{
        name: "FFF.fc.min",
        include: ["requirejs", "zepto","FFF","fastclick"]
    },{
        name: "FFF.template.min",
        include: ["requirejs", "zepto","FFF","template"]
    }],
    paths: {
        requirejs: "./lib/require",
        zepto: "./lib/zepto",
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
    }
});
