import Vue from 'vue';

const globalSettingsScope = '__vueExampleGlobalSettings';
const data = {
  language: 'html',
  jsStyle: 'es5',
  useDirectiveShorthands: false,
  accessToken: '',
  accessTokenName: '',
  accessTokenError: ''
};

if (typeof window !== 'undefined') {
  for (const dataPropertyName in data) {
    const defaultValue = data[dataPropertyName];
    const savedValue = window.localStorage.getItem(
      `${globalSettingsScope}.${dataPropertyName}`
    );
    data[dataPropertyName] = savedValue ? JSON.parse(savedValue) : defaultValue;
  }
}

export default new Vue({
  data,
  watch: {
    ...Object.keys(data)
      .map((dataPropertyName) => ({
        [dataPropertyName](newValue) {
          if (typeof window !== 'undefined') {
            window.localStorage.setItem(
              `${globalSettingsScope}.${dataPropertyName}`,
              JSON.stringify(newValue)
            );
          }
        },
      }))
      .reduce((a, b) => ({ ...a, ...b }), {}),
  },
});
