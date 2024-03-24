exports.id=523,exports.ids=[523],exports.modules={3177:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},3048:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,1476,23)),Promise.resolve().then(t.bind(t,8210))},7106:()=>{},8210:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>f});var s=t(5344),a=t(8737),n=t(6531),i=t(9895);let d=[{id:1,label:"Add Jobs",href:"/admin/add-jobs",icon:a.Z},{id:2,label:"Add Softwares",href:"/admin/add-softwares",icon:n.Z},{id:3,label:"Manage Users",href:"/admin/users",icon:i.Z}];var o=t(1453),l=t(6506),c=t(8428);function f(){let e=(0,c.usePathname)();return s.jsx("div",{className:"flex flex-col space-y-6",children:d.map(r=>s.jsx(l.default,{href:r.href,children:(0,s.jsxs)("span",{className:(0,o.cn)(e===r.href&&"bg-white text-black",`flex items-center space-x-2 w-full p-4 rounded-md hover:bg-white hover:text-black 
                transition-all duration-200 ease-linear`),children:[s.jsx(r.icon,{}),s.jsx("h6",{children:r.label})]})},r.id))})}},5094:(e,r,t)=>{"use strict";t.d(r,{z:()=>l});var s=t(5344),a=t(3729),n=t(2751),i=t(8720),d=t(1453);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=a.forwardRef(({className:e,variant:r,size:t,asChild:a=!1,...i},l)=>{let c=a?n.g7:"button";return s.jsx(c,{className:(0,d.cn)(o({variant:r,size:t,className:e})),ref:l,...i})});l.displayName="Button"},5209:(e,r,t)=>{"use strict";t.d(r,{l0:()=>f,NI:()=>g,pf:()=>v,Wi:()=>u,xJ:()=>h,lX:()=>b,zG:()=>y});var s=t(5344),a=t(3729),n=t(2751),i=t(708),d=t(1453),o=t(4217);let l=(0,t(8720).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef(({className:e,...r},t)=>s.jsx(o.f,{ref:t,className:(0,d.cn)(l(),e),...r}));c.displayName=o.f.displayName;let f=i.RV,m=a.createContext({}),u=({...e})=>s.jsx(m.Provider,{value:{name:e.name},children:s.jsx(i.Qr,{...e})}),x=()=>{let e=a.useContext(m),r=a.useContext(p),{getFieldState:t,formState:s}=(0,i.Gc)(),n=t(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:d}=r;return{id:d,name:e.name,formItemId:`${d}-form-item`,formDescriptionId:`${d}-form-item-description`,formMessageId:`${d}-form-item-message`,...n}},p=a.createContext({}),h=a.forwardRef(({className:e,...r},t)=>{let n=a.useId();return s.jsx(p.Provider,{value:{id:n},children:s.jsx("div",{ref:t,className:(0,d.cn)("space-y-2",e),...r})})});h.displayName="FormItem";let b=a.forwardRef(({className:e,...r},t)=>{let{error:a,formItemId:n}=x();return s.jsx(c,{ref:t,className:(0,d.cn)(a&&"text-destructive",e),htmlFor:n,...r})});b.displayName="FormLabel";let g=a.forwardRef(({...e},r)=>{let{error:t,formItemId:a,formDescriptionId:i,formMessageId:d}=x();return s.jsx(n.g7,{ref:r,id:a,"aria-describedby":t?`${i} ${d}`:`${i}`,"aria-invalid":!!t,...e})});g.displayName="FormControl";let v=a.forwardRef(({className:e,...r},t)=>{let{formDescriptionId:a}=x();return s.jsx("p",{ref:t,id:a,className:(0,d.cn)("text-[0.8rem] text-muted-foreground",e),...r})});v.displayName="FormDescription";let y=a.forwardRef(({className:e,children:r,...t},a)=>{let{error:n,formMessageId:i}=x(),o=n?String(n?.message):r;return o?s.jsx("p",{ref:a,id:i,className:(0,d.cn)("text-[0.8rem] font-medium text-destructive",e),...t,children:o}):null});y.displayName="FormMessage"},6540:(e,r,t)=>{"use strict";t.d(r,{I:()=>i});var s=t(5344),a=t(3729),n=t(1453);let i=a.forwardRef(({className:e,type:r,...t},a)=>s.jsx("input",{type:r,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...t}));i.displayName="Input"},8157:(e,r,t)=>{"use strict";t.d(r,{Bw:()=>u,Ph:()=>o,Ql:()=>x,i4:()=>c,ki:()=>l});var s=t(5344),a=t(3729),n=t(4664),i=t(9642),d=t(1453);let o=i.fC;i.ZA;let l=i.B4,c=a.forwardRef(({className:e,children:r,...t},a)=>(0,s.jsxs)(i.xz,{ref:a,className:(0,d.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...t,children:[r,s.jsx(i.JO,{asChild:!0,children:s.jsx(n.jnn,{className:"h-4 w-4 opacity-50"})})]}));c.displayName=i.xz.displayName;let f=a.forwardRef(({className:e,...r},t)=>s.jsx(i.u_,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...r,children:s.jsx(n.g8U,{})}));f.displayName=i.u_.displayName;let m=a.forwardRef(({className:e,...r},t)=>s.jsx(i.$G,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...r,children:s.jsx(n.v4q,{})}));m.displayName=i.$G.displayName;let u=a.forwardRef(({className:e,children:r,position:t="popper",...a},n)=>s.jsx(i.h_,{children:(0,s.jsxs)(i.VY,{ref:n,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===t&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:t,...a,children:[s.jsx(f,{}),s.jsx(i.l_,{className:(0,d.cn)("p-1","popper"===t&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),s.jsx(m,{})]})}));u.displayName=i.VY.displayName,a.forwardRef(({className:e,...r},t)=>s.jsx(i.__,{ref:t,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",e),...r})).displayName=i.__.displayName;let x=a.forwardRef(({className:e,children:r,...t},a)=>(0,s.jsxs)(i.ck,{ref:a,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t,children:[s.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx(i.wU,{children:s.jsx(n.nQG,{className:"h-4 w-4"})})}),s.jsx(i.eT,{children:r})]}));x.displayName=i.ck.displayName,a.forwardRef(({className:e,...r},t)=>s.jsx(i.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",e),...r})).displayName=i.Z0.displayName},1453:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var s=t(6815),a=t(9377);function n(...e){return(0,a.m6)((0,s.W)(e))}},4200:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>b});var s=t(5036),a=t(8631),n=t(608);let i=(0,t(6843).createProxy)(String.raw`C:\Users\Abdul Ahad\Desktop\spdc server front end\spdc-frontend\src\components\admin\AdminLinks.tsx`),{__esModule:d,$$typeof:o}=i,l=i.default;var c=t(2),f=t(5303),m=t(8134),u=t(2245);let x=(0,m.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),p=c.forwardRef(({className:e,variant:r,size:t,asChild:a=!1,...n},i)=>{let d=a?f.g7:"button";return s.jsx(d,{className:(0,u.cn)(x({variant:r,size:t,className:e})),ref:i,...n})});function h(){return(0,s.jsxs)("aside",{className:"max-w-[20rem] border-gray-600 w-full p-4 h-full border-r-[1px]    hidden lg:flex flex-col justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col space-y-20",children:[s.jsx(n.Z,{href:"/admin"}),s.jsx(l,{})]}),(0,s.jsxs)(p,{variant:"ghost",className:"text-center hover:bg-transparent hover:text-white py-5 flex items-center   justify-start w-full space-x-2 font-semibold cursor-pointer",children:[s.jsx(a.Z,{}),s.jsx("p",{children:"Logout"})]})]})}function b({children:e}){return s.jsx(s.Fragment,{children:(0,s.jsxs)("main",{className:"flex h-full",children:[s.jsx(h,{}),e]})})}p.displayName="Button"},1342:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o,metadata:()=>d});var s=t(5036),a=t(3640),n=t.n(a),i=t(2245);t(5023);let d={title:"SPDC",description:"Official Website of SPDC!"};function o({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:(0,i.cn)(n().className,"bg-black text-white h-screen w-full"),children:e})})}},608:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var s=t(5036),a=t(5988),n=t.n(a),i=t(2245),d=t(6274);function o({href:e}){return s.jsx(d.default,{href:e,children:s.jsx("h1",{className:(0,i.cn)(n().className,"text-3xl"),children:"spdc"})})}},2245:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var s=t(990),a=t(1774);function n(...e){return(0,a.m6)((0,s.W)(e))}},5023:()=>{}};