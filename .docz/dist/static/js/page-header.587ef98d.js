(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/style.css":function(e,t,n){},"./src/doc/PageHeader.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/react/index.js"),o=n.n(i),r=n("./node_modules/@mdx-js/react/dist/index.es.js"),c=n("./node_modules/docz/dist/index.esm.js"),s=n("./node_modules/antd/lib/button/index.js"),l=n.n(s),b=n("./node_modules/antd/lib/divider/index.js"),d=n.n(b),p=n("./node_modules/antd/lib/icon/index.js"),m=n.n(p),g=n("./node_modules/antd/lib/menu/index.js"),j=n.n(g),u=n("./node_modules/rk-admin-ui/es/button-tooltip/index.js"),O=n("./node_modules/rk-admin-ui/es/page-header/index.js");n("./src/components/style.css");var y=Object(i.memo)(e=>{const[t,n]=Object(i.useState)(e.isLoading),[a,r]=Object(i.useState)(e.popoverTitle),{leftActionControls:c,popoverDropdownItems:s,rightActionControls:l,showAction:b}=e;Object(i.useEffect)(()=>{setTimeout(()=>{n(!1),r("All Categories")},3e3)},[]);return o.a.createElement(O.a,{title:a,showAction:b,leftActionControls:t?null:c,rightActionControls:t?null:l,popoverDropdownItems:s,isLoading:t})});n.d(t,"default",function(){return v});var h={},N="wrapper";function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(N,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"pageheader"},"PageHeader"),Object(r.b)("p",null,"Panel slides from screen edge with form."),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"isLoading"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"whether the skeleton is visible or not."),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"leftActionControls","|","rightActionControls"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"content of the left ","|"," right controls"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"string","|","ReactNode"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"popoverDropdownItems"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"content of the card"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"string","|","ReactNode"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"popoverDropdownTrigger"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"whether floating PopoverDropdown by ",Object(r.b)("inlineCode",{parentName:"td"},"click")," or ",Object(r.b)("inlineCode",{parentName:"td"},"hover")),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"click"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"title"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"the title for PageHeader."),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h2",{id:"sample"},"Sample"),Object(r.b)(c.c,{__position:0,__code:'<PageHeader\n  isLoading={true}\n  leftActionControls={\n    <>\n      <ButtonTooltip\n        title="Edit"\n        icon="edit"\n        type="primary"\n        shape="circle"\n        className="base-margin-right"\n      />\n      <ButtonTooltip\n        title="Active"\n        icon="check"\n        type="primary"\n        shape="circle"\n        className="base-margin-right"\n      />\n      <ButtonTooltip\n        title="Inactive"\n        icon="stop"\n        type="primary"\n        shape="circle"\n      />\n    </>\n  }\n  popoverDropdownItems={\n    <Menu className="popover-dropdown-item">\n      <Menu.Item key="all">All Categories</Menu.Item>\n      <Menu.Item key="active">Active Categories</Menu.Item>\n      <Menu.Item key="inactive">Inactive Categories</Menu.Item>\n      <Divider style={{ marginTop: 12, marginBottom: 5 }} />\n      <Menu.Item key="advanced_search">\n        <Icon type="search" /> Advanced Search\n      </Menu.Item>\n    </Menu>\n  }\n  rightActionControls={\n    <Button type="primary" icon="plus">\n      New Category\n    </Button>\n  }\n  showAction={true}\n/>',__scope:{props:this?this.props:n,Playground:c.c,Button:l.a,Divider:d.a,Icon:m.a,Menu:j.a,ButtonTooltip:u.a,PageHeader:y},mdxType:"Playground"},Object(r.b)(y,{isLoading:!0,leftActionControls:Object(r.b)(o.a.Fragment,null,Object(r.b)(u.a,{title:"Edit",icon:"edit",type:"primary",shape:"circle",className:"base-margin-right",mdxType:"ButtonTooltip"}),Object(r.b)(u.a,{title:"Active",icon:"check",type:"primary",shape:"circle",className:"base-margin-right",mdxType:"ButtonTooltip"}),Object(r.b)(u.a,{title:"Inactive",icon:"stop",type:"primary",shape:"circle",mdxType:"ButtonTooltip"})),popoverDropdownItems:Object(r.b)(j.a,{className:"popover-dropdown-item",mdxType:"Menu"},Object(r.b)(j.a.Item,{key:"all"},"All Categories"),Object(r.b)(j.a.Item,{key:"active"},"Active Categories"),Object(r.b)(j.a.Item,{key:"inactive"},"Inactive Categories"),Object(r.b)(d.a,{style:{marginTop:12,marginBottom:5},mdxType:"Divider"}),Object(r.b)(j.a.Item,{key:"advanced_search"},Object(r.b)(m.a,{type:"search",mdxType:"Icon"})," Advanced Search")),rightActionControls:Object(r.b)(l.a,{type:"primary",icon:"plus",mdxType:"Button"},"New Category"),showAction:!0,mdxType:"PageHeader"})))}v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\doc\\PageHeader.mdx"}}),v.isMDXComponent=!0}}]);
//# sourceMappingURL=page-header.33b9228885a8dfc727f3.js.map