import decor from "../../assets/decor.png";
import { Paperclip, Send, SmilePlus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const ChatPage = () => {
  return (
    <main
      className="w-full h-full bg-repeat"
      style={{ backgroundImage: `url('${decor}')`, backgroundSize: "50px" }}
    >
      <div className="w-full h-full backdrop-blur-sm p-10">
        <section className="h-[90%]">
          <p>sometin</p>
        </section>

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
      </div>
    </main>
  );
};

export default ChatPage;
