import { useState } from "react";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";

import styles from "@/components/layout/Aside/Aside.module.css";

type LayerProps = {
  text?: string;
  image?: {
    url: string;
    name: string;
  };
};

export const Layer = ({ image, text }: LayerProps) => {
  return text ? <TextLayer text={text} /> : <ImageLayer image={image} />;
};

const TextLayer = ({ text }: LayerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`${styles.block} ${isVisible && styles.disabled}`}>
      <div>
        <TextFieldsOutlinedIcon
          sx={{
            fontSize: 20,
            margin: 0.5,
            marginRight: 1,
          }}
        />

        {text && <p>{text}</p>}
      </div>

      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? (
            <VisibilityOffOutlinedIcon
              sx={{
                fontSize: 20,
                margin: 0.5,
              }}
            />
          ) : (
            <VisibilityOutlinedIcon
              sx={{
                fontSize: 20,
                margin: 0.5,
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

const ImageLayer = ({ image }: LayerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`${styles.block} ${isVisible && styles.disabled}`}>
      <div>
        <ImageOutlinedIcon
          sx={{
            fontSize: 20,
            margin: 0.5,
            marginRight: 1,
          }}
        />

        {image?.name && <p>{image.name}</p>}
      </div>

      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? (
            <VisibilityOffOutlinedIcon
              sx={{
                fontSize: 20,
                margin: 0.5,
              }}
            />
          ) : (
            <VisibilityOutlinedIcon
              sx={{
                fontSize: 20,
                margin: 0.5,
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
};
