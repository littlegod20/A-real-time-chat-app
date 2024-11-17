import MessageBubble from "@/components/widgets/MessageBubble";
import decor from "../../assets/decor.png";
import ChatInputs from "@/components/widgets/ChatInputs";


const temporaryData = [
  {
    message:
      "Message 1, this is the main wir loewo elaeo wieofi alefowifwo jwlfjofeif oweifoweifofw3 aojfoiwfeiowefio aeifwoefi weofiaoefiweofefaoiejfwioefjoiwefj owifjao",
    isSender: true,
  },
  {
    message:
      "Message 2 this is the main wir loewo elaeo wieofi alefowifwo jwlfjofeif oweifoweifofw3 aojfoiwfeiowefio aeifwoefi weofiaoefiweofefaoiejfwioefjoiwefj owifjao",
    isSender: false,
  },
  {
    message: "Message 3",
    isSender: true,
  },
  {
    message: "Message 4",
    isSender: true,
  },
  {
    message: "Message 5",
    isSender: false,
  },
];

const ChatPage = () => {
  return (
    <main
      className="w-full h-full bg-repeat"
      style={{ backgroundImage: `url('${decor}')`, backgroundSize: "50px" }}
    >
      <div className="w-full h-full backdrop-blur-sm sm:p-10 p-5">
        <section className="h-[90%]">
          {temporaryData.map((item)=>(
            <MessageBubble isSender={item.isSender} message={item.message} />
          ))}
        </section>

        {/* textarea, sendbutton and emojis and upload buttons */}
        <ChatInputs/>
      </div>
    </main>
  );
};

export default ChatPage;
