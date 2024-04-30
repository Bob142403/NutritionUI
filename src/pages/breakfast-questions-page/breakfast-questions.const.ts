export const breakFastConsts = {
  questionForGroup: {
    type: "begin_group",
    name: "group_xg79k42",
    "label::English":
      "What group of food did you have in breakfast? (Last 24 hours)",
    "label::Tajik": "Дар наҳорӣ кадом гуруҳи хӯрокаҳоро истеъмол кардед?",
    "label::Uzbek": "Nonushtada nima guruh avqotlar yedingiz?",
    required: "false",
  },
  questionForFood: {
    type: "begin_group",
    name: "group_xg79k42b",
    "label::English": "What did you have in breakfast? (Last 24 hours)",
    "label::Tajik": "Дар наҳорӣ кадом хӯрокаҳоро истеъмол кардед?",
    "label::Uzbek": "Nonushtada nima yedingiz?",
    required: "false",
  },
  questionForProduct: {
    type: "begin_group",
    name: "group_xg79k42c",
    "label::English":
      "What products did you have in breakfast? (Last 24 hours)",
    "label::Tajik": "Дар наҳорӣ кадом маҳсулотҳоро истеъмол кардед?",
    "label::Uzbek": "Nonushtada nima mahsulotlar yedingiz?",
    required: "false",
  },
  groupTitle: {
    type: "select_multiple BreakfastGroup",
    name: "BreakfastGroup",
    "label::English": "BreakfastGroup",
    "label::Tajik": "Наҳорӣ",
    "label::Uzbek": "Nonushta guruhi",
    required: "false",
  },
  foodTitle: {
    type: "select_multiple Food",
    name: "Food",
    "label::English": "Food",
    "label::Tajik": "Хӯрока",
    "label::Uzbek": "Ovqat",
    required: "false",
  },
};
