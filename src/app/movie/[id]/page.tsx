'use client'

import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router";

export default function Page({ params }: { params: { id: number } }) {
  console.log(params);

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
}