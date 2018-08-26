// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clash_royal: {
    endpoint: 'https://api.clashroyale.com/',
    version_1: 'v1/',
    resources: {
      clans: {
        clans: 'clans/',
        members: '/members',
        war_log: '/warlog',
        current_war: '/currentwar'
      },
      players: {
        players: 'players/',
        upcoming_chests: '/upcomingchests',
        battle_log: '/battlelog'
      }
    }
  },
  access_token: 'Bearer myToken'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
