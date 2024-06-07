"use client";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQueryState } from "nuqs";



export default function SliderComponents({range} : {range : number[]}) {
  const [rangeSliderValue, setRangeSliderValue] = useState<[number, number]>([
    10, 30,
  ]);
  const [showTooltip, setShowTooltip] = useState<[boolean, boolean]>([
    false,
    false,
  ]);
  const [interval, setInterval] = useQueryState<number[]>('interval', {
    shallow: false,
    defaultValue: [],
    parse: (value) => value.split(',').map(Number)
  });

  const handleShowTooltip = (index: number, show: boolean) => {
    const newShowTooltip = [...showTooltip] as [boolean, boolean];
    newShowTooltip[index] = show;
    setShowTooltip(newShowTooltip);
  };

  return (
    <RangeSlider
      aria-label={["min", "max"]}
      defaultValue={range}
      min={range[0]}
      max={range[1]}
      colorScheme="gray"
      onChange={(v : [number,number]) => {
        setRangeSliderValue(v)
        setInterval(v)
    }}
      width={80}
      step={range[1]/100}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      {rangeSliderValue.map((value, index) => (
        <RangeSliderThumb
          key={index}
          index={index}
          onMouseEnter={() => handleShowTooltip(index, true)}
          onMouseLeave={() => handleShowTooltip(index, false)}
        >
          <Tooltip
            hasArrow
            bg="gray.800"
            color="white"
            placement="top"
            isOpen={showTooltip[index]}
            label={`$${value}`}
          >
            <div />
            
          </Tooltip>
        </RangeSliderThumb>
      ))}
    </RangeSlider>
  );
}
