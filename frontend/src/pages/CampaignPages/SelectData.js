import countryData from "../../data/country.json";
import { Categories } from "@/components/Discover/DiscoverFilter";
import { genders } from "../../data/gender.js";
import { agegroup, pricerange } from "@/data/age";

export const CountrySelectData = countryData.map((countryObj) => {
  return {
    value: countryObj.name.common,
    label: countryObj.name.common,
  };
});

export const CategorySelectData = Categories.map((c) => ({
  value: c,
  label: c,
}));

export const GenderSelectData = genders.map((gender) => ({
  value: gender,
  label: gender,
}));

export const AgeGroupsSelectData = agegroup.map((a) => ({
  value: a,
  label: a,
}));

export const PriceSelectData = pricerange.map((a) => ({
  value: a,
  label: a,
}));
