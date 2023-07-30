import { useState } from "react";

const useBoo = () => {
  const [data, setData] = useState("");
  setTimeout(function() {
    setData("Boo");
}, 2000);
  return [data];
};

export default useBoo;
