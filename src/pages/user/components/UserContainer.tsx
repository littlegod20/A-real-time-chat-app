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
            <div className="flex  bg-sky-950 gap-2 p-2 sm:max-w-[300px] lg:min-w-[250px] lg:max-w-[500px] rounded-md">
              <div className="flex">
                {item.avatar && (
                  <img src={item.avatar} alt="avatar name" key={index} />
                )}
              </div>
              <div className="flex flex-col justify-between w-4/5">
                <div className="flex justify-between">
                  <header className="font-semibold text-base">
                    {item.userName}
                  </header>
                  <div>date</div>
                </div>
                <div className="flex-1">
                  <p className="font-normal text-sm truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur amet eum ducimus animi maiores quo impedit
                    voluptate vero dolore corrupti? Illo veniam quis in eos
                    porro deleniti cum est deserunt!
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default UserContainer;
