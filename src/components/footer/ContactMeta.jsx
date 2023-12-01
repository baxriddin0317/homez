import React from "react";

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "Total Free Customer Care",
      phone: "+(0) 123 050 945 02",
      phoneLink: "tel:+012305094502", // Use "tel" URI scheme for phone
    },
    {
      title: "Need Live Support?",
      mail: "hi@homez.com",
      mailLink: "mailto:hi@homez.com", // Use "mailto" URI scheme for email
    },
  ];

  return (
    <div className="flex items-start flex-wrap mb-6 lg:mb-12 gap-6">
      {contactInfoList.map((contact, index) => (
        <div className="col-auto" key={index}>
          <p className="text-brand-gray-500 mb-1.5">{contact.title}</p>
          {contact.phone && (
            <h6 className="text-white font-semibold">
              <a href={contact.phoneLink}>{contact.phone}</a>
            </h6>
          )}
          {contact.mail && (
            <h6 className="text-white font-semibold">
              <a href={contact.mailLink}>{contact.mail}</a>
            </h6>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
