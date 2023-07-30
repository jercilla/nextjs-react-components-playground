import Parent from "@/app/components/parent";

export default function Page() {
  return (
    <>
      <h2>Parent component TESTING page</h2>

      <Parent>
      {{
        oneChild: <section>Mock red child</section>,
        anotherChild: <section>Mock blue child</section>
      }}
      </Parent>
    </>
  );
}
