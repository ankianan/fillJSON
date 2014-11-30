var struct_proto = {
    /** Common set of functions avilable to every structure, you can extend it any time */
    foo: function (node, key, value) {
		//value may not be string in case of key "attr"
		if(key == 'attr'){
			this[key](value,node);
		}
		else{
			var selector = this['_' + key];
			if (selector) {
				node = node.find(selector);
			}
			this[key].call(node, value);
		}
        
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
					
					var _arr = b['list'];
					var _struct,subMenu;						
					
					if(_this.menu.struct){
						_struct = _this.menu.struct;					
						subMenu_cont = _this.menu.html.clone();
						node.append(subMenu_cont);						
					}
					else{
						_struct = _this.menu;
						subMenu_cont = node;		
					}
						
					if ($.type(_arr[0]) == 'array') {											
						$.each(_arr||[], function (c, nodeArr) {
							subMenu_cont.addClass('c'+_arr.length)	
							subMenu_cont.append(_struct.init(nodeArr));
						});
					} 
					else{
						subMenu_cont.append(_struct.init(_arr));
					}					
					

                } else if (key in _this) {
                    _this.foo(node, key, b[key]);
                }
            }
        });
        return cont;
    }

}

var struct = function (obj) {
    $.extend(true,this,obj);
}
	
struct.prototype = struct_proto;
