import { useState } from "react";

const useFoo = () => {
  const [data, setData] = useState("");
  setTimeout(function() {
    setData("Foo");
}, 2000);
  return [data];
};

export default useFoo;
