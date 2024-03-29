import {createGlobalStyle} from "styled-components";



export  const GlobStyle = createGlobalStyle`
    @charset 'utf-8';
    *{box-sizing:border-box;}
    html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,figure{margin:0;padding:0;}
    i,em{font-style:normal;}
    b,strong{font-weight:normal;}
    u,a{text-decoration: none;}
    ul,li,ol{list-style:none;}
    img{border:0;display:block;}
    input{outline:none;}
    body{font-family:"微软雅黑";}
    h1,h2,h3,h4,h5,h6{font-size:16px;font-weight:normal;}
    .clear_fix:after{content:'.';display:block;clear:both;height:0;overflow:hidden;visibility:hidden;}
    html,body,#root{height:100%;overflow:hidden;font-size:31.25vw}
    ::-webkit-scrollbar {
        display: none;
    }


`

