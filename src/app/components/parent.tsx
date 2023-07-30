import ChildRed from "@/app/components/child-red";
import ChildBlue from "@/app/components/child-blue";

export default function Parent({
  children = {
    oneChild: ChildRed(),
    anotherChild: ChildBlue(),
  },
  ...props
}) {
  return (
    <>
      <p>
        Passing child components through _children props_ instead, 
        effectively _DECOUPLES_ _Parent_ from its _dependant components_
        allowing parent component to override them.        
      </p>
      <p>
        The downside of this approach is that it creates a dependency to the imported _Child_ component 
        and makes the _Parent_ less self-contained. However, this can often be an acceptable tradeoff.
      </p>
      <section style={{ border: "2px solid green", padding: "1rem" }}>
        <h3>Parent</h3>
        {children.oneChild}
        ... ... ...
        {children.anotherChild}
      </section>
    </>
  );
}
