import { A } from "@solidjs/router";

export default function Logo() {
  return (
    <A class="flex items-center gap-1" href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 21h6" />
        <path d="M9 21v-18l-6 6h18" />
        <path d="M9 3l10 6" />
        <path d="M17 9v4a2 2 0 1 1 -2 2" />
      </svg>
      <h2 class="text-lg font-bold">Panamax</h2>
    </A>
  );
}
