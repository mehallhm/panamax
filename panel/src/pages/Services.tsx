import { useParams } from "@solidjs/router";
import { createResource, Show, For } from "solid-js";

async function getCompose(project: string) {
  const res = await fetch(
    import.meta.env.VITE_SERVER_URL + "/api/" + project + "/services",
  );

  return await res.json();
}

export default function ServicesComp() {
  const params = useParams<{ project: string }>();
  const [compose] = createResource(() => params.project, getCompose);

  return (
    <Show when={!compose.loading}>
      <For each={Object.keys(compose())}>
        {(c) => (
          <div class="rounded bg-neutral p-4 flex flex-col gap-1">
            <p class="text-xl">{c}</p>
            <p class="">Image: {compose()[c].image}</p>
            <Show
              when={compose()[c].status === "running"}
              fallback={<p class="badge badge-ghost">N/A</p>}
            >
              <p class="badge badge-primary">{compose()[c].status}</p>
            </Show>
          </div>
        )}
      </For>
    </Show>
  );
}