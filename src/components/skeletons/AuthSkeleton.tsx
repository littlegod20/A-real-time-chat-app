const AuthSkeleton = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen gap-1 ">
      <div className="w-1/2 bg-white opacity-75 p-4 h-1/2 animate-pulse rounded-md"></div>
      <div className="w-1/2 bg-white opacity-75 p-4 animate-pulse rounded-md"></div>
      <div className="w-1/2 bg-white opacity-75 p-2 animate-pulse rounded-md"></div>
    </div>
  );
};

export default AuthSkeleton;
