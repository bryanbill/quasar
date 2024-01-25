/**
 * DO NOT EDIT THIS FILE. It is automatically generated
 * from its .mjs counterpart (same filename but with .mjs extension).
 * Edit that file instead (hr.mjs).
 */
module.exports = {
  isoName: 'hr',
  nativeName: 'Hrvatski jezik',
  label: {
    clear: 'Očisti',
    ok: 'OK',
    cancel: 'Odustani',
    close: 'Zatvori',
    set: 'Postavi',
    select: 'Izaberi',
    reset: 'Poništi',
    remove: 'Ukloni',
    update: 'Ažuriraj',
    create: 'Dodaj',
    search: 'Traži',
    filter: 'Filter',
    refresh: 'Osvježi',
    expand: label => (label ? `Proširi "${ label }"` : 'Proširiti'),
    collapse: label => (label ? `Sažmi "${ label }"` : 'Kolaps')
  },
  date: {
    days: 'Nedjelja_Ponedjeljak_Utorak_Srijeda_Četvrtak_Petak_Subota'.split('_'),
    daysShort: 'Ned_Pon_Uto_Sri_Čet_Pet_Sub'.split('_'),
    months: 'Siječanj_Veljača_Ožujak_Travanj_Svibanj_Lipanj_Srpanj_Kolovoz_Rujan_Listopad_Studeni_Prosinac'.split('_'),
    monthsShort: 'Sij_Velj_Ožu_Tra_Svi_Lip_Srp_Kol_Ruj_Lis_Stu_Pro'.split('_'),
    firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: true,
    pluralDay: 'dana'
  },
  table: {
    noData: 'Nema podataka',
    noResults: 'Nema odgovarajućih zapisa',
    loading: 'Učitavanje...',
    selectedRecords: rows => (
      rows > 1
        ? rows + ' izabranih redova.'
        : (rows === 0 ? 'Nema' : '1') + ' izabranih redova.'
    ),
    recordsPerPage: 'Redova po stranici:',
    allRows: 'Sve',
    pagination: (start, end, total) => start + '-' + end + ' od ' + total,
    columns: 'Stupci'
  },
  editor: {
    url: 'URL',
    bold: 'Podebljano',
    italic: 'Nakošeno',
    strikethrough: 'Precrtano',
    underline: 'Podcrtano',
    unorderedList: 'Označena lista',
    orderedList: 'Numerirana lista',
    subscript: 'Potpisano',
    superscript: 'Natpisano',
    hyperlink: 'Hiperlink',
    toggleFullscreen: 'Puni zaslon',
    quote: 'Citat',
    left: 'Poravnati ulijevo',
    center: 'Centrirati',
    right: 'Poravnati udesno',
    justify: 'Poravnati obostrano',
    print: 'Ispis',
    outdent: 'Smanjiti uvlačenje',
    indent: 'Povećati uvlačenje',
    removeFormat: 'Ukloniti formatiranje',
    formatting: 'Formatirati',
    fontSize: 'Veličina slova',
    align: 'Poravnati',
    hr: 'Ubaciti vodoravno ravnalo',
    undo: 'Poništiti',
    redo: 'Vratiti',
    heading1: 'Naslov 1',
    heading2: 'Naslov 2',
    heading3: 'Naslov 3',
    heading4: 'Naslov 4',
    heading5: 'Naslov 5',
    heading6: 'Naslov 6',
    paragraph: 'Odlomak',
    code: 'Kod',
    size1: 'Vrlo malo',
    size2: 'Malo manje',
    size3: 'Normalno',
    size4: 'Srednje',
    size5: 'Veliko',
    size6: 'Vrlo veliko',
    size7: 'Nejveće',
    defaultFont: 'Zadani font',
    viewSource: 'Pogledaj izvor'
  },
  tree: {
    noNodes: 'Nema nijednog čvora',
    noResults: 'Nema odgovarajućih čvorova'
  }
}
