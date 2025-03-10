import React from "react";

interface CardProps {
  width?: number;
  height?: number;
}

export const Test1 = ({ width, height }: CardProps) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        // overflow: "hidden",
        // width: "99mm",
        // maxWidth: "99mm",
        // height: "54mm",
        width,
        height,
        fontSize: '7px',
        color: "#000",
        fontFamily: "Roboto",
      }}
    >
      {/* 1 coluna */}
      <div
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
            width: "33mm",
            height: "54mm",
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "8px",
                position: "absolute",
                transform: "translate(4px, 4px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "8px",
                position: "absolute",
                transform: "translate(4px, 15px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "30px",
                position: "absolute",
                transform: "translate(4px, 26px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "#1f2937", userSelect: "none" }}>
                  Feito no Brasil / Made in Brazil / Hecho en Brasil / Fabriqué
                  en Brésil
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "8px",
                position: "absolute",
                transform: "translate(4px, 60px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "30px",
                position: "absolute",
                transform: "translate(4px, 72px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "#1f2937", userSelect: "none" }}>
                  Tecido: 100% Algodão / 100% Cotton / 100% Algodón / 100% Coton
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "30px",
                position: "absolute",
                transform: "translate(4px, 106px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "#1f2937", userSelect: "none" }}>
                  Forro: 100% Poliéster / 100% Polyester / 100% Poliéster / 100%
                  Polyester
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "53px",
                position: "absolute",
                transform: "translate(4px, 140px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
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

      {/* 2 coluna */}
      <div
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
            width: "33mm",
            height: "54mm",
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "8px",
                position: "absolute",
                transform: "translate(4px, 4px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "8px",
                position: "absolute",
                transform: "translate(4px, 15px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "30px",
                position: "absolute",
                transform: "translate(4px, 26px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "#1f2937", userSelect: "none" }}>
                  Feito no Brasil / Made in Brazil / Hecho en Brasil / Fabriqué
                  en Brésil
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "8px",
                position: "absolute",
                transform: "translate(4px, 60px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "30px",
                position: "absolute",
                transform: "translate(4px, 72px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "#1f2937", userSelect: "none" }}>
                  Tecido: 100% Algodão / 100% Cotton / 100% Algodón / 100% Coton
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "30px",
                position: "absolute",
                transform: "translate(4px, 106px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "#1f2937", userSelect: "none" }}>
                  Forro: 100% Poliéster / 100% Polyester / 100% Poliéster / 100%
                  Polyester
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "53px",
                position: "absolute",
                transform: "translate(4px, 140px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
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

      {/* 3 coluna */}
      <div
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
            width: "33mm",
            height: "54mm",
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "8px",
                position: "absolute",
                transform: "translate(4px, 4px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "8px",
                position: "absolute",
                transform: "translate(4px, 15px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "30px",
                position: "absolute",
                transform: "translate(4px, 26px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "#1f2937", userSelect: "none" }}>
                  Feito no Brasil / Made in Brazil / Hecho en Brasil / Fabriqué
                  en Brésil
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "8px",
                position: "absolute",
                transform: "translate(4px, 60px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "30px",
                position: "absolute",
                transform: "translate(4px, 72px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "#1f2937", userSelect: "none" }}>
                  Tecido: 100% Algodão / 100% Cotton / 100% Algodón / 100% Coton
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "30px",
                position: "absolute",
                transform: "translate(4px, 106px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "#1f2937", userSelect: "none" }}>
                  Forro: 100% Poliéster / 100% Polyester / 100% Poliéster / 100%
                  Polyester
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
                fontSize: "2mm",
                lineHeight: "2mm",
                width: "117px",
                height: "53px",
                position: "absolute",
                transform: "translate(4px, 140px)",
                backgroundColor: "white",
                transition: "background-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
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
    </div>
  );
};
