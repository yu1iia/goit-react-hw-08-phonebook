(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{89:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(28),r=t(25),s=t(26),i=t(30),o=t(29),m=t(0),c=t.n(m),u=t(6),h=t(31),p={form:{width:320},label:{display:"flex",flexDirection:"column",padding:4}},b=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(l.a)({},n,r))},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(Object(n.a)({},e.state)),e.setState({name:"",email:"",password:""})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password;return c.a.createElement("div",null,c.a.createElement("h1",null,"Register page"),c.a.createElement("form",{onSubmit:this.handleSubmit,style:p.form},c.a.createElement("label",{style:p.label},"Name",c.a.createElement("input",{type:"text",name:"name",value:a,onChange:this.handleChange})),c.a.createElement("label",{style:p.label},"Email",c.a.createElement("input",{type:"email",name:"email",value:t,onChange:this.handleChange})),c.a.createElement("label",{style:p.label},"Password",c.a.createElement("input",{type:"password",name:"password",autoComplete:"on",value:n,onChange:this.handleChange})),c.a.createElement("button",{type:"submit"},"Register")))}}]),t}(m.Component);a.default=Object(u.b)(null,{onRegister:h.a.register})(b)}}]);
//# sourceMappingURL=7.29a88693.chunk.js.map