"use client";
import { useState, useEffect } from "react";
import { Checkbox } from "@/app/components/Checkbox";
import { propertyTypesInitialState } from "../Constants/filters";
import { PROPERTY_TYPES } from "../Constants";

export function PropertyTypeFilter({ onChange, selectedValues }: any) {
  const handleCheckboxChange = (value: any) => {
    // Toggle the selected value in the state
    const updatedSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((item: any) => item !== value)
      : [...selectedValues, value];

    // Call the parent's onChange callback with the updated selected values
    onChange(updatedSelectedValues);
  };

  return (
    <>
      {PROPERTY_TYPES &&
        PROPERTY_TYPES.map((item, index) => (
          <div className="flex items-center gap-3" key={index}>
            <Checkbox
              checked={selectedValues?.includes(item)}
              label={item}
              onChange={() => handleCheckboxChange(item)}
              value={item}
            />
          </div>
        ))}
    </>
  );
}
