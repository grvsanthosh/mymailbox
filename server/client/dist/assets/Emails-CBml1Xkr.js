import{g as W,f as _,r as C,s as v,j as i,o as F,m as H,x as Q,h as X,k as Z,n as q,i as N,p as K,E as ge,B as L,T as R,D as xe,F as ve,A as me}from"./index-BTRPPEHV.js";import{c as D,u as A,A as M,E as be}from"./api.urls-glGqzgjR.js";import{k as Se,e as ye,f as O,B as we,h as Ce,P as z,D as ke,j as Re}from"./DeleteOutline-BOn-DTD9.js";function je(e){return W("PrivateSwitchBase",e)}_("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Pe=e=>{const{classes:t,checked:o,disabled:l,edge:c}=e,n={root:["root",o&&"checked",l&&"disabled",c&&`edge${F(c)}`],input:["input"]};return H(n,je,t)},Be=v(we)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:e,ownerState:t})=>e==="start"&&t.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:e,ownerState:t})=>e==="end"&&t.size!=="small",style:{marginRight:-12}}]}),Ie=v("input",{shouldForwardProp:Q})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ze=C.forwardRef(function(t,o){const{autoFocus:l,checked:c,checkedIcon:n,defaultChecked:r,disabled:d,disableFocusRipple:a=!1,edge:f=!1,icon:m,id:u,inputProps:S,inputRef:p,name:b,onBlur:g,onChange:x,onFocus:j,readOnly:P,required:T=!1,tabIndex:B,type:k,value:$,slots:ie={},slotProps:re={},...se}=t,[Y,ne]=Se({controlled:c,default:!!r,name:"SwitchBase",state:"checked"}),y=ye(),ae=s=>{j&&j(s),y&&y.onFocus&&y.onFocus(s)},le=s=>{g&&g(s),y&&y.onBlur&&y.onBlur(s)},ce=s=>{if(s.nativeEvent.defaultPrevented)return;const h=s.target.checked;ne(h),x&&x(s,h)};let I=d;y&&typeof I>"u"&&(I=y.disabled);const de=k==="checkbox"||k==="radio",E={...t,checked:Y,disabled:I,disableFocusRipple:a,edge:f},G=Pe(E),J={slots:ie,slotProps:{input:S,...re}},[pe,ue]=O("root",{ref:o,elementType:Be,className:G.root,shouldForwardComponentProp:!0,externalForwardedProps:{...J,component:"span",...se},getSlotProps:s=>({...s,onFocus:h=>{var w;(w=s.onFocus)==null||w.call(s,h),ae(h)},onBlur:h=>{var w;(w=s.onBlur)==null||w.call(s,h),le(h)}}),ownerState:E,additionalProps:{centerRipple:!0,focusRipple:!a,disabled:I,role:void 0,tabIndex:null}}),[he,fe]=O("input",{ref:p,elementType:Ie,className:G.input,externalForwardedProps:J,getSlotProps:s=>({...s,onChange:h=>{var w;(w=s.onChange)==null||w.call(s,h),ce(h)}}),ownerState:E,additionalProps:{autoFocus:l,checked:c,defaultChecked:r,disabled:I,id:de?u:void 0,name:b,readOnly:P,required:T,tabIndex:B,type:k,...k==="checkbox"&&$===void 0?{}:{value:$}}});return i.jsxs(pe,{...ue,children:[i.jsx(he,{...fe}),Y?n:m]})}),Fe=D(i.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),Le=D(i.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),De=D(i.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}));function Te(e){return W("MuiCheckbox",e)}const V=_("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),$e=e=>{const{classes:t,indeterminate:o,color:l,size:c}=e,n={root:["root",o&&"indeterminate",`color${F(l)}`,`size${F(c)}`]},r=H(n,Te,t);return{...t,...r}},Ae=v(ze,{shouldForwardProp:e=>Q(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,t[`size${F(o.size)}`],o.color!=="default"&&t[`color${F(o.color)}`]]}})(q(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:N(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(K()).map(([t])=>({props:{color:t,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:N(e.palette[t].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(K()).map(([t])=>({props:{color:t},style:{[`&.${V.checked}, &.${V.indeterminate}`]:{color:(e.vars||e).palette[t].main},[`&.${V.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),Me=i.jsx(Le,{}),Ee=i.jsx(Fe,{}),Ve=i.jsx(De,{}),ee=C.forwardRef(function(t,o){const l=X({props:t,name:"MuiCheckbox"}),{checkedIcon:c=Me,color:n="primary",icon:r=Ee,indeterminate:d=!1,indeterminateIcon:a=Ve,inputProps:f,size:m="medium",disableRipple:u=!1,className:S,slots:p={},slotProps:b={},...g}=l,x=d?a:r,j=d?a:c,P={...l,disableRipple:u,color:n,indeterminate:d,size:m},T=$e(P),B=b.input??f,[k,$]=O("root",{ref:o,elementType:Ae,className:Z(T.root,S),shouldForwardComponentProp:!0,externalForwardedProps:{slots:p,slotProps:b,...g},ownerState:P,additionalProps:{type:"checkbox",icon:C.cloneElement(x,{fontSize:x.props.fontSize??m}),checkedIcon:C.cloneElement(j,{fontSize:j.props.fontSize??m}),disableRipple:u,slots:p,slotProps:{input:Ce(typeof B=="function"?B(P):B,{"data-indeterminate":d})}}});return i.jsx(k,{...$,classes:T})});function Ne(e){return W("MuiDivider",e)}_("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Oe=e=>{const{absolute:t,children:o,classes:l,flexItem:c,light:n,orientation:r,textAlign:d,variant:a}=e;return H({root:["root",t&&"absolute",a,n&&"light",r==="vertical"&&"vertical",c&&"flexItem",o&&"withChildren",o&&r==="vertical"&&"withChildrenVertical",d==="right"&&r!=="vertical"&&"textAlignRight",d==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},Ne,l)},Ue=v("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.absolute&&t.absolute,t[o.variant],o.light&&t.light,o.orientation==="vertical"&&t.vertical,o.flexItem&&t.flexItem,o.children&&t.withChildren,o.children&&o.orientation==="vertical"&&t.withChildrenVertical,o.textAlign==="right"&&o.orientation!=="vertical"&&t.textAlignRight,o.textAlign==="left"&&o.orientation!=="vertical"&&t.textAlignLeft]}})(q(({theme:e})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:N(e.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:t})=>!!t.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:t})=>t.children&&t.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:t})=>t.orientation==="vertical"&&t.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:t})=>t.textAlign==="right"&&t.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:t})=>t.textAlign==="left"&&t.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),We=v("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.wrapper,o.orientation==="vertical"&&t.wrapperVertical]}})(q(({theme:e})=>({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}}]}))),U=C.forwardRef(function(t,o){const l=X({props:t,name:"MuiDivider"}),{absolute:c=!1,children:n,className:r,orientation:d="horizontal",component:a=n||d==="vertical"?"div":"hr",flexItem:f=!1,light:m=!1,role:u=a!=="hr"?"separator":void 0,textAlign:S="center",variant:p="fullWidth",...b}=l,g={...l,absolute:c,component:a,flexItem:f,light:m,orientation:d,role:u,textAlign:S,variant:p},x=Oe(g);return i.jsx(Ue,{as:a,className:Z(x.root,r),role:u,ref:o,ownerState:g,"aria-orientation":u==="separator"&&(a!=="hr"||d==="vertical")?d:void 0,...b,children:n?i.jsx(We,{className:x.wrapper,ownerState:g,children:n}):null})});U&&(U.muiSkipListHighlight=!0);const _e=D(i.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})),He=D(i.jsx("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"})),qe=v(L)({padding:"0 0 0 10px",background:"#f2f6fc",cursor:"pointer",display:"flex",alignItems:"center","& > div":{display:"flex",width:"100%","& > p":{fontSize:14}}}),Ye=v(R)({fontSize:"12px !important",background:"#ddd",color:"#222",padding:"0 4px",borderRadius:4,marginRight:6}),Ge=v(R)({marginLeft:"auto",marginRight:20,fontSize:12,color:"#5F6368"});function te({email:e,selectedEmails:t,setRefreshScreen:o,setSelectedEmails:l}){const c=ge(),n=A(M.toggleStarredMails),r=()=>{n.call({id:e._id,value:!e.Starred}),o(a=>!a)},d=()=>{t.includes(e._id)?l(a=>a.filter(f=>f!=e._id)):l(a=>[...a,e._id])};return i.jsxs(qe,{children:[i.jsx(ee,{size:"small",checked:t.includes(e._id),onChange:()=>{d()}}),e.Starred?i.jsx(_e,{fontSize:"small",style:{marginRight:10,color:"#FFBF00"},onClick:()=>{r()}}):i.jsx(He,{fontSize:"small",style:{marginRight:10},onClick:()=>{r()}}),i.jsxs(L,{onClick:()=>c(xe.view.path,{state:{email:e}}),children:[i.jsx(R,{style:{width:200,overflow:"hidden"},children:e.Name}),i.jsx(Ye,{children:"Inbox"}),i.jsxs(R,{children:[e.Subject," ",e.Body&&"-"," ",e.Body]}),i.jsxs(Ge,{children:[new window.Date(e.Date).getDate()," ",new window.Date(e.Date).toLocaleString("default",{month:"long"})]})]})]})}te.propTypes={email:z.object.isRequired,selectedEmails:z.array.isRequired,setRefreshScreen:z.func.isRequired,setSelectedEmails:z.func.isRequired};const Je=v(L)({display:"flex",alignItems:"center",flexDirection:"column",marginTop:50,opacity:"0.5",width:"100%"}),Ke=v(U)({width:"100%",marginTop:100});function oe({message:e}){return i.jsxs(Je,{children:[i.jsx(R,{children:e.heading}),i.jsx(R,{children:e.subHeading}),i.jsx(Ke,{})]})}oe.propTypes={message:z.object.isRequired};function et(){var u,S;const{openDrawer:e}=ve(),[t,o]=C.useState([]),[l,c]=C.useState(!1),{type:n}=me(),r=A(M.getEmailFromType),d=A(M.moveEmailsToBin),a=A(M.deleteEmails);C.useEffect(()=>{r.call({},n)},[n,l]);const f=p=>{var b;if(p.target.checked){const g=(b=r==null?void 0:r.response)==null?void 0:b.map(x=>x._id);o(g)}else o([])},m=()=>{n==="bin"?a.call(t):d.call(t),c(p=>!p)};return i.jsxs(L,{style:e?{marginLeft:250,width:"calc(100% - 250px)"}:{width:"100%"},children:[i.jsxs(L,{style:{padding:"10px 10px 0 10px",display:"flex",alignItems:"center"},children:[i.jsx(ee,{size:"small",onChange:p=>{f(p)}}),i.jsx(ke,{onClick:()=>m()})]}),i.jsx(Re,{children:(u=r==null?void 0:r.response)==null?void 0:u.map(p=>i.jsx(te,{email:p,selectedEmails:t,setRefreshScreen:c,setSelectedEmails:o},p._id))}),((S=r==null?void 0:r.response)==null?void 0:S.length)===0&&i.jsx(oe,{message:be[n]})]})}export{et as default};
