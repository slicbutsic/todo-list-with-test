import { Plus } from 'lucide-react';

export default function Button() {
  return (
    <div className="flex justify-center items-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded-md flex items-center justify-center">
        Add a new task <Plus size={20} className="ml-2"/>
      </button>
    </div>
  );
}
