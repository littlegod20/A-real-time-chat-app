import { Check, CheckCheck } from "lucide-react";

interface BubbleTypes {
  isSender: boolean;
  message: string;
  date: Date;
  isSeen: boolean;
}

const MessageBubble: React.FC<BubbleTypes> = ({
  isSender,
  message,
  date,
  isSeen,
}) => {
  return (
    <div className={`flex ${isSender ? "justify-start" : "justify-end"} pb-4`}>
      <aside
        className={`max-w-xs sm:max-w-md w-3/4 sm:w-1/2 text-sm font-normal bg-blue-900  p-2 shadow-md ${
          isSender
            ? "rounded-r-xl rounded-bl-3xl"
            : "rounded-l-xl rounded-br-3xl pl-4 "
        }`}
      >
        {message}
        <div
          className={`w-full flex pt-2 justify-end
           text-xs space-x-2 items-center`}
        >
          <p className="text-gray-300">{date.toLocaleTimeString().slice(3)}</p>
          {isSeen ? (
            <p>
              <CheckCheck size={15} className="text-sky-500" />
            </p>
          ) : (
            <p>
              <Check size={15} className="text-gray-300" />
            </p>
          )}
        </div>
      </aside>
    </div>
  );
};

export default MessageBubble;
