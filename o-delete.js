'use strict';

console.log('step 1');
{
  const org = 'Test';
  // delete org; // Raises SyntaxError in strict mode
}

console.log('step 2');

{
  const country = {
    name: 'Chile',
    ruler: 'Augusto Pinochet',
    born: 1915,
    alive: false,
  };

  delete country.ruler;
  console.dir({ country });

  delete country.born;
  delete country.population;
  console.dir({ country });
}


{
  const currencies = ['BTC', 'EUR', 'USD'];

  console.log('step 3');
  console.log('currencies[0]:', currencies[0], 0 in currencies);
  console.log('currencies[1]:', currencies[1], 1 in currencies);
  console.log('currencies[2]:', currencies[2], 2 in currencies);

  console.log('step 4');
  delete currencies[1];
  currencies[2] = undefined;
  console.dir({ currencies });

  console.log('step 5');
  console.log('currencies[0]:', currencies[0], 0 in currencies);
  console.log('currencies[1]:', currencies[1], 1 in currencies);
  console.log('currencies[2]:', currencies[2], 2 in currencies);
}
