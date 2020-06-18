"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameAction = void 0;

var _Constants = _interopRequireDefault(require("../Constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_ONE = "https://www.atg.se/services/racinginfo/v1/api/products";
var API_TWO = "https://www.atg.se/services/racinginfo/v1/api/games";

var gameAction = function gameAction(gameType) {
  return function (dispatch) {
    fetch("".concat(API_ONE, "/").concat(gameType)).then(function (res) {
      var data = res.json();
      return data;
    }).then(function (data) {
      // check if there's Upcoming or not so that we use Result id to fitch our data
      var array = data.upcoming ? data.upcoming : data.results;
      var closest = array[0].id;
      fetch("".concat(API_TWO, "/").concat(closest)).then(function (res) {
        var dataFetched = res.json();
        return dataFetched;
      }).then(function (dataFetched) {
        dispatch({
          type: _Constants["default"].FETCH_GAME_DATA_SUCCESS,
          data: dataFetched.races,
          gameType: gameType
        });
      })["catch"](function (err) {
        dispatch({
          type: _Constants["default"].FETCH_GAME_DATA_FAILURE,
          err: err
        });
      });
    })["catch"](function (err) {
      dispatch({
        type: _Constants["default"].FETCH_GAME_DATA_FAILURE,
        err: err
      });
    });
  };
};

exports.gameAction = gameAction;