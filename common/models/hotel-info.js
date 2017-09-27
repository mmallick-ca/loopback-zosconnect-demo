'use strict';

module.exports = function(HotelInfo) {
   HotelInfo.afterRemote('getHotel', function(ctx,hotel,next){
        var hotel_list_out = ctx.result;
        hotel_list_out.map(function (hotels) {
           hotels.map(function (hotel) {
             delete hotel.GEO;
             return hotel;
           });
          return hotels;
        });
        ctx.result = hotel_list_out;
        next();
   });
};
