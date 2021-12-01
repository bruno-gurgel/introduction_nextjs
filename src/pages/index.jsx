import React from "react";
import Link from "next/link";

const Page = () => (
  <div>
    Index page
    <Link href="/notes">
      <a>link</a>
    </Link>
  </div>
);

export default Page;
