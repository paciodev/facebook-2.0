import { useSession } from "next-auth/react"
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline"
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon
} from "@heroicons/react/solid"
import SidebarRow from "./SidebarRow"

function Sidebar() {
  const session = useSession()

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.data.user.image} text={session.data.user.name} /> {/* Profile */}
      <SidebarRow Icon={UsersIcon} text="Friends" />
      <SidebarRow Icon={UserGroupIcon} text="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} text="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} text="Watch" />
      <SidebarRow Icon={CalendarIcon} text="Events" />
      <SidebarRow Icon={ClockIcon} text="Memories" />
      <SidebarRow Icon={ChevronDownIcon} text="See More" />
    </div>
  )
}

export default Sidebar