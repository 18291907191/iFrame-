import Mock from 'Mock';

const topOrgin =
  process.env.NODE_ENV === 'production'
    ? 'https://notes.jindll.com'
    : 'http://.168.2.200:8129';

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          Mock,
          topOrgin,
        };
      },
    });
  },
};

export const sendSuccessTip = {
  methods: {
    sendSuccessTip() {
      top.postMessage(
        {
          source: 'content',
          action: 'methodRun',
          funName: 'showMessage',
          params: {
            message: '信息录入成功',
            type: 'success',
          },
        },
        topOrgin,
      );
    },
  },
};
