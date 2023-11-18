import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const HoverButton = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[163px] h-[42px] rounded-[12px] relative ${
        state.property1 === "variant-2" ? "shadow-[4px_4px_10px_#000000]" : "shadow-[4px_4px_10px_#00000040]"
      } ${
        state.property1 === "variant-2"
          ? "bg-[#578169]"
          : state.property1 === "variant-3"
          ? "bg-[#3f5e4c]"
          : "bg-[#6fa385]"
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="[font-family:'Lato-Bold',Helvetica] left-[51px] tracking-[0] text-[20px] top-[8px] text-[#212d3f] absolute h-[24px] font-bold text-center whitespace-nowrap leading-[normal]">
        Masuk
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "click":
        return {
          property1: "variant-3",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

HoverButton.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
