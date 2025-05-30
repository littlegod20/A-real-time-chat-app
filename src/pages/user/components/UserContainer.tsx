import { AuthType } from "@/utils/types";
import { useEffect, useState } from "react";

const UserContainer = () => {
  const getUsers = localStorage.getItem("usersData");

  const [userList, setUserList] = useState<AuthType[] | null>(null);

  useEffect(() => {
    if (getUsers) {
      setUserList(JSON.parse(getUsers));
    }
  }, [getUsers]);

  return (
    <>
      {userList &&
        userList.map((item, index) => (
          <div className="w-full" key={index}>
            <div className="flex duration-300 ease-in hover:bg-sky-950 gap-2 p-2 sm:max-w-[200px] lg:min-w-[250px] lg:max-w-[500px] rounded-md cursor-pointer">
              <div className="flex-grow-1 ">
                {item.avatar && (
                  <img src={item.avatar} alt="avatar name" key={index} />
                )}
              </div>
              <div className="flex flex-col justify-between flex-grow-2 w-4/12">
                <div className="flex justify-between items-center">
                  <header className="font-semibold text-base">
                    {item.userName}
                  </header>
                  <p className="text-xs font-normal">{Date().slice(0,10)}</p>
                </div>
                <div className="flex items-center  justify-between w-full ">
                  <p className="font-normal text-xs truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur amet eum ducimus animi maiores quo impedit
                    voluptate vero dolore corrupti? Illo veniam quis in eos
                    porro deleniti cum est deserunt!
                  </p>
                  <div className="bg-sky-600 flex justify-center rounded-full px-1">
                    <p className="text-xs font-medium">1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default UserContainer;
