import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Storyboard</h1>
      <nav>
        <ul>
          <li>
            <Link href="parent-child">Parent with REAL childs</Link>
          </li>
          <li>
            <Link href="parent-child-mock">Parent with MOCK childs</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
