import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import useDeleteEmployeeMutation from "../../pages/Employees/api/deleteEmployee";

export default function SingleProduct({ name, id }) {
  const deleteEmployeeMutation = useDeleteEmployeeMutation();

  return (
    <div className="bg-violet-800 rounded-lg px-5 py-3 text-medium flex items-center justify-between font-bold mb-3 text-gray-300">
      <p>{name}</p>
      <div className="flex items-center space-x-3">
        <div className="cursor-pointer">
          <FiEdit size={20} />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => deleteEmployeeMutation.mutate(id)}
        >
          <AiOutlineDelete size={20} />
        </div>
      </div>
    </div>
  );
}
