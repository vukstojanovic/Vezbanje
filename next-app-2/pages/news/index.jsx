import Link from "next/link";
import React from "react";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/ss">Go to ss page</Link>
        </li>
        <li>
          <Link href="/news/vs">Go to vs page</Link>
        </li>
      </ul>
    </>
  );
}
