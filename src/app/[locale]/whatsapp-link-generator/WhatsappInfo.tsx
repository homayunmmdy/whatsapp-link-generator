function WhatsappInfo() {
  return (
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
  );
}

export default WhatsappInfo;
