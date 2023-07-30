
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000/story](http://localhost:3000/story) with your browser to see the result.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Component Dependency Management

### GIVEN 
one component depending on two `child components` plus two additional `hooks`:
```
     HookFoo
   / HookBoo
  / /
Parent
  \ \ 
   \ ChildRed
     ChildBlue
```

### THEN

We have **not only** to **import** them:

```typescript
import ChildRed from "@/app/components/child-red";
import ChildBlue from "@/app/components/child-blue";
import useBoo from "@/app/hooks/useBoo";
import useFoo from "@/app/hooks/useFoo";
```

but to **declare** them as **dependencies** in function params (== `props`), with `default values` and optional `typing`:

```typescript
export type ParentProps = {
  children: {
    oneChild: ReactNode;
    anotherChild: ReactNode;
  };
  hooks: {
    useFoo: () => string[];
    useBoo: () => string[];
  };
};

export default function Parent({
  children = {
    oneChild: ChildRed(),
    anotherChild: ChildBlue(),
  },
  hooks = {
    useFoo: useFoo,
    useBoo: useBoo,
  },
}: 
ParentProps) {
...
...
}
```

### SO THAT

We can use the component in the usual way (see: `src/app/parent-child/page.tsc`):

```typescript
import Parent from "@/app/components/parent";

export default function Page() {
  return (
    <>
      <h2>Parent component REAL page</h2>
      <Parent />
    </>
  );
}
```

And, at the same time, use it _isolated_, with `mock data`(see: `src/app/parent-child-mock/page.tsc`):

```typescript
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
```






