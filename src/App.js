import React from "react";
import { useState } from "react";
import "./styles.css";

const watchDirectory = {
  Fastrack: [
    {
      name: "Bold",
      rating: "5/5"
    },
    {
      name: "Duex Machina",
      rating: "4.9/5"
    },
    {
      name: "Big Time",
      rating: "4.7/5"
    },
    {
      name: "All Nighters",
      rating: "4.6/5"
    },
    {
      name: "Bare Basics",
      rating: "4.4/5"
    }
  ],
  Casio: [
    {
      name: "G-Shock",
      rating: "5/5"
    },
    {
      name: "Edifice",
      rating: "4.9/5"
    },
    {
      name: "Baby-G",
      rating: "4.8/5"
    },
    {
      name: "Youth",
      rating: "4.8/5"
    },
    {
      name: "Outdoor",
      rating: "4.6/5"
    }
  ],
  Police: [
    {
      name: "Taman",
      rating: "5/5"
    },
    {
      name: "Bleder",
      rating: "4.8/5"
    },
    {
      name: "Armor",
      rating: "4.7/5"
    },
    {
      name: "Raglan",
      rating: "4.6/5"
    },
    {
      name: "Palat",
      rating: "4.6/5"
    }
  ],
  Rolex: [
    {
      name: "Air King",
      rating: "5/5"
    },
    {
      name: "Explorer",
      rating: "4.8/5"
    },
    {
      name: "Submariner",
      rating: "4.7/5"
    },
    {
      name: "Oyster Prepetual",
      rating: "4.6/5"
    },
    {
      name: "Sky-Dweller",
      rating: "4.5/5"
    }
  ]
};

var allWatchBrands = Object.keys(watchDirectory);

export default function App() {
  const [brandSelected, setbrand] = useState("Fastrack");
  var watchList = watchDirectory[brandSelected];
  function brandClickHandler(brands) {
    setbrand(brands);
  }
  return (
    <div
      className="App"
      style={{
        color: "white",
        backgroundColor: "black",
        maxHeight: "auto"
      }}
    >
      <h1>The Watch Book ⌚</h1>
      <small>Check out ratings on coolest watch collection.</small>
      <div>
        {allWatchBrands.map((brands) => (
          <button
            className="brandButtons"
            onClick={() => brandClickHandler(brands)}
            style={{
              outline: "none",
              border: "1px solid black",
              margin: "2rem 0.5rem 0.5rem 0.5rem",
              padding: "12px 28px",
              borderRadius: "10px",
              fontSize: "large",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            {brands}
          </button>
        ))}
      </div>
      <hr
        style={{
          color: "#80808054",
          margin: "2rem"
        }}
      ></hr>
      <div
        style={{
          textAlign: "left"
        }}
      >
        <ul
          style={{
            padding: "0"
          }}
        >
          {watchList.map((watch) => (
            <li
              key={watch.name}
              style={{
                margin: "1rem 0.5rem",
                padding: "1rem",
                listStyle: "none",
                border: "1px solid #80808054",
                borderRadius: "10px",
                width: "50%"
              }}
            >
              <div style={{ fontSize: "larger" }}> {watch.name} </div>
              <div style={{ fontSize: "smaller" }}> {watch.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
