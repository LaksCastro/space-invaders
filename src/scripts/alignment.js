import Vector0D from "./vector0D";
import Vector2D from "./vector2D";

// ==========================================
// RECEIVE A CONTAINER BY X,Y POSITION
// AND A CONTENT WIDTH AND HEIGHT
// AND RETURN X, Y,
// REPRESENTING A CENTERED POSITION INSIDE A CONTAINER
// ==========================================
const align = (container, contentSize) => {
  const { x, y } = container;

  const [containerX1] = x;
  const [containerY1] = y;

  const { width: containerW, height: containerH } = Vector2D.sizeOf(container);

  const { width: contentW, height: contentH } = contentSize;

  const contentX1 = containerX1 + (containerW - contentW) / 2;
  const contentX2 = contentX1 + contentW;

  const contentY1 = containerY1 + (containerH - contentH) / 2;
  const contentY2 = contentY1 + contentH;

  return Vector2D.createByCoord(
    Vector0D(contentX1, contentY1),
    Vector0D(contentX2, contentY2)
  );
};

export default Object.freeze({
  align,
});
