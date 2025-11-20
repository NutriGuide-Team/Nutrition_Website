// Small enhancement: smooth scroll for internal links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
// ---------- Nutrition cards data ----------
  // ~40 Indian foods + 10 fast foods
  const foods = [
    // --- Indian breakfast / tiffin ---
    {
      name: "Dosa (Plain)",
      tag: "Breakfast",
      badgeType: "",
      serving: "1 medium dosa (~120 g)",
      calories: 165,
      carbs: 25,
      protein: 4,
      fat: 5,
      fiber: 1,
      note: "Fermented rice & lentil batter. Light, crispy and pairs well with sambar and chutney."
    },
    {
      name: "Masala Dosa",
      tag: "Breakfast",
      badgeType: "orange",
      serving: "1 masala dosa (~200 g)",
      calories: 280,
      carbs: 38,
      protein: 6,
      fat: 10,
      fiber: 3,
      note: "Stuffed with spiced potato filling; higher in calories than plain dosa."
    },
    {
      name: "Idly (2 pieces)",
      tag: "Light",
      badgeType: "green",
      serving: "2 idlies (~100 g)",
      calories: 150,
      carbs: 30,
      protein: 5,
      fat: 1,
      fiber: 1,
      note: "Steamed and very easy to digest. Often recommended as a healthier South Indian option."
    },
    {
      name: "Medu Vada",
      tag: "Snack",
      badgeType: "orange",
      serving: "2 vadas (~90 g)",
      calories: 220,
      carbs: 22,
      protein: 6,
      fat: 12,
      fiber: 3,
      note: "Deep-fried lentil fritter; tasty but higher in fat."
    },
    {
      name: "Upma",
      tag: "Breakfast",
      badgeType: "",
      serving: "1 bowl (~150 g)",
      calories: 200,
      carbs: 30,
      protein: 5,
      fat: 6,
      fiber: 3,
      note: "Semolina cooked with vegetables and tempering; medium calorie breakfast."
    },
    {
      name: "Ven Pongal",
      tag: "Comfort",
      badgeType: "",
      serving: "1 bowl (~180 g)",
      calories: 220,
      carbs: 32,
      protein: 7,
      fat: 7,
      fiber: 2,
      note: "Rice and moong dal cooked soft with ghee and pepper; filling and protein rich."
    },

    // --- Rice dishes / main course ---
    {
      name: "Curd Rice",
      tag: "Main",
      badgeType: "green",
      serving: "1 bowl (~180 g)",
      calories: 210,
      carbs: 32,
      protein: 7,
      fat: 5,
      fiber: 1,
      note: "Rice mixed with curd; cooling and easy to digest."
    },
    {
      name: "Sambar Rice",
      tag: "Lunch",
      badgeType: "green",
      serving: "1 plate (~220 g)",
      calories: 280,
      carbs: 46,
      protein: 9,
      fat: 5,
      fiber: 5,
      note: "Rice mixed with lentil-based sambar; balanced with carbs, protein and fiber."
    },
    {
      name: "Veg Biryani",
      tag: "Main",
      badgeType: "",
      serving: "1 plate (~250 g)",
      calories: 380,
      carbs: 65,
      protein: 8,
      fat: 9,
      fiber: 4,
      note: "Spiced rice with mixed vegetables; moderately high in calories."
    },
    {
      name: "Chicken Biryani",
      tag: "Indulgent",
      badgeType: "orange",
      serving: "1 plate (~250 g)",
      calories: 430,
      carbs: 55,
      protein: 18,
      fat: 14,
      fiber: 2,
      note: "Rich, flavourful and higher in calories; best enjoyed occasionally with salad or raita."
    },
    {
      name: "Mutton Biryani",
      tag: "Indulgent",
      badgeType: "red",
      serving: "1 plate (~250 g)",
      calories: 520,
      carbs: 55,
      protein: 21,
      fat: 22,
      fiber: 2,
      note: "Heavier biryani; high fat and calories due to mutton and ghee."
    },
    {
      name: "Veg Pulao",
      tag: "Main",
      badgeType: "",
      serving: "1 plate (~220 g)",
      calories: 330,
      carbs: 55,
      protein: 7,
      fat: 8,
      fiber: 3,
      note: "Fragrant rice cooked with vegetables and mild spices."
    },
    {
      name: "Plain Rice",
      tag: "Staple",
      badgeType: "",
      serving: "1 cup cooked (~150 g)",
      calories: 200,
      carbs: 45,
      protein: 4,
      fat: 0,
      fiber: 1,
      note: "Basic boiled rice; forms the base of many South Indian meals."
    },

    // --- Roti / North Indian style dishes ---
    {
      name: "Chapati (2 pieces)",
      tag: "Main",
      badgeType: "green",
      serving: "2 chapatis (~80 g)",
      calories: 200,
      carbs: 34,
      protein: 6,
      fat: 3,
      fiber: 5,
      note: "Whole wheat rotis; higher in fiber than white rice."
    },
    {
      name: "Parotta (2 pieces)",
      tag: "Indulgent",
      badgeType: "orange",
      serving: "2 parottas (~120 g)",
      calories: 360,
      carbs: 40,
      protein: 6,
      fat: 18,
      fiber: 2,
      note: "Layered maida parotta; tasty but high in fat and refined flour."
    },
    {
      name: "Butter Naan (1 piece)",
      tag: "Indulgent",
      badgeType: "orange",
      serving: "1 naan (~90 g)",
      calories: 260,
      carbs: 38,
      protein: 7,
      fat: 8,
      fiber: 2,
      note: "Tandoor baked flatbread brushed with butter."
    },
    {
      name: "Paneer Butter Masala",
      tag: "Side",
      badgeType: "orange",
      serving: "1 small bowl (~150 g)",
      calories: 320,
      carbs: 12,
      protein: 10,
      fat: 25,
      fiber: 2,
      note: "Creamy tomato gravy with paneer; rich and high in fat."
    },
    {
      name: "Dal Tadka",
      tag: "Side",
      badgeType: "green",
      serving: "1 bowl (~150 g)",
      calories: 190,
      carbs: 25,
      protein: 10,
      fat: 5,
      fiber: 4,
      note: "Yellow lentils tempered with spices; good source of protein and fiber."
    },
    {
      name: "Rajma Chawal",
      tag: "Main",
      badgeType: "",
      serving: "1 plate (~250 g)",
      calories: 400,
      carbs: 65,
      protein: 14,
      fat: 6,
      fiber: 10,
      note: "Kidney bean curry served with rice; filling and protein rich."
    },
    {
      name: "Chole Bhature",
      tag: "Indulgent",
      badgeType: "red",
      serving: "Chole + 2 bhature",
      calories: 600,
      carbs: 70,
      protein: 18,
      fat: 24,
      fiber: 9,
      note: "Deep-fried bread with chickpea curry; heavy and high in fat."
    },

    // --- Snacks / street food ---
    {
      name: "Samosa (2 pieces)",
      tag: "Snack",
      badgeType: "orange",
      serving: "2 samosas (~120 g)",
      calories: 320,
      carbs: 32,
      protein: 6,
      fat: 18,
      fiber: 3,
      note: "Deep-fried pastry with potato filling; popular tea-time snack."
    },
    {
      name: "Pani Puri (6 pieces)",
      tag: "Street Food",
      badgeType: "",
      serving: "6 puris",
      calories: 180,
      carbs: 30,
      protein: 4,
      fat: 6,
      fiber: 2,
      note: "Hollow puris filled with spicy water; light but can be high in salt."
    },
    {
      name: "Bhel Puri",
      tag: "Street Food",
      badgeType: "green",
      serving: "1 plate (~150 g)",
      calories: 220,
      carbs: 40,
      protein: 6,
      fat: 4,
      fiber: 4,
      note: "Puffed rice snack with chutneys and vegetables; lighter street food option."
    },
    {
      name: "Dahi Vada",
      tag: "Snack",
      badgeType: "",
      serving: "2 vadas with curd",
      calories: 260,
      carbs: 30,
      protein: 9,
      fat: 10,
      fiber: 3,
      note: "Lentil dumplings soaked in curd; combination of protein and carbs."
    },

    // --- Simple sides / beverages ---
    {
      name: "Curd (Plain)",
      tag: "Side",
      badgeType: "green",
      serving: "1 small bowl (~100 g)",
      calories: 80,
      carbs: 5,
      protein: 4,
      fat: 5,
      fiber: 0,
      note: "Adds probiotics and protein to meals."
    },
    {
      name: "Lassi (Sweet)",
      tag: "Drink",
      badgeType: "orange",
      serving: "1 glass (~250 ml)",
      calories: 220,
      carbs: 36,
      protein: 7,
      fat: 5,
      fiber: 0,
      note: "Yogurt-based drink sweetened with sugar; refreshing but sugary."
    },

    // -------- Fast foods (10) ----------
    {
      name: "Cheese Pizza",
      tag: "High Calorie",
      badgeType: "red",
      serving: "1 regular slice (~100 g)",
      calories: 270,
      carbs: 33,
      protein: 11,
      fat: 10,
      fiber: 2,
      note: "Refined flour base with cheese and oil; energy-dense comfort food."
    },
    {
      name: "Veg Pizza",
      tag: "Fast Food",
      badgeType: "orange",
      serving: "1 regular slice (~100 g)",
      calories: 250,
      carbs: 32,
      protein: 10,
      fat: 8,
      fiber: 3,
      note: "Similar to cheese pizza with added vegetables."
    },
    {
      name: "Chicken Burger",
      tag: "Fast Food",
      badgeType: "red",
      serving: "1 burger",
      calories: 430,
      carbs: 40,
      protein: 20,
      fat: 20,
      fiber: 3,
      note: "Fried patty with bun and mayo; high in fat and calories."
    },
    {
      name: "Veg Burger",
      tag: "Fast Food",
      badgeType: "orange",
      serving: "1 burger",
      calories: 380,
      carbs: 50,
      protein: 11,
      fat: 12,
      fiber: 4,
      note: "Patty made from potatoes/vegetables; still high in refined carbs."
    },
    {
      name: "French Fries",
      tag: "Fast Food",
      badgeType: "red",
      serving: "Medium portion (~100 g)",
      calories: 320,
      carbs: 40,
      protein: 4,
      fat: 16,
      fiber: 3,
      note: "Deep-fried potatoes; lot of fat and salt."
    },
    {
      name: "Fried Chicken (2 pcs)",
      tag: "Fast Food",
      badgeType: "red",
      serving: "2 medium pieces",
      calories: 420,
      carbs: 12,
      protein: 28,
      fat: 28,
      fiber: 0,
      note: "Crispy fried chicken; good protein but very high in fat."
    },
    {
      name: "White Sauce Pasta",
      tag: "Fast Food",
      badgeType: "orange",
      serving: "1 bowl (~220 g)",
      calories: 420,
      carbs: 55,
      protein: 14,
      fat: 14,
      fiber: 3,
      note: "Creamy pasta; high in refined carbs and fat."
    },
    {
      name: "Soft Drink (Cola)",
      tag: "Drink",
      badgeType: "red",
      serving: "1 can (~330 ml)",
      calories: 140,
      carbs: 35,
      protein: 0,
      fat: 0,
      fiber: 0,
      note: "Sugary drink; adds calories without nutrients."
    },
    {
      name: "Ice Cream (1 scoop)",
      tag: "Dessert",
      badgeType: "orange",
      serving: "1 scoop (~60 g)",
      calories: 140,
      carbs: 16,
      protein: 3,
      fat: 7,
      fiber: 0,
      note: "Sweet dessert; fine occasionally in small portions."
    }
  ];
  // ---------- Render cards ----------
  const grid = document.getElementById("food-grid");
  if (grid) {
    foods.forEach(food => {
      const card = document.createElement("article");
      card.className = "food-card glass";

      const badgeClass =
        food.badgeType === "green"
          ? " food-card__badge--green"
          : food.badgeType === "orange"
          ? " food-card__badge--orange"
          : food.badgeType === "red"
          ? " food-card__badge--red"
          : "";

      card.innerHTML = `
        <header class="food-card__header">
          <h3>${food.name}</h3>
          <span class="food-card__badge${badgeClass}">${food.tag}</span>
        </header>
        <p class="food-card__serving">Serving: ${food.serving}</p>
        <dl class="food-card__stats">
          <div class="stat-row"><dt>Calories</dt><dd>${food.calories} kcal</dd></div>
          <div class="stat-row"><dt>Carbohydrates</dt><dd>${food.carbs} g</dd></div>
          <div class="stat-row"><dt>Protein</dt><dd>${food.protein} g</dd></div>
          <div class="stat-row"><dt>Fat</dt><dd>${food.fat} g</dd></div>
          <div class="stat-row"><dt>Fiber</dt><dd>${food.fiber} g</dd></div>
        </dl>
        <p class="food-card__note">${food.note}</p>
      `;
      grid.appendChild(card);
    });
  }
// Render on page load
window.onload = renderFoods;