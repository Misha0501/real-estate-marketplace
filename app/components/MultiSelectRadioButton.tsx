import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Icon } from "@tremor/react";

type PropertyPlacementRadioButtonsProps = {
  options: string[];
  onChange?: (item: any) => void;
  id: string;
  value?: any;
};
export default function MultiSelectRadioButton({
  options,
  onChange,
  id,
  value,
}: PropertyPlacementRadioButtonsProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleOnChange = (value: string) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full ">
        <RadioGroup value={selectedValue} onChange={handleOnChange}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="grid grid-cols-3 gap-2">
            {options.map((item, index) => (
              <RadioGroup.Option
                id={id}
                key={index}
                value={item}
                defaultValue={value}
                className={({ active, checked }) =>
                  `
                  ${checked ? "bg-transperent " : "bg-white"}
                     cursor-pointer rounded-lg    focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="">
                      <div className="">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium border-2 w-full p-5 rounded-xl  ${
                              checked
                                ? "border-[#2C72F6] font-bold border-2"
                                : "text-[#222] border-[#ADADAD] "
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <p>{item}</p>
                              {checked ? (
                                <Icon
                                  size="sm"
                                  className="font-bold"
                                  icon={CheckCircleIcon}
                                />
                              ) : null}
                            </div>
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
