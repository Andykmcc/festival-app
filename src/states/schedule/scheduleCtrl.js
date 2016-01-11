require('angular');
var moment = require('moment');
var _ = require('lodash');

module.exports = angular.module('am.fest')
.controller('scheduleCtrl', [function () {
  var Schedule = this;
  var stages = [
    {
      name: 'stage 1',
      description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      events : [
        {
          name: 'event 1',
          dateTime: '01/01/2016',
          acts: [
            {
              name: 'act 1 name',
              description: 'act 1 description.'
            },
            {
              name: 'act 2 name',
              description: 'act 2 description.'
            },
            {
              name: 'act 3 name',
              description: 'act 3 description.'
            }
          ]
        },
        {
          name: 'event 2',
          dateTime: '01/02/2016',
          acts: [
            {
              name: 'act 1 name',
              description: 'act 1 description.'
            },
            {
              name: 'act 2 name',
              description: 'act 2 description.'
            },
            {
              name: 'act 3 name',
              description: 'act 3 description.'
            }
          ]
        },
        {
          name: 'event 3',
          dateTime: '01/03/2016',
          acts: [
            {
              name: 'act 1 name',
              description: 'act 1 description.'
            },
            {
              name: 'act 2 name',
              description: 'act 2 description.'
            },
            {
              name: 'act 3 name',
              description: 'act 3 description.'
            }
          ]
        },
      ]
    },
    {
      name: 'stage 2',
      description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      events : [
        {
          name: 'event 1',
          dateTime: '01/01/2016',
          acts: [
            {
              name: 'act 1 name',
              description: 'act 1 description.'
            },
            {
              name: 'act 2 name',
              description: 'act 2 description.'
            },
            {
              name: 'act 3 name',
              description: 'act 3 description.'
            }
          ]
        },
        {
          name: 'event 2',
          dateTime: '01/02/2016',
          acts: [
            {
              name: 'act 1 name',
              description: 'act 1 description.'
            },
            {
              name: 'act 2 name',
              description: 'act 2 description.'
            },
            {
              name: 'act 3 name',
              description: 'act 3 description.'
            }
          ]
        },
        {
          name: 'event 3',
          dateTime: '01/03/2016',
          acts: [
            {
              name: 'act 1 name',
              description: 'act 1 description.'
            },
            {
              name: 'act 2 name',
              description: 'act 2 description.'
            },
            {
              name: 'act 3 name',
              description: 'act 3 description.'
            }
          ]
        },
      ]
    }
  ];

  function convertEventDateString(event) {
    return moment(event.dateString);
  }
  function cleanStageData (stage) {
    return _.map(stage.events, convertEventDateString);
  }

  Schedule.stages = _.map(stages, cleanStageData);

}]);