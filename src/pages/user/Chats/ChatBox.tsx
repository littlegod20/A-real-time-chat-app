import MessageBubble from "@/components/widgets/MessageBubble";
import chatBg from "../../../assets/chatBg.jpg";
import ChatInputs from "@/components/widgets/ChatInputs";
import { temporaryData } from "./constants";

const ChatBox = () => {
  return (
    <main
      className="w-full bg-repeat relative h-screen flex flex-col justify-between"
      style={{ backgroundImage: `url('${chatBg}')`, backgroundSize: "50px" }}
    >
      <div className="w-full bg-sky-900  flex items-center ">
        <ChatInputs />
      </div>
      <section className="w-full p-2 bg-green-400 overflow-y-auto pb-0">
          {temporaryData.map((item) => (
            <MessageBubble
              isSender={item.isSender}
              message={item.message}
              isSeen={item.isSeen}
              date={item.date}
            />
          ))}
        </section>

      {/* textarea, sendbutton and emojis and upload buttons */}
      <div className="w-full bg-sky-900  flex items-center ">
        <ChatInputs />
      </div>
    </main>
  );
};

export default ChatBox;
