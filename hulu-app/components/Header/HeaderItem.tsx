import { HeaderItemProps } from "./types";

export default function HeaderItem({ title, Icon }: HeaderItemProps) {
  return (
    <div className="text-center flex flex-col items-center justify-items-center cursor-pointer group flex-grow-1 w-12 sm:w-20">
      <Icon className="w-8 group-hover:animate-bounce" />
      <p className="uppercase opacity-0 group-hover:opacity-100 group-hover:text-white tracking-widest">
        {title}
      </p>
    </div>
  );
}
