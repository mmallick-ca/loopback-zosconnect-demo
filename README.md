# loopback-zosconnect-demo

##Overview
This example demonstrates basic use of [loopback-connector-rest](https://github.com/strongloop/loopback-connector-rest). 

The project has a server which fetches a the names, location and ratings for a list of hotels 
in a city specified by the user. The server has no persistent store and simply calls a REST API
which has been deployed on a z/OS machine using z/OS Connect.

##Running the app

```
$ git clone https://github.com/mmallick-ca/loopback-zosconnect-demo.git
$ cd loopback-zosconnect-demo
$ npm install
$ node .
```
In another shell:
```
$ curl http://localhost:3000/api/HotelInfos/getHotel?location=Toronto

```
You should see a list of Toronto hotels with their names, location and ratings
