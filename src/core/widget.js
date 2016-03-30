define(['base', 'language', 'require', 'zepto'], function (base, language, require, $) {

    var Base = base.Base;
    var L = language.language;

    function Widget() {
        Base.apply(this, arguments);
        this.isWidget = true;
    }

    /**
     * Interface
     * @return {[type]} [description]
     */
    Widget.prototype.initialize = function () {
    };
    Widget.prototype.renderUI = function () {
    };
    Widget.prototype.bindUI = function () {
    };
    Widget.prototype.syncUI = function () {
    };

    /**
     * 渲染方法
     * @param {Object} container对象 用来Append的容器以及方法 exp: after , before , append...
     * @return {Object} 对象本身
     */
    Widget.prototype.render = function (obj) {

        var containerObj = obj ? obj : {
            container: $('body'),
            type: 'append',
            async:true
        };
        var self = this;

        if (!containerObj.hasOwnProperty('container')) {
            containerObj.container = $('body');
        }
        if (!containerObj.hasOwnProperty('type')) {
            containerObj.type = 'append';
        }
        if (!containerObj.hasOwnProperty('async')) {
            containerObj.async=true;
        }
        var $container = containerObj.container.on ? containerObj.container : $(containerObj.container);
        var $boundingBox = this.getBoundingBox().on ? this.getBoundingBox() : $(this.getBoundingBox());

        if (obj && typeof obj == 'object' && obj.hasOwnProperty('container')) {
            $container[containerObj.type]($boundingBox);
        }

        if ($boundingBox.parent().length === 0) {
            if (!obj || typeof obj != 'object' || !obj.hasOwnProperty('container')) {
                $container[containerObj.type]($boundingBox);
            }
        }

        if(containerObj.async==true){
            this.renderUI(obj);
            this.bindUI(obj);
            this.syncUI(obj);
        }else if(containerObj.async==false){
            this.renderUI(obj, function () {
                self.bindUI(obj, function () {
                    self.syncUI(obj);
                });

            });
        }
        return this;
    };

    Widget.ATTRS = {
        boundingBox: {
            value: $('<div class="boundingBox"></div>')
        }
    };


    L.extend(Widget, Base);

    return {
        Widget: Widget
    };

});
