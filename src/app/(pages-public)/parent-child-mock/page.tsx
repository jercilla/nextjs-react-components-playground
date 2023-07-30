"use client";

import Parent, { ParentProps } from "@/app/components/parent";

export default function Page() {
  const ParentPropsMock: ParentProps = {
    children: {
      oneChild: <section>Mock red child</section>,
      anotherChild: <section>Mock blue child</section>,
    },
    hooks: {
      useFoo: () => ["FooMock"],
      useBoo: () => ["BooMock"],
    },
  };
  return (
    <>
      <h2>Parent component TESTING page</h2>
      <p>
        Provide alternative implementations for child components through
        override default actual components.
      </p>
      <Parent {...ParentPropsMock} />
    </>
  );
}
