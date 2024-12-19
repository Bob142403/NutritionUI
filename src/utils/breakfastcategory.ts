const group1Foods = [
  "flour","potatoes","rice","buckwheat","semolina","russian_barley","oatmeal","rice_milk_rice_porridge","rice_rice","b_carrot","b_potatoes0","b_turnip0","b_carrot1","b_potatoes1","b_turnip1","b_carrot2","b_wheat0","b_noodles0","b_potatoes2","b_rice0","b_carrot00","b_noodles1","b_carrot3","b_potatoes3","b_lagmon0","b_carrot4","b_potatoes4","b_beet0","b_carrot5","b_rice1","b_carrot6","b_potatoes5","b_lagmon1","b_rice2","b_carrot50","b_potatoes50","b_beet50","b_rice50","b_carrot51","b_turnip50","b_chapoti0","b_fatir0","b_chapoti0s","b_fatir0s","b_noodles2","b_potatoes00","b_carrot01","b_carrot7","b_potatoes6","b_turnip2","b_beet1","b_potatoes7","b_cake0","b_cake_homemade_bread0","b_potatoes8","b_rice3","b_buckwheat0","b_mung_bean0","b_oats0","b_carrot8","b_potatoes9","b_turnip3","b_rice4","b_buckwheat1","b_mung_bean1","b_potatoes10","b_sambusa0","potatoes_sambusa_l","potatoes_belyash_l","b_belyash0","b_carrots_carrots","b_beets_beets","bakers_bread","chapoti","fatir","sambusa","belyash","qalama","potatoes_sambusa","potatoes_belyash","corn"
];
const group2Foods = [
  "b_peas0","b_beans0","b_peas1","b_lentils0","b_beans1","b_peas2","b_beans2","b_peas3","b_beans3","b_peas4","b_beans4","b_peas5","b_peas6","b_peas7","b_peas50","b_peas8","b_beans5","b_peas9","peas",
];
const group3Foods = [
  "nut","donak","groundnut","sunflower","walnut","almond","pistachios"
];
const group4Foods = [
  "milk","milk_shirchoy","milk_porridge","milk_milk_rice_porridge","b_chakka0","b_chakka1","b_chakka2","kefir","cheese","yogurt","cream","jurgot","qurut","milk_milk","chakka","kefir_kefir","skimmed_milk_(cottage_cheese)"

];

const group5Foods = [
  "b_beef0","b_lamb_meat0","b_goat_meat0","b_beef1","b_lamb_meat1","b_goat_meat1","b_chicken_or_duck_meat0","b_beef2","b_lamb_meat2","b_goat_meat2","b_beef_tripe0","b_beef3","b_lamb_meat3","b_goat_meat3","b_beef4","b_lamb_meat4","b_goat_meat4","b_kallapocha0","b_beef5","b_lamb_meat5","b_goat_meat5","b_chicken_or_duck_meat1","b_beef6","b_lamb_meat6","b_goat_meat6","b_chicken_or_duck_meat2","b_beef50","b_lamb_meat50","b_goat_meat50","b_beef51","b_lamb_meat51","b_goat_meat51","b_beef7","b_lamb_meat7","b_goat_meat7","b_beef8","b_lamb_meat8","b_goat_meat8","b_chicken_or_duck_meat3","b_fish0","b_liver0","b_kidney0","b_heart0","b_beef9","b_lamb_meat9","b_goat_meat9","b_chicken_or_duck_meat4","b_meat_of_wild_birds0","b_rabbit_meat0","b_liver1","b_kidney1","b_heart1","b_beef10","b_lamb_meat10","b_goat_meat10","b_meat_of_wild_birds1","b_rabbit_meat1","b_liver2","b_kidney2","b_heart2","b_beef11","b_lamb_meat11","b_goat_meat11","b_meat_of_wild_birds2","b_rabbit_meat2","b_chicken_or_duck_meat5","b_liver3","b_kidney3","b_heart3","b_beef12","b_lamb_meat12","b_goat_meat12","b_chicken_or_duck_meat6","b_liver4","b_kidney4","b_heart4","b_beef13","b_lamb_meat13","b_goat_meat13","b_chicken_or_duck_meat7","b_liver5","b_kidney5","b_heart5","b_beef14","b_lamb_meat14","b_goat_meat14","b_chicken_or_duck_meat8","b_beef15","b_lamb_meat15","b_goat_meat15","b_beef16","b_lamb_meat16","b_goat_meat16","b_chicken_or_duck_meat9","b_beef17","b_lamb_meat17","b_goat_meat17","meat_sambusa_l","meat_belyash_l","liver_belyash_l","meat_sambusa","meat_belyash","liver_belyash"

];

