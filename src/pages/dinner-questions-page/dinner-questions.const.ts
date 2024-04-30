export const dinnerConsts = {
  questionForGroup: {
    type: "begin_group",
    name: "group_ub6cg02",
    "label::English":
      "What group of food did you have in dinner? (Last 24 hours)",
    "label::Tajik": "Дар бегоҳирӯзӣ кадом гуруҳи хӯрокаҳоро истеъмол кардед?",
    "label::Uzbek": "Kechki ovqatda nima guruh ovqatlar yedingiz?",
    required: "false",
  },
  questionForFood: {
    type: "begin_group",
    name: "group_ub6cg02b",
    "label::English": "What did you have in dinner? (Last 24 hours)",
    "label::Tajik": "Дар бегоҳирӯзӣ кадом хӯрокаҳоро истеъмол кардед?",
    "label::Uzbek": "Kechki ovqatda nima yedingiz?",
    required: "false",
  },
  questionForProduct: {
    type: "begin_group",
    name: "group_ub6cg02c",
    "label::English": "What did you have in dinner? (Last 24 hours)",
    "label::Tajik": "Дар бегоҳирӯзӣ кадом маҳсулотҳоро истеъмол кардед?",
    "label::Uzbek": "Kechki ovqatda nima mahsulotlar yedingiz?",
    required: "false",
  },
  groupTitle: {
    type: "select_multiple DinnerGroup",
    name: "DinnerGroup",
    "label::English": "DinnerGroup",
    "label::Tajik": "Бегоҳирӯзӣ",
    "label::Uzbek": "Kechki ovqat guruhi",
    required: "false",
  },
  foodTitle: {
    type: "select_multiple DinnerFood",
    name: "DinnerFood",
    "label::English": "DinnerFood",
    "label::Tajik": "Хӯрока",
    "label::Uzbek": "Kechki ovqat",
    required: "false",
  },
};
