export const lunchConsts = {
  questionForGroup: {
    type: "begin_group",
    name: "group_ou0gs78",
    "label::English":
      "What group of food did you have in lunch? (Last 24 hours)",
    "label::Tajik": "Дар нисфирӯзӣ кадом гуруҳи хӯрокаҳоро истеъмол кардед?",
    "label::Uzbek": "Tushlikda nima ovqatlar guruhi yedingiz?",
    required: "false",
  },
  questionForFood: {
    type: "begin_group",
    name: "group_ou0gs78b",
    "label::English": "What did you have in lunch? (Last 24 hours)",
    "label::Tajik": "Дар нисфирӯзӣ кадом хӯрокаҳоро истеъмол кардед?",
    "label::Uzbek": "Tushlikda nima yedingiz?",
    required: "false",
  },
  questionForProduct: {
    type: "begin_group",
    name: "group_ou0gs78c",
    "label::English": "What products did you have in lunch? (Last 24 hours)",
    "label::Tajik": "Дар нисфирӯзӣ кадом маҳсулотҳоро истеъмол кардед?",
    "label::Uzbek": "Tushlikda nima mahsulotlar yedingiz?",
    required: "false",
  },
  groupTitle: {
    type: "select_multiple LunchGroup",
    name: "LunchGroup",
    "label::English": "LunchGroup",
    "label::Tajik": "Нисфирӯзӣ",
    "label::Uzbek": "Tushlik guruhi",
    required: "false",
  },
  foodTitle: {
    type: "select_multiple LunchFood",
    name: "LunchFood",
    "label::English": "LunchFood",
    "label::Tajik": "Хӯрока",
    "label::Uzbek": "Tushlik Ovqat",
    required: "false",
  },
};
