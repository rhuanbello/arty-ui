import { ComponentProps } from "react";

import { User } from "phosphor-react";

import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";

export type AvatarProps = ComponentProps<typeof AvatarImage>;

export const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
};

Avatar.displayName = "Avatar";
