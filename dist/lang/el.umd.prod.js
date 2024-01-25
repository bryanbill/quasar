/*!
 * Quasar Framework v2.14.2
 * (c) 2015-present Razvan Stoenescu
 * Released under the MIT License.
 */
(function(e,t){"object"===typeof exports&&"undefined"!==typeof module?module.exports=t():"function"===typeof define&&define.amd?define(t):(e="undefined"!==typeof globalThis?globalThis:e||self,e.Quasar=e.Quasar||{},e.Quasar.lang=e.Quasar.lang||{},e.Quasar.lang.el=t())})(this,function(){"use strict";var e={isoName:"el",nativeName:"ελληνικά",label:{clear:"Καθαρισμός",ok:"Εντάξει",cancel:"Ακύρωση",close:"Κλείσιμο",set:"Ορισμός",select:"Επιλογή",reset:"Επαναφορά",remove:"Αφαίρεση",update:"Αναβάθμιση",create:"Δημιουργία",search:"Αναζήτηση",filter:"Φίλτρο",refresh:"Ανανέωση",expand:e=>e?`Επέκταση "${e}"`:"Επεκτείνουν",collapse:e=>e?`Σύμπτυξη "${e}"`:"Κατάρρευση"},date:{days:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),daysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),months:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),firstDayOfWeek:1,format24h:!0,pluralDay:"ημέρες"},table:{noData:"Χωρίς δεδομένα",noResults:"Δεν βρέθηκαν αποτελέσματα",loading:"Φόρτωση...",selectedRecords:e=>1===e?"1 επιλεγμένη εγγραφή.":(0===e?"Καμμία":e)+" επιλεγμένες εγγραφές.",recordsPerPage:"Εγγραφές ανα σελίδα:",allRows:"Όλες",pagination:(e,t,a)=>e+"-"+t+" από "+a,columns:"Στήλες"},editor:{url:"Διεύθυνση URL",bold:"Έντονα",italic:"Πλάγια",strikethrough:"Διακριτή διαγραφή",underline:"Υπογράμμιση",unorderedList:"Αταξινόμητη λίστα",orderedList:"Ταξινομημένη λίστα",subscript:"Δείκτης",superscript:"Εκθέτης",hyperlink:"Υπερσύνδεσμος",toggleFullscreen:"Εναλλαγή μεγιστοποίησης οθόνης",quote:"Παράθεση",left:"Αριστερή στοίχιση",center:"Κεντρική στοίχιση",right:"Δεξιά στοίχιση",justify:"Πλήρης στοίχιση",print:"Εκτύπωση",outdent:"Μείωση εσοχής",indent:"Αύξηση εσοχής",removeFormat:"Απαλοιφή μορφοποίησης",formatting:"Μορφοποίηση",fontSize:"Μέγεθος γραμματοσειράς",align:"Στοίχιση",hr:"Εισαγωγή οριζόντιας γραμμής",undo:"Αναίρεση",redo:"Επανάληψη",heading1:"Επικεφαλίδα 1",heading2:"Επικεφαλίδα 2",heading3:"Επικεφαλίδα 3",heading4:"Επικεφαλίδα 4",heading5:"Επικεφαλίδα 5",heading6:"Επικεφαλίδα 6",paragraph:"Παράγραφος",code:"Κώδικας",size1:"Πολύ μικρό",size2:"Μικρό",size3:"Κανονικό",size4:"Μεσαίο",size5:"Μεγάλο",size6:"Πολύ μεγάλο",size7:"Μέγιστο",defaultFont:"Προκαθορισμένη γραμματοσειρά",viewSource:"Προβολή προέλευσης"},tree:{noNodes:"Μη διαθέσιμοι κόμβοι",noResults:"Δεν βρέθηκαν αποτελέσματα"}};return e});