import React, { useState, useEffect, useRef } from "react";
import Button from "../button/Button";
import Search from "../../assets/images/icons/Search.svg";

const CousinesListView = ({
  setNotificationVisible,
  handleFoodMenu,
  foodMenu,
  countdown,
  setCountdown,
}) => {
  const [cusisines, setCuisines] = useState([]);
  const [selected, setSelected] = useState([]);
  const [input, setInput] = useState("");
  const timerRef = useRef(null);

  const startTimer = (duration) => {
    let timer = duration;
    let minutes = 0;
    let seconds = 0;
    timerRef.current = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      setCountdown(`${minutes}:${seconds}`);
      if (--timer < 0) {
        timer = duration;
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, 1000);

    setTimeout(() => {
      setNotificationVisible(true);
      setTimeout(() => {
        setNotificationVisible(false);
      }, 5000);
    }, 3000);
  };

  useEffect(() => {
    fetch("https://api.foodchoo.com/api/v1/customers/cuisines")
      .then((response) => response.json())
      .then((data) => setCuisines(data.data.cuisine));
  }, []);

  useEffect(() => {
    // ADD INITIAL COUSINE TO SELECTED
    if (cusisines.length > 0) {
      addToSelected(getInitialCousine(cusisines, "Pizza"));
    }
  }, [cusisines]);

  const handleSearchChange = (e) => {
    setInput(e.target.value);
  };

  const getSearchCousinesList = (cusisines, input) => {
    // get match cousines from input
    const matchCousines = cusisines.filter((cousine) => {
      return cousine.name.toLowerCase().includes(input.toLowerCase());
    });
    // get cousines that are not in selected
    const cousinesNotInSelected = matchCousines.filter((cousine) => {
      return !selected.includes(cousine);
    });
    return cousinesNotInSelected;
  };
  const getInitialCousine = (cusisines, input) => {
    // get initial cousine
    const matchCousine = cusisines.find((cousine) => {
      return cousine.name.toLowerCase().includes(input.toLowerCase());
    });
    return matchCousine;
  };

  const addToSelected = (cousine) => {
    if (selected.length < 5) {
      setSelected([...selected, cousine]);
    }
  };

  const removeFromSelected = (cousine) => {
    setSelected(selected.filter((c) => c._id !== cousine._id));
  };

  // console.log("selected", selected);

  return (
    <div className={`food-menu ${foodMenu}`}>
      <div className="food_menu_inner">
        <div className="instruction">
          <p>
            Start 20 minute timer, and we'll notify you as soon as drivers with
            the food you want are near!
          </p>
        </div>
        <div className="searchbox mx-auto">
          <img src={Search.src} alt="" />
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={handleSearchChange}
          />
        </div>
        <div className="wrapper-chip">
          {/* SELECTED COUSINES LIST*/}
          <div className="chip_items">
            {selected.map((cousine) => (
              <div className="chip-box" key={cousine._id}>
                <p>{cousine.name}</p>
                <span
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => removeFromSelected(cousine)}
                >
                  X
                </span>
              </div>
            ))}

            {input.length > 0 &&
              getSearchCousinesList(cusisines, input).map((cousine) => (
                <div className="chip-box" key={cousine._id}>
                  <p
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => addToSelected(cousine)}
                  >
                    {cousine.name}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="buttons-div">
          <Button
            className="start-timer"
            onClick={() => {
              if (!countdown) {
                startTimer(1200);
              } else {
                clearInterval(timerRef.current);
                timerRef.current = null;
                setCountdown("");
              }
              handleFoodMenu();
            }}
          >
            {!countdown ? "Start Timer" : "End Timer"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CousinesListView);
