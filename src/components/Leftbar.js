import { CircleIcon } from "@/icons/Circle";
import { FreehandIcon } from "@/icons/Freehand";
import { LineIcon } from "@/icons/Line";
import { PolygonIcon } from "@/icons/Polygon";

const ICONS = {
  CIRCLE: <CircleIcon />,
  LINE: <LineIcon />,
  POLYGON: <PolygonIcon />,
  FREEHAND: <FreehandIcon />,
};

const Leftbar = ({ elements }) => {
  return (
    <div className="h-full w-1/5 shadow-2xl">
      {elements.data.map((elm, i) => (
        <div
          className="flex items-center gap-5 p-2 border-b hover:bg-gray-300"
          key={i}
        >
          <span className="text-gray-400">{ICONS[elm.type]}</span>
          <h1 className="cursor-pointer capitalize">{elm.type.toLowerCase()}</h1>
        </div>
      ))}
    </div>
  );
};

export default Leftbar;
