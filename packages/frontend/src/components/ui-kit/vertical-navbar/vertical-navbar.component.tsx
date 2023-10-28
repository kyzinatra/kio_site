import { FC, useState } from 'react';

import css from './vertical-navbar.module.css';
import { IVerticalNavbar } from './vertical-navbar';
import { NavbarItem } from './navbar-item/navbar-item.component';

export const VerticalNavbar: FC<IVerticalNavbar> = ({ items, routes }) => {

    const [aciveNavbarItem, setAciveNavbarItem] = useState(0);
    const [renderItem, setRenderItem] = useState(items);

    function setNewActiveNavbarItem(num:number){
        setAciveNavbarItem(num);
        setRenderItem(items)
    }

  return (
    <div>
        <ul className={css.navbar}> 
            {
                renderItem.map(function(el: String, num: Number){
                    if (aciveNavbarItem === num){
                        return(
                            <NavbarItem 
                                setNewActiveNavbarItem={setNewActiveNavbarItem}
                                itemNumber={num}
                                routes={routes[num]} 
                                item={el} 
                                itemClass={'active'}
                                key={`${num}`}
                            />
                        )      
                    } else {
                        return(
                            <NavbarItem 
                                setNewActiveNavbarItem={setNewActiveNavbarItem}
                                itemNumber={num}
                                routes={routes[num]} 
                                item={el}
                                itemClass={'default'}
                                key={`${num}`}
                            />
                        )  
                    } 
                })
            }
        </ul>
    </div>
  );
};
