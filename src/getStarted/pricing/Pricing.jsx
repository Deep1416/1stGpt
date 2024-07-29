import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-12">
      <h2 className="text-3xl font-bold mb-6">Simple Pricing, Unbeatable Value</h2>
      <p className="text-lg mb-12">Start small and free, upgrade as you go. Take control of everything.</p>
      <div className="flex justify-center mb-8">
        <button className="px-4 py-2 bg-gray-700 rounded-l-md">YEARLY</button>
        <button className="px-4 py-2 bg-gray-800 rounded-r-md">MONTHLY</button>
      </div>
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Personal</h3>
            <p className="text-2xl font-bold mb-4">$10<span className="text-sm">/month</span></p>
            <p className="text-sm mb-4">billed yearly</p>
            <button className="bg-purple-600 px-4 py-2 rounded-lg mb-6">BUY PERSONAL</button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center border-4 border-purple-600">
            <h3 className="text-xl font-bold mb-4">Premium</h3>
            <p className="text-2xl font-bold mb-4">$15<span className="text-sm">/month</span></p>
            <p className="text-sm mb-4">billed yearly</p>
            <button className="bg-purple-600 px-4 py-2 rounded-lg mb-6">BUY PREMIUM</button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Enterprise</h3>
            <p className="text-2xl font-bold mb-4">$25<span className="text-sm">/month</span></p>
            <p className="text-sm mb-4">billed yearly</p>
            <button className="bg-purple-600 px-4 py-2 rounded-lg mb-6">BUY ENTERPRISE</button>
          </div>
        </div>
        <table className="w-full mt-6 text-center">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">Personal</th>
              <th className="px-4 py-2">Premium</th>
              <th className="px-4 py-2">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t border-gray-700 px-4 py-2">Tokens per month</td>
              <td className="border-t border-gray-700 px-4 py-2">5,500</td>
              <td className="border-t border-gray-700 px-4 py-2">12,500</td>
              <td className="border-t border-gray-700 px-4 py-2">20,000</td>
            </tr>
            <tr>
              <td className="border-t border-gray-700 px-4 py-2">Upscales per month</td>
              <td className="border-t border-gray-700 px-4 py-2">1,500</td>
              <td className="border-t border-gray-700 px-4 py-2">3,500</td>
              <td className="border-t border-gray-700 px-4 py-2">7,500</td>
            </tr>
            <tr>
              <td className="border-t border-gray-700 px-4 py-2">Background removals</td>
              <td className="border-t border-gray-700 px-4 py-2">4,000</td>
              <td className="border-t border-gray-700 px-4 py-2">8,000</td>
              <td className="border-t border-gray-700 px-4 py-2">15,000</td>
            </tr>
            <tr>
              <td className="border-t border-gray-700 px-4 py-2">Pending jobs</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
            </tr>
            <tr>
              <td className="border-t border-gray-700 px-4 py-2">Private generations</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
            </tr>
            <tr>
              <td className="border-t border-gray-700 px-4 py-2">Priority infrastructure</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
            </tr>
            <tr>
              <td className="border-t border-gray-700 px-4 py-2">Relaxed generation</td>
              <td className="border-t border-gray-700 px-4 py-2">-</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
            </tr>
            <tr>
              <td className="border-t border-gray-700 px-4 py-2">Essential SRBThemes models</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
            </tr>
            <tr>
              <td className="border-t border-gray-700 px-4 py-2">Expanded SRBThemes models</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
            </tr>
            <tr>
              <td className="border-t border-gray-700 px-4 py-2">Community models</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
            </tr>
            <tr>
              <td className="border-t border-gray-700 px-4 py-2">Custom Model</td>
              <td className="border-t border-gray-700 px-4 py-2">-</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
              <td className="border-t border-gray-700 px-4 py-2">+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
