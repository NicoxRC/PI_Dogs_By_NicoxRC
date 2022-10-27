import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByTemperaments,
  filterBySource,
} from "../../../../slices/filtersSlice";
import Sorts from "../Sorts/Sorts";
import { setPage, setPagination } from "../../../../slices/paginationSlice";
import "./Filters.css";

export default function Filters() {
  const pag = useSelector((state) => state.pagination.pag);
  const dispatch = useDispatch();
  const temperaments = useSelector(
    (state) => state.temperaments.allTemperaments
  );
  const allDogsShow = useSelector((state) => state.showDogs.allDogsShow);
  const allDogs = useSelector((state) => state.dogs.allDogs);

  const handleTemperamentChange = (e) => {
    dispatch(
      filterByTemperaments({ [e.target.name]: e.target.value, allDogs })
    );
    dispatch(setPage(1));
  };

  const handleSourceChange = (e) => {
    dispatch(filterBySource({ [e.target.name]: e.target.value, allDogs }));
    dispatch(setPage(1));
  };

  return (
    <div className="filter">
      <div className="filter_temperaments">
        <h3>Temperaments:</h3>
        <select
          name="filterByTemperament"
          defaultValue="all"
          onChange={handleTemperamentChange}
        >
          <option value="all">Choose temperaments...</option>
          {temperaments?.map((temperament) => (
            <option value={temperament} key={temperament}>
              {temperament}
            </option>
          ))}
        </select>
      </div>
      <div className="filter_source">
        <h3>Source:</h3>
        <select
          name="filterBySource"
          onChange={handleSourceChange}
          defaultValue="default"
        >
          <option value="default">Choose source...</option>
          <option value="all">Show All</option>
          <option value="api">Only Api</option>
          <option value="db">Only DB</option>
        </select>
      </div>
      <Sorts />
    </div>
  );
}