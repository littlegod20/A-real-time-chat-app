import decor from "../../assets/decor.png";

const ChatPage = () => {
  return (
    <main
      className="w-full h-full bg-repeat"
      style={{ backgroundImage: `url('${decor}')`, backgroundSize: "50px" }}
    >
      <div className="w-full h-full backdrop-blur-sm p-10">
        <section className="">
          <p>sometin</p>
        </section>
      </div>
    </main>
  );
};

export default ChatPage;
