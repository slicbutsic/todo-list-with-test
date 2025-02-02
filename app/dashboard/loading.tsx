export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col justify-center items-center text-white p-8">
      <div className="bg-white text-gray-800 shadow-2xl rounded-3xl p-10 w-full max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Loading tasks...</h2>
        <div className="mt-6 flex justify-center">
          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
