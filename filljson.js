var struct_proto = {
    /** Common set of functions avilable to every node, you can extend it any time */
    foo: function (node, key, value) {
        var _value = this['_' + key];
        if (_value) {
            node = node.find(_value);
        }
        this[key].call(node, value);
    },
        'html': function (value) {
        this.html(value);
    },
        'class': function (value) {
        this.addClass(value);
    },
        'href': function (value) {
        this.attr('href', value);
    },
        'title': function (value) {
        this.attr('title',value);
    },
    
    /** Function to manage Structure */
    getCont: function () {
        return this.cont.clone();
    },
    init: function (params) {
        var cont = this.getCont();
        var _this = this;
        $.each(params, function (a, b) {
            var node = _this.cNode.clone();
            cont.append(node);

            for (key in b) {
                if (key == 'list') {
                    node.append(_this.menu.init(b[key]))

                } else if (key in _this) {
                    _this.foo(node, key, b[key]);
                }
            }
        });
        return cont;
    }

}

var struct = function (obj) {
    for (key in obj)
    this[key] = obj[key]
}
struct.prototype = struct_proto;
