// import { Paperclip, Send, SmilePlus } from "lucide-react";
// import { Textarea } from "../ui/textarea";

// const ChatInputs = () => {
//   return (
//     <section className="flex justify-center items-center space-x-5 w-full">
//       <div className="sm:p-2 hover:bg-sky-950 hover:cursor-pointer transition-all duration-300 ease-in rounded-full">
//         <SmilePlus />
//       </div>

//       <div className="sm:p-2 hover:bg-sky-950 hover:cursor-pointer transition-all duration-300 ease-in rounded-full">
//         <Paperclip />
//       </div>
//       <Textarea
//         className="w-[60%] bg-sky-900 shadow-inner shadow-sky-900 border-0"
//         placeholder="Write something here"
//       />

//       <div className="sm:p-2 hover:bg-sky-950 hover:cursor-pointer transition-all duration-300 ease-in rounded-full">
//         <Send />
//       </div>
//     </section>
//   );
// }

// export default ChatInputs

import { Paperclip, Send, SmilePlus } from "lucide-react";
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState("");

  return (
    <div
      className="flex p-2 w-full h-full justify-between items-center"
    >
      <div className="sm:p-2 hover:bg-sky-950 hover:cursor-pointer transition-all duration-300 ease-in rounded-full">
        <SmilePlus size={17} />
      </div>
      <div className="sm:p-2 hover:bg-sky-950 hover:cursor-pointer transition-all duration-300 ease-in rounded-full">
        <Paperclip size={17} />
      </div>
      <TextareaAutosize
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        maxRows={4} // Limit to 5 rows
        style={{
          width: "100%",
          padding: "10px",
          // borderRadius: "20px",
          border: "1px solid #ccc",
          color: "#fff",
          backgroundColor: "transparent",
          borderColor: "transparent",
        }}
        className="outline-none"
      />
      <div className="sm:p-2 hover:bg-sky-950 hover:cursor-pointer transition-all duration-300 ease-in rounded-full">
        <Send size={17} />
      </div>
    </div>
  );
};

export default ChatInput;
