import React from "react";

const ContactInfo = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Total Free Customer Care",
      phone: "+(0) 123 050 945 02",
      phoneHref: "tel:+012305094502",
    },
    {
      id: 2,
      title: "Need Live Support?",
      email: "hi@homez.com",
      emailHref: "mailto:hi@homez.com",
    },
  ];

  return (
    <>
      {contactInfo.map((info) => (
        <div className="text-brand-black-100" key={info.id}>
          <p className="text-sm leading-6 mb-4">{info.title}</p>
          {info.phone && (
            <h6 className="text-[15px] leading-5 font-semibold mb-2 hover:text-brand-main transition-all duration-500">
              <a href={info.phoneHref}>{info.phone}</a>
            </h6>
          )}
          {info.email && (
            <h6 className="text-[15px] leading-5 font-semibold mb-2 hover:text-brand-main  transition-all duration-500">
              <a href={info.emailHref}>{info.email}</a>
            </h6>
          )}
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
