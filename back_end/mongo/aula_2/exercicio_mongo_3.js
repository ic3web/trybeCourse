db.superheroes.find({'aspects.height':{ $lt: 180}}).count();
