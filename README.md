fillJSON
========

This project aims at easying the process of filling JSON data into HTML. 

With simple JS code we inspire developers to find out clonable structure in their HTML and map them with JSON easily.



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

As most of the JSONC api are made to target repeatitive structures, its good to have a JSON designed in such a way such that it creates its structure and fills into it.

  





