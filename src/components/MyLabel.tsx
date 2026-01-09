import "./MyLabel.css";

interface Props {
  /**
   * Text to display inside the label
   */
  label: string;

  /**
   * Size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * allCaps: If true, the label text will be displayed in uppercase
   */
  allCaps?: boolean;

  /**
   * color: Color of the label text
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * fontColor: Custom font color for the label text
   */
  fontColor?: string;

  /**
   * bold: If true, the label text will be displayed in bold
   */
  bold?: boolean;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
  bold = false,
}: Props) => {
  return (
    <span className={`label ${size} ${color} ${bold ? "bold" : ""}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
