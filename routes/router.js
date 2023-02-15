const router = new require("express")();

const {
  getMenus,
  getSlides,
  getClients,
  postClient,
  addTestsEntries,
} = require("../controllers/Controller");

router.get("/menus", getMenus);
router.get("/slides", getSlides);
router.get("/clients", getClients);
router.post("/client", postClient);

router.get("/addTestsEntries", addTestsEntries);

module.exports = router;
