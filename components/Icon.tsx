export type IconName =
  | "account_tree"
  | "ads_click"
  | "add"
  | "auto_awesome"
  | "campaign"
  | "chat_bubble"
  | "close"
  | "favorite"
  | "forum"
  | "groups"
  | "hub"
  | "insights"
  | "lightbulb"
  | "magnification_small"
  | "psychology"
  | "rocket_launch"
  | "storefront"
  | "touch_app"
  | "track_changes"
  | "trending_up"
  | "videocam"
  | "visibility";

export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`material-symbols-outlined select-none leading-none ${className}`}
    >
      {name}
    </span>
  );
}
