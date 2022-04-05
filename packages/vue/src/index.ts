import {
  App,
  PropType,
  h,
  shallowRef,
  defineComponent,
  onMounted,
  onBeforeUnmount,
  watch,
} from 'vue-demi';
import { Watermark as BaseWatermark, WatermarkOptions } from '@pansy/watermark';

export const Watermark = defineComponent({
  name: 'Watermark',
  props: {
    // style,
    // className,
    options: {
      type: Object as PropType<WatermarkOptions>,
      default: () => ({}),
    },
    visible: {
      type: Boolean,
      default: true,
    },
    isBody: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const assign = Object.assign;
    const root = shallowRef<HTMLElement>();
    const watermark = shallowRef<BaseWatermark>();

    function render() {
      if (!watermark.value) {
        watermark.value = new BaseWatermark(
          assign({}, props.options, {
            // containerStyle: style,
            container: !props.isBody ? root.value : undefined,
          })
        );

        if (!props.visible) {
          watermark.value.hide();
        }
      } else {
        watermark.value.update(
          assign({}, props.options, {
            // containerStyle: style,
          })
        );
      }
    }

    watch(props.options, () => {
      render();
    });

    watch(
      () => props.visible,
      (visible) => {
        if (visible) {
          watermark.value?.show();
        } else {
          watermark.value?.hide();
        }
      }
    );

    onMounted(() => {
      render();
    });

    onBeforeUnmount(() => {
      watermark.value?.destroy();
    });

    return {
      root,
      watermark,
    };
  },
  render() {
    if (this.$props.isBody) return h('div');

    // https://v3-migration.vuejs.org/breaking-changes/slots-unification.html
    const slots =
      typeof this.$slots.default === 'function'
        ? this.$slots.default()
        : this.$slots.default;

    return h(
      'div',
      {
        ref: 'root',
      },
      slots
    );
  },
});

export default {
  install(app: App) {
    app.component(Watermark.name, Watermark);
  },
};
