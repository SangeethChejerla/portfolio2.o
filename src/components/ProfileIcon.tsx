import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ProfileIcon() {
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className=""
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
