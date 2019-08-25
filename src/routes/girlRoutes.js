const express = require('express');

const girlRouter = express.Router();

const router = navs => {
  const girls = [
    {
      id: 1,
      name: 'Pretty 1',
      description:
        'This is a collection of or single photo of somewhat pretty girls i could find around',
      image: '/images/girls/pretty-1.jpg'
    },
    {
      id: 2,
      name: 'Pretty 2',
      description:
        'This is a collection of or single photo of somewhat pretty girls i could find around',
      image: '/images/girls/pretty-2.jpg'
    },
    {
      id: 3,
      name: 'Pretty 3',
      description:
        'This is a collection of or single photo of somewhat pretty girls i could find around',
      image: '/images/girls/pretty-3.jpg'
    },
    {
      id: 4,
      name: 'Pretty 4',
      description:
        'This is a collection of or single photo of somewhat pretty girls i could find around',
      image: '/images/girls/pretty-4.jpg'
    },
    {
      id: 5,
      name: 'Pretty 5',
      description:
        'This is a collection of or single photo of somewhat pretty girls i could find around',
      image: '/images/girls/pretty-5.jpg'
    },
    {
      id: 6,
      name: 'Pretty 6',
      description:
        'This is a collection of or single photo of somewhat pretty girls i could find around',
      image: '/images/girls/pretty-6.jpg'
    },
    {
      id: 7,
      name: 'Pretty 7',
      description:
        'This is a collection of or single photo of somewhat pretty girls i could find around',
      image: '/images/girls/pretty-7.jpg'
    },
    {
      id: 8,
      name: 'Pretty 8',
      description:
        'This is a collection of or single photo of somewhat pretty girls i could find around',
      image: '/images/girls/pretty-8.jpg'
    },
    {
      id: 9,
      name: 'Pretty 9',
      description:
        'This is a collection of or single photo of somewhat pretty girls i could find around',
      image: '/images/girls/pretty-9.jpg'
    },
    {
      id: 10,
      name: 'Pretty 10',
      description:
        'This is a collection of or single photo of somewhat pretty girls i could find around',
      image: '/images/girls/pretty-10.jpg'
    }
  ];
  girlRouter.route('/').get((req, res) => {
    res.render('girls', {
      navs,
      girls
    });
  });

  girlRouter.route('/:id').get((req, res) => {
    res.render('girl', {
      navs,
      girl: girls.find(g => g.id == req.params.id)
    });
  });

  return girlRouter;
};

module.exports = router;
