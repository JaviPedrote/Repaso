export default{
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};

{/* 

<NavLink
className={({ isActive }) =>
  `nav-link ${isActive ? "active" : ""}`
}
to="/about"
>
About
</NavLink>
<NavLink
className={({ isActive }) =>
  `nav-link ${isActive ? "active" : ""}`
}
to="/login"
>
Login
</NavLink> */}