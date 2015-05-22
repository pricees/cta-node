# cta-node

# Project Name

Chicago Transit Authority - Bus and Train Tracker - Node JS module 

## Special Note

First node project. All feedback is appreciated

## Installation

TODO: Describe the installation process

## Usage

```javascript 
  var cta = require("cta-node");
  cta.init({ trainApiKey: "abc...", busApiKey: "123..."});
  cta.train.lStops.byStationName('wilson');
  // array of stops
```
  cta.train.arrivals.byStationNameAndColor('western', 'blue');
  // array of arrivals

```javascript 
    cta.lStops = require("cta");
    cta.lStops.byStopName('Western')
    // [ arrray of Western stops]

    cta.lStops.byStopName('western', 'orange')
    // [ arrray of Western, Orange line stops]
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license
