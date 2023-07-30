import ChildRed from "@/app/components/child-red";
import ChildBlue from "@/app/components/child-blue";
import Parent from "@/app/components/parent";

export default function Page() {
  return (
    <>
      <h2>Parent component REAL page</h2>
      <p>
        Passing child components through to _Parent_ as children instead of creating inside it, 
        effectively _DECOUPLES_ _Parent_ from its _dependant components_.
      </p>
      <Parent>
      {{
        oneChild: <ChildRed/>,
        anotherChild: <ChildBlue/>
      }}
      </Parent>
    </>
  );
}
