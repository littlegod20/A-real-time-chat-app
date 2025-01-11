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
          <div className="flex gap-2 w-full" key={index}>
            {item.avatar && (
              <img
                src={item.avatar}
                alt="avatar name"
                key={index}
              />
            )}
            <div className="flex flex-col justify-between w-4/5">
              <div className="flex justify-between">
                <header className="font-semibold text-base">{item.userName}</header>
                <div>date</div>
              </div>
              <p className="font-normal text-sm truncate">
                user message sifowe owfiowo dwfoeiw foweifowdi oweifwofj
                ewoiefjwoeijfwodijwoifjweiofjwoij woiefjwoi ejfowifjwoijwofi
                wjfoiwjfweoifjwe
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default UserContainer;
