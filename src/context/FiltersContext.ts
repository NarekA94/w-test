import React from "react";

export interface DefaultContent {
  name: string;
  url: string;
  id: number;
  rating: number;
  favorit: number;
  createdAt: number;
}

interface ContextValue {
  defaultContent: Array<DefaultContent>;
  filter: (a: number, b?: Function) => void;
}

export const contextValue: ContextValue = {
  defaultContent: [
    {
      name: "Ilustration",
      url: `https://s3-alpha-sig.figma.com/img/459f/a2cd/3974d81249def0e1659f4d8da32ecf72?Expires=1617580800&Signature=e~HwSVvaFtn-VvnzMikR4GzCJx~xi9gUvxEhfv4W-HV8aLMpyt9YHTYY2gpnngkhJEkY0ro1chHEyepOgrdoTSqhTpKn4fwOCb~RpuINttH3aEaQwTsh10Fx3joPm5WXphmsN3132saHK7gCzpx3L2iKVUtJLrHMuXw5M2FFCmbhgrwNDfubY9MPGxml0UpWmpCWpateKhkQC~iYZATzfSBEzlCgwO04cvzD7oWDOleQu0mlkBwuDoLc~ddmqnuAyuwZputFEiReWsL-Th847MoA5k17eZNdYs3fTzjk41pvlqPYsx-vi0oybGeOHfjSHn7vEzn5SKxXRIYtLZRlbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`,
      id: 1,
      rating: 2,
      favorit: 1,
      createdAt: new Date().getDate() - 1,
    },
    {
      name: "design",
      url: `https://s3-alpha-sig.figma.com/img/be96/36fd/b2e4f61e77a7a4af6da69554fed0a371?Expires=1617580800&Signature=Uly10F0px8bCot1ECbjgS83PZgJZz4ok6VvKQBtDsZZELFK1xCmHdoPyIT07KPTJYMJUDtC-Ig6zZ1xIV4WG8gOpDd4TpsNaTpz9Im1TSFfKSf6nyDpywsLyxjjzqPemYtg2n6izfG8CwL-LVbj7BNP2-b46MtwhArMooEQbFtaB3SX17yCQ2MA3UOd93ayWIjpy9Sq5HFEZFLdJ49Jieb4wTm4jgNfJD-YuF5PDct1vX06mt7GipOnguYdG3JgQfHULNKNu-8~KIZGWs3tyOe1Ek8UFwHHqtacEWNT65y7aE9gjXQisgD6KCakaCey1IczCg1uF314~8z0giJakEw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`,
      id: 2,
      rating: 1,
      favorit: 2,
      createdAt: new Date().getDate() - 2,
    },
  ],
  filter(type, callback) {
    let data: any = [];
    if (type === 1) {
      data = this.defaultContent.sort((a, b) => b.rating - a.rating);
    }
    if (type === 2) {
      data = this.defaultContent.sort((a, b) => b.favorit - a.favorit);
    }
    if (type === 3) {
      data = this.defaultContent.sort(
        (a, b) =>
          new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
      );
    }
    callback && callback(data);
  },
};

export const FilterContext = React.createContext(contextValue);
export const FilterContextProvider = FilterContext.Provider;
