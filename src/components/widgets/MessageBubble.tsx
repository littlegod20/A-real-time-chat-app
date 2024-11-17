interface BubbleTypes {
  isSender: boolean;
  message: string;
}

const MessageBubble: React.FC<BubbleTypes> = ({ isSender, message }) => {
  return (
    <div className={`flex ${isSender ? "justify-start" : "justify-end"} pb-4`}>
      <aside
        className={`max-w-xs sm:max-w-md bg-blue-900 p-2 shadow-md ${
          isSender ? "rounded-r-md rounded-bl-md" : "rounded-l-md rounded-br-md"
        }`}
      >
        {message}
      </aside>
    </div>
  );
};

export default MessageBubble;