const group6Foods = ["egg","egg_boiled_egg","b_egg00","b_egg0","b_egg01","b_egg02","b_egg51","b_egg1","b_egg2"];
const group7Foods = [
  "mint1","allium_rosenbachianum","green","b_allium_rosenbachianum0","b_green_onion0","b_coriander0","b_like0","b_basil0","b_green_garlic0","b_spinach0","b_blindweed_(capsella_bursa_pastoris)_p","b_ginger_(jambil)0","b_allium_rosenbachianum1","b_green_onion_leaves0","b_green_garlic_leaf0","b_green_onion_leaves1","b_coriander1","b_dill0","b_basil1","b_green_garlic_leaf1","b_spinach1","b_blindweed_(capsella_bursa_pastoris)_q","b_ginger(jambil)1","b_allium_rosenbachianum2","b_green_onion_leaves1s","b_coriander1s","b_dill0s","b_basil1s","b_green_garlic_leaf1s","b_spinach1s","b_blindweed_(capsella_bursa_pastoris)_qs","b_ginger(jambil)1s","b_allium_rosenbachianum2s","green_sambusa_l","peppermint","dill","basil","coriander","ginger_(jambil)","spinach","blindweed(capsella_bursa_pastoris)","green_onion_leaves","green_garlic_leaf","green_cholob","green_sambusa"
];
const group8Foods = [
  "tomatoes","egg","pumpkin","egg_boiled_egg","b_carrot","b_pumpkin0","b_carrot1","b_egg00","b_carrot2","b_egg0","b_carrot00","b_carrot3","b_carrot4","b_carrot5","b_egg01","b_carrot6","b_egg02","b_egg51","b_carrot50","b_carrot51","b_tomatoes0","b_tomatoes0s","b_pumpkin1","b_carrot01","b_carrot7","b_egg1","b_pumpkin2","b_carrot8","b_egg2","pumpkin_sambusa_l","b_salad_tomatoes","b_carrots_carrots","melon","watermelon","tomatoes_cholob","pumpkin_sambusa","dry_apricot"

];
const group9Foods = [
  "onion","sweet_pepper","b_onion0","b_onion1","b_onion2","b_onion3","b_onion4","b_onion5","b_onion6","b_onion7","b_onion8","b_cabbage0","b_onion9","b_garlic0","b_sweet_pepper_0","b_onion10","b_onion11","b_cauliflower50","b_cabbage50","b_sweet_pepper51","b_onion51","b_cabbage51","b_sweet_pepper52","b_onion52","b_eggplant50","b_onion12","b_cucumber0","b_onion12s","b_cucumber0s","b_onion00","b_onion13","b_onion14","b_sweet_pepper_1","b_eggplant0","b_onion01","b_onion15","b_onion16","b_sweet_pepper_2","b_onion17","b_onion18","b_onion19","b_onion20","b_onion21","b_onion22","b_mushroom0","onion_sambusa_l","b_salad_cucumber","b_salad_onion","b_radish_radish","b_radish_onion","b_cabbage_cabbage","b_cabbage_onion","b_carrots_onion","b_beets_onion","cucumber","onion_sambusa","corn"

];
const group10Foods = [
  "raisins","watermelon","apple","grapes","banana","tangerine","orange","pear","pomegranate","strawberry","mulberry","persimmon"

];
const group11Foods = [
  "sweets_(sugar_sand,_sugar_cubes)","wet_halva","sesame_halva","simalak","nisholo","sunflower_halva","jam","chocolates","cakes","cookies","bun","sweets_(sugar,_sugar_cubes)"

];
const group12Foods = [
  "butter","butter_shirchoy","oil","butter_milk_soup_with_pumpkin","butter_milk_rice_porridge","b_oil0","b_oil1","b_oil2","b_oil3","b_oil4","b_oil5","b_hot_pepper0","b_pepper0","b_flavorings0","b_herbs0","b_oil6","b_fat0","b_buttock0","b_pepper1","b_oil7","b_fat1","b_pepper2","b_oil51","b_oil52","b_buttock50","b_oil53","b_oil8","b_butter0","b_oil9","b_butter1","b_pepper3","b_oil10","b_oil11","b_fat2","b_buttock1","b_oil12","b_fat3","b_buttock2","b_oil13","b_fat4","b_buttock3","b_oil14","b_oil15","b_oil16","b_buttock4","b_oil17","b_oil18","b_oil20","buttock_sambusa_l","fat_sambusa_l","b_oil21","iodized_salt","hot_pepper","pepper","butter_butter","oil_fatir","oil_sambusa","buttock_sambusa","fat_sambusa","oil_belyash","butter_belyash","zeroboy","spices_and_herbs"

];
const group13Foods = [
  "tea1","coffee","compote","juice","tea_tea"

];

export const breakfastcategory = (data: string[]) => {
  const count = (text: string) => +data.includes(text);

  const group1 = group1Foods.reduce((sum, food) => sum + count(food), 0);
  const group2 = group2Foods.reduce((sum, food) => sum + count(food), 0);
  const group3 = group3Foods.reduce((sum, food) => sum + count(food), 0);
  const group4 = group4Foods.reduce((sum, food) => sum + count(food), 0);
  const group5 = group5Foods.reduce((sum, food) => sum + count(food), 0);
  const group6 = group6Foods.reduce((sum, food) => sum + count(food), 0);
  const group7 = group7Foods.reduce((sum, food) => sum + count(food), 0);
  const group8 = group8Foods.reduce((sum, food) => sum + count(food), 0);
  const group9 = group9Foods.reduce((sum, food) => sum + count(food), 0);
  const group10 = group10Foods.reduce((sum, food) => sum + count(food), 0);
  const group11 = group11Foods.reduce((sum, food) => sum + count(food), 0);
  const group12 = group12Foods.reduce((sum, food) => sum + count(food), 0);
  const group13 = group13Foods.reduce((sum, food) => sum + count(food), 0);

  return {
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
    group11,
    group12,
    group13,
  };
};
