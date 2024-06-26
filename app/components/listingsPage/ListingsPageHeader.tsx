"use client";
import Autocomplete from "@/app/components/Autocomplete";

export const ListingsPageHeader = ({
  onLocalityChange,
  initialLocality,
}: any) => {
  const handleOnSubmit = (e: any) => {
    // get the value from input with name="locality"
    e.preventDefault();
    const locality = e.target?.locality?.value;
    if (locality) {
      onLocalityChange(locality);
    } else {
      onLocalityChange("");
    }
  };

  return (
    <header>
      <div className="container flex items-center space-x-3 ">
        <form
          className="w-full  flex items-center bg-white border-2 rounded-lg"
          onSubmit={handleOnSubmit}
        >
          <Autocomplete
            onLocalityChange={onLocalityChange}
            initialValue={initialLocality}
          />
        </form>
      </div>
    </header>
  );
};
