import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInitialItemsAync,
  itemSelector,
} from "../redux/reducers/itemReducer";
import ItemCard from "../components/ItemCard";

const Home = () => {
  const { items } = useSelector(itemSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialItemsAync()); //this line was incorrect
  }, [dispatch]);

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-4 m-2">
      {items.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Home;
