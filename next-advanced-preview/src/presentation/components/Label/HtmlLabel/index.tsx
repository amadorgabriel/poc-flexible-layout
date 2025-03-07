interface HtmlLabelContainerProps {
  width?: number;
  height?: number;
 
  //   items: GridItem[];
}

export const HtmlLabel = () => {
  return (
    <div
      style={{
        display: "flex",
        height,
        width,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
        fontSize: width / 12,
        letterSpacing: -width / 220,
        fontWeight: 700,
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "5px 40px",
          width: "auto",
          textAlign: "center",
          backgroundImage:
            "linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        }}
      >
        Build images
      </div>
      <div
        style={{
          padding: "5px 40px",
          width: "auto",
          textAlign: "center",
          backgroundImage:
            "linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        }}
      >
        with React
      </div>
      <div
        style={{
          padding: "5px 40px",
          width: "auto",
          textAlign: "center",
          backgroundImage:
            "linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        }}
      >
        from your Browser
      </div>
    </div>
  );
};

export const HTMLLabelContainer = ({
  width = 660,
  height = 300,
}: HtmlLabelContainerProps) => {
  return (
    <div
      style={{
        display: "flex",
        width: width,
        maxWidth: width,
        height: height,
      }}
    ></div>
  );
};
