//Bleach
import bleachIcon from "@/assets/img/symbols/bleach/bleach.svg";
import noBleachIcon from "@/assets/img/symbols/bleach/no-bleach.svg";
import noChlorineBleachIcon from "@/assets/img/symbols/bleach/no-chlorine-bleach.svg";

//Dry
import inDripDry from "@/assets/img/symbols/dry/in-drip-dry.svg";
import inHorizontalDry from "@/assets/img/symbols/dry/in-horizontal-dry.svg";
import inLineDry from "@/assets/img/symbols/dry/in-line-dry.svg";
import inShadeDry from "@/assets/img/symbols/dry/in-shade-dry.svg";
import noTumbleDry from "@/assets/img/symbols/dry/no-tumble.svg";
import lowTumbleDry from "@/assets/img/symbols/dry/low-tumble-dry.svg";
import normalTumbleDry from "@/assets/img/symbols/dry/normal-tumble-dry.svg";
import highTumbleDry from "@/assets/img/symbols/dry/high-tumble-dry.svg";
import normalCycleDry from "@/assets/img/symbols/dry/normal-cycle.svg";

//Iron
import noIron from "@/assets/img/symbols/ironing/no-iron.svg";
import highIron from "@/assets/img/symbols/ironing/high-iron.svg";
import lowIron from "@/assets/img/symbols/ironing/low-iron.svg";
import normalIron from "@/assets/img/symbols/ironing/normal-iron.svg";

//Professional
import noDryClean from "@/assets/img/symbols/professional-care/no-dry-clean.svg";
import professionalDry from "@/assets/img/symbols//professional-care/professional-dry.svg";

//Washing
import handWash from "@/assets/img/symbols/wash/hand-wash.svg";
import noWash from "@/assets/img/symbols/wash/no-wash.svg";
import wash30 from "@/assets/img/symbols/wash/wash-30.svg";
import wash40 from "@/assets/img/symbols/wash/wash-40.svg";
import wash50 from "@/assets/img/symbols/wash/wash-50.svg";
import wash60 from "@/assets/img/symbols/wash/wash-60.svg";
import wash70 from "@/assets/img/symbols/wash/wash-70.svg";
import washMax30 from "@/assets/img/symbols/wash/wash-max-30.svg";
import washMax40 from "@/assets/img/symbols/wash/wash-max-40.svg";
import washMax50 from "@/assets/img/symbols/wash/wash-max-50.svg";

const bleachIcons = {
  Beach: bleachIcon,
  NoBleach: noBleachIcon,
  NoChlorine: noChlorineBleachIcon,
};

const dryIcons = {
  InDripDry: inDripDry,
  InHorizontalDry: inHorizontalDry,
  InLineDry: inLineDry,
  InShadeDry: inShadeDry,
  NoTumbleDry: noTumbleDry,
  LowTumbleDry: lowTumbleDry,
  NormalTumbleDry: normalTumbleDry,
  HighTumbleDry: highTumbleDry,
  NormalCycleDry: normalCycleDry,
};

const ironIcons = {
  NoIron: noIron,
  HighIron: highIron,
  LowIron: lowIron,
  NormalIron: normalIron,
};

const professionalIcons = {
  NoDryClean: noDryClean,
  ProfessionalDry: professionalDry,
};

const washIcons = {
  HandWash: handWash,
  NoWash: noWash,
  Wash30: wash30,
  Wash40: wash40,
  Wash50: wash50,
  Wash60: wash60,
  Wash70: wash70,
  WashMax30: washMax30,
  WashMax40: washMax40,
  WashMax50: washMax50,
};

export const ConservationSymbols = {
  ...bleachIcons,
  ...dryIcons,
  ...ironIcons,
  ...professionalIcons,
  ...washIcons
};
