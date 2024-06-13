import React from "react";
import Link from "next/link";


interface ListOfMenusProps{
  onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const ListOfMenus:React.FC<ListOfMenusProps> = ({ onMouseEnter, onMouseLeave}) => {
  return (
    <div className='list-menu-container' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      <Link href="/dairy-bread-eggs">Dairy, Bread & Eggs</Link>
      <Link href="/snacks-munchies">Snacks & Munchies</Link>
      <Link href="/fruits-vegetables">Fruits & Vegetables</Link>
      <Link href="/cold-drinks-juices">Cold Drinks & Juices</Link>
      <Link href="/breakfast-instant-food">Breakfast & Instant Food</Link>
      <Link href="/bakery-biscuits">Bakery & Biscuits</Link>
      <Link href="/chicken-meat-fish">Chicken, Meat & Fish</Link>
    </div>
  );
};

export default ListOfMenus;
