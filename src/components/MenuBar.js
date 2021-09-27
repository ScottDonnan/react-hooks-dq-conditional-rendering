import React, {useState} from "react";

function MenuBar({stateSetter}) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const [active, setActive] = useState(false)

  function handleClick(e) {
    let id = e.currentTarget.id
    setActive(id)
    stateSetter(id)
  }

  return (
    <div className="ui four item menu">
      <span className={active === "profile" ? 'item active' : 'item'} id="profile" onClick={handleClick}>
        <i className="user large icon" />
      </span>

      <span className={active === "photos" ? 'item active' : 'item'} id="photos" onClick={handleClick}>
        <i className="photo large icon" />
      </span>

      <span className={active === "cocktails" ? 'item active' : 'item'} id="cocktails" onClick={handleClick}>
        <i className="cocktail large icon" />
      </span>

      <span className={active === "pokemon" ? 'item active' : 'item'} id="pokemon" onClick={handleClick}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
