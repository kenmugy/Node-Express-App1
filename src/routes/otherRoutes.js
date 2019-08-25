const express = require('express');

const otherRouter = express.Router();

const router = navs => {
  const others = [
    {
      id: 1,
      name: 'Anccessory 1',
      description:
        'This is a collection of or single photo of somewhat pretty girls i could find around',
      image: '/images/other/accessories.jpg'
    },
    {
      id: 2,
      name: 'Anccessory 2',
      description:
        'This is a collection of or single photo of somewhat pretty other i could find around',
      image: '/images/other/accessories2.jpg'
    },
    {
      id: 3,
      name: 'Art Flower 3',
      description:
        'This is a collection of or single photo of somewhat pretty other i could find around',
      image: '/images/other/art-flower.jpg'
    },
    {
      id: 4,
      name: 'Art Frog 4',
      description:
        'This is a collection of or single photo of somewhat pretty other i could find around',
      image: '/images/other/art-frog.jpg'
    },
    {
      id: 5,
      name: 'Art House 5',
      description:
        'This is a collection of or single photo of somewhat pretty other i could find around',
      image: '/images/other/art-house.jpg'
    },
    {
      id: 6,
      name: 'Banana 6',
      description:
        'This is a collection of or single photo of somewhat pretty other i could find around',
      image: '/images/other/banana.jpg'
    },
    {
      id: 7,
      name: 'Redbull 7',
      description:
        'This is a collection of or single photo of somewhat pretty other i could find around',
      image: '/images/other/redbull.jpg'
    },
    {
      id: 8,
      name: 'Running man 8',
      description:
        'This is a collection of or single photo of somewhat pretty other i could find around',
      image: '/images/other/runin-man.jpg'
    },
    {
      id: 9,
      name: 'Umbrella 9',
      description:
        'This is a collection of or single photo of somewhat pretty other i could find around',
      image: '/images/other/umbrella-snow.jpg'
    },
    {
      id: 10,
      name: 'Water 10',
      description:
        'This is a collection of or single photo of somewhat pretty other i could find around',
      image: '/images/other/water.jpg'
    }
  ];

  otherRouter.route('/').get((req, res) => {
    res.render('others', {
      navs,
      others
    });
  });

  otherRouter.route('/:id').get((req, res) => {
    res.render('other', {
      navs,
      other: others.find(g => g.id == req.params.id)
    });
  });

  return otherRouter;
};

module.exports = router;
