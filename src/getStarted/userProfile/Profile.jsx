import React from 'react';

const Profile = () => {
  return (
    <div className="bg-[#1f1f2e] min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="bg-[#2d2d3d] p-6 rounded-lg max-w-md w-full space-y-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-lg"
          />
          <div>
            <h2 className="text-xl font-semibold">Caden Smith</h2>
            <p className="text-sm text-gray-400">@caddeomyth</p>
            <p className="text-sm">cadensmith@gmail.com</p>
          </div>
        </div>
        <div className="bg-[#1f1f2e] p-4 rounded-lg space-y-2">
          <h3 className="text-sm text-gray-400">YOUR PLAN</h3>
          <div className="flex justify-between items-center">
            <p>Personal Plan - You will be given 8000 tokens every month</p>
            <button className="bg-[#7966e4] text-white px-4 py-1 rounded-lg">
              UPGRADE
            </button>
          </div>
        </div>
        <div className="bg-[#1f1f2e] p-4 rounded-lg space-y-2">
          <h3 className="text-sm text-gray-400">YOUR WORK</h3>
          <div className="flex justify-between items-center">
            <p>Your Creation - You have created 1530 images every month</p>
            <button className="bg-[#7966e4] text-white px-4 py-1 rounded-lg">
              VIEW YOUR WORK
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg">What are your interests?</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'ADVERTISING',
              'ARCHITECTURE',
              'ART',
              'EDUCATION',
              'FASHION',
              'FILM TV',
              'INTERIOR',
              'MARKETING',
              'GRAPHICS',
              'GAMES',
              'STOCK IMAGES',
              'OTHER',
            ].map((interest) => (
              <button
                key={interest}
                className="bg-[#2d2d3d] text-white px-4 py-1 rounded-lg"
              >
                {interest}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;