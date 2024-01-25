import { h, computed, inject, getCurrentInstance } from 'vue'

import QBtn from '../btn/QBtn.js'
import QIcon from '../icon/QIcon.js'

import useFab, { useFabProps } from './use-fab.js'

import { createComponent } from '../../utils/private/create.js'
import { fabKey } from '../../utils/private/symbols.js'
import { hMergeSlot } from '../../utils/private/render.js'
import { noop } from '../../utils/event.js'

const anchorMap = {
  start: 'self-end',
  center: 'self-center',
  end: 'self-start'
}

const anchorValues = Object.keys(anchorMap)

export default createComponent({
  name: 'QFabAction',

  props: {
    ...useFabProps,

    icon: {
      type: String,
      default: ''
    },

    anchor: {
      type: String,
      validator: v => anchorValues.includes(v)
    },

    to: [ String, Object ],
    replace: Boolean
  },

  emits: [ 'click' ],

  setup (props, { slots, emit }) {
    let $fab = inject(fabKey, () => ({
      showing: { value: true },
      onChildClick: noop
    }))

    const { formClass, labelProps } = useFab(props, $fab.showing)

    const classes = computed(() => {
      const align = anchorMap[ props.anchor ]
      return formClass.value + (align !== void 0 ? ` ${ align }` : '')
    })

    if($fab && {}.toString.call($fab) === '[object Function]'){
       $fab = $fab();
    }

    const isDisabled = computed(() =>
      props.disable === true
      || $fab.showing.value !== true
    )

    function click (e) {
      $fab.onChildClick(e)
      emit('click', e)
    }

    function getContent () {
      const child = []

      if (slots.icon !== void 0) {
        child.push(slots.icon())
      }
      else if (props.icon !== '') {
        child.push(
          h(QIcon, { name: props.icon })
        )
      }

      if (props.label !== '' || slots.label !== void 0) {
        child[ labelProps.value.action ](
          h('div', labelProps.value.data, slots.label !== void 0 ? slots.label() : [ props.label ])
        )
      }

      return hMergeSlot(slots.default, child)
    }

    // expose public methods
    const vm = getCurrentInstance()
    Object.assign(vm.proxy, { click })

    return () => h(QBtn, {
      class: classes.value,
      ...props,
      noWrap: true,
      stack: props.stacked,
      icon: void 0,
      label: void 0,
      noCaps: true,
      fabMini: true,
      disable: isDisabled.value,
      onClick: click
    }, getContent)
  }
})