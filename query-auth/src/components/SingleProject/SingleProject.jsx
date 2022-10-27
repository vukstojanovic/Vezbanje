import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

export default function SingleProject({ name }) {
  return (
    <div className="bg-yellow-500 rounded-lg px-5 py-3 text-medium flex items-center justify-between font-bold mb-3 text-gray-600">
      <p>{name}</p>
      <div className="flex items-center space-x-3">
        <div className="cursor-pointer">
          <FiEdit size={20} />
        </div>
        <div className="cursor-pointer">
          <AiOutlineDelete size={20} />
        </div>
      </div>
    </div>
  );
}
