export const ChatSkeleton = () => {
  return (
    <div className="w-fulll p-4">
      <div className="space-y-3">
        {Array(2).map((i) => (
          <div key={i} className="flex items-center gap-5">
            <div className="p-5 w-10 rounded-full bg-white opacity-30"></div>
            <div className="flex flex-col w-full gap-1">
              <div className="animate-pulse w-full p-1 bg-white opacity-30 rounded-md"></div>
              <div className="animate-pulse w-full p-1 bg-white opacity-30 rounded-md"></div>
              <div className="animate-pulse w-full p-1 bg-white opacity-30 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
