"use client"; // Mark this as a Client Component
import { useState } from "react";

const countries = [
  { name: "Iran", code: "+98" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "India", code: "+91" },
  { name: "China", code: "+86" },
  { name: "Japan", code: "+81" },
  { name: "Brazil", code: "+55" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "Russia", code: "+7" },
  { name: "Italy", code: "+39" },
  { name: "Spain", code: "+34" },
  { name: "South Korea", code: "+82" },
  { name: "Mexico", code: "+52" },
  { name: "Turkey", code: "+90" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "South Africa", code: "+27" },
  { name: "United Arab Emirates", code: "+971" },
];

export default function WhatsAppLinkGenerator() {
  const [countryCode, setCountryCode] = useState("+98"); // Default to Iran
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Remove leading zero and add country code
    const formattedPhoneNumber = phoneNumber.replace(/^0+/, "");
    const fullPhoneNumber = `${countryCode}${formattedPhoneNumber}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Generate the WhatsApp link
    const link = `https://wa.me/${fullPhoneNumber}?text=${encodedMessage}`;
    setGeneratedLink(link);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">WhatsApp Link Generator</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Country</label>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} ({country.code})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-gray-300 p-2"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your custom message"
              className="w-full rounded-md border border-gray-300 p-2"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 py-2 text-white transition hover:bg-blue-600"
          >
            Create Link
          </button>
        </form>

        {generatedLink && (
          <div className="mt-6">
            <label className="mb-1 block text-sm font-medium">Generated Link</label>
            <div className="break-all rounded-md border border-gray-300 bg-gray-50 p-2">
              <a href={generatedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                {generatedLink}
              </a>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(generatedLink)}
              className="mt-2 w-full rounded-md bg-green-500 py-2 text-white transition hover:bg-green-600"
            >
              Copy Link
            </button>
          </div>
        )}
        <div className="mt-12 rounded-lg bg-gray-50 p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">About WhatsApp Link Generator</h2>
      <p className="mb-4 text-gray-700">
        WhatsApp is one of the most popular and practical messaging apps today,
        with a growing user base due to its versatile features, such as voice
        and video calls. However, WhatsApp is not an ID-based application,
        meaning that someone must have your phone number to contact you.
      </p>
      <p className="mb-4 text-gray-700">
        Unlike Telegram and other platforms, WhatsApp does not support user IDs.
        However, with tools like this WhatsApp Link Generator, you can create a
        custom link to share your WhatsApp contact without requiring others to
        save your number. For example, you can include this link in your resume,
        website, or social media profiles, allowing others to start a chat with
        you directly.
      </p>

      <h3 className="mb-2 text-lg font-bold">
        How to Create a WhatsApp Invite Link
      </h3>
      <ol className="mb-4 list-inside list-decimal text-gray-700">
        <li>Open the WhatsApp Link Generator page.</li>
        <li>Select your country from the dropdown menu.</li>
        <li>Enter your phone number (without the leading zero).</li>
        <li>Provide a custom message for users to start the chat.</li>
        <li>Click the <b>Create Link</b> button.</li>
        <li>Share the generated link or QR code with others.</li>
      </ol>

      <h3 className="mb-2 text-lg font-bold">
        Why Use a WhatsApp Invite Link?
      </h3>
      <ul className="mb-4 list-inside list-disc text-gray-700">
        <li>Users don’t need to save your phone number to contact you.</li>
        <li>
          Friends or customers can quickly start a chat with you without delays.
        </li>
        <li>
          You can share the invite link via Telegram, email, or other social
          media platforms.
        </li>
      </ul>

      <p className="text-gray-700">
        Share your valuable feedback and suggestions about this tool by leaving
        a comment below.
      </p>
    </div>
      </div>
    </div>
  );
}