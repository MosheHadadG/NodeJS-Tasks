//  restaurant name
//  a sub document called address that includes:
// • a city
// • a street
// • An array of coordinates e.g. [-77,564, 40.677]
//  a type of cuisine
//  a boolean if it kosher or not
//  An array of at least 3 reviews that include:
// • a date
// • an integer score

{
  name: 'Herzel 50',
  adress: {
    city: 'Ramla',
    street: 'Herzel 50',
    coordinates: [80.443, 23.133],
    typeOfCuisine: 'shawarma',
    kosher: true,
    score: 8
  }
},
{
  name: 'Oved bakfar',
  adress: {
    city: 'Or Yehuda',
    street: 'Khativat Alexandroni 2',
    coordinates: [99,564, 10.677],
    typeOfCuisine: 'BBQ',
    kosher: true,
    score: 10
  }
},
{
  name: 'Abdullah Restaurant',
  adress: {
    city: 'Or Yehuda',
    street: 'Haim yachil 18',
    coordinates: [-77,564, 40.677],
    typeOfCuisine: 'BBQ',
    kosher: true,
    score: 9
  }
},
{
  name: 'The Garage',
  adress: {
    city: 'Rishon LeZion',
    street: 'Herzel 151',
    coordinates: [17,564, 40.677],
    typeOfCuisine: 'burgers restaurant',
    kosher: false,
    score: 8
  }
},
{
  name: 'Macdonalds',
  adress: {
    city: 'Rishon LeZion',
    street: 'Herzel 151',
    coordinates: [17,564, 40.677],
    typeOfCuisine: 'burgers restaurant',
    kosher: false,
    score: 8
  }
}