import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import countryData from "../../data/country.json";
import { genders } from "../../data/gender.js";

const CountryItems = countryData.map((countryObj) => {
  return countryObj.name.common;
});

console.log(CountryItems);

const AgeItems = [];

const GenderItems = genders;

const IndividualSelect = ({ type, dispatch }) => {
  if (type === "country") {
    return (
      <Select
        onValueChange={(value) => {
          dispatch({
            type: type,
            payload: value,
          });
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>All</SelectLabel>
            {CountryItems.map((country) => {
              return <SelectItem value={country}>{country}</SelectItem>;
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }

  if (type === "gender") {
    return (
      <Select
        onValueChange={(value) => {
          dispatch({
            type: type,
            payload: value,
          });
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>All</SelectLabel>
            {GenderItems.map((gender) => {
              return <SelectItem value={gender}>{gender}</SelectItem>;
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }

  if (type === "age") {
    return (
      <Select
        onValueChange={(value) => {
          dispatch({
            type: type,
            payload: value,
          });
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select age" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value={"13 - 17"}>13-17</SelectItem>
            <SelectItem value={"18 - 27"}>18-27</SelectItem>
            <SelectItem value={"25 - 34"}>25-34</SelectItem>
            <SelectItem value={"35 - 44"}>35-44</SelectItem>
            <SelectItem value={"45 - 64"}>45-64</SelectItem>
            {/* {GenderItems.map((gender) => {
              return <SelectItem value={gender}>{gender}</SelectItem>;
            })} */}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
};

export function DiscoverSelect({ dispatch }) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-2">
        <h2>Country</h2>
        <IndividualSelect type="country" dispatch={dispatch} />
      </div>
      <div className="flex flex-col gap-y-2">
        <h2>Age</h2>
        <IndividualSelect type="age" dispatch={dispatch} />
      </div>
      <div className="flex flex-col gap-y-2">
        <h2>Gender</h2>
        <IndividualSelect type="gender" dispatch={dispatch} />
      </div>
    </div>
  );
}
