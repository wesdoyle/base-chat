// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyChEJrdHyosxzjL6eDZI_oh270YgR5FMZM',
    authDomain: 'chat-demo-14a40.firebaseapp.com',
    databaseURL: 'https://chat-demo-14a40.firebaseio.com',
    projectId: 'chat-demo-14a40',
    storageBucket: 'chat-demo-14a40.appspot.com',
    messagingSenderId: '207417901279'
  }
};
