interface IconProps {
  class: string;
  stroke?: string;
}

export function StackIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width={props?.stroke ? props.stroke : "2"}
      stroke-linecap="round"
      stroke-linejoin="round"
      class={props.class}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4l-8 4l8 4l8 -4l-8 -4" />
      <path d="M4 12l8 4l8 -4" />
      <path d="M4 16l8 4l8 -4" />
    </svg>
  );
}

export function NetworkIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width={props?.stroke ? props.stroke : "2"}
      stroke-linecap="round"
      stroke-linejoin="round"
      class={props.class}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0" />
      <path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" />
      <path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" />
      <path d="M6 9h12" />
      <path d="M3 20h7" />
      <path d="M14 20h7" />
      <path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M12 15v3" />
    </svg>
  );
}

export function DriveIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width={props?.stroke ? props.stroke : "2"}
      stroke-linecap="round"
      stroke-linejoin="round"
      class={props.class}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 21h10a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2h-6.172a2 2 0 0 0 -1.414 .586l-3.828 3.828a2 2 0 0 0 -.586 1.414v10.172a2 2 0 0 0 2 2z" />
      <path d="M13 6v2" />
      <path d="M16 6v2" />
      <path d="M10 7v1" />
    </svg>
  );
}
