import React, { useState } from 'react';
import Popup from './components/Popup';

const RenderPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => setIsPopupVisible(true);
  const hidePopup = () => setIsPopupVisible(false);

  return (
    <div>
      <button onClick={showPopup}>Show Popup</button>
      {isPopupVisible && <Popup onClose={hidePopup} />}
    </div>
  );
};

export default RenderPopup;
