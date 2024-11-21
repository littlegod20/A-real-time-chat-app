import MessageBubble from "@/components/widgets/MessageBubble";
import decor from "../../assets/decor.png";
import ChatInputs from "@/components/widgets/ChatInputs";
import { useParams } from "react-router-dom";

const temporaryData = [
  {
    message:
      "Message 1, this is the main wir loewo elaeo wieofi alefowifwo jwlfjofeif oweifoweifofw3 aojfoiwfeiowefio aeifwoefi weofiaoefn iweofefaoi ejfwioefjoiwefj owifjao",
    isSender: true,
    date: new Date(),
    isSeen: false,
  },
  {
    message:
      "Message 2 this is the main wir loewo elaeo wieofi alefowifwo jwlfjofeif oweifoweifofw3 aojfoiwfeiowefio aeifwoefi weofiaoefn iweofefaoi ejfwioefjoiwefj owifjao",
    isSender: false,
    date: new Date(),
    isSeen: true,
  },
  {
    message: "Message 3",
    isSender: true,
    date: new Date(),
    isSeen: true,
  },
  {
    message: "Message 4",
    isSender: true,
    date: new Date(),
    isSeen: false,
  },
  {
    message: "Message 5",
    isSender: false,
    date: new Date(),
    isSeen: true,
  },
  {
    message:
      "Message 1, this is the main wir loewo elaeo wieofi alefowifwo jwlfjofeif oweifoweifofw3 aojfoiwfeiowefio aeifwoefi weofiaoefn iweofefaoi ejfwioefjoiwefj owifjao",
    isSender: true,
    date: new Date(),
    isSeen: false,
  },
  {
    message:
      "Message 2 this is the main wir loewo elaeo wieofi alefowifwo jwlfjofeif oweifoweifofw3 aojfoiwfeiowefio aeifwoefi weofiaoefn iweofefaoi ejfwioefjoiwefj owifjao",
    isSender: false,
    date: new Date(),
    isSeen: false,
  },
  {
    message: "Message 3",
    isSender: true,
    date: new Date(),
    isSeen: false,
  },
  {
    message: "Message 4",
    isSender: true,
    date: new Date(),
    isSeen: false,
  },
  {
    message: "Message 5",
    isSender: false,
    date: new Date(),
    isSeen: false,
  },
  {
    message:
      "Message 1, this is the main wir loewo elaeo wieofi alefowifwo jwlfjofeif oweifoweifofw3 aojfoiwfeiowefio aeifwoefi weofiaoefn iweofefaoi ejfwioefjoiwefj owifjao",
    isSender: true,
    date: new Date(),
    isSeen: false,
  },
  {
    message:
      "Message 2 this is the main wir loewo elaeo wieofi alefowifwo jwlfjofeif oweifoweifofw3 aojfoiwfeiowefio aeifwoefi weofiaoefn iweofefaoi ejfwioefjoiwefj owifjao",
    isSender: false,
    date: new Date(),
    isSeen: false,
  },
  {
    message: "Message 3",
    isSender: true,
    date: new Date(),
    isSeen: false,
  },
  {
    message: "Message 4",
    isSender: true,
    date: new Date(),
    isSeen: false,
  },
  {
    message: "Message 5",
    isSender: false,
    date: new Date(),
    isSeen: false,
  },
];

const ChatPerson = () => {
  const { id } = useParams();

  if (!id) {
    console.log("No user found");
    return;
  }

  return (
    <main
      className="w-full h-screen bg-repeat relative"
      style={{ backgroundImage: `url('${decor}')`, backgroundSize: "50px" }}
    >
      <div className="w-full backdrop-blur-sm sm:p-10 p-5 h-[88%] overflow-scroll ">
        <section className="h-full">
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
      </div>
      <div className="w-full bg-sky-900  flex items-center h-[12%]">
        <ChatInputs />
      </div>
    </main>
  );
};

export default ChatPerson;
