import { MathClamp } from "../../../utils/Math";
import { LoaderAnimation, LoaderRoot, LoaderTitle } from "./Loader.styled";
import type { LoaderProps } from "./Loader.types";

export const Loader = ({ $title, $loading, $size }: LoaderProps) => {
  const size = MathClamp($size ?? 120, 16, 200);
  const borderSize = Math.max(2, Math.ceil(size / 17));
  const titleSize = Math.floor(MathClamp(size / 5.6, 14, 24));

  return (
    $loading && (
      <LoaderRoot>
        <LoaderAnimation $size={size} $borderSize={borderSize} />
        <LoaderTitle $size={titleSize}>{$title}</LoaderTitle>
      </LoaderRoot>
    )
  );
};
