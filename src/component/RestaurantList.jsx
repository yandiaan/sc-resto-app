import React, { useEffect, useState } from "react";

function RestaurantList() {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await fetch("https://restaurant-api.dicoding.dev/list", {
      method: "GET",
    });

    const resto = await res.json();

    setData(resto.restaurants);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="resto_container">
      <h1 className="resto_title">Restaurant Lists</h1>

      <div className="resto_list">
        {data.map((resto) => {
          return (
            <div className="resto_card">
              <h1>{resto.name}</h1>

              <img
                src={`https://restaurant-api.dicoding.dev/images/small/${resto.pictureId}`}
                alt=""
              />

              <div className="resto_info">
                <span>{resto.city}</span>

                <small>{resto.rating}</small>
              </div>

              <p>{resto.description.substring(0, 255)}...</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantList;
