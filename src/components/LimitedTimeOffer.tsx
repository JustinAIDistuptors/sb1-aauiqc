import React from 'react';
import { useNavigate } from 'react-router-dom';

const LimitedTimeOffer = () => {
  const navigate = useNavigate();

  const handleCommunityOffer = () => {
    navigate('/contact?plan=diy&discount=true');
  };

  return (
    <button 
      onClick={handleCommunityOffer}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600/10 to-purple-900/10 backdrop-blur-md border border-purple-600/20 px-6 py-4 rounded-xl animate-bounce shadow-lg hover:shadow-purple-600/30 transition-all cursor-pointer z-50"
    >
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span>🔥</span>
        <span>Limited Time: Join our Skool Community - 30% off first month (Only $42)</span>
      </div>
    </button>
  );
};

export default LimitedTimeOffer;