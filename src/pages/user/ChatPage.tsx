import ChatPerson from "./ChatPerson";
import UserContainer from "./components/UserContainer";

const ChatPage = () => {
  return (
    <main className="flex items-center justify-between w-full h-full">
      <div className="h-full overflow-y-scroll p-2 flex flex-col gap-2 lg:w-[30%]">
        <UserContainer />
      </div>

      <div className="hidden sm:block h-full bg-purple-600 flex-1">
        <ChatPerson/>
      </div>
    </main>
  );
};

export default ChatPage;
