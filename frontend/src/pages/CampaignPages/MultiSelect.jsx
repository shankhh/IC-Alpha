import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Controller } from "react-hook-form";

const animatedComponents = makeAnimated();

export default function MultiSelect({ options, control, name, isMulti }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <Select
          onChange={(newVal) => {
            if (isMulti) {
              onChange([...newVal]);
            } else {
              onChange(newVal);
            }
          }}
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti={isMulti}
          options={options}
        />
      )}
    />
  );
}
