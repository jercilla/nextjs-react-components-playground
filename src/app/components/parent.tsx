type childComponents = "oneChild" | "anotherChild";

export interface Props {
  children?: { [key in childComponents]: JSX.Element };
}

export default function Parent({ children, ...props }: Props) {
  return (
    <>
      <section style={{ border: "2px solid green", padding: "1rem" }}>
        <h3>Parent</h3>
        {children?.oneChild}
        ... ... ...
        {children?.anotherChild}
      </section>
    </>
  );
}
