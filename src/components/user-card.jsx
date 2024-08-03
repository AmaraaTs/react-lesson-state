import { MdOutlineClear } from "react-icons/md";

const UserCard = ({ userImg, firstName, userId, deleteUser }) => {
  return (
    <div className="p-5 flex gap-4 items-center border rounded-lg">
      <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
      <div>
        <h1>{firstName}</h1>
        {/* <p>{position}</p> */}
      </div>
      <MdOutlineClear
        className=""
        color="red"
        onClick={() => deleteUser(userId)}
      />
    </div>
  );
};

export default UserCard;
