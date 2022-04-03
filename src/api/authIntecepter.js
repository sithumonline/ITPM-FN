/* eslint-disable @typescript-eslint/explicit-function-return-type */
export function addAuthInterceptor(instance) {
  instance.interceptors.request.use(
    async function addHeaders(config) {
      const { metadata } = config;
      config.metadata = { ...metadata, startTime: Date.now() };
      if (config.metadata.skipHeaderAdd) {
        return config;
      }

      return config;
    },
    function onError(error) {
      return Promise.reject(error);
    }
  );
}
