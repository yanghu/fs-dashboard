# Flight Dashboard

![Deploy to Github Pages](https://github.com/yanghu/fs-dashboard/workflows/Deploy%20to%20Github%20Pages/badge.svg)

Flight dashboard web app with instruments, avionics and AP data/controls,
written in Angular.

[Demo page](https://yanghu.github.io/flight-pages). The demo page use fake data
to demonstrate features.

---

## Installation

### Web app install

You can visit [demo] page to load the web app to your browser, and connect to
the backend server running on your local PC.

TODO: Add instructions here to serve the web app from local, or embed the web
app into the pc client.

### PC side client

The web app receives data from a websocket server. Server side program for MSFS
2020 can be found at https://github.com/yanghu/FlightPanel.

You can also setup your own data server for other games, and serve simulation
data for other games. See [data protocol](#data-protocol) for the data
definition.

---

## Features

The dashboard was designed to be used as a secondary screen, so simmers do not
need to check the game screen or input using mouse, which breaks immersion.

Currently, instruments features are complete, the other panels are planned and
in progress.

### Instruments

The six-pack instruments status:

- Airspeed: Airspeed working. True airspeed WIP. Dial is for Cessna 172 only.
- Attitude: Fully working.
- Altimeter: Fully working. Pressure is in inHg only.
- Turn indicator: Fully working.
- Heading indicator: Fully working, with 2 course beacons with deviation error
  indication.

### Aircraft status

- Fuel/RPM/Battery and other aircraft status gauges.

### Radio

Work in progress. Planned features:

- Nav/Com radio display/control.
- ATC input/output panel

### Auto pilot

- AP controls and status display

### Navigation/Flight info

- Flight plan information.
- Waypoints, distance, ETA

---

## Implementation details

### Data protocol

The data protocol is defined in `SimData`
[proto message](src/proto/sim_data.proto). The websocket server simply send
serialized protobuf binary data to the webapp.

---

## Thanks

Thanks to
[Skyhawk Flight Instruments](https://github.com/uw-ray/Skyhawk-Flight-Instruments)
project for the instrument SVG resources.

Thanks to Sébastien Matton whose
[project](https://github.com/sebmatton/jQuery-Flight-Indicators) inspired me to
use CSS to animate flight instruments.
