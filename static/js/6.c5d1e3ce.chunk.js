(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{90:function(e,t,a){"use strict";a.r(t);var n=a(13),l=a(28),o=a(25),r=a(26),i=a(30),s=a(29),c=a(0),u=a.n(c),m=a(6),p=a(31),h={form:{width:320},label:{display:"flex",flexDirection:"column",padding:4}},b=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(l.a)({},n,o))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(Object(n.a)({},e.state)),e.setState({email:"",password:""})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return u.a.createElement("div",null,u.a.createElement("h1",null,"Login page"),u.a.createElement("form",{onSubmit:this.handleSubmit,style:h.form},u.a.createElement("label",{style:h.label},"Email",u.a.createElement("input",{type:"email",name:"email",value:t,onChange:this.handleChange})),u.a.createElement("label",{style:h.label},"Password",u.a.createElement("input",{type:"password",name:"password",autoComplete:"on",value:a,onChange:this.handleChange})),u.a.createElement("button",{type:"submit"},"Login")))}}]),a}(c.Component);t.default=Object(m.b)(null,{onLogin:p.a.logIn})(b)}}]);
//# sourceMappingURL=6.c5d1e3ce.chunk.js.map