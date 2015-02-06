modelOne = {
  img: 'stylesheets/images/questionmark.jpg',
  caption: 'What is the meaning of life?',
  id: 1
};
modelTwo = {
  img: 'stylesheets/images/school.jpg',
  caption: 'Go to school to get educated',
  id: 2
};
modelThree = {
  img: 'stylesheets/images/diploma.jpg',
  caption: 'Get an education to receive a diploma',
  id: 3
};
modelFour = {
  img: 'stylesheets/images/briefcase.jpg',
  caption: 'Get a diploma to land a job',
  id: 4
};
modelFive = {
  img: 'stylesheets/images/money.jpg',
  caption: 'Land a job to get paid',
  id: 5
};
modelSix = {
  img: 'stylesheets/images/bill.png',
  caption: 'Get paid to pay the bills',
  id: 6
};
modelSeven = {
  img: 'stylesheets/images/lifestyle.jpg',
  caption: 'Pay bills to support your lifestyle',
  id: 7
};
modelEight = {
  img: 'stylesheets/images/life.jpg',
  caption: 'Have a lifestyle that defines your life',
  id: 8
};

modelArray = [modelOne, modelTwo, modelThree, modelFour, modelFive, modelSix, modelSeven, modelEight]

$(function(){

});

moment = new Moment(modelOne);
momentView = new MomentView({model: moment});
momentsCollection = new MomentsCollection(modelArray);

console.log(modelOne);
console.log('moment', moment);
console.log('models', momentsCollection);