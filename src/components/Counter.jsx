import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          카운터
        </h1>

        <div className="text-6xl font-bold text-center mb-8 text-blue-600">
          {count}
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={decrement}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors"
          >
            감소
          </button>

          <button
            onClick={reset}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors"
          >
            초기화
          </button>

          <button
            onClick={increment}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors"
          >
            증가
          </button>
        </div>
      </div>
    </div>
  );
}
