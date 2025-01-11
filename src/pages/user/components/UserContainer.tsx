import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";
import { users } from "../constants";

const UserContainer = () => {
  const newUsers = users.map((item) => ({
    ...item,
    avatar: createAvatar(adventurer, {
      seed: item.name,
      size: 50,
      backgroundColor: ["ffd5dc", "c0aede", "d1d4f9"],
      backgroundRotation: [360],
      backgroundType: ["gradientLinear"],
      radius: 999,
      randomizeIds: true,
    }),
  }));

  return (
    <>
      {newUsers.map((item, index) => (
        <div className="flex gap-2 bg-white w-full" key={index}>
          <img src={item.avatar.toDataUri()} alt="avatar name" key={index} />
          <div className="flex flex-col  bg-green-500 justify-between w-4/5">
            <div className="flex justify-between">
              <header className="font-semibold text-base">User name</header>
              <div>date</div>
            </div>
            <p className="font-normal text-sm truncate bg-blue-600">
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
