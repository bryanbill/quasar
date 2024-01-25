/*!
 * Quasar Framework v2.14.2
 * (c) 2015-present Razvan Stoenescu
 * Released under the MIT License.
 */
(function(e,n){"object"===typeof exports&&"undefined"!==typeof module?module.exports=n():"function"===typeof define&&define.amd?define(n):(e="undefined"!==typeof globalThis?globalThis:e||self,e.Quasar=e.Quasar||{},e.Quasar.lang=e.Quasar.lang||{},e.Quasar.lang.deCH=n())})(this,function(){"use strict";var e={isoName:"de-CH",nativeName:"Deutsch (CH)",label:{clear:"Leeren",ok:"Ok",cancel:"Abbrechen",close:"Schliessen",set:"Setzen",select:"Auswählen",reset:"Zurücksetzen",remove:"Löschen",update:"Aktualisieren",create:"Erstellen",search:"Suche",filter:"Filter",refresh:"Aktualisieren",expand:e=>e?`Erweitern Sie "${e}"`:"Erweitern",collapse:e=>e?`"${e}" minimieren`:"Zusammenbruch"},date:{days:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),daysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mai_Jun_Jul_Aug_Sep_Okt_Nov_Dez".split("_"),firstDayOfWeek:1,format24h:!0,pluralDay:"Tage"},table:{noData:"Keine Daten vorhanden.",noResults:"Keine Einträge gefunden",loading:"Lade...",selectedRecords:e=>e>1?e+" ausgewählte Zeilen":(0===e?"Keine":"1")+" ausgewählt.",recordsPerPage:"Zeilen pro Seite",allRows:"Alle",pagination:(e,n,r)=>e+"-"+n+" von "+r,columns:"Spalten"},editor:{url:"URL",bold:"Fett",italic:"Kursiv",strikethrough:"Durchgestrichen",underline:"Unterstrichen",unorderedList:"Ungeordnete Liste",orderedList:"Geordnete Liste",subscript:"tiefgestellt",superscript:"hochgestellt",hyperlink:"Link",toggleFullscreen:"Vollbild umschalten",quote:"Zitat",left:"linksbündig",center:"zentriert",right:"rechtsbündig",justify:"Ausrichten",print:"Drucken",outdent:"ausrücken",indent:"einrücken",removeFormat:"Entferne Formatierung",formatting:"Formatiere",fontSize:"Schriftgrösse",align:"Ausrichten",hr:"Horizontale Linie einfügen",undo:"Rückgänging",redo:"Wiederherstellen",heading1:"Überschrift 1",heading2:"Überschrift 2",heading3:"Überschrift 3",heading4:"Überschrift 4",heading5:"Überschrift 5",heading6:"Überschrift 6",paragraph:"Absatz",code:"Code",size1:"Sehr klein",size2:"klein",size3:"Normal",size4:"Gross",size5:"Grösser",size6:"Sehr gross",size7:"Maximum",defaultFont:"Standard Schrift",viewSource:"Quelltext anzeigen"},tree:{noNodes:"Keine Knoten verfügbar",noResults:"Keine passenden Knoten gefunden"}};return e});