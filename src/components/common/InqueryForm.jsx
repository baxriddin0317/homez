"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import Select from "react-select";

export const InqueryForm = () => {
  const inqueryType = [
    { value: "Apartments", label: "Apartments" },
    { value: "Bungalow", label: "Bungalow" },
    { value: "Houses", label: "Houses" },
    { value: "Loft", label: "Loft" },
    { value: "Office", label: "Office" },
    { value: "Townhome", label: "Townhome" },
    { value: "Villa", label: "Villa" },
  ];
  const personalRole = [
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
    { value: "Miss", label: "Miss." },
  ];
  const addressed = [
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  return (
    <form className="relative">
        <div className="mb-5">
          <label className="block font-semibold text-sm text-brand-black-100 mb-2">Inquiry Type</label>
          <Select
            defaultValue={[inqueryType[0]]}
            name="colors"
            isMulti
            options={inqueryType}
            styles={customStyles}
            className="text-start"
            classNamePrefix="select"
            required
            isSearchable={false}
            isClearable={false}
          />
        </div>
        {/* End .col */}

        <div className="grid md:grid-cols-12 gap-6 mb-5">
          <div className="md:col-span-5">
            <div>
              <label className="block font-semibold text-sm text-brand-black-100 mb-2">Personel Role</label>
              <Select
                defaultValue={[personalRole[0]]}
                name="colors"
                isMulti
                options={personalRole}
                styles={customStyles}
                className="text-start"
                classNamePrefix="select"
                required
                isSearchable={false}
                isClearable={false}
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div>
              <label className="block font-semibold text-sm text-brand-black-100 mb-2">Personel Name</label>
              <input
                type="text"
                className="w-full h-[55px] border border-brand-gray-400 py-1.5 px-4 rounded-md outline-none"
                placeholder="Your Name"
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label className="block font-semibold text-sm text-brand-black-100 mb-2">Email</label>
          <input
            type="email"
            className="w-full h-[55px] border border-brand-gray-400 py-1.5 px-4 rounded-md outline-none"
            placeholder="ibthemes21@gmail.com"
          />
        </div>
        {/* End .col */}

        <div className="mb-5">
          <label className="block font-semibold text-sm text-brand-black-100 mb-2">
            How to address you
          </label>
          <Select
            defaultValue={[addressed[0]]}
            name="colors"
            isMulti
            options={addressed}
            styles={customStyles}
            className="text-start"
            classNamePrefix="select"
            required
            isSearchable={false}
            isClearable={false}
          />
        </div>
        {/* End .col */}

        <div className="flex flex-col md:flex-row w-full items-center gap-6 mb-8">
          <div className="w-full">
            <label className="block font-semibold text-sm text-brand-black-100 mb-2">Max Price</label>
            <input type="text" className="w-full h-[55px] border border-brand-gray-400 py-1.5 px-4 rounded-md outline-none" placeholder="$90" />
          </div>

          <div className="w-full">
            <label className="block font-semibold text-sm text-brand-black-100 mb-2">
              Min Size (Sq ft)
            </label>
            <input type="text" className="w-full h-[55px] border border-brand-gray-400 py-1.5 px-4 rounded-md outline-none" placeholder={20} />
          </div>
        </div>

        <button className="w-full h-[55px] flex items-center btn-search relative overflow-hidden justify-center bg-brand-main rounded-xl hover:z-20 text-white gap-2">
          Submit 
          <FaArrowRightLong className="-rotate-45" />
        </button>
        {/* End .col */}
    </form>
  );
};
