import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul>
        <li>
          <Link href="parent-child">Parent with REAL childs</Link>
        </li>
        <li>
          <Link href="parent-child-mock">Parent with MOCK childs</Link>
        </li>
      </ul>
    </>
  );
}
