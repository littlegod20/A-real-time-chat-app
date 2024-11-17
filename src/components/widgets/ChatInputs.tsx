import { Paperclip, Send, SmilePlus } from "lucide-react";
import { Textarea } from "../ui/textarea";


const ChatInputs = () => {
  return (
    <section className="flex justify-center items-center space-x-3">
      <div className="p-2 hover:bg-sky-900 hover:cursor-pointer transition-all duration-300 ease-in rounded-full">
        <SmilePlus />
      </div>

      <div className="p-2 hover:bg-sky-900 hover:cursor-pointer transition-all duration-300 ease-in rounded-full">
        <Paperclip />
      </div>
      <Textarea
        className="w-11/12 bg-sky-800 shadow-inner shadow-sky-900"
        placeholder="Write something here"
      />

      <div className="p-2 hover:bg-sky-900 hover:cursor-pointer transition-all duration-300 ease-in rounded-full">
        <Send />
      </div>
    </section>
  );
}

export default ChatInputs