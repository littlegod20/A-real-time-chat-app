export const ChatSkeleton = () => {
  return (
    <div className="w-fulll p-4">
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-5">
            <div className="p-5 w-10 rounded-full bg-muted animate-pulse opacity-30"></div>
            <div className="flex flex-col w-full gap-1">
              <div className="animate-pulse bg-muted w-full p-1 opacity-30 rounded-md"></div>
              <div className="animate-pulse w-full p-1 bg-muted opacity-30 rounded-md"></div>
              <div className="animate-pulse w-full p-1 bg-muted opacity-30 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
