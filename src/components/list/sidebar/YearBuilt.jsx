"use client";

const YearBuilt = ({ filterFunctions }) => {
  return (
    <div className="flex items-center gap-2 justify-between">
      <div className="w-1/2">
        <input
          type="number"
          onChange={(e) =>
            filterFunctions?.handleyearBuild(
              [
                e.target.value || 1800,
                document.getElementById("maxFeet2").value / 1,
              ] || 2050
            )
          }
          className="w-full h-[55px] relative border border-brand-gray-100 py-2.5 px-4 rounded-md text-brand-black-200 text-sm font-sans"
          placeholder={2019}
          id="minFeet2"
        />
      </div>
      <span className="text-brand-black-100">-</span>
      <div className="w-1/2">
        <input
          type="number"
          onChange={(e) =>
            filterFunctions?.handleyearBuild([
              document.getElementById("minFeet2").value / 1 || 1800,
              e.target.value || 2050,
            ])
          }
          className="w-full h-[55px] relative border border-brand-gray-100 py-2.5 px-4 rounded-md text-brand-black-200 text-sm font-sans"
          placeholder={2022}
          id="maxFeet2"
        />
      </div>
    </div>
  );
};

export default YearBuilt;
