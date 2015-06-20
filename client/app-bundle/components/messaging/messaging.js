var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('.row', [
    m('form.col.s12', [
      m('.row', [
        m('.row.input-field.col.l6.m6.s12', [
          m('i.mdi-editor-mode-edit.prefix'),
          m('textarea#icon_prefix2.materialize-textarea'),
          m('label[for=icon_prefix2]', "Message")
        ]),
        m('.row', [
          m('button.btn.waves-effect.waves-light', 'Send Message',[
            //POST to database
            m('i.mdi-content-send.right')
          ])
        ])
      ])
    ])
  ])
}