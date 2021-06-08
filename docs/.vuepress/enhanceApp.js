/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
// import store from '@store'
import './styles/app.scss'

import BootstrapVue from 'bootstrap-vue'

import { library as fontAwesomeIconLibrary } from '@fortawesome/fontawesome-svg-core'
import IconTable from '@infopiphany/tiptap/src/icons/IconTable.vue'
import IconRemoveTable from '@infopiphany/tiptap/src/icons/IconRemoveTable.vue'
import IconDeleteRow from '@infopiphany/tiptap/src/icons/IconDeleteRow.vue'
import IconDeleteCol from '@infopiphany/tiptap/src/icons/IconDeleteCol.vue'
import IconCombineCells from '@infopiphany/tiptap/src/icons/IconCombineCells.vue'
import IconAddRowBefore from '@infopiphany/tiptap/src/icons/IconAddRowBefore.vue'
import IconAddRowAfter from '@infopiphany/tiptap/src/icons/IconAddRowAfter.vue'
import IconAddColBefore from '@infopiphany/tiptap/src/icons/IconAddColBefore.vue'
import IconAddColAfter from '@infopiphany/tiptap/src/icons/IconAddColAfter.vue'


const fasIcons = require('@fortawesome/free-solid-svg-icons')
const farIcons = require('@fortawesome/free-regular-svg-icons')
const faRegularIcons = [
  farIcons.faUser,
  farIcons.faStar,
  farIcons.faPlusSquare,
  farIcons.faPlayCircle,
  farIcons.faTrashAlt,
  farIcons.faSave,
  farIcons.faTimesCircle,
  farIcons.faEdit,
  farIcons.faEnvelope,
  farIcons.faCalendar,
  farIcons.faEye,
  farIcons.faCalendarAlt,
]

// TODO: sort registered FA SOLID icons in alphabetical order
const faSolidIcons = [
  fasIcons.faSync,
  fasIcons.faUser,
  fasIcons.faAnkh,
  fasIcons.faDownload,
  fasIcons.faBars,
  fasIcons.faCloudUploadAlt,
  fasIcons.faFileCode,
  fasIcons.faHashtag,
  fasIcons.faSearch,
  fasIcons.faTh,
  fasIcons.faPlus,
  fasIcons.faEllipsisV,
  fasIcons.faEllipsisH,
  fasIcons.faRedoAlt,
  fasIcons.faTimesCircle,
  fasIcons.faEdit,
  fasIcons.faStar,
  fasIcons.faLaptopCode,
  fasIcons.faCog,
  fasIcons.faWindowMaximize,
  fasIcons.faCannabis,
  fasIcons.faHamburger,
  fasIcons.faArrowLeft,
  fasIcons.faAngleRight,
  fasIcons.faTrashAlt,
  fasIcons.faPrint,
  fasIcons.faSave,
  fasIcons.faEnvelope,
  fasIcons.faPhone,
  fasIcons.faMobileAlt,
  fasIcons.faMapMarkerAlt,
  fasIcons.faUnlockAlt,
  fasIcons.faAmericanSignLanguageInterpreting,
  fasIcons.faPen,
  fasIcons.faEye,
  fasIcons.faUserPlus,
  fasIcons.faTimes,
  fasIcons.faPlusCircle,
  fasIcons.faShippingFast,
  fasIcons.faFileContract,
  fasIcons.faBriefcase,
  fasIcons.faPenAlt,
  fasIcons.faHandshake,
  fasIcons.faTags,
  fasIcons.faInfo,
  fasIcons.faLink,
  fasIcons.faTachometerAlt,
  fasIcons.faHandHoldingUsd,
  fasIcons.faShoppingBasket,
  fasIcons.faMoneyBillWaveAlt,
  fasIcons.faUserPlus,
  fasIcons.faUserCircle,
  fasIcons.faStream,
  fasIcons.faFileUpload,
  fasIcons.faSpinner,
  fasIcons.faExclamationTriangle,
  fasIcons.faExclamationCircle,
  fasIcons.faCheckCircle,
  fasIcons.faAngleDown,
  fasIcons.faChevronDown,
  fasIcons.faFolder,
  fasIcons.faFolderOpen,
  fasIcons.faAlignCenter,
  fasIcons.faAlignJustify,
  fasIcons.faAlignLeft,
  fasIcons.faAlignRight,
  fasIcons.faBold,
  fasIcons.faItalic,
  fasIcons.faUnderline,
  fasIcons.faStrikethrough,
  fasIcons.faCode,
  fasIcons.faListUl,
  fasIcons.faListOl,
  fasIcons.faQuoteRight,
  fasIcons.faGripLines,
  fasIcons.faSuperscript,
  fasIcons.faUndoAlt,
  fasIcons.faRedoAlt,
  fasIcons.faTint,
  fasIcons.faImages,
  fasIcons.faRemoveFormat,
  fasIcons.faIndent,
  fasIcons.faOutdent,
  fasIcons.faTextWidth,
  fasIcons.faFont,
  fasIcons.faFileExport,
  fasIcons.faCloudDownloadAlt,
  fasIcons.faSlash,
  fasIcons.faBoxOpen,
  fasIcons.faBox,
  fasIcons.faProjectDiagram,
  fasIcons.faTh,
  fasIcons.faChartBar,
  fasIcons.faUsers,
  fasIcons.faCalendarAlt,
  fasIcons.faBuilding,
  fasIcons.faCreditCard,
  fasIcons.faBell,
  fasIcons.faWallet,
  fasIcons.faClipboardList,
  fasIcons.faTruckLoading,
  fasIcons.faClock,
  fasIcons.faTh,
  fasIcons.faInfoCircle,
  fasIcons.faArrowRight,
  fasIcons.faEllipsisV,
  fasIcons.faStop,
]
// import('./lib-that-access-window-on-import').then(module => {
//   // use code
// })
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer,
}) => {
  // window.moment = require('moment');
  // window.Pikaday = require('pikaday');
  // if(!isServer) {
  //   // import('moment').then((moment) => {
  //   //   window.moment = moment
  //   // })
  //   import('pikaday').then((pikaday) => {
  //     window.Pikaday = pikaday
  //   })
  // }
  fontAwesomeIconLibrary.add(...faSolidIcons, ...faRegularIcons)

  // ...apply enhancements for the site.
  import('@infopiphany/ui').then(({ InfopiphanyBreadcrumb }) => {
    Vue.component(InfopiphanyBreadcrumb)
  })

  Vue.component('icon-table', IconTable)
  Vue.component('icon-remove-table', IconRemoveTable)
  Vue.component('icon-delete-row', IconDeleteRow)
  Vue.component('icon-delete-col', IconDeleteCol)
  Vue.component('icon-combine-cells', IconCombineCells)
  Vue.component('icon-add-row-before', IconAddRowBefore)
  Vue.component('icon-add-row-after', IconAddRowAfter)
  Vue.component('icon-add-col-before', IconAddColBefore)
  Vue.component('icon-add-col-after', IconAddColAfter)
  // Vue.component('InfopiphanyDatePicker', function (resolve) {
  //   setTimeout(function () {
  //     resolve(InfopiphanyDatePicker);
  //   }, 1000);
  // });
  if(!isServer) {

    import('@infopiphany/tiptap').then(IpyEditorPlugin => {
      Vue.use(IpyEditorPlugin);
    });


    //  store.accessToken = '';
    //  store.accessTokenError = '';

  }

  Vue.use(BootstrapVue, {
    BButton: {
      size: null,
      variant: 'default',
    },
  })
}
