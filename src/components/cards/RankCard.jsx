import React from 'react';

export const RankCard = () => {
  const ranks = [
    { grade: 'TOP PLUS', threshold: '97% and Above', color: 'from-violet-600 to-indigo-600' },
    { grade: 'Distinction', threshold: '80% and Above', color: 'from-blue-600 to-cyan-600' },
    { grade: 'First Class', threshold: '60% and Above', color: 'from-emerald-600 to-teal-600' },
    { grade: 'Second Class', threshold: '40% and Above', color: 'from-amber-600 to-yellow-600' },
    { grade: 'Third Class', threshold: '35% and Above', color: 'from-orange-600 to-red-600' },
    { grade: 'Failed', threshold: '35% Below', color: 'from-red-600 to-rose-600' }
  ];

  return (
    <div className="mx-auto bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-3xl border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Grade Classification
        </h2>
        <p className="text-gray-500 text-sm mt-1">Academic Performance Criteria</p>
      </div>

      <div className="space-y-4">
        {ranks.map((rank, index) => (
          <div
            key={index}
            className="bg-gradient-to-r p-[1px] rounded-xl transition-transform duration-300 hover:scale-[1.02]"
            style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
          >
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-lg font-semibold bg-gradient-to-r ${rank.color} bg-clip-text text-transparent`}>
                    {rank.grade}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{rank.threshold}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rank.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-xl font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {/* <span className="block px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 text-center">
          Based on Final Assessment
        </span> */}
        <div className="px-4 py-3 rounded-xl bg-amber-50 border border-amber-200">
          <p className="text-amber-800 text-sm font-medium">
            Note: The specified percentage must be achieved in each individual subject to qualify for the respective grade.
          </p>
        </div>
      </div>
    </div>
  );
};