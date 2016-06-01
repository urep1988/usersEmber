var data = [
  {
    type: 'userLists',
    id: 1,
    attributes: {
      name: 'Vova',
      age: '25',
      sex: 'male',
      email: 'vova@ukr.net',
      about: "Detail information",
      photo: "http://minionomaniya.ru/wp-content/uploads/2015/09/minion-footbal-player.jpg",
    }
  }, {
    type: 'userLists',
    id: 2,
    attributes: {
      name: 'Vika',
      age: '23',
      sex: 'female',
      email: 'vika@ukr.net',
      about: "Detail information",
      photo: "http://minionomaniya.ru/wp-content/uploads/2015/09/%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD-%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%B8%D1%81%D1%82.jpg",
    }
  }, {
    type: 'userLists',
    id: 3,
    attributes: {
      name: 'Vlad',
      age: '36',
      sex: 'male',
      email: 'vlad@ukr.net',
      about: "Detail information",
      photo: "http://statics.1wallpaper.net/thumbimg/20150320/minions-cartoon-movie-bananas-cute-yellow-big-glass-white-background.jpg",
    }
  }, {
    type: 'userLists',
    id: 4,
    attributes: {
      name: 'Vasya',
      age: '28',
      sex: 'male',
      email: 'vasya@ukr.net',
      about: "Detail information",
      photo: "http://minionomaniya.ru/wp-content/uploads/2015/08/%D0%9C%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD-%D0%91%D0%BE%D0%B1.jpg",
    }
  }, {
    type: 'userLists',
    id: 5,
    attributes: {
      name: 'Valya',
      age: '24',
      sex: 'female',
      email: 'valya@ukr.net',
      about: "Detail information",
      photo: "http://vignette4.wikia.nocookie.net/parody/images/3/35/Stuart_minions_two_thumbs_up.jpg/revision/latest?cb=20151101040700",
    }
  }
];

export default function() {
  this.get('/user-lists/:id', function(db, request) {  
    let id = request.params.id,
      attr = {};
    data.forEach(function (user) {
      if (user.id == id) {
        attr = user.attributes;
      }
    });
    return {
      data: {
        type: 'userLists',
        id: id,
        attributes: attr
      }
    };
  });
  this.get('/user-lists', function() {
    return {
      data: data
    }
  });
}
