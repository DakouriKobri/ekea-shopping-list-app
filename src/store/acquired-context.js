import { createContext, useState } from "react";

const AcquiredContext = createContext({
  acquired: [],
  totalAcquired: 0,
  addAcquired: (acquiredItem) => {},
  removeAcquired: (itemId) => {},
  itemIsAcquired: (itemId) => {},
});

export function AcquiredContextProvider(props) {
  const [userAcquired, setUserAcquired] = useState([]);

  function addAcquiredHandler(acquiredItem) {
    setUserAcquired((prevUserAcquired) => {
      return prevUserAcquired.concat(acquiredItem);
    });
  }

  function removeAcquiredHandler(itemId) {
    setUserAcquired((prevUserAcquired) => {
      return prevUserAcquired.filter((item) => item.id !== itemId);
    });
  }

  function itemIsAcquiredHandler(itemId) {
    return userAcquired.some((item) => item.id === itemId);
  }

  const context = {
    acquired: userAcquired,
    totalAcquired: userAcquired.length,
    addAcquired: addAcquiredHandler,
    removeAcquired: removeAcquiredHandler,
    itemIsAcquired: itemIsAcquiredHandler,
  };

  return (
    <AcquiredContext.Provider value={context}>
      {props.children}
    </AcquiredContext.Provider>
  );
}

export default AcquiredContext;
