
import Image from "next/image";
import Link from "next/link";
import vegetablesBucket from "../../../../../assets/media/images/navbar-menus/vegetables-bucket.png";



const MegaMenu = () => {
  return (
    <div className={"mega-menu wrapper"} >
      <div className={"megaMenuList"}>
        <p >Dairy, Bread & Eggs</p>
        <Link href="/snacks-munchies">Snacks & Munchies</Link>
        <Link href="/fruits-vegetables">Fruits & Vegetables</Link>
        <Link href="/cold-drinks-juices">Cold Drinks & Juices</Link>
        <Link href="/breakfast-instant-food">Breakfast & Instant Food</Link>
        <Link href="/bakery-biscuits">Bakery & Biscuits</Link>
        <Link href="/chicken-meat-fish">Chicken, Meat & Fish</Link>
      </div>
      <div className={"megaMenuList"}>
        <p>Dairy, Bread & Eggs</p>
        <Link href="/snacks-munchies">Snacks & Munchies</Link>
        <Link href="/fruits-vegetables">Fruits & Vegetables</Link>
        <Link href="/cold-drinks-juices">Cold Drinks & Juices</Link>
        <Link href="/breakfast-instant-food">Breakfast & Instant Food</Link>
        <Link href="/bakery-biscuits">Bakery & Biscuits</Link>
        <Link href="/chicken-meat-fish">Chicken, Meat & Fish</Link>
      </div>
      <div className={"megaMenuList"}>
        <p>Dairy, Bread & Eggs</p>
        <Link href="/snacks-munchies">Snacks & Munchies</Link>
        <Link href="/fruits-vegetables">Fruits & Vegetables</Link>
        <Link href="/cold-drinks-juices">Cold Drinks & Juices</Link>
        <Link href="/breakfast-instant-food">Breakfast & Instant Food</Link>
        <Link href="/bakery-biscuits">Bakery & Biscuits</Link>
        <Link href="/chicken-meat-fish">Chicken, Meat & Fish</Link>
      </div>
      <Image src={vegetablesBucket} alt="Vegetables bucket for mega menu" />
    </div>
  );
};

export default MegaMenu;
