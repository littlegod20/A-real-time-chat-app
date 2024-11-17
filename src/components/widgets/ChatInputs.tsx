import { Paperclip, Send, SmilePlus } from "lucide-react";
import { Textarea } from "../ui/textarea";


const ChatInputs = () => {
  return (
    <section className="flex justify-center items-center space-x-5 w-full">
      <div className="sm:p-2 hover:bg-sky-950 hover:cursor-pointer transition-all duration-300 ease-in rounded-full">
        <SmilePlus />
      </div>

      <div className="sm:p-2 hover:bg-sky-950 hover:cursor-pointer transition-all duration-300 ease-in rounded-full">
        <Paperclip />
      </div>
      <Textarea
        className="w-[60%] bg-sky-900 shadow-inner shadow-sky-900 border-0"
        placeholder="Write something here"
      />

      <div className="sm:p-2 hover:bg-sky-950 hover:cursor-pointer transition-all duration-300 ease-in rounded-full">
        <Send />
      </div>
    </section>
  );
}

export default ChatInputs