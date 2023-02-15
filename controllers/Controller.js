const { Menu, Client, Slide } = require("../models/models");

class Controllers {
  async getMenus(req, res) {
    const menus = await Menu.findAll();

    return res.send(menus);
  }

  async postClient(req, res) {
    const newClient = await Client.create({ ...req.body });

    return res.send(true);
  }

  async getClients(req, res) {
    const clients = await Client.findAll();

    return res.send(clients);
  }

  async getSlides(req, res) {
    const slides = await Slide.findAll();

    return res.send(slides);
  }

  addTestsEntries(req, res) {
    const new_menus = [
      {
        img: "img/tabs/vegy.jpg",
        altimg: "vegy",
        title: "Меню 'Фитнес'",
        descr:
          "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        price: 9,
      },
      {
        img: "img/tabs/post.jpg",
        altimg: "post",
        title: "Меню 'Постное'",
        descr:
          "Меню 'Постное' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
        price: 14,
      },
      {
        img: "img/tabs/elite.jpg",
        altimg: "elite",
        title: "Меню 'Премиум'",
        descr:
          "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        price: 21,
      },
    ];
    Menu.bulkCreate(new_menus);

    const new_slides = [
      {
        img: "img/slider/pepper.jpg",
        altimg: "pepper",
      },
      {
        img: "img/slider/food-12.jpg",
        altimg: "food",
      },
      {
        img: "img/slider/olive-oil.jpg",
        altimg: "oil",
      },
      {
        img: "img/slider/paprika.jpg",
        altimg: "paprika",
      },
    ];
    Slide.bulkCreate(new_slides);

    return res.send(true);
  }
}

module.exports = new Controllers();
