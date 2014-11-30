fillJSON
========

This project aims at easying the process of filling JSON data into HTML. 

With simple JS code we inspire developers to find out clonable structure in their HTML and map them with JSON easily.

View at jsfilddle : http://jsfiddle.net/UqkBT/3/
View at naukri.com : http://www.naukri.com/

Say you have a HTML structure as below:

```html
  <ul class="menu">
    <li>
        <a></a> // Menu Item 1
        <ul class="submenu">
          <li><a></a></li> // SubMenu Item 1
          <li><a></a></li> // SubMenu Item 2
          <li><a></a></li> // SubMenu Item 3
          <li><a></a></li>
        </ul>
    </li>
    <li>
      <a></a> //Menu item 2
      <ul>
        <li><a></a></li> // SubMenu Item 1
        <li><a></a></li> // SubMenu Item 2
        <li><a></a></li> // SubMenu Item 3
        <li><a></a></li> // SubMenu Item 4
      </ul>
    </li>
  </ul>
```
Now as new menus and submenus grows , HTML need to be modified and here the complexity comes.


 * You cannot ask every time designer to add new HTML.
 * You cannot send HTML in JSON as it increases the respons size. Moreover your server side code need to be tweaked every time.
 

But this can be avoided, if we carefully see there is structure repeating : 

```html
  <ul>
    <li>
        <a></a>
    </li>
  </ul>
```

As most of the JSON api are made to target repeatitive structures, its good to have a JSON designed in such a way such that it creates its structure and fills into it.


With this fillJSON.js, you can specify your structure in javascipt:

```javascript

var menu = new struct({
    cont: $('<ul class="menu">'), //clonable container
    cNode: $('<li><a></a></li>'), // clonable node
    _html: 'a', //selectors to set HTML in cNode
    _href: 'a' //selectors to set HREF in cNode
})

menu.menu = new struct({ // For Nested structure 
    cont: $('<ul class="submenu">'),
    cNode: $('<li><a></a></li>'),
    _html: 'a',
    _href: 'a'
})

var cont = menu.init(json.list)
$('#container').append(cont);

```

And JSON api as : 

```javascript
var json = {
    list: [{
        html: 'Menu Item 1',
        href: 'http://...',
        list: [{
            html: 'Menu Item 11',
            href: 'http://...'
        }, {
            html: 'Menu Item 12',
            href: 'http://...'
        }, {
            html: 'Menu Item 13',
            href: 'http://...'
        }]
    }, {
        html: 'Menu Item 2',
        href: 'http://...',
        list: [{
            html: 'Menu Item 12',
            href: 'http://...'
        }, {
            html: 'Menu Item 13',
            href: 'http://...'
        }]
    }, {
        html: 'Menu Item 3',
        href: 'http://...'
    }]
}
```



