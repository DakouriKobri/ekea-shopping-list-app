import { useContext } from "react";

import AcquiredContext from "../store/acquired-context";
import PendingItemList from "./PendingItemList";

export default function AcquiredItemList() {
  const acquiredContextObject = useContext(AcquiredContext);

  let content;

  if (acquiredContextObject.totalAcquired === 0) {
    content = <p>You haven't purchased any item yet.</p>;
  } else {
    content = <PendingItemList items={acquiredContextObject.acquired} />;
  }

  return (
    <section>
      <h1>View acquired items below</h1>
      {content}
    </section>
  );
}
