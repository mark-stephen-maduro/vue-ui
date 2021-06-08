import {
  library as fontAwesomeIconLibrary,
  dom,
} from '@fortawesome/fontawesome-svg-core';

// HACK: This is used for InfopiphanyDatePicker to transform <i> tags to SVG, not vue-js friendly.
// https://github.com/FortAwesome/vue-fontawesome/issues/140#issuecomment-428592487
dom.watch();

const fasIcons = require('@fortawesome/free-solid-svg-icons');
const farIcons = require('@fortawesome/free-regular-svg-icons');

// TODO: sort registered FA REGULAR icons in alphabetical order
const faRegularIcons = [
  farIcons.faCalendar,
  farIcons.faCalendarAlt,
  farIcons.faEdit,
  farIcons.faEnvelope,
  farIcons.faEye,
  farIcons.faPlayCircle,
  farIcons.faPlusSquare,
  farIcons.faSave,
  farIcons.faStar,
  farIcons.faTimesCircle,
  farIcons.faTrashAlt,
  farIcons.faUser,
];

// TODO: sort registered FA SOLID icons in alphabetical order
const faSolidIcons = [
  fasIcons.faSortUp,
  // fasIcons.faArrowsAltV,
  // fasIcons.faSortDown,
  // fasIcons.faGripLines,
  // fasIcons.faAmericanSignLanguageInterpreting,
  // fasIcons.faAngleDoubleDown,
  // fasIcons.faAngleDoubleUp,
  // fasIcons.faAngleDown,
  // fasIcons.faAngleRight,
  // fasIcons.faAngleUp,
  // fasIcons.faAnkh,
  // fasIcons.faArrowLeft,
  // fasIcons.faBars,
  // fasIcons.faBold,
  // fasIcons.faCannabis,
  // fasIcons.faChalkboardTeacher,
  // fasIcons.faCheck,
  // fasIcons.faChevronDown,
  // fasIcons.faCircle,
  // fasIcons.faClipboardList,
  // fasIcons.faCloudUploadAlt,
  // fasIcons.faCode,
  // fasIcons.faCog,
  // fasIcons.faDownload,
  // fasIcons.faEdit,
  // fasIcons.faEllipsisH,
  // fasIcons.faEllipsisV,
  // fasIcons.faEnvelope,
  // fasIcons.faExpandArrowsAlt,
  // fasIcons.faEye,
  // fasIcons.faFileCode,
  // fasIcons.faHamburger,
  // fasIcons.faHashtag,
  // fasIcons.faHeading,
  // fasIcons.faItalic,
  // fasIcons.faLaptopCode,
  // fasIcons.faListOl,
  // fasIcons.faListUl,
  // fasIcons.faMapMarkerAlt,
  // fasIcons.faMobileAlt,
  // fasIcons.faParagraph,
  // fasIcons.faPen,
  // fasIcons.faPhone,
  // fasIcons.faPlus,
  // fasIcons.faPlusCircle,
  // fasIcons.faPrint,
  // fasIcons.faQuestionCircle,
  // fasIcons.faQuoteRight,
  // fasIcons.faRedoAlt,
  // fasIcons.faSave,
  // fasIcons.faSearch,
  // fasIcons.faStar,
  // fasIcons.faStrikethrough,
  // fasIcons.faSync,
  // fasIcons.faTable,
  // fasIcons.faTerminal,
  // fasIcons.faTh,
  // fasIcons.faTimes,
  // fasIcons.faTimesCircle,
  // fasIcons.faTrashAlt,
  // fasIcons.faUnderline,
  // fasIcons.faUnlockAlt,
  // fasIcons.faUser,
  // fasIcons.faUserPlus,
  // fasIcons.faWindowMaximize,
  // fasIcons.faExclamationCircle,
];
// https://fontawesome.com/icons
export const initializeFontAwesomeLibrary = function() {
  fontAwesomeIconLibrary.add(...faSolidIcons, ...faRegularIcons);
};

export const FA_SOLID_ICONS = faSolidIcons;
export const FA_REGULAR_ICONS = faRegularIcons;
