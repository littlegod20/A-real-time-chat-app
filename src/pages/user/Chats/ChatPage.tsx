import ChatBox from "./ChatBox";
import UserContainer from "../components/UserContainer";

const ChatPage = () => {
  return (
    <main className="flex items-center justify-between w-full h-full">
      <div className="h-full overflow-y-scroll pt-2 pr-2 flex flex-col gap-2 lg:w-[30%]">
        <UserContainer />
      </div>

      <div className="hidden h-screen flex-1 sm:flex flex-col">
        <ChatBox />
      </div>
    </main>
  );
};

export default ChatPage;
