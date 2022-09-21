import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-between sm:flex-row m-5">
      <div className="flex justify-between items-center sm:min-w-[35%]">
        <HeaderItem Icon={HomeIcon} title="home" />
        <HeaderItem Icon={LightningBoltIcon} title="trending" />
        <HeaderItem Icon={BadgeCheckIcon} title="verified" />
        <HeaderItem Icon={CollectionIcon} title="collections" />
        <HeaderItem Icon={SearchIcon} title="search" />
        <HeaderItem Icon={UserIcon} title="account" />
      </div>
      <Image src="https://links.papareact.com/ua6" width={200} height={100} />
    </header>
  );
}
