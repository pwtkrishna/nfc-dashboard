export function getAvatarSrc(
  avatar: string | string[] | undefined | null
): string {
  let avatarRaw = "";

  if (Array.isArray(avatar)) {
    avatarRaw = avatar.length > 0 ? avatar[0] : "";
  } else if (typeof avatar === "string") {
    avatarRaw = avatar;
  }

  if (!avatarRaw) return "icTapOnnLogo.svg";

  if (avatarRaw.startsWith("http") || avatarRaw.startsWith("/")) {
    return avatarRaw;
  }
  if (avatarRaw.startsWith("data:image")) {
    return avatarRaw;
  }
  if (/^[A-Za-z0-9+/=]+$/.test(avatarRaw) && avatarRaw.length > 100) {
    return `data:image/png;base64,${avatarRaw}`;
  }
  return "icTapOnnLogo.svg";
}
