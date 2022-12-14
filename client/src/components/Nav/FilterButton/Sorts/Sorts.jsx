import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortName, sortWeight } from "../../../../slices/sortsSlice";
import { setShowDogs } from "../../../../slices/showDogsSlice";
import SortNameImage from "./SortNameImage/SortNameImage";
import SortWeightImage from "./SortWeightImage/SortWeightImage";
import "./Sorts.css";

export default function Sorts() {
  const allDogsShow = useSelector((state) => state.showDogs.allDogsShow);
  const sortDogs = useSelector((state) => state.sorts.sortDogs);
  const dispatch = useDispatch();
  const [name, setName] = useState(false);
  const [weight, setWeight] = useState(true);
  const sortNameProp = "sortName";
  const sortWeightProp = "sortWeight";

  const handleSortName = () => {
    setName(!name);
    dispatch(sortName({ [sortNameProp]: name, allDogsShow }));
  };

  const handleSortWeight = () => {
    setWeight(!weight);
    dispatch(sortWeight({ [sortWeightProp]: weight, allDogsShow }));
  };

  useEffect(() => {
    sortDogs?.length && dispatch(setShowDogs(sortDogs));
  }, [dispatch, sortDogs]);

  return (
    <div className="sorts">
      <div>
        <button onClick={handleSortName}>
          <SortNameImage />
        </button>
      </div>
      <div>
        <button onClick={handleSortWeight}>
          <SortWeightImage />
        </button>
      </div>
    </div>
  );
}
