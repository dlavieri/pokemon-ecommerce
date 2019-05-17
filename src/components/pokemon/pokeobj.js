import pikachu from '../../img/pikachu-2.svg';
import abra from '../../img/abra.svg';
import bellsprout from '../../img/bellsprout.svg';
import bulbasaur from '../../img/bullbasaur.svg';
import caterpie from '../../img/caterpie.svg';
import charmander from '../../img/charmander.svg';
import dratini from '../../img/dratini.svg';
import eevee from '../../img/eevee.svg';
import egg from '../../img/egg.svg';
import jigglypuff from '../../img/jigglypuff.svg';
import mankey from '../../img/mankey.svg';
import meowth from '../../img/meowth.svg';
import mew  from '../../img/mew.svg';
import pidgey from '../../img/pidgey.svg';
import rattata from '../../img/rattata.svg';
import psyduck from '../../img/psyduck.svg';
import snorlax from '../../img/snorlax.svg';
import squirtle from '../../img/squirtle.svg';
import venonat from '../../img/venonat.svg';
import weedle from '../../img/weedle.svg';
import zubat from '../../img/zubat.svg';

export const types = [
  'Electric',
  'Grass',
  'Water',
  'Psychic',
  'Normal',
  'Bug',
  'Dragon',
  'Fire',
  'Fighting',
  'Flying'
]

export const pokedex = [
  {
    keyValue: 0,
    name: 'Abra',
    type: 'Psychic',
    img: abra,
    price: 40,
    inventory: 1,
    description: 'Using its psychic power is such a strain on its brain that it needs to sleep for 18 hours a day.',
  },
  {
    keyValue: 1,
    name: 'Bellsprout',
    type: 'Grass',
    img: bellsprout,
    price: 20,
    inventory: 2,
    description: 'It prefers hot and humid environments. It is quick at capturing prey with its vines.',
  },
  {
    keyValue: 2,
    name: 'Bulbasaur',
    type: 'Grass',
    img: bulbasaur,
    price: 40,
    inventory: 1,
    description: 'For some time after its birth, it grows by gaining nourishment from the seed on its back.',
  },
  {
    keyValue: 3,
    name: 'Caterpie',
    type: 'Bug',
    img: caterpie,
    price: 15,
    inventory: 3,
    description: 'It releases a stench from its red antenna to repel enemies. It grows by molting repeatedly.',
  },
  {
    keyValue: 4,
    name: 'Charmander',
    type: 'Fire',
    img: charmander,
    price: 40,
    inventory: 1,
    description: 'The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.',
  },
  {
    keyValue: 5,
    name: 'Dratini',
    type: 'Dragon',
    img: dratini,
    price: 60,
    inventory: 1,
    description: 'It is called the Mirage Pokémon because so few have seen it. Its shed skin has been found.',
  },
  {
    keyValue: 6,
    name: 'Eevee',
    type: 'Normal',
    img: eevee,
    price: 45,
    inventory: 2,
    description: 'Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions.',
  },
  {
    keyValue: 7,
    name: 'Egg',
    type: 'Normal',
    img: egg,
    price: 5,
    inventory: 5,
    description: 'I wonder what it is?',
  },
  {
    keyValue: 8,
    name: 'Jigglypuff',
    type: 'Normal',
    img: jigglypuff,
    price: 15,
    inventory: 2,
    description: 'Looking into its cute, round eyes makes it start singing a song so pleasant listeners cant help but fall asleep.',
  },
  {
    keyValue: 9,
    name: 'Mankey',
    type: 'Fighting',
    img: mankey,
    price: 20,
    inventory: 1,
    description: 'It lives in treetop colonies. If one becomes enraged, the whole colony rampages for no reason.',
  },
  {
    keyValue: 10,
    name: 'Meowth',
    type: 'Normal',
    img: meowth,
    price: 15,
    inventory: 1,
    description: 'It is nocturnal in nature. If it spots something shiny, its eyes glitter brightly.',
  },
  {
    keyValue: 11,
    name: 'Mew',
    type: 'Psychic',
    img: mew,
    price: 100,
    inventory: 1,
    description: 'A Pokémon created by recombining Mews genes. Its said to have the most savage heart among Pokemon.',
  },
  {
    keyValue: 12,
    name: 'Pidgey',
    type: 'Flying',
    img: pidgey,
    price: 15,
    inventory: 3,
    description: 'It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.',
  },
  {
    keyValue: 13,
    name: 'Pikachu',
    type: 'Electric',
    img: pikachu,
    price: 40,
    inventory: 1,
    description: 'It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state.',
  },
  {
    keyValue: 14,
    name: 'Rattata',
    type: 'Normal',
    img: rattata,
    price: 15,
    inventory: 3,
    description: 'It searches for food all day. It gnaws on hard objects to wear down its fangs, which grow constantly during its lifetime.',
  },
  {
    keyValue: 15,
    name: 'Psyduck',
    type: 'Water',
    img: psyduck,
    price: 20,
    inventory: 2,
    description: 'When headaches stimulate its brain cells, which are usually inactive, it can use a mysterious power.',
  },
  {
    keyValue: 16,
    name: 'Snorlax',
    type: 'Normal',
    img: snorlax,
    price: 55,
    inventory: 1,
    description: 'When its belly is full, it becomes too lethargic to even lift a finger, so it is safe to bounce on its belly.',
  },
  {
    keyValue: 17,
    name: 'Squirtle',
    type: 'Water',
    img: squirtle,
    price: 40,
    inventory: 1,
    description: 'It shelters itself in its shell then strikes back with spouts of water at every opportunity.',
  },
  {
    keyValue: 18,
    name: 'Venonat',
    type: 'Bug',
    img: venonat,
    price: 15,
    inventory: 1,
    description: 'Its big eyes are actually clusters of tiny eyes. At night, its kind is drawn by light.',
  },
  {
    keyValue: 19,
    name: 'Weedle',
    type: 'Bug',
    img: weedle,
    price: 15,
    inventory: 2,
    description: 'It eats its weight in leaves every day. It fends off attackers with the needle on its head.',
  },
  {
    keyValue: 20,
    name: 'Zubat',
    type: 'Flying',
    img: zubat,
    price: 15,
    inventory: 1,
    description: 'It does not need eyes, because it emits ultrasonic waves to check its surroundings while it flies.',
  }
];

export const inventory = pokedex.map(obj => [{keyValue: obj.keyValue, inventory: obj.inventory}]);
