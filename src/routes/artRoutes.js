const express = require('express');

const artRoute = express.Router();

const router = navs => {
  const arts = [
    {
      id: 1,
      name: 'Art 1',
      description:
        'This is a collection of or single photo of somewhat pretty Art i could find around',
      image: '/images/art/art-20.jpg'
    },
    {
      id: 2,
      name: 'Art 2',
      description:
        'This is a collection of or single photo of somewhat pretty Art i could find around',
      image: '/images/art/art-21.jpg'
    },
    {
      id: 3,
      name: 'Art 3',
      description:
        'This is a collection of or single photo of somewhat pretty Art i could find around',
      image: '/images/art/art-22.jpg'
    },
    {
      id: 4,
      name: 'Art 4',
      description:
        'This is a collection of or single photo of somewhat pretty Art i could find around',
      image: '/images/art/art-23.jpg'
    },
    {
      id: 5,
      name: 'Art 5',
      description:
        'This is a collection of or single photo of somewhat pretty Art i could find around',
      image: '/images/art/art-24.jpg'
    },
    {
      id: 6,
      name: 'Art 6',
      description:
        'This is a collection of or single photo of somewhat pretty Art i could find around',
      image: '/images/art/art-25.jpg'
    },
    {
      id: 7,
      name: 'Art 7',
      description:
        'This is a collection of or single photo of somewhat pretty Art i could find around',
      image: '/images/art/art-26.jpg'
    },
    {
      id: 8,
      name: 'Art 8',
      description:
        'This is a collection of or single photo of somewhat pretty Art i could find around',
      image: '/images/art/art-27.jpg'
    },
    {
      id: 9,
      name: 'Art 9',
      description:
        'This is a collection of or single photo of somewhat pretty Art i could find around',
      image: '/images/art/art-28.jpg'
    },
    {
      id: 10,
      name: 'Art 10',
      description:
        'This is a collection of or single photo of somewhat pretty Art i could find around',
      image: '/images/art/art-30.jpg'
    }
  ];
  artRoute.route('/').get((req, res) => {
    res.render('arts', {
      navs,
      arts
    });
  });

  artRoute.route('/:id').get((req, res) => {
    res.render('art', {
      navs,
      art: arts.find(a => a.id == req.params.id)
    });
  });

  return artRoute;
};

module.exports = router;
