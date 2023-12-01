"use client";

const SquareFeet = ({ filterFunctions }) => {
  return (
    <div className="flex items-center gap-2 justify-between">
      <div className="w-1/2">
        <input
          type="number"
          onChange={(e) =>
            filterFunctions?.handlesquirefeet([
              e.target.value,
              document.getElementById("maxFeet").value / 1,
            ])
          }
          className="w-full h-[55px] relative border border-brand-gray-100 py-2.5 px-4 rounded-md text-brand-black-200 text-sm font-sans"
          placeholder="Min."
          id="minFeet"
        />
      </div>
      <span className="text-brand-black-100">-</span>
      <div className="w-1/2">
        <input
          type="number"
          id="maxFeet"
          onChange={(e) =>
            filterFunctions?.handlesquirefeet([
              document.getElementById("minFeet").value / 1,
              e.target.value,
            ])
          }
          className="w-full h-[55px] relative border border-brand-gray-100 py-2.5 px-4 rounded-md text-brand-black-200 text-sm font-sans"
          placeholder="Max"
        />
      </div>
    </div>
  );
};

export default SquareFeet;
