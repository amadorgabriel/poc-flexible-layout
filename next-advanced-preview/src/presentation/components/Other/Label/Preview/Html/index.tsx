import React from "react";

interface CardProps {
  width?: number;
  height?: number;
}

export const HTMLLabelPreview = ({ width, height }: CardProps) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        width: width || 374, // 99 mm ≈ 374 px
        height: height || 204, // 54 mm ≈ 204 px
        fontSize: "8px", // 2 mm ≈ 8 px
        color: "#000",
        fontFamily: "Arial", // Aplique a fonte Roboto
      }}
    >
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            position: "relative",
            textTransform: "uppercase",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "white",
              overflow: "hidden",
              width: "125px", // 33 mm ≈ 125 px
              height: "204px", // 54 mm ≈ 204 px
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "196.56px",
                position: "relative",
              }}
            >
              {/* Item 1 */}
              <div
                style={{
                  display: "flex",
                  fontSize: "8px", // 2 mm ≈ 8 px
                  lineHeight: "8px", // 2 mm ≈ 8 px
                  width: "117px",
                  // height: "30px", // 8 mm ≈ 30 px
                  position: "absolute",
                  transform: "translate(4px, 4px)",
                  backgroundColor: "white",
                  transition: "background-color 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "normal" }}>
                  <span style={{ color: "#1f2937", userSelect: "none" }}>
                    Etiqueta Certa
                  </span>
                </div>
                <span
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    cursor: "se-resize",
                  }}
                ></span>
              </div>

              {/* Item 2 */}
              <div
                style={{
                  display: "flex",
                  fontSize: "8px", // 2 mm ≈ 8 px
                  lineHeight: "8px", // 2 mm ≈ 8 px
                  width: "117px",
                  // height: "30px", // 8 mm ≈ 30 px
                  position: "absolute",
                  transform: "translate(4px, 15px)",
                  backgroundColor: "white",
                  transition: "background-color 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "normal" }}>
                  <span style={{ color: "#1f2937", userSelect: "none" }}>
                    22.949.494/0001-98
                  </span>
                </div>
                <span
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    cursor: "se-resize",
                  }}
                ></span>
              </div>

              {/* Item 3 */}
              <div
                style={{
                  display: "flex",
                  fontSize: "8px", // 2 mm ≈ 8 px
                  lineHeight: "8px", // 2 mm ≈ 8 px
                  width: "117px",
                  // height: "113px", // 30 mm ≈ 113 px
                  position: "absolute",
                  transform: "translate(4px, 26px)",
                  backgroundColor: "white",
                  transition: "background-color 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "normal" }}>
                  <span style={{ color: "#1f2937", userSelect: "none" }}>
                    Feito no Brasil / Made in Brazil / Hecho en Brasil /
                    Fabriqué en Brésil
                  </span>
                </div>
                <span
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    cursor: "se-resize",
                  }}
                ></span>
              </div>

              {/* Item 4 */}
              <div
                style={{
                  display: "flex",
                  fontSize: "8px", // 2 mm ≈ 8 px
                  lineHeight: "8px", // 2 mm ≈ 8 px
                  width: "117px",
                  // height: "30px", // 8 mm ≈ 30 px
                  position: "absolute",
                  transform: "translate(4px, 60px)",
                  backgroundColor: "white",
                  transition: "background-color 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "normal" }}>
                  <span style={{ color: "#1f2937", userSelect: "none" }}>
                    Código: 34/0
                  </span>
                </div>
                <span
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    cursor: "se-resize",
                  }}
                ></span>
              </div>

              {/* Item 5 */}
              <div
                style={{
                  display: "flex",
                  fontSize: "8px", // 2 mm ≈ 8 px
                  lineHeight: "8px", // 2 mm ≈ 8 px
                  width: "117px",
                  // height: "113px", // 30 mm ≈ 113 px
                  position: "absolute",
                  transform: "translate(4px, 72px)",
                  backgroundColor: "white",
                  transition: "background-color 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "normal" }}>
                  <span style={{ color: "#1f2937", userSelect: "none" }}>
                    Tecido: 100% Algodão / 100% Cotton / 100% Algodón / 100%
                    Coton
                  </span>
                </div>
                <span
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    cursor: "se-resize",
                  }}
                ></span>
              </div>

              {/* Item 6 */}
              <div
                style={{
                  display: "flex",
                  fontSize: "8px", // 2 mm ≈ 8 px
                  lineHeight: "8px", // 2 mm ≈ 8 px
                  width: "117px",
                  // height: "113px", // 30 mm ≈ 113 px
                  position: "absolute",
                  transform: "translate(4px, 106px)",
                  backgroundColor: "white",
                  transition: "background-color 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "normal" }}>
                  <span style={{ color: "#1f2937", userSelect: "none" }}>
                    Forro: 100% Poliéster / 100% Polyester / 100% Poliéster /
                    100% Polyester
                  </span>
                </div>
                <span
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    cursor: "se-resize",
                  }}
                ></span>
              </div>

              {/* Item 7 */}
              <div
                style={{
                  display: "flex",
                  fontSize: "8px", // 2 mm ≈ 8 px
                  lineHeight: "8px", // 2 mm ≈ 8 px
                  width: "117px",
                  // height: "200px", // 53 mm ≈ 200 px
                  position: "absolute",
                  transform: "translate(4px, 140px)",
                  backgroundColor: "white",
                  transition: "background-color 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "normal" }}>
                  <span style={{ color: "#1f2937", userSelect: "none" }}>
                    Machine wash, warm, 40 °C (105 °F), normal cycle/Do not
                    bleach/Do not dryclean/Iron, low/Tumble dry, low Line dry in
                    the shade
                  </span>
                </div>
                <span
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    cursor: "se-resize",
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
