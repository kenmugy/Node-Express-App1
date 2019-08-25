const express = require('express');

const animalRoutes = express.Router();

const router = navs => {
  const animals = [
    {
      id: 1,
      name: 'Bear',
      description:
        'This is a brown bear it eats meat and its kids are called cubs',
      image: '/images/animals/bear.jpg'
    },
    {
      id: 2,
      name: 'Duck',
      description:
        'This is a duck, its not really an animal but a poultry bird and its kids are chicks from eggs',
      image: '/images/animals/duck.jpg'
    },
    {
      id: 3,
      name: 'eagle',
      description:
        'This is an American eagle, also not an animal but a bird its eats flesh and fish',
      image: '/images/animals/eagle.jpg'
    },
    {
      id: 4,
      name: 'Lion among Sheep',
      description:
        'This is an image of a lion among sheep, a depiction of night and day',
      image: '/images/animals/lion-seep.jpg'
    },
    {
      id: 5,
      name: 'Lion in Yingyang form',
      description:
        'This is a face of a lion with a ying yang depiction, a clear show of strength and what it means to be the king of the jungle',
      image: '/images/animals/lion-yingyang.jpg'
    },
    {
      id: 6,
      name: 'Monkey',
      description:
        'This a monkey, its belongs to the same class as us humans and we are soo closely related to these apes',
      image: '/images/animals/monkey.jpg'
    },
    {
      id: 7,
      name: 'Snake',
      description:
        'This is a black and white depiction of the serpent, porbably a pythoon or cobra from first view',
      image: '/images/animals/snake.jpg'
    },
    {
      id: 8,
      name: 'Teddy bear',
      description:
        'This is a stuffed teddy bear, it should invoke memories of the movie TED',
      image: '/images/animals/teddybear.jpg'
    },
    {
      id: 9,
      name: 'wolf',
      description:
        'This is a the cunning master of the forest, and are alwys found in packs during hunts',
      image: '/images/animals/wolf.jpg'
    }
  ];
  animalRoutes.route('/').get((req, res) => {
    res.render('animals', {
      navs,
      animals
    });
  });

  animalRoutes.route('/:id').get((req, res) => {
    res.render('animal', {
      navs,
      animal: animals.find(a => a.id == req.params.id)
    });
  });

  return animalRoutes;
};

module.exports = router;
