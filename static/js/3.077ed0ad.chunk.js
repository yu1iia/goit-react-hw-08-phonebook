(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{80:function(t,e,n){t.exports={sectionTitle:"App_sectionTitle__1KGSm",contactListTitle:"App_contactListTitle__2XDTF",appear:"App_appear__n4iaO",appearActive:"App_appearActive__1JsP3",welcomeTitle:"App_welcomeTitle__1KX4n",contacts:"App_contacts__DaJM7",form_label:"App_form_label__3vlTu",form_input:"App_form_input__2aasZ",addButton:"App_addButton__fwodz"}},84:function(t,e,n){t.exports={contactListItem:"ContactFormListItem_contactListItem__2QroZ",deleteButton:"ContactFormListItem_deleteButton__2fzCA"}},85:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__o3nta",contact__container:"ContactList_contact__container__DyKQP",contact_list_item:"ContactList_contact_list_item__2waXs",contact_container:"ContactList_contact_container__TLEYr"}},86:function(t,e,n){t.exports={filter_input:"Filter_filter_input__9jAjy",filter_label:"Filter_filter_label__2FOKr"}},87:function(t,e,n){t.exports={appear:"Alert_appear__1x9c1",appearActive:"Alert_appearActive__UBk5q",alertWrapper:"Alert_alertWrapper__1PQgW"}},91:function(t,e,n){"use strict";n.r(e);var a=n(13),c=n(28),o=n(25),r=n(26),l=n(30),u=n(29),i=n(0),s=n.n(i),m=n(6),p=n(14),_=n.n(p),C=n(3),f={filter:function(t){return{type:C.a.FILTER,payload:{filter:t}}},duplicate:function(){return{type:C.a.DUPLICATE}},addContactRequest:function(){return{type:C.a.ADD_CONTACT_REQUEST}},addContactSuccess:function(t){return{type:C.a.ADD_CONTACT_SUCCESS,payload:Object(a.a)({},t)}},addContactError:function(t){return{type:C.a.ADD_CONTACT_ERROR,payload:{error:t}}},fetchContactRequest:function(){return{type:C.a.FETCH_CONTACT_REQUEST}},fetchContactSuccess:function(t){return{type:C.a.FETCH_CONTACT_SUCCESS,payload:t}},fetchContactError:function(t){return{type:C.a.FETCH_CONTACT_ERROR,payload:{error:t}}},removeContactError:function(t){return{type:C.a.DEL_CONTACT_ERROR,payload:{error:t}}},removeContactSuccess:function(t){return{type:C.a.DEL_CONTACT_SUCCESS,payload:t}},removeContactRequest:function(){return{type:C.a.DEL_CONTACT_REQUEST}}},d="https://goit-phonebook-api.herokuapp.com",E={onAddContact:function(t){return function(e){e(f.addContactRequest()),_.a.post("".concat(d,"/contacts"),t).then((function(t){e(f.addContactSuccess(t.data))})).catch((function(t){return e(f.addContactError(t))}))}},onRemoveContacts:function(t){return function(e){e(f.removeContactRequest()),_.a.delete("".concat(d,"/contacts/").concat(t)).then((function(){e(f.removeContactSuccess(t))})).catch((function(t){e(f.removeContactError(t))}))}},fetchContacts:function(){return function(t){t(f.fetchContactRequest()),_.a.get("".concat(d,"/contacts")).then((function(e){var n=e.data;t(f.fetchContactSuccess(n))})).catch((function(e){t(f.fetchContactError(e))}))}}},h=n(27),b=n(93),v=n(92),A=n(84),T=n.n(A),y=function(t){var e=t.id,n=t.name,a=t.number,c=t.onRemove;return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{key:e,className:T.a.contactListItem},s.a.createElement("p",null,n," : ",a),s.a.createElement("button",{className:T.a.deleteButton,type:"button",onClick:c},"Delete")))},g=n(85),N=n.n(g),O=n(86),R=n.n(O),S={onChangeFilter:f.filter},F=Object(m.b)((function(t){return{value:h.a.getFilter(t)}}),S)((function(t){var e=t.value,n=t.onChangeFilter;return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{className:R.a.filter_label},s.a.createElement("p",null,"Find contacts by name"),s.a.createElement("input",{className:R.a.filter_input,type:"text",name:"filter",value:e,onChange:function(t){n(t.target.value)}})))})),L={onRemoveContacts:E.onRemoveContacts},D=Object(m.b)((function(t){return{items:h.a.getContacts(t),contacts:h.a.getFilteredContacts(t)}}),L)((function(t){var e=t.contacts,n=t.onRemoveContacts;return s.a.createElement(s.a.Fragment,null,s.a.createElement(F,null),s.a.createElement(b.a,{component:"ul"},e.map((function(t){var e=t.id,a=t.name,c=t.number;return s.a.createElement(v.a,{key:e,timeout:1e3,classNames:N.a,unmountOnExit:!0},s.a.createElement(y,{key:e,name:a,number:c,onRemove:function(){return n(e)}}))}))))})),k=n(31),j=n(80),x=n.n(j),w=n(87),U=n.n(w),q=function(){return s.a.createElement(v.a,{classNames:U.a,in:!0,appear:!0,timeout:1500,unmountOnExit:!0},s.a.createElement("div",{className:U.a.alertWrapper},s.a.createElement("p",null,"Contact already exists !")))},B=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,l=new Array(r),u=0;u<r;u++)l[u]=arguments[u];return(t=e.call.apply(e,[this].concat(l))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(c.a)({},a,o))},t.handleSubmit=function(e){e.preventDefault(),t.duplicateFn()?(console.log("hi"),setTimeout((function(){t.props.onAlert()}),1500)):(t.props.onAddContact(Object(a.a)({},t.state)),t.setState({name:"",number:""}))},t.duplicateFn=function(){var e=t.state.name;return t.props.contacts.some((function(t){return t.name.toLowerCase()===e.toLowerCase().trim()}))},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser(),this.props.fetchContacts()}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return s.a.createElement("div",{className:x.a.contacts},this.props.alert&&s.a.createElement(q,{alert:alert}),s.a.createElement("h2",{className:x.a.contactListTitle},"Contacts"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"Name",className:x.a.form_label},"Name",s.a.createElement("input",{className:x.a.form_input,type:"text",value:e,onChange:this.handleChange,name:"name"})),s.a.createElement("label",{className:x.a.form_label},"Number:",s.a.createElement("input",{className:x.a.form_label,type:"text",value:n,onChange:this.handleChange,name:"number"})),s.a.createElement("button",{type:"submit",className:x.a.addButton}," ","Add contact")),s.a.createElement(D,null))}}]),n}(i.Component),I={onAddContact:E.onAddContact,onAlert:f.duplicate,onGetCurrentUser:k.a.getCurrentUser,fetchContacts:E.fetchContacts};e.default=Object(m.b)((function(t){return{contacts:h.a.getContacts(t),alert:h.a.getAlert(t)}}),I)(B)}}]);
//# sourceMappingURL=3.077ed0ad.chunk.js.map