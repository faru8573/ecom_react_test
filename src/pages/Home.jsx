import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInitialItemsAync,
  itemSelector,
} from "../redux/reducers/itemReducer";
import ItemCard from "../components/ItemCard";
import toast from "react-hot-toast";

const Home = () => {
  const { items } = useSelector(itemSelector);
  const [sortItems, setSortItems] = useState([]);
  const [isShorted, setIsShorted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialItemsAync()); //this line was incorrect
  }, [dispatch]);

  function handleSort() {
    const shortedItems = [...items].sort((a, b) => a.price - b.price);
    setSortItems(shortedItems);
    setIsShorted(true);
    toast.success("Items sorted");
  }

  function handleSortClose() {
    setSortItems([]);
    setIsShorted(false);
    toast.success("Sort removed");
  }

  return (
    <>
      <div className="flex justify-end w-full px-2">
        <button onClick={handleSort} className="bg-gray-300 rounded-md p-2">
          Sort by price
        </button>
      </div>
      {isShorted && (
        <div className="p-2">
          <button
            onClick={handleSortClose}
            className="text-2xl text-cyan-500  font-bold hover:bg-red-500 bg-slate-200 rounded-full w-[40px] h-[40px]"
          >
            X
          </button>
        </div>
      )}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 m-2">
        {sortItems.length > 0
          ? sortItems.map((item) => <ItemCard key={item.id} {...item} />)
          : items.map((item) => <ItemCard key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
