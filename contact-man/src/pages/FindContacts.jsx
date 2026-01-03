import React, { useEffect } from "react";
import useContactStore from "../store/ContactStore.js";

const FindContacts = () => {
  const { contactDetails, getContact } = useContactStore();

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Stored Contacts
      </h1>

      {contactDetails.length === 0 ? (
        <p className="text-center text-white text-lg">
          No contacts found
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((contact) => (
            <div
              key={contact._id}
              className="card bg-white shadow-lg rounded-lg p-5"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {contact.name}
              </h2>

              <p className="text-gray-600">
                <span className="font-medium">Email:</span>{" "}
                {contact.email}
              </p>

              <p className="text-gray-600">
                <span className="font-medium">Phone:</span>{" "}
                {contact.phone}
              </p>
            
              {contact.message && (
                <p className="text-gray-600 mt-2">
                  <span className="font-medium">Message:</span>{" "}
                  {contact.message}
                </p>
                
              )}
                <p  className="text-gray-600 mt-2">
                  <span className="font-medium">Date:</span>{" "}
                  {contact.createdAt}
                </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindContacts;
